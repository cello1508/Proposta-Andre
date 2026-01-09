import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { ChatMessage } from '../types';
import { PROPOSAL_TEXT } from '../constants';

const AiConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Olá! Sou seu assistente virtual do projeto. Tenho todos os detalhes da proposta do André. Quer saber mais sobre o cronograma, a estratégia de tracking ou o plano de afiliados?',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<Chat | null>(null);

  // Initialize Chat Session
  useEffect(() => {
    try {
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API Key not found");
      }
      
      const ai = new GoogleGenAI({ apiKey });
      chatSessionRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: `
            Você é uma versão virtual do consultor André Delicoli.
            Seu objetivo é esclarecer dúvidas sobre a seguinte proposta de consultoria (MGTInc):
            
            --- CONTEXTO ---
            ${PROPOSAL_TEXT}
            --- FIM DO CONTEXTO ---

            Diretrizes:
            1. Seja profissional, direto e encorajador.
            2. Use a primeira pessoa ("Eu vou fazer", "Nós vamos conseguir").
            3. Se a pergunta for sobre algo fora da proposta, diga educadamente que o foco agora é a execução deste plano.
            4. Dê respostas curtas e objetivas, usando formatação Markdown (negrito, listas) quando ajudar.
          `,
        },
      });
    } catch (err) {
      console.error("Failed to init AI", err);
      setError("Erro ao inicializar o assistente. Verifique a chave de API.");
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading || !chatSessionRef.current) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const result = await chatSessionRef.current.sendMessage({ message: userMsg.text });
      const responseText = result.text || "Desculpe, não consegui processar a resposta.";
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'model',
        text: "Tive um problema de conexão. Tente novamente.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="bg-indigo-600 p-4 flex items-center space-x-3 shadow-md z-10">
        <div className="bg-white/20 p-2 rounded-full">
          <Sparkles className="text-white" size={20} />
        </div>
        <div>
          <h3 className="text-white font-bold">Consultor IA</h3>
          <p className="text-indigo-200 text-xs">Tire dúvidas sobre a proposta</p>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
        {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm mb-4">
                {error}
            </div>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 shadow-sm ${
                msg.role === 'user'
                  ? 'bg-indigo-600 text-white rounded-tr-none'
                  : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'
              }`}
            >
              <div className="flex items-center gap-2 mb-1 opacity-75 text-xs">
                 {msg.role === 'user' ? <User size={12}/> : <Bot size={12}/>}
                 <span>{msg.role === 'user' ? 'Você' : 'André (IA)'}</span>
              </div>
              <div className="whitespace-pre-wrap text-sm leading-relaxed">
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm flex items-center space-x-2">
              <Loader2 className="animate-spin text-indigo-600" size={16} />
              <span className="text-xs text-slate-500">Digitando...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-slate-100">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ex: Como vai funcionar o tracking?"
            className="flex-1 p-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm text-slate-800 placeholder:text-slate-400"
            disabled={isLoading || !!error}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !inputText.trim() || !!error}
            className={`p-3 rounded-lg flex items-center justify-center transition-all ${
              isLoading || !inputText.trim()
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
            }`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiConsultant;
