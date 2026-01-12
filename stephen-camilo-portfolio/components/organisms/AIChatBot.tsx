
import React, { useState, useRef, useEffect } from 'react';
import { chatWithStephen } from '../../services/gemini';
import { Message } from '../../types';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'model', text: "Hi! I'm Stephen's AI assistant. Ask me anything!" }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    const history = messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }));
    const response = await chatWithStephen(userMsg, history);
    setMessages(prev => [...prev, { role: 'model', text: response || 'No response.' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="bg-gradient-to-r from-emerald-500 to-blue-600 p-4 flex justify-between items-center text-white">
            <h3 className="font-bold text-sm">Portfolio Assistant</h3>
            <button onClick={() => setIsOpen(false)}><i className="fas fa-times"></i></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-800'}`}>{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-4 bg-slate-50 flex gap-2">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Ask anything..." className="flex-1 rounded-full px-4 py-2 text-sm border focus:ring-2 focus:ring-emerald-500" />
            <button onClick={handleSend} className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center"><i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-blue-600 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"><i className="fas fa-comment-dots text-xl"></i></button>
      )}
    </div>
  );
};

export default AIChatBot;
