'use client';

import { useState } from 'react';

export default function ChatPage() {
  const [activeTab, setActiveTab] = useState('chat');
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    // Implementar lógica de envio de mensagem
    console.log('Enviando mensagem:', message);
    setMessage('');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-[#000000] mb-6">Chat de Trading</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab('chat')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'chat'
                ? 'bg-[#000000] text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Chat
          </button>
          <button
            onClick={() => setActiveTab('trades')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'trades'
                ? 'bg-[#000000] text-white'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            Trades
          </button>
        </div>
        <div className="mt-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="w-full p-2 border rounded-lg mb-2"
          />
          <button
            onClick={handleSendMessage}
            className="bg-[#000000] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Enviar Mensagem
          </button>
        </div>
        <div className="mt-4">
          {activeTab === 'chat' ? (
            <div className="space-y-4">
              {/* Aqui você pode adicionar a lista de mensagens */}
            </div>
          ) : (
            <div className="space-y-4">
              {/* Aqui você pode adicionar a lista de trades */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 