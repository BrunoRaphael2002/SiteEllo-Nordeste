// src/components/ChatWidget.jsx
import React, { useState, useRef } from 'react';
import { MessageCircle, X } from 'lucide-react';
import BotAvatar from '../assets/4.jpg';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Olá! Como podemos ajudar você hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [unread, setUnread] = useState(0);
  const messagesEndRef = useRef(null);

  const toggleWidget = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) setUnread(0);
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg = { from: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Resposta automática
    setTimeout(() => {
      const reply = { from: 'bot', text: 'Obrigado! Em breve entraremos em contato via WhatsApp: (83) 1234‑5678' };
      setMessages(prev => [...prev, reply]);
      if (!isOpen) setUnread(prev => prev + 1);
      scrollToBottom();
    }, 1500);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-80 max-w-full md:w-96 h-96 bg-white shadow-xl rounded-lg flex flex-col z-50">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <span className="font-semibold">Chat ELLO NORDESTE</span>
            <button onClick={toggleWidget} aria-label="Fechar chat">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}> 
                <div className="flex items-end">
                  {msg.from === 'bot' && (
                    <img src={BotAvatar} alt="Bot" className="w-6 h-6 rounded-full mr-2" />
                  )}
                  <div className={`${msg.from === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border'} rounded-xl p-2 max-w-xs`}> 
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-gray-200 flex items-center">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              placeholder="Digite sua mensagem..."
              className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button onClick={handleSend} className="ml-2 p-2 text-blue-600 hover:text-blue-700">
              <MessageCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={toggleWidget}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 md:w-auto"
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-6 h-6" />
        {unread > 0 && (
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>
    </>
  );
}
