// app/api/gerar-questionario/route.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

// Defina a interface para o corpo da requisição
interface RequestBody {
    assunto: string;
}

// Função POST para lidar com as requisições
export async function POST(request: Request) {
    try {
        // Verifica se a chave da API está configurada
        const apiKey = process.env.GEMINI_API_KEY; // Acessa a variável de ambiente sem NEXT_PUBLIC_
        if (!apiKey) {
            return NextResponse.json({ error: "Chave da API do Gemini não configurada." }, { status: 500 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" }); // Escolha o modelo adequado

        // Extrai o assunto do corpo da requisição
        const { assunto }: RequestBody = await request.json();

        if (!assunto) {
            return NextResponse.json({ error: "Assunto não fornecido." }, { status: 400 });
        }

        // O prompt para o Gemini. Seja o mais claro e específico possível.
        const prompt = `Gere 10 questões de múltipla escolha sobre o livro de ${assunto}. Cada questão deve ter 4 alternativas (A, B, C, D) e apenas uma resposta correta. O formato de saída deve ser um array JSON de objetos, onde cada objeto representa uma questão e contém:
        - "id": um número único para a questão.
        - "pergunta": a frase da pergunta.
        - "alternativas": um array de 4 objetos, cada um com "texto" (a alternativa) e "correta" (booleano true/false).

        Exemplo de formato JSON esperado:
        [
            {
                "id": 1,
                "pergunta": "Qual é a capital da França?",
                "alternativas": [
                    {"texto": "Berlim", "correta": false},
                    {"texto": "Paris", "correta": true},
                    {"texto": "Madri", "correta": false},
                    {"texto": "Roma", "correta": false}
                ]
            }
        ]
        Certifique-se de que a resposta seja APENAS o JSON, sem texto explicativo adicional antes ou depois.
        `;

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        // Tenta parsear o texto como JSON
        let questoesGeradas;
        try {
            // O Gemini pode retornar o JSON dentro de um bloco de código Markdown, por isso ajustamos
            const jsonString = text.replace(/```json\n|\n```/g, '').trim();
            questoesGeradas = JSON.parse(jsonString);
        } catch (jsonError) {
            console.error("Erro ao parsear JSON do Gemini:", jsonError);
            console.error("Texto bruto do Gemini:", text);
            return NextResponse.json({ error: "Erro ao processar a resposta do Gemini. Formato JSON inválido." }, { status: 500 });
        }

        // Validação simples para garantir que a estrutura está próxima do esperado
        if (!Array.isArray(questoesGeradas) || questoesGeradas.length === 0 || !questoesGeradas[0].pergunta || !Array.isArray(questoesGeradas[0].alternativas)) {
            console.error("Resposta do Gemini não está no formato esperado:", questoesGeradas);
            return NextResponse.json({ error: "A API gerou questões em um formato inesperado. Tente novamente ou ajuste o prompt." }, { status: 500 });
        }

        return NextResponse.json(questoesGeradas, { status: 200 });

    } catch (error: any) {
        console.error("Erro na API do Gemini:", error);
        // Melhora a mensagem de erro para o cliente
        let errorMessage = "Ocorreu um erro ao gerar o questionário.";
        if (error.message.includes("429")) {
            errorMessage = "Limite de requisições excedido para a API do Gemini. Tente novamente mais tarde.";
        } else if (error.message.includes("403")) {
            errorMessage = "Autenticação falhou com a API do Gemini. Verifique sua chave de API.";
        }
        return NextResponse.json({ error: errorMessage, details: error.message }, { status: 500 });
    }
}