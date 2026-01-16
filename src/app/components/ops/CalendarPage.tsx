import { Calendar as CalendarIcon, Clock, MapPin, User, ChevronLeft, ChevronRight, Plus, Filter } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function CalendarPage() {
    const events = [
        { id: 1, title: "Reunión de Gerencia", time: "10:00 AM", location: "Sala A", category: "Estratégico" },
        { id: 2, title: "Revisión de Inventario", time: "02:30 PM", location: "Almacén Valencia", category: "Operativo" },
        { id: 3, title: "Capacitación de Seguridad", time: "04:00 PM", location: "Auditorio", category: "RRHH" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight italic">Agenda <span className="text-indigo-600">Corporativa</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <CalendarIcon size={18} className="text-indigo-500" />
                        Control centralizado de eventos y reuniones
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-indigo-100 flex items-center gap-2 border-none">
                        <Plus size={20} />
                        Agendar Evento
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Mini Calendar View */}
                <div className="bg-white p-10 rounded-[3.5rem] shadow-xl shadow-gray-100 border border-gray-50 h-fit">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-black text-gray-800">Enero 2026</h3>
                        <div className="flex gap-2">
                            <button className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-indigo-600 transition-all"><ChevronLeft size={16} /></button>
                            <button className="p-2 bg-gray-50 rounded-xl text-gray-400 hover:text-indigo-600 transition-all"><ChevronRight size={16} /></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-2 mb-4">
                        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(d => (
                            <div key={d} className="text-[10px] font-black text-gray-300 text-center uppercase">{d}</div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                        {Array.from({ length: 31 }).map((_, i) => (
                            <div
                                key={i}
                                className={`aspect-square flex items-center justify-center rounded-xl text-xs font-black transition-all cursor-pointer
                                    ${i + 1 === 16 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100 scale-110' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                            >
                                {i + 1}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Events Timeline */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between px-4">
                        <h3 className="text-xl font-black text-gray-800 tracking-tight">Próximos para Hoy</h3>
                        <Button variant="ghost" className="text-gray-400 font-black text-xs uppercase tracking-widest hover:bg-gray-100 rounded-xl">
                            Filtrar <Filter size={14} className="ml-2" />
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {events.map((event) => (
                            <div key={event.id} className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-100 transition-all hover:-translate-x-1 group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="flex items-start gap-6">
                                    <div className="p-5 bg-indigo-50 text-indigo-600 rounded-[1.5rem] group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-1">{event.category}</p>
                                        <h4 className="text-2xl font-black text-gray-900 tracking-tight leading-none mb-3 group-hover:text-indigo-600 transition-colors uppercase italic">{event.title}</h4>
                                        <div className="flex items-center gap-4 text-gray-400 font-bold text-xs uppercase tracking-tight">
                                            <span className="flex items-center gap-1"><Clock size={12} /> {event.time}</span>
                                            <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[9px] font-black">D</div>
                                        <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-[9px] font-black">GM</div>
                                    </div>
                                    <button className="p-3 bg-gray-50 text-gray-300 hover:bg-indigo-600 hover:text-white rounded-xl transition-all">
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white overflow-hidden relative group">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-all" />
                        <h4 className="text-lg font-black mb-2 flex items-center gap-2 tracking-tight">
                            <User size={20} className="text-indigo-400" /> Sincronización Nexus
                        </h4>
                        <p className="text-sm font-medium text-slate-400 mb-6">Tu calendario está sincronizado con la Dirección General y Ventas.</p>
                        <Button className="py-5 px-8 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all">
                            Sincronizar Ahora
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
