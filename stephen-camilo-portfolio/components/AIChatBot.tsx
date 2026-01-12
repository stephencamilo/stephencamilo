
import React, { useState, useRef, useEffect } from 'react';
import { chatWithStephen } from '../services/gemini';
import { Message } from '../types';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Stephen's AI assistant. Ask me anything about his work experience or skills!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Format history for Gemini
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithStephen(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response || 'No response from Stephen.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <i className="fas fa-robot text-white"></i>
              </div>
              <div className="text-white">
                <h3 className="font-bold text-sm">Portfolio Assistant</h3>
                <p className="text-xs opacity-80">Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-slate-100 text-slate-800 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-slate-100 bg-slate-50 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-1 bg-white border border-slate-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors disabled:opacity-50"
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
          <i className="fas fa-comment-dots text-xl"></i>
          <span className="absolute -top-12 right-0 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Ask Stephen anything!
          </span>
        </button>
      )}
    </div>
  );
};

export default AIChatBot;
