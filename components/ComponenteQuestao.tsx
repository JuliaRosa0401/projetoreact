// components/ComponenteQuestao.tsx
interface Alternativa {
    texto: string;
    correta: boolean;
}

interface Questao {
    id: number;
    pergunta: string;
    alternativas: Alternativa[];
}

interface ComponenteQuestaoProps {
    questao: Questao;
    indiceQuestao: number;
    respostaSelecionada: number; // Índice da alternativa selecionada pelo usuário (-1 se nenhuma)
    onRespostaSelecionada: (idQuestao: number, indiceAlternativa: number) => void;
    mostrarGabarito: boolean;
}

export default function ComponenteQuestao({
    questao,
    indiceQuestao,
    respostaSelecionada,
    onRespostaSelecionada,
    mostrarGabarito,
}: ComponenteQuestaoProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
            <p className="text-lg font-semibold mb-4 text-gray-800">
                {indiceQuestao}. {questao.pergunta}
            </p>
            <div className="space-y-3">
                {questao.alternativas.map((alternativa, indice) => {
                    const isSelecionada = respostaSelecionada === indice;
                    const isCorreta = alternativa.correta;

                    let classesBotao = "block w-full text-left py-3 px-4 rounded-lg border transition duration-200 ease-in-out text-gray-700 font-medium";

                    if (mostrarGabarito) {
                        if (isCorreta) {
                            classesBotao += " bg-green-200 border-green-500 text-green-800"; // Correta
                        } else if (isSelecionada && !isCorreta) {
                            classesBotao += " bg-red-200 border-red-500 text-red-800"; // Selecionada e errada
                        } else {
                            classesBotao += " bg-gray-100 border-gray-300 hover:bg-gray-200"; // Não selecionada
                        }
                    } else {
                        classesBotao += isSelecionada
                            ? " bg-blue-100 border-blue-500 text-blue-700"
                            : " bg-gray-100 border-gray-300 hover:bg-gray-200";
                    }

                    return (
                        <button
                            key={indice}
                            onClick={() => onRespostaSelecionada(questao.id, indice)}
                            disabled={mostrarGabarito}
                            className={classesBotao}
                        >
                            {String.fromCharCode(65 + indice)}. {alternativa.texto}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}