import { Megaphone, Calendar as CalendarIcon, AlertTriangle } from 'lucide-react';
import { Announcement } from './types';

interface AnnouncementsBoardProps {
    announcements: Announcement[];
}

export function AnnouncementsBoard({ announcements }: AnnouncementsBoardProps) {
    const getCategoryIcon = (category: Announcement['category']) => {
        switch (category) {
            case 'news': return <Megaphone size={18} className="text-blue-600" />;
            case 'event': return <CalendarIcon size={18} className="text-green-600" />;
            case 'alert': return <AlertTriangle size={18} className="text-orange-600" />;
        }
    };

    const getCategoryColor = (category: Announcement['category']) => {
        switch (category) {
            case 'news': return 'bg-blue-100 text-blue-700';
            case 'event': return 'bg-green-100 text-green-700';
            case 'alert': return 'bg-orange-100 text-orange-700';
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <Megaphone size={20} className="text-blue-800" />
                Muro de Anuncios
            </h2>

            <div className="space-y-4">
                {announcements.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src={item.authorAvatar}
                                    alt={item.author}
                                    className="w-10 h-10 rounded-full object-cover border border-gray-200"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-900">{item.author}</h3>
                                    <p className="text-xs text-gray-500">{formatDate(item.date)}</p>
                                </div>
                            </div>
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium flex items-center gap-1.5 ${getCategoryColor(item.category)}`}>
                                {getCategoryIcon(item.category)}
                                {item.category === 'news' ? 'Noticia' : item.category === 'event' ? 'Evento' : 'Alerta'}
                            </span>
                        </div>

                        <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600 leading-relaxed">{item.content}</p>

                        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm">
                            <button className="text-gray-500 hover:text-blue-600 font-medium">Me gusta</button>
                            <button className="text-gray-500 hover:text-blue-600 font-medium">Comentar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
