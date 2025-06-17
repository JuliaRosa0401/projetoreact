// src/app/questionario/page.tsx
"use client";

import { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import ComponenteQuestao from '../../../components/ComponenteQuestao';

interface Alternativa {
    texto: string;
    correta: boolean;
}

interface Questao {
    id: number;
    pergunta: string;
    alternativas: Alternativa[];
}

export default function PaginaQuestionario() {
    const searchParams = useSearchParams();
    const assunto = searchParams.get('assunto');

    const [questoes, setQuestoes] = useState<Questao[]>([]);
    const [respostasUsuario, setRespostasUsuario] = useState<number[]>([]);
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [pontuacao, setPontuacao] = useState(0);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState<string | null>(null);

    const buscarQuestoes = useCallback(async () => {
        if (!assunto) {
            setErro("Assunto do livro não informado. Por favor, volte e informe um livro.");
            setCarregando(false);
            return;
        }

        setCarregando(true);
        setErro(null);

        try {
            const response = await fetch('/api/gerar-questionario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ assunto }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `Erro ao gerar questionário: ${response.statusText}`);
            }

            const data: Questao[] = await response.json();

            const questoesLimitas = data.slice(0, 10);
            setQuestoes(questoesLimitas);
            setRespostasUsuario(new Array(questoesLimitas.length).fill(-1));
        } catch (err: any) {
            console.error("Falha ao buscar questões:", err);
            setErro(`Não foi possível gerar o questionário. Detalhes: ${err.message}`);
        } finally {
            setCarregando(false);
        }
    }, [assunto]);

    useEffect(() => {
        console.log("useEffect na página do questionário disparado. Chamando buscarQuestoes.");
        buscarQuestoes();
    }, [buscarQuestoes]);

    const handleRespostaSelecionada = (idQuestao: number, indiceAlternativa: number) => {
        setRespostasUsuario(prevRespostas => {
            const novasRespostas = [...prevRespostas];
            const indiceQuestao = questoes.findIndex(q => q.id === idQuestao);
            if (indiceQuestao !== -1) {
                novasRespostas[indiceQuestao] = indiceAlternativa;
            }
            return novasRespostas;
        });
    };

    const handleSubmit = () => {
        let pontuacaoFinal = 0;
        questoes.forEach((questao, indice) => {
            const respostaDada = respostasUsuario[indice];
            if (respostaDada !== -1 && questao.alternativas[respostaDada]?.correta) {
                pontuacaoFinal++;
            }
        });
        setPontuacao(pontuacaoFinal);
        setMostrarResultado(true);
    };

    if (!assunto) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-600 font-bold p-4 text-center">
                Assunto do livro não informado. Por favor, volte para a página inicial e informe um livro.
            </div>
        );
    }

    if (carregando) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
                <svg className="animate-spin h-10 w-10 text-blue-600 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-xl font-semibold text-gray-700">Gerando 10 questões sobre "{assunto}"... Por favor, aguarde.</p>
                <p className="text-gray-500 text-sm mt-2">Isso pode levar alguns segundos dependendo da complexidade do assunto.</p>
            </div>
        );
    }

    if (erro) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-lg shadow-md max-w-md w-full" role="alert">
                    <p className="font-bold text-lg">Erro ao carregar questionário!</p>
                    <p className="mt-2 text-sm">{erro}</p>
                    <button
                        onClick={buscarQuestoes}
                        className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                    >
                        Tentar Novamente
                    </button>
                </div>
            </div>
        );
    }

    if (questoes.length === 0 && !carregando && !erro) {
          return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-lg shadow-md max-w-md w-full" role="alert">
                    <p className="font-bold text-lg">Nenhuma questão gerada.</p>
                    <p className="mt-2 text-sm">A API do Gemini não conseguiu gerar questões para o assunto "{assunto}". Isso pode ocorrer se o assunto for muito específico ou incomum. Tente um assunto diferente ou reformule.</p>
                    <button
                        onClick={buscarQuestoes}
                        className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                    >
                        Tentar Novamente
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    Questionário sobre: <span className="text-blue-600">{assunto}</span>
                </h1>

                {questoes.map((questao, indice) => (
                    <ComponenteQuestao
                        key={questao.id}
                        questao={questao}
                        indiceQuestao={indice + 1}
                        respostaSelecionada={respostasUsuario[indice]}
                        onRespostaSelecionada={handleRespostaSelecionada}
                        mostrarGabarito={mostrarResultado}
                    />
                ))}

                <div className="mt-8 text-center">
                    {!mostrarResultado ? (
                        <button
                            onClick={handleSubmit}
                            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
                            disabled={questoes.length !== 10 || respostasUsuario.some(resp => resp === -1)}
                        >
                            Enviar Respostas
                        </button>
                    ) : (
                        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg shadow-md" role="alert">
                            <p className="font-bold text-lg">Questionário Finalizado!</p>
                            <p className="text-xl mt-2">Você acertou <span className="font-extrabold text-2xl">{pontuacao}</span> de <span className="font-extrabold text-2xl">{questoes.length}</span> questões.</p>
                            <button
                                onClick={() => window.location.href = '/'}
                                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                            >
                                Fazer novo questionário
                            </button>

                            {/* --- INÍCIO DA NOVA SEÇÃO DE EXPLICAÇÃO --- */}
                            <div className="mt-6 pt-4 border-t border-blue-200 text-blue-800 text-sm">
                                <p className="font-semibold mb-2">Uma breve explicação sobre "{assunto}":</p>
                                {/* Aqui você pode adicionar o texto da explicação. */}
                                {/* Você pode tornar isso dinâmico buscando a explicação da API, */}
                                {/* ou ter textos pré-definidos para alguns livros, ou um texto genérico. */}
                                <p>
                                    O livro "{assunto}" é uma obra clássica que aborda temas como amadurecimento,
                                    relações familiares e busca por identidade. Através das jornadas de seus
                                    personagens, somos convidados a refletir sobre os desafios e alegrias da vida.
                                    Cada questão deste quiz foi elaborada para testar seu conhecimento sobre o enredo,
                                    os personagens e as mensagens principais da obra.
                                </p>
                                {/* Exemplo de como você poderia adicionar um link para mais informações */}
                                <p className="mt-3 text-xs italic">
                                    Continue explorando o mundo da literatura! A leitura sempre nos ensina algo novo.
                                </p>
                            </div>
                            {/* --- FIM DA NOVA SEÇÃO DE EXPLICAÇÃO --- */}

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}