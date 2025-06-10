// app/questionario/page.tsx
"use client";

import { useEffect, useState } from 'react';
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
    const [respostasUsuario, setRespostasUsuario] = useState<number[]>([]); // Armazena o índice da alternativa escolhida
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [pontuacao, setPontuacao] = useState(0);

    // Mock de dados para simular o questionário
    useEffect(() => {
        if (assunto) {
            // Aqui no futuro faremos a chamada à API do Gemini
            // Por enquanto, usaremos dados mockados
            const questoesMock: Questao[] = [
                {
                    id: 1,
                    pergunta: `Qual a capital do Brasil, segundo o livro de Geografia: "${assunto}"?`,
                    alternativas: [
                        { texto: "Rio de Janeiro", correta: false },
                        { texto: "Brasília", correta: true },
                        { texto: "São Paulo", correta: false },
                        { texto: "Belo Horizonte", correta: false },
                    ],
                },
                {
                    id: 2,
                    pergunta: `Quem escreveu o livro "Dom Casmurro", mencionado no livro de Literatura: "${assunto}"?`,
                    alternativas: [
                        { texto: "Machado de Assis", correta: true },
                        { texto: "José de Alencar", correta: false },
                        { texto: "Graciliano Ramos", correta: false },
                        { texto: "Clarice Lispector", correta: false },
                    ],
                },
                {
                    id: 3,
                    pergunta: `Qual o principal bioma abordado no livro de Biologia: "${assunto}"?`,
                    alternativas: [
                        { texto: "Floresta Amazônica", correta: true },
                        { texto: "Cerrado", correta: false },
                        { texto: "Mata Atlântica", correta: false },
                        { texto: "Caatinga", correta: false },
                    ],
                },
                // Adicione mais questões mockadas para ter 10 no total, ou adapte para testes
                {
                    id: 4,
                    pergunta: `Em que ano o Brasil se tornou independente, de acordo com o livro de História: "${assunto}"?`,
                    alternativas: [
                        { texto: "1820", correta: false },
                        { texto: "1822", correta: true },
                        { texto: "1825", correta: false },
                        { texto: "1830", correta: false },
                    ],
                },
                {
                    id: 5,
                    pergunta: `Qual planeta é conhecido como o "Planeta Vermelho", segundo o livro de Astronomia: "${assunto}"?`,
                    alternativas: [
                        { texto: "Vênus", correta: false },
                        { texto: "Marte", correta: true },
                        { texto: "Júpiter", correta: false },
                        { texto: "Saturno", correta: false },
                    ],
                },
                {
                    id: 6,
                    pergunta: `Qual elemento químico tem o símbolo 'O', conforme o livro de Química: "${assunto}"?`,
                    alternativas: [
                        { texto: "Ouro", correta: false },
                        { texto: "Oxigênio", correta: true },
                        { texto: "Ozônio", correta: false },
                        { texto: "Cobre", correta: false },
                    ],
                },
                {
                    id: 7,
                    pergunta: `Quem foi o primeiro presidente do Brasil, segundo o livro de Cívica: "${assunto}"?`,
                    alternativas: [
                        { texto: "Deodoro da Fonseca", correta: true },
                        { texto: "Floriano Peixoto", correta: false },
                        { texto: "Getúlio Vargas", correta: false },
                        { texto: "Juscelino Kubitschek", correta: false },
                    ],
                },
                {
                    id: 8,
                    pergunta: `Qual a fórmula da água, de acordo com o livro de Ciências: "${assunto}"?`,
                    alternativas: [
                        { texto: "CO2", correta: false },
                        { texto: "H2O", correta: true },
                        { texto: "NaCl", correta: false },
                        { texto: "O2", correta: false },
                    ],
                },
                {
                    id: 9,
                    pergunta: `Em qual continente fica o Egito, segundo o livro de Geografia: "${assunto}"?`,
                    alternativas: [
                        { texto: "Ásia", correta: false },
                        { texto: "Europa", correta: false },
                        { texto: "África", correta: true },
                        { texto: "América do Sul", correta: false },
                    ],
                },
                {
                    id: 10,
                    pergunta: `Qual o nome do Oceano que banha a costa leste do Brasil, conforme o livro de Geografia: "${assunto}"?`,
                    alternativas: [
                        { texto: "Pacífico", correta: false },
                        { texto: "Índico", correta: false },
                        { texto: "Atlântico", correta: true },
                        { texto: "Antártico", correta: false },
                    ],
                },
            ];
            setQuestoes(questoesMock);
            setRespostasUsuario(new Array(questoesMock.length).fill(-1)); // Inicializa com -1 (nenhuma resposta)
        }
    }, [assunto]);

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
            <div className="min-h-screen flex items-center justify-center bg-gray-100 text-red-600 font-bold">
                Assunto não informado. Por favor, volte e informe um assunto.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                    Questionário sobre: <span className="text-blue-600">{assunto}</span>
                </h1>

                {questoes.length === 0 ? (
                    <p className="text-center text-gray-600">Carregando questões...</p>
                ) : (
                    <>
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
                                >
                                    Enviar Respostas
                                </button>
                            ) : (
                                <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4" role="alert">
                                    <p className="font-bold text-lg">Questionário Finalizado!</p>
                                    <p className="text-xl mt-2">Você acertou <span className="font-extrabold text-2xl">{pontuacao}</span> de <span className="font-extrabold text-2xl">{questoes.length}</span> questões.</p>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}