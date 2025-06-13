// src/app/questionario/page.tsx
"use client"; // Importante: indica que é um Client Component

import { useEffect, useState, useCallback } from 'react'; // Adicionado useCallback
import { useSearchParams } from 'next/navigation';
import ComponenteQuestao from '../../../components/ComponenteQuestao'; // Caminho relativo corrigido para sua estrutura

// Definindo as interfaces de dados
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
    // Hooks do Next.js e React para gerenciar estado e navegação
    const searchParams = useSearchParams(); // Para ler parâmetros da URL
    const assunto = searchParams.get('assunto'); // Pega o assunto passado pela URL

    // Estados do componente
    const [questoes, setQuestoes] = useState<Questao[]>([]); // Armazena as questões geradas
    const [respostasUsuario, setRespostasUsuario] = useState<number[]>([]); // Armazena o índice da alternativa escolhida pelo usuário para cada questão
    const [mostrarResultado, setMostrarResultado] = useState(false); // Controla a exibição do gabarito e pontuação
    const [pontuacao, setPontuacao] = useState(0); // Pontuação final do usuário
    const [carregando, setCarregando] = useState(true); // Indica se as questões estão sendo carregadas
    const [erro, setErro] = useState<string | null>(null); // Armazena mensagens de erro

    // Função para buscar as questões da nossa API interna
    // Usamos useCallback para memorizar a função e evitar recriações desnecessárias,
    // otimizando o useEffect.
    const buscarQuestoes = useCallback(async () => {
        if (!assunto) {
            setErro("Assunto do livro não informado. Por favor, volte e informe um livro.");
            setCarregando(false);
            return;
        }

        setCarregando(true); // Ativa o estado de carregamento
        setErro(null);       // Limpa qualquer erro anterior

        try {
            // Realiza a chamada POST para nossa API Route
            const response = await fetch('/api/gerar-questionario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ assunto }), // Envia o assunto no corpo da requisição
            });

            // Verifica se a resposta da API foi bem-sucedida
            if (!response.ok) {
                const errorData = await response.json(); // Pega a mensagem de erro do corpo da resposta
                throw new Error(errorData.error || `Erro ao gerar questionário: ${response.statusText}`);
            }

            // Converte a resposta para JSON e tipa como um array de Questao
            const data: Questao[] = await response.json();

            // Garante que estamos usando no máximo 10 questões, conforme o requisito
            const questoesLimitas = data.slice(0, 10);
            setQuestoes(questoesLimitas);
            // Inicializa o array de respostas do usuário com -1 para cada questão
            setRespostasUsuario(new Array(questoesLimitas.length).fill(-1));
        } catch (err: any) {
            // Captura e exibe erros que ocorrem durante a chamada ou processamento
            console.error("Falha ao buscar questões:", err);
            setErro(`Não foi possível gerar o questionário. Detalhes: ${err.message}`);
        } finally {
            // Finaliza o estado de carregamento, independente do sucesso ou falha
            setCarregando(false);
        }
    }, [assunto]); // A função `buscarQuestoes` só muda se o `assunto` mudar

    // useEffect para chamar `buscarQuestoes` quando o componente é montado
    // ou quando a função `buscarQuestoes` (que depende do assunto) muda.
    useEffect(() => {
        console.log("useEffect na página do questionário disparado. Chamando buscarQuestoes.");
        buscarQuestoes();
    }, [buscarQuestoes]); // Dispara a busca quando a dependência (buscarQuestoes) é atualizada

    // Lida com a seleção de uma alternativa por parte do usuário
    const handleRespostaSelecionada = (idQuestao: number, indiceAlternativa: number) => {
        setRespostasUsuario(prevRespostas => {
            const novasRespostas = [...prevRespostas];
            // Encontra o índice da questão no array de questões
            const indiceQuestao = questoes.findIndex(q => q.id === idQuestao);
            if (indiceQuestao !== -1) {
                // Atualiza a resposta para a questão específica
                novasRespostas[indiceQuestao] = indiceAlternativa;
            }
            return novasRespostas;
        });
    };

    // Lida com o envio do questionário
    const handleSubmit = () => {
        let pontuacaoFinal = 0;
        questoes.forEach((questao, indice) => {
            const respostaDada = respostasUsuario[indice];
            // Verifica se o usuário respondeu e se a resposta está correta
            if (respostaDada !== -1 && questao.alternativas[respostaDada]?.correta) {
                pontuacaoFinal++;
            }
        });
        setPontuacao(pontuacaoFinal);      // Define a pontuação final
        setMostrarResultado(true); // Exibe o gabarito e a pontuação
    };

    // Renderização condicional baseada nos estados
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
                        onClick={buscarQuestoes} // Permite tentar novamente
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

    // Renderização principal do questionário
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
                            // Desabilita o botão se não houver 10 questões ou se alguma resposta ainda estiver em -1
                            disabled={questoes.length !== 10 || respostasUsuario.some(resp => resp === -1)}
                        >
                            Enviar Respostas
                        </button>
                    ) : (
                        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-lg shadow-md" role="alert">
                            <p className="font-bold text-lg">Questionário Finalizado!</p>
                            <p className="text-xl mt-2">Você acertou <span className="font-extrabold text-2xl">{pontuacao}</span> de <span className="font-extrabold text-2xl">{questoes.length}</span> questões.</p>
                            <button
                                onClick={() => window.location.href = '/'} // Volta para a página inicial para um novo questionário
                                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                            >
                                Fazer novo questionário
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}