// src/app/page.tsx
"use client"; // Importante: indica que é um Client Component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Hook para navegação programática no Next.js App Router

export default function PaginaInicial() {
    // Estado para armazenar o valor do input do assunto
    const [assunto, setAssunto] = useState('');
    // Estado para controlar o feedback de carregamento (spinner)
    const [carregando, setCarregando] = useState(false);
    // Hook para obter o roteador do Next.js
    const router = useRouter();

    // Função assíncrona que é chamada ao submeter o formulário
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault(); // Previne o comportamento padrão de recarregar a página

        // Verifica se o campo 'assunto' não está vazio após remover espaços em branco
        if (assunto.trim()) {
            setCarregando(true); // Ativa o estado de carregamento para mostrar o spinner e desabilitar o botão

            // Redireciona para a página do questionário, passando o assunto como um parâmetro de URL
            // encodeURIComponent é usado para garantir que caracteres especiais no assunto sejam corretamente codificados
            router.push(`/questionario?assunto=${encodeURIComponent(assunto)}`);

            // Note: O setCarregando(false) não é estritamente necessário aqui porque a página será recarregada/navegada.
            // Mas, em casos de validação ou erro antes da navegação, seria importante desativá-lo.
        }
    };

    return (
        // Container principal que centraliza o conteúdo na tela
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            {/* Card com o formulário */}
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Gerador de Questionário Interativo</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="assunto" className="block text-gray-700 text-sm font-bold mb-2">
                            Sobre qual **livro** você quer o questionário?
                        </label>
                        <input
                            type="text"
                            id="assunto"
                            value={assunto}
                            onChange={(e) => setAssunto(e.target.value)} // Atualiza o estado 'assunto' conforme o usuário digita
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ex: A Metamorfose de Franz Kafka, O Pequeno Príncipe"
                            required // Torna o campo obrigatório
                            disabled={carregando} // Desabilita o input enquanto está carregando
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out"
                            disabled={!assunto.trim() || carregando} // Desabilita o botão se o campo estiver vazio ou se já estiver carregando
                        >
                            {carregando ? (
                                // SVG do spinner animado com Tailwind CSS
                                <svg className="animate-spin h-5 w-5 text-white inline mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : null}
                            {carregando ? 'Gerando...' : 'Gerar Questionário'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}