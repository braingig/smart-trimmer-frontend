// import React, { useState, useRef, useEffect } from 'react';
// import { MessageSquare, X, Send, Loader2, Bot } from 'lucide-react';
// import { streamChatResponse } from '../services/gemini';
// import { ChatMessage } from '../types';

// export const ChatAssistant: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [input, setInput] = useState('');
//   const [messages, setMessages] = useState<ChatMessage[]>([
//     { role: 'model', text: 'আসসালামু আলাইকুম! আমি Daily Trim অ্যাসিস্ট্যান্ট। ট্রিমার সম্পর্কে কিছু জানতে চান? বা অর্ডার করতে চান?' }
//   ]);
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim() || isLoading) return;

//     const userMessage = input.trim();
//     setInput('');
//     setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
//     setIsLoading(true);

//     try {
//       // Prepare history for Gemini
//       const history = messages.map(m => ({
//         role: m.role,
//         parts: [{ text: m.text }]
//       }));

//       const streamResult = await streamChatResponse(userMessage, history);
      
//       let fullResponse = '';
//       setMessages(prev => [...prev, { role: 'model', text: '' }]);

//       for await (const chunk of streamResult) {
//         const chunkText = chunk.text;
//         if (chunkText) {
//           fullResponse += chunkText;
//           setMessages(prev => {
//             const newMessages = [...prev];
//             newMessages[newMessages.length - 1].text = fullResponse;
//             return newMessages;
//           });
//         }
//       }
//     } catch (error) {
//         console.error("Chat error", error);
//         setMessages(prev => [...prev, { role: 'model', text: 'দুঃখিত, বর্তমানে আমি উত্তর দিতে পারছি না। দয়া করে কিছুক্ষণ পর আবার চেষ্টা করুন অথবা সরাসরি কল করুন।' }]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <>
//       {/* Floating Toggle Button */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className={`fixed bottom-6 right-6 z-40 bg-amber-600 text-white p-4 rounded-full shadow-2xl hover:bg-amber-700 transition-all transform hover:scale-110 flex items-center justify-center ${isOpen ? 'hidden' : 'flex'}`}
//       >
//         <MessageSquare size={28} />
//         <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full border-2 border-white animate-bounce">১</span>
//       </button>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed bottom-6 right-6 z-50 w-[90%] md:w-[380px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 overflow-hidden font-sans">
          
//           {/* Header */}
//           <div className="bg-slate-900 p-4 flex justify-between items-center text-white">
//             <div className="flex items-center gap-3">
//               <div className="bg-amber-500 p-1.5 rounded-full">
//                 <Bot size={20} className="text-white" />
//               </div>
//               <div>
//                 <h3 className="font-bold text-sm">হেল্পলাইন অ্যাসিস্ট্যান্ট</h3>
//                 <p className="text-xs text-slate-300 flex items-center gap-1">
//                   <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
//                   Active Now
//                 </p>
//               </div>
//             </div>
//             <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
//               <X size={24} />
//             </button>
//           </div>

//           {/* Messages Area */}
//           <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4 scrollbar-hide">
//             {messages.map((msg, idx) => (
//               <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div 
//                   className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
//                     msg.role === 'user' 
//                       ? 'bg-amber-500 text-white rounded-tr-none' 
//                       : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none shadow-sm'
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-200 shadow-sm flex items-center gap-2">
//                   <Loader2 size={16} className="animate-spin text-amber-500" />
//                   <span className="text-xs text-slate-400">লিখছে...</span>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="p-3 bg-white border-t border-slate-100 flex gap-2 items-center">
//             <input 
//               type="text" 
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyPress}
//               placeholder="আপনার প্রশ্ন লিখুন..."
//               className="flex-1 bg-slate-100 border-0 rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-amber-500 outline-none"
//             />
//             <button 
//               onClick={handleSend}
//               disabled={isLoading || !input.trim()}
//               className="p-2.5 bg-amber-600 text-white rounded-full hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//             >
//               <Send size={18} />
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };