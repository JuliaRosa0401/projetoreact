module.exports = {

"[project]/.next-internal/server/app/api/gerar-questionario/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/gerar-questionario/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/app/api/gerar-questionario/route.ts
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Chave da API do Gemini não configurada no servidor."
            }, {
                status: 500
            });
        }
        const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash"
        });
        const { assunto } = await request.json();
        // --- ADICIONE ESTE CONSOLE.LOG AQUI ---
        console.log("Recebido assunto na API Route:", assunto);
        // --- FIM DO CONSOLE.LOG ---
        if (!assunto) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Assunto do livro não fornecido para gerar o questionário."
            }, {
                status: 400
            });
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
        } catch (jsonError) {
            console.error("Erro ao parsear JSON do Gemini:", jsonError);
            console.error("Texto bruto recebido do Gemini (falha no parse):", text); // Log adicionado aqui também
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Erro ao processar a resposta do Gemini. Formato JSON inválido."
            }, {
                status: 500
            });
        }
        if (!Array.isArray(questoesGeradas) || questoesGeradas.length === 0 || !questoesGeradas[0].pergunta || !Array.isArray(questoesGeradas[0].alternativas)) {
            console.error("Resposta do Gemini não está no formato esperado:", questoesGeradas);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "A API do Gemini não gerou questões no formato esperado. Tente novamente ou ajuste o prompt."
            }, {
                status: 500
            });
        }
        const questoesFinal = questoesGeradas.slice(0, 10);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(questoesFinal, {
            status: 200
        });
    } catch (error) {
        console.error("Erro na API de geração de questionário:", error);
        let errorMessage = "Ocorreu um erro inesperado ao gerar o questionário.";
        if (error.message.includes("429")) {
            errorMessage = "Limite de requisições excedido para a API do Gemini. Tente novamente mais tarde.";
        } else if (error.message.includes("403") || error.message.includes("API key not valid")) {
            errorMessage = "Autenticação falhou com a API do Gemini. Verifique sua chave de API e se ela tem permissões.";
        } else if (error.message.includes("quota")) {
            errorMessage = "Quota excedida para a API do Gemini. Por favor, verifique seu limite de uso ou tente novamente em um tempo.";
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: errorMessage,
            details: error.message
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9793aefd._.js.map