import { Calendar as CalendarIcon, Clock, ChevronRight } from 'lucide-react';
import { CalendarEvent } from './types';

interface CalendarWidgetProps {
    events: CalendarEvent[];
}

export function CalendarWidget({ events }: CalendarWidgetProps) {
    const getEventTypeColor = (type: CalendarEvent['type']) => {
        switch (type) {
            case 'meeting': return 'border-l-4 border-blue-500 bg-blue-50';
            case 'deadline': return 'border-l-4 border-red-500 bg-red-50';
            case 'holiday': return 'border-l-4 border-green-500 bg-green-50';
        }
    };

    const getDay = (dateString: string) => {
        return new Date(dateString).getDate();
    };

    const getMonth = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-ES', { month: 'short' }).toUpperCase();
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <CalendarIcon size={18} className="text-blue-800" />
                    Próximos Eventos
                </h3>
                <button className="text-xs font-medium text-blue-600 hover:text-blue-800 flex items-center">
                    Ver Todo <ChevronRight size={14} />
                </button>
            </div>

            <div className="divide-y divide-gray-100">
                {events.map((event) => (
                    <div key={event.id} className={`p-4 hover:bg-gray-50 transition-colors ${getEventTypeColor(event.type)}`}>
                        <div className="flex gap-4 items-center">
                            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg p-2 min-w-[3.5rem] shadow-sm">
                                <span className="text-xs font-bold text-gray-500 uppercase">{getMonth(event.date)}</span>
                                <span className="text-xl font-bold text-gray-900">{getDay(event.date)}</span>
                            </div>

                            <div className="flex-1">
                                <h4 className="font-medium text-gray-900 line-clamp-1">{event.title}</h4>
                                <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                                    <Clock size={12} />
                                    <span>{event.time}</span>
                                    <span className="mx-1">•</span>
                                    <span className="capitalize">
                                        {event.type === 'meeting' ? 'Reunión' : event.type === 'deadline' ? 'Entrega' : 'Feriado'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {events.length === 0 && (
                    <div className="p-8 text-center text-gray-400 text-sm">
                        No hay eventos próximos
                    </div>
                )}
            </div>
        </div>
    );
}
