(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/questionario/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/questionario/page.tsx
__turbopack_context__.s({
    "default": (()=>PaginaQuestionario)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PaginaQuestionario() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const assunto = searchParams.get('assunto');
    const [questoes, setQuestoes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [respostasUsuario, setRespostasUsuario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [mostrarResultado, setMostrarResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pontuacao, setPontuacao] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [carregando, setCarregando] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [erro, setErro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // FUNÇÃO CRÍTICA: buscarQuestoes
    const buscarQuestoes = useCallback({
        "PaginaQuestionario.useCallback[buscarQuestoes]": async ()=>{
            if (!assunto) {
                setErro("Assunto do livro não informado. Por favor, volte e informe um livro.");
                setCarregando(false);
                return;
            }
            setCarregando(true);
            setErro(null);
            try {
                // ESTA É A CHAMADA QUE PRECISA ACONTECER:
                const response = await fetch('/api/gerar-questionario', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        assunto
                    })
                });
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.error || `Erro ao gerar questionário: ${response.statusText}`);
                }
                const data = await response.json();
                const questoesLimitas = data.slice(0, 10);
                setQuestoes(questoesLimitas);
                setRespostasUsuario(new Array(questoesLimitas.length).fill(-1));
            } catch (err) {
                console.error("Falha ao buscar questões:", err);
                setErro(`Não foi possível gerar o questionário. Detalhes: ${err.message}`);
            } finally{
                setCarregando(false);
            }
        }
    }["PaginaQuestionario.useCallback[buscarQuestoes]"], [
        assunto
    ]); // <- IMPORTANTE: `assunto` como dependência
    // HOOK CRÍTICO: useEffect para chamar buscarQuestoes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaginaQuestionario.useEffect": ()=>{
            buscarQuestoes(); // Chama a função aqui!
        }
    }["PaginaQuestionario.useEffect"], [
        buscarQuestoes
    ]); // <- IMPORTANTE: `buscarQuestoes` como dependência
// ... restante do código (handleRespostaSelecionada, handleSubmit, retornos condicionais) ...
}
_s(PaginaQuestionario, "/GNN/nPIUO/kUcP0uaotT10dkyA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = PaginaQuestionario;
var _c;
__turbopack_context__.k.register(_c, "PaginaQuestionario");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_f394b20d._.js.map