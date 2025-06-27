// File: src/components/ChatWidget.jsx
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function ChatWidget({ isOpen, onToggle }) {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { id: 1, text: '¡Hola! Soy tu asistente virtual de Banco Marfil. ¿En qué puedo ayudarte hoy?', isBot: true },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setChatHistory([...chatHistory, { id: Date.now(), text: message, isBot: false }]);
    setMessage('');
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev,
        {
          id: Date.now(),
          text: 'Gracias por tu mensaje. Un representante del banco te responderá a la brevedad.',
          isBot: true
        }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Botón flotante del chat */}
      <button
        onClick={onToggle}
        className={`fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {/* Widget del chat */}
      <div
        className={`fixed bottom-8 right-8 w-96 bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300 z-50 border border-gray-200 ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 100px)' }}
      >
        {/* Header del chat */}
        <div className="bg-black text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-red-500" />
            <h3 className="font-semibold">Asistente Virtual de Banco Marfil</h3>
          </div>
          <button
            onClick={onToggle}
            className="text-white/80 hover:text-red-400 transition-colors"
            aria-label="Cerrar chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Área de mensajes */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
          {chatHistory.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg shadow-sm ${
                  msg.isBot
                    ? 'bg-white text-black border border-gray-200'
                    : 'bg-red-600 text-white'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input de mensaje */}
        <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors text-black placeholder-gray-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg hover:shadow-md transition-all"
              aria-label="Enviar mensaje"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
