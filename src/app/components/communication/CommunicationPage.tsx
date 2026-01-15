import { MessageSquare, Video } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { MOCK_ANNOUNCEMENTS, MOCK_EVENTS, MOCK_DOCUMENTS } from './types';
import { AnnouncementsBoard } from './AnnouncementsBoard';
import { CalendarWidget } from './CalendarWidget';
import { DocumentsSection } from './DocumentsSection';
import { ChatWidget } from './ChatWidget';

export function CommunicationPage() {
    return (
        <div className="space-y-6 relative min-h-screen pb-20">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">Comunicación y Colaboración</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Espacio corporativo para noticias, eventos y trabajo en equipo
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" className="text-gray-600 bg-white" onClick={() => alert('Videollamada - En desarrollo')}>
                        <Video size={18} className="mr-2" />
                        Iniciar Reunión
                    </Button>
                    <Button className="bg-blue-800 hover:bg-blue-900 text-white shadow-md" onClick={() => alert('Nuevo Anuncio - En desarrollo')}>
                        <MessageSquare size={18} className="mr-2" />
                        Publicar Anuncio
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Announcements (2/3 width) */}
                <div className="lg:col-span-2 space-y-6">
                    <AnnouncementsBoard announcements={MOCK_ANNOUNCEMENTS} />
                    <DocumentsSection documents={MOCK_DOCUMENTS} />
                </div>

                {/* Right Column: Calendar & Widgets (1/3 width) */}
                <div className="space-y-6">
                    <CalendarWidget events={MOCK_EVENTS} />

                    {/* Quick Links Widget */}
                    <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-xl p-6 text-white shadow-lg">
                        <h3 className="font-semibold text-lg mb-2">Nexus Connect</h3>
                        <p className="text-indigo-100 text-sm mb-4">Mantente conectado con tu equipo en tiempo real.</p>
                        <div className="flex -space-x-2 overflow-hidden mb-4">
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-blue-900" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" alt="" />
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-blue-900" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150" alt="" />
                            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-blue-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" alt="" />
                            <div className="flex items-center justify-center h-8 w-8 rounded-full ring-2 ring-blue-900 bg-blue-700 text-xs font-medium text-white">+5</div>
                        </div>
                        <Button size="sm" className="w-full bg-white text-blue-900 hover:bg-blue-50">
                            Ver Directorio
                        </Button>
                    </div>
                </div>
            </div>

            {/* Floating Chat */}
            <ChatWidget />
        </div>
    );
}
