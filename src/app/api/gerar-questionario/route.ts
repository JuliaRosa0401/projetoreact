// src/app/api/gerar-questionario/route.ts
import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

interface RequestBody {
    assunto: string;
}

export async function POST(request: Request) {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return NextResponse.json({ error: "Chave da API do Gemini não configurada no servidor." }, { status: 500 });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        
        const { assunto }: RequestBody = await request.json();

        // --- ADICIONE ESTE CONSOLE.LOG AQUI ---
        console.log("Recebido assunto na API Route:", assunto);
        // --- FIM DO CONSOLE.LOG ---

        if (!assunto) {
            return NextResponse.json({ error: "Assunto do livro não fornecido para gerar o questionário." }, { status: 400 });
        }

        const prompt = `Gere 10 questões de múltipla escolha **exclusivamente sobre o conteúdo, personagens, enredo ou temas do livro "${assunto}"**. Cada questão deve ter 4 alternativas (A, B, C, D) e apenas uma resposta correta.

        O formato de saída deve ser um array JSON de objetos, onde cada objeto representa uma questão e contém:
        - "id": um número único para a questão (começando de 1).
        - "pergunta": a frase da pergunta.
        - "alternativas": um array de 4 objetos, cada um com "texto" (a alternativa) e "correta" (booleano true/false).

        Assegure que o array tenha exatamente 10 questões.
        Assegure que o campo "id" seja um número, não uma string.
        Assegure que o campo "correta" seja um booleano (true ou false).
        Certifique-se de que a resposta seja APENAS o JSON, sem nenhum texto explicativo, marcadores de código Markdown (ex: \`\`\`json), ou qualquer outra coisa antes ou depois.
        `;

        // --- ADICIONE ESTE CONSOLE.LOG PARA VER O PROMPT COMPLETO ---
        console.log("Prompt enviado ao Gemini:", prompt);
        // --- FIM DO CONSOLE.LOG ---

        const result = await model.generateContent(prompt);
        const response = result.response;
        let text = response.text();

        // --- ADICIONE ESTE CONSOLE.LOG PARA VER A RESPOSTA BRUTA DO GEMINI ---
        console.log("Resposta bruta do Gemini:", text);
        // --- FIM DO CONSOLE.LOG ---

        if (text.startsWith('```json') && text.endsWith('```')) {
            text = text.substring(7, text.length - 3).trim();
        }

        let questoesGeradas;
        try {
            questoesGeradas = JSON.parse(text);
             // --- ADICIONE ESTE CONSOLE.LOG PARA VER O JSON PARSEADO ---
            console.log("JSON parseado:", questoesGeradas);
            // --- FIM DO CONSOLE.LOG ---
        } catch (jsonError: any) {
            console.error("Erro ao parsear JSON do Gemini:", jsonError);
            console.error("Texto bruto recebido do Gemini (falha no parse):", text); // Log adicionado aqui também
            return NextResponse.json({ error: "Erro ao processar a resposta do Gemini. Formato JSON inválido." }, { status: 500 });
        }

        if (!Array.isArray(questoesGeradas) || questoesGeradas.length === 0 || !questoesGeradas[0].pergunta || !Array.isArray(questoesGeradas[0].alternativas)) {
            console.error("Resposta do Gemini não está no formato esperado:", questoesGeradas);
            return NextResponse.json({ error: "A API do Gemini não gerou questões no formato esperado. Tente novamente ou ajuste o prompt." }, { status: 500 });
        }

        const questoesFinal = questoesGeradas.slice(0, 10);
        return NextResponse.json(questoesFinal, { status: 200 });

    } catch (error: any) {
        console.error("Erro na API de geração de questionário:", error);
        let errorMessage = "Ocorreu um erro inesperado ao gerar o questionário.";
        if (error.message.includes("429")) {
            errorMessage = "Limite de requisições excedido para a API do Gemini. Tente novamente mais tarde.";
        } else if (error.message.includes("403") || error.message.includes("API key not valid")) {
            errorMessage = "Autenticação falhou com a API do Gemini. Verifique sua chave de API e se ela tem permissões.";
        } else if (error.message.includes("quota")) {
             errorMessage = "Quota excedida para a API do Gemini. Por favor, verifique seu limite de uso ou tente novamente em um tempo.";
        }
        return NextResponse.json({ error: errorMessage, details: error.message }, { status: 500 });
    }
}