import { Calendar as CalendarIcon, Clock, Users, Video, MapPin, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function ManagerMeetingsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Agenda de Reuniones</h2>
                    <p className="text-gray-500">Calendario de sesiones de seguimiento y juntas directivas</p>
                </div>
                <Button className="gap-2 bg-blue-800 hover:bg-blue-900 shadow-md">
                    <Plus size={18} /> Agendar Sesión
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Lista de Reuniones Próximas */}
                <div className="lg:col-span-2 space-y-4">
                    <MeetingCard
                        title="Comité de Logística Semanal"
                        time="HOY, 02:00 PM"
                        location="Sala de Juntas A"
                        attendees="8 Pers."
                        type="Presencial"
                    />
                    <MeetingCard
                        title="Sincronización Gerentes de Ventas"
                        time="Mañana, 09:00 AM"
                        location="Microsoft Teams"
                        attendees="5 Pers."
                        type="Virtual"
                    />
                    <MeetingCard
                        title="Revisión Trimestral - Director"
                        time="Viernes, 11:30 AM"
                        location="Oficina Principal"
                        attendees="3 Pers."
                        type="Presencial"
                    />
                </div>

                {/* Resumen de Agenda */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-fit">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Estado de la Semana</h3>
                    <div className="flex-1 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-black">
                                12
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-800">Total Reuniones</p>
                                <p className="text-xs text-gray-500">Esta semana fiscal</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center font-black">
                                8h
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-800">Tiempo en Sesión</p>
                                <p className="text-xs text-gray-500">Acumulado semanal</p>
                            </div>
                        </div>
                    </div>
                    <Button variant="ghost" className="w-full mt-8 text-blue-800 hover:bg-blue-50 font-bold border border-transparent hover:border-blue-100">
                        Ver Calendario Completo
                    </Button>
                </div>
            </div>
        </div>
    );
}

function MeetingCard({ title, time, location, attendees, type }: any) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:border-blue-400 transition-all flex items-center justify-between">
            <div className="flex items-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${type === 'Virtual' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
                    {type === 'Virtual' ? <Video size={24} /> : <Users size={24} />}
                </div>
                <div>
                    <h4 className="text-base font-bold text-gray-800 group-hover:text-blue-900 transition-colors">{title}</h4>
                    <div className="flex items-center gap-4 mt-2 text-xs font-medium text-gray-400">
                        <span className="flex items-center gap-1"><Clock size={14} /> {time}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> {location}</span>
                        <span className="flex items-center gap-1"><Users size={14} /> {attendees}</span>
                    </div>
                </div>
            </div>
            <Button variant="ghost" size="icon" className="text-gray-300 group-hover:text-blue-600 group-hover:bg-blue-50 rounded-xl">
                <ChevronRight size={20} />
            </Button>
        </div>
    );
}
