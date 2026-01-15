import { useState } from 'react';
import { MessageCircle, X, Send, MinusCircle, User } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { ChatMessage } from './types';

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<ChatMessage[]>([
        { id: '1', text: 'Hola, ¿alguien tiene el reporte de ventas?', sender: 'other', timestamp: '10:30 AM' },
        { id: '2', text: 'Sí, ya te lo envío por correo.', sender: 'me', timestamp: '10:32 AM' },
        { id: '3', text: '¡Gracias!', sender: 'other', timestamp: '10:33 AM' }
    ]);

    const handleSend = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!message.trim()) return;

        const newMessage: ChatMessage = {
            id: Date.now().toString(),
            text: message,
            sender: 'me',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages([...messages, newMessage]);
        setMessage('');
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 h-14 w-14 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 hover:scale-105 transition-all z-50"
            >
                <MessageCircle size={28} />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
        );
    }

    if (isMinimized) {
        return (
            <div className="fixed bottom-6 right-6 w-72 bg-white rounded-t-xl shadow-xl z-50 border border-gray-200 overflow-hidden">
                <div
                    className="bg-blue-800 text-white p-3 flex items-center justify-between cursor-pointer"
                    onClick={() => setIsMinimized(false)}
                >
                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <div className="w-2 h-2 bg-green-400 rounded-full absolute -right-0.5 -bottom-0.5 border border-blue-800"></div>
                            <MessageCircle size={18} />
                        </div>
                        <span className="font-medium text-sm">Chat de Equipo</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-white hover:bg-blue-700" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
                            <X size={14} />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-xl shadow-2xl z-50 border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300 max-h-[500px]">
            {/* Header */}
            <div className="bg-blue-800 text-white p-4 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-1.5 rounded-full">
                        <MessageCircle size={20} />
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">Chat de Equipo</h3>
                        <p className="text-xs text-blue-200">3 miembros en línea</p>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-white hover:bg-blue-700 rounded-full" onClick={() => setIsMinimized(true)}>
                        <MinusCircle size={18} />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-white hover:bg-blue-700 rounded-full" onClick={() => setIsOpen(false)}>
                        <X size={18} />
                    </Button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] rounded-lg p-3 text-sm shadow-sm ${msg.sender === 'me'
                                ? 'bg-blue-600 text-white rounded-tr-none'
                                : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                            }`}>
                            <p>{msg.text}</p>
                            <p className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-blue-100' : 'text-gray-400'}`}>
                                {msg.timestamp}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2 flex-shrink-0">
                <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Escribe un mensaje..."
                    className="flex-1 border-gray-200 focus:ring-blue-500"
                />
                <Button
                    type="submit"
                    size="sm"
                    disabled={!message.trim()}
                    className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 p-0 flex-shrink-0"
                >
                    <Send size={18} className={message.trim() ? 'ml-1' : ''} />
                </Button>
            </form>
        </div>
    );
}
