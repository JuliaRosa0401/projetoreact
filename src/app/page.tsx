// app/page.tsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PaginaInicial() {
    const [assunto, setAssunto] = useState('');
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (assunto.trim()) {
            router.push(`/questionario?assunto=${encodeURIComponent(assunto)}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Gerador de Questionário</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="assunto" className="block text-gray-700 text-sm font-bold mb-2">
                            Qual assunto você quer estudar?
                        </label>
                        <input
                            type="text"
                            id="assunto"
                            value={assunto}
                            onChange={(e) => setAssunto(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Ex: História do Brasil, Programação Web, Biologia"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Gerar Questionário
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}