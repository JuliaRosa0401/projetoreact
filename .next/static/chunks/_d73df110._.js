(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/ComponenteQuestao.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/ComponenteQuestao.tsx
__turbopack_context__.s({
    "default": (()=>ComponenteQuestao)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ComponenteQuestao({ questao, indiceQuestao, respostaSelecionada, onRespostaSelecionada, mostrarGabarito }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg font-semibold mb-4 text-gray-800",
                children: [
                    indiceQuestao,
                    ". ",
                    questao.pergunta
                ]
            }, void 0, true, {
                fileName: "[project]/components/ComponenteQuestao.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: questao.alternativas.map((alternativa, indice)=>{
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
                        classesBotao += isSelecionada ? " bg-blue-100 border-blue-500 text-blue-700" : " bg-gray-100 border-gray-300 hover:bg-gray-200";
                    }
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onRespostaSelecionada(questao.id, indice),
                        disabled: mostrarGabarito,
                        className: classesBotao,
                        children: [
                            String.fromCharCode(65 + indice),
                            ". ",
                            alternativa.texto
                        ]
                    }, indice, true, {
                        fileName: "[project]/components/ComponenteQuestao.tsx",
                        lineNumber: 55,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/ComponenteQuestao.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ComponenteQuestao.tsx",
        lineNumber: 29,
        columnNumber: 9
    }, this);
}
_c = ComponenteQuestao;
var _c;
__turbopack_context__.k.register(_c, "ComponenteQuestao");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/questionario/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// app/questionario/page.tsx
__turbopack_context__.s({
    "default": (()=>PaginaQuestionario)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComponenteQuestao$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ComponenteQuestao.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PaginaQuestionario() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const assunto = searchParams.get('assunto');
    const [questoes, setQuestoes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [respostasUsuario, setRespostasUsuario] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]); // Armazena o índice da alternativa escolhida
    const [mostrarResultado, setMostrarResultado] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pontuacao, setPontuacao] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Mock de dados para simular o questionário
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PaginaQuestionario.useEffect": ()=>{
            if (assunto) {
                // Aqui no futuro faremos a chamada à API do Gemini
                // Por enquanto, usaremos dados mockados
                const questoesMock = [
                    {
                        id: 1,
                        pergunta: `Qual a capital do Brasil, segundo o livro de Geografia: "${assunto}"?`,
                        alternativas: [
                            {
                                texto: "Rio de Janeiro",
                                correta: false
                            },
                            {
                                texto: "Brasília",
                                correta: true
                            },
                            {
                                texto: "São Paulo",
                                correta: false
                            },
                            {
                                texto: "Belo Horizonte",
                                correta: false
                            }
                        ]
                    },
                    {
                        id: 2,
                        pergunta: `Quem escreveu o livro "Dom Casmurro", mencionado no livro de Literatura: "${assunto}"?`,
                        alternativas: [
                            {
                                texto: "Machado de Assis",
                                correta: true
                            },
                            {
                                texto: "José de Alencar",
                                correta: false
                            },
                            {
                                texto: "Graciliano Ramos",
                                correta: false
                            },
                            {
                                texto: "Clarice Lispector",
                                correta: false
                            }
                        ]
                    },
                    {
                        id: 3,
                        pergunta: `Qual o principal bioma abordado no livro de Biologia: "${assunto}"?`,
                        alternativas: [
                            {
                                texto: "Floresta Amazônica",
                                correta: true
                            },
                            {
                                texto: "Cerrado",
                                correta: false
                            },
                            {
                                texto: "Mata Atlântica",
                                correta: false
                            },
                            {
                                texto: "Caatinga",
                                correta: false
                            }
                        ]
                    },
                    // Adicione mais questões mockadas para ter 10 no total, ou adapte para testes
                    {
                        id: 4,
                        pergunta: `Em que ano o Brasil se tornou independente, de acordo com o livro de História: "${assunto}"?`,
                        alternativas: [
                            {
                                texto: "1820",
                                correta: false
                            },
                            {
                                texto: "1822",
                                correta: true
                            },
                            {
                                texto: "1825",
                                correta: false
                            },
                            {
                                texto: "1830",
                                correta: false
                            }
                        ]
                    },
                    {
                        id: 5,
                        pergunta: `Qual planeta é conhecido como o "Planeta Vermelho", segundo o livro de Astronomia: "${assunto}"?`,
                        alternativas: [
                            {
                                texto: "Vênus",
                                correta: false
                            },
                            {
                                texto: "Marte",
                                correta: true
                            },
                            {
                                texto: "Júpiter",
                                correta: false
                            },
                            {
                                texto: "Saturno",
                                correta: false
                            }
                        ]
                    },
                    {
                        id: 6,
                        pergunta: `Qual elemento químico tem o símbolo 'O', conforme o livro de Química: "${assunto}"?`,
                        alternativas: [
                            {
                                texto: "Ouro",
                                correta: false
                            },
                            {
                                texto: "Oxigênio",
                                correta: true
                            },
                            {
                                texto: "Ozônio",
                                correta: false
                            },
                            {
                                texto: "Cobre",
                                correta: false
                            }
                        ]
                    },
                    {
                        id: 7,
                        pergunta: `Quem foi o primeiro presidente do Brasil, segundo o livro de Cívica: "${assunto}"?`,
                        alternativas: [
                            {
                                texto: "Deodoro da Fonseca",
                                correta: true
                            },
                            {
                                texto: "Floriano Peixoto",
                                correta: false
                            },
                            {
                                texto: "Getúlio Vargas",
                                correta: false
                            },
                            {
                                texto: "Juscelino Kubitschek",
                                correta: false
                            }
                        ]
                    },
                    {
                        id: 8,
                        pergunta: `Qual a fórmula da água, de acordo com o livro de Ciências: "${assunto}"?`,
                        alternativas: [
                            {
                                texto: "CO2",
                                correta: false
                            },
                            {
                                texto: "H2O",
                                correta: true
                            },
                            {
                                texto: "NaCl",
                                correta: false
                            },
                            {
                                texto: "O2",
                                correta: false
                            }
                        ]
                    },
                    {
                        id: 9,
                        pergunta: `Em qual continente fica o Egito, segundo o livro de Geografia: "${assunto}"?`,
                        alternativas: [
                            {
                                texto: "Ásia",
                                correta: false
                            },
                            {
                                texto: "Europa",
                                correta: false
                            },
                            {
                                texto: "África",
                                correta: true
                            },
                            {
                                texto: "América do Sul",
                                correta: false
                            }
                        ]
                    },
                    {
                        id: 10,
                        pergunta: `Qual o nome do Oceano que banha a costa leste do Brasil, conforme o livro de Geografia: "${assunto}"?`,
                        alternativas: [
                            {
                                texto: "Pacífico",
                                correta: false
                            },
                            {
                                texto: "Índico",
                                correta: false
                            },
                            {
                                texto: "Atlântico",
                                correta: true
                            },
                            {
                                texto: "Antártico",
                                correta: false
                            }
                        ]
                    }
                ];
                setQuestoes(questoesMock);
                setRespostasUsuario(new Array(questoesMock.length).fill(-1)); // Inicializa com -1 (nenhuma resposta)
            }
        }
    }["PaginaQuestionario.useEffect"], [
        assunto
    ]);
    const handleRespostaSelecionada = (idQuestao, indiceAlternativa)=>{
        setRespostasUsuario((prevRespostas)=>{
            const novasRespostas = [
                ...prevRespostas
            ];
            const indiceQuestao = questoes.findIndex((q)=>q.id === idQuestao);
            if (indiceQuestao !== -1) {
                novasRespostas[indiceQuestao] = indiceAlternativa;
            }
            return novasRespostas;
        });
    };
    const handleSubmit = ()=>{
        let pontuacaoFinal = 0;
        questoes.forEach((questao, indice)=>{
            const respostaDada = respostasUsuario[indice];
            if (respostaDada !== -1 && questao.alternativas[respostaDada]?.correta) {
                pontuacaoFinal++;
            }
        });
        setPontuacao(pontuacaoFinal);
        setMostrarResultado(true);
    };
    if (!assunto) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-gray-100 text-red-600 font-bold",
            children: "Assunto não informado. Por favor, volte e informe um assunto."
        }, void 0, false, {
            fileName: "[project]/src/app/questionario/page.tsx",
            lineNumber: 165,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-3xl font-bold mb-8 text-center text-gray-800",
                    children: [
                        "Questionário sobre: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-600",
                            children: assunto
                        }, void 0, false, {
                            fileName: "[project]/src/app/questionario/page.tsx",
                            lineNumber: 175,
                            columnNumber: 41
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/questionario/page.tsx",
                    lineNumber: 174,
                    columnNumber: 17
                }, this),
                questoes.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray-600",
                    children: "Carregando questões..."
                }, void 0, false, {
                    fileName: "[project]/src/app/questionario/page.tsx",
                    lineNumber: 179,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        questoes.map((questao, indice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ComponenteQuestao$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                questao: questao,
                                indiceQuestao: indice + 1,
                                respostaSelecionada: respostasUsuario[indice],
                                onRespostaSelecionada: handleRespostaSelecionada,
                                mostrarGabarito: mostrarResultado
                            }, questao.id, false, {
                                fileName: "[project]/src/app/questionario/page.tsx",
                                lineNumber: 183,
                                columnNumber: 29
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 text-center",
                            children: !mostrarResultado ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleSubmit,
                                className: "bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105",
                                children: "Enviar Respostas"
                            }, void 0, false, {
                                fileName: "[project]/src/app/questionario/page.tsx",
                                lineNumber: 195,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4",
                                role: "alert",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-lg",
                                        children: "Questionário Finalizado!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/questionario/page.tsx",
                                        lineNumber: 203,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl mt-2",
                                        children: [
                                            "Você acertou ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-extrabold text-2xl",
                                                children: pontuacao
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/questionario/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 78
                                            }, this),
                                            " de ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-extrabold text-2xl",
                                                children: questoes.length
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/questionario/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 142
                                            }, this),
                                            " questões."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/questionario/page.tsx",
                                        lineNumber: 204,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/questionario/page.tsx",
                                lineNumber: 202,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/questionario/page.tsx",
                            lineNumber: 193,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/questionario/page.tsx",
            lineNumber: 173,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/questionario/page.tsx",
        lineNumber: 172,
        columnNumber: 9
    }, this);
}
_s(PaginaQuestionario, "PJ8/hfKAOMOi6JAh69a/ml7fVsQ=", false, function() {
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
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_d73df110._.js.map