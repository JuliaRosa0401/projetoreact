"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaBookOpen } from 'react-icons/fa'; // Para o ícone de livro

export default function Home() {
  const [assunto, setAssunto] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (assunto.trim()) {
      router.push(`/questionario?assunto=${encodeURIComponent(assunto.trim())}`);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        {/* Ícone do Livro */}
        <div className="flex justify-center mb-6">
          <FaBookOpen className="text-blue-600 text-6xl" />
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl font-extrabold text-gray-900">
          Gerador de Questionários Literários
        </h1>
        {/* Subtítulo */}
        <p className="mt-2 text-lg text-gray-600">
          Digite o título de um livro e teste seu conhecimento literário com nosso gerador de questionários inteligente.
        </p>

        {/* Card Principal do Formulário */}
        <div className="bg-white p-8 rounded-lg shadow-md mt-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="book-title" className="block text-sm font-medium text-gray-700 text-left">
                Título do Livro
              </label>
              <div className="mt-1">
                <input
                  id="book-title"
                  name="book-title"
                  type="text"
                  required
                  placeholder="e.g., Pequeno Príncipe, Dom Casmurro, 1984..."
                  value={assunto}
                  onChange={(e) => setAssunto(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Gerar Questionário Literário
              </button>
            </div>
          </form>

          {/* Seção "Como funciona" */}
          <div className="mt-8 text-left border-t pt-6 border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Como funciona:</h2>
            <ol className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="flex-shrink-0 mr-3 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">1</span>
                <span>Digite o título de qualquer livro sobre o qual você gostaria de ser questionado.</span>
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 mr-3 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">2</span>
                <span>Nosso sistema gerará 10 perguntas de múltipla escolha pensadas sobre a literatura e leitura.</span>
              </li>
              <li className="flex items-center">
                <span className="flex-shrink-0 mr-3 inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 text-xs font-bold">3</span>
                <span>Responda às perguntas e veja sua pontuação no final!</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
}