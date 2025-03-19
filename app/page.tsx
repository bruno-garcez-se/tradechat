'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#000000] mb-6">
          Bem-vindo ao <span className="text-[#3A6604]">TradeChat</span>
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Sistema de Atendimento Multicanal
          </h2>
          <p className="text-gray-600 mb-4">
            Gerencie múltiplos atendimentos via WhatsApp de forma eficiente e organizada.
          </p>
          <Link 
            href="/chat" 
            className="inline-block bg-[#3A6604] text-white px-6 py-2 rounded-lg hover:bg-[#000000] transition-colors"
          >
            Começar Agora
          </Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-[#000000] mb-4">
            Agende uma Demonstração
          </h2>
          <p className="text-gray-600 mb-4">
            Conheça todas as funcionalidades do TradeChat em uma demonstração personalizada.
          </p>
          <Link 
            href="/sobre" 
            className="inline-block bg-[#3A6604] text-white px-6 py-2 rounded-lg hover:bg-[#000000] transition-colors"
          >
            Agendar Demo
          </Link>
        </div>
      </div>
    </main>
  );
} 