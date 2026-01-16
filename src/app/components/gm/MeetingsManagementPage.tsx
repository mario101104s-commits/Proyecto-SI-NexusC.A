import { useState } from 'react';
import {
    Users, MapPin, ChevronRight, Plus,
    Search, MoreHorizontal, Video,
    FileText, CalendarDays, Bookmark
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface Meeting {
    id: string;
    title: string;
    date: string;
    time: string;
    attendees: string[];
    location: string;
    type: 'presencial' | 'remoto';
    status: 'scheduled' | 'completed' | 'cancelled';
    description: string;
}

const MEETINGS_DATA: Meeting[] = [
    {
        id: '1',
        title: 'Comité Operativo Mensual',
        date: '2026-01-20',
        time: '09:00 AM',
        attendees: ['Gerente Ventas', 'Gerente Ops', 'Director'],
        location: 'Sala Ejecutiva A',
        type: 'presencial',
        status: 'scheduled',
        description: 'Revisión de metas Q4 y planificación del primer trimestre 2026.'
    },
    {
        id: '2',
        title: 'Sincronización Regional - Maracaibo',
        date: '2026-01-21',
        time: '02:00 PM',
        attendees: ['Sup. Almacén Maracaibo', 'Logística'],
        location: 'Microsoft Teams',
        type: 'remoto',
        status: 'scheduled',
        description: 'Optimización de rutas de despacho en la zona occidente.'
    },
    {
        id: '3',
        title: 'Revisión de Presupuesto Anual',
        date: '2026-01-18',
        time: '10:30 AM',
        attendees: ['Gerente Finanzas', 'Director'],
        location: 'Oficina Central',
        type: 'presencial',
        status: 'completed',
        description: 'Ajuste final del presupuesto operativo para el ejercicio fiscal 2026.'
    },
];

export function MeetingsManagementPage() {
    const [activeTab, setActiveTab] = useState('upcoming');

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
            {/* Executive Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-sm font-black text-indigo-600 uppercase tracking-[0.3em] mb-3">Agenda de Gobernanza</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight leading-none">Gestión de Reuniones</h1>
                    <p className="text-gray-500 font-medium mt-4 text-lg">Planificación y seguimiento de sesiones estratégicas y comités ejecutivos.</p>
                </div>
                <Button className="px-10 py-7 bg-indigo-600 text-white rounded-[2rem] font-black text-sm hover:bg-indigo-700 shadow-2xl shadow-indigo-100 transition-all active:scale-95 flex items-center gap-3">
                    <Plus size={22} />
                    Agendar Sesión
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                {/* Left Sidebar: Calendar Peek & Filters */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-50">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Calendario</h3>
                            <CalendarDays className="text-indigo-600" size={20} />
                        </div>
                        {/* Static Calendar Visualization */}
                        <div className="grid grid-cols-7 gap-3 text-center mb-6">
                            {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((d, i) => (
                                <span key={i} className="text-[10px] font-black text-slate-400">{d}</span>
                            ))}
                            {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                                <button
                                    key={d}
                                    className={`w-8 h-8 rounded-xl flex items-center justify-center text-[10px] font-bold transition-all ${d === 16 ? 'bg-indigo-600 text-white shadow-lg' : 'hover:bg-indigo-50 text-slate-600'}`}
                                >
                                    {d}
                                </button>
                            ))}
                        </div>
                        <Button variant="ghost" className="w-full text-[10px] font-black uppercase text-indigo-600 tracking-widest hover:bg-indigo-50 rounded-xl">
                            Ver Calendario Completo
                        </Button>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-900/10 text-white">
                        <h3 className="text-sm font-black uppercase tracking-widest mb-8 flex items-center gap-3">
                            <Bookmark size={18} className="text-indigo-400" />
                            Pendientes
                        </h3>
                        <div className="space-y-6">
                            <PendingAction title="Minuta Q4" time="Faltan 2 días" />
                            <PendingAction title="KPI Report PLC" time="Pendiente" />
                            <PendingAction title="Revisión Flota" time="Hoy 4:00 PM" />
                        </div>
                    </div>
                </div>

                {/* Main Content: Meeting List */}
                <div className="lg:col-span-3 space-y-8">
                    {/* Filter Tabs */}
                    <div className="flex items-center justify-between bg-white p-3 rounded-[2rem] shadow-sm border border-slate-100">
                        <div className="flex gap-2">
                            {['upcoming', 'completed', 'cancelled'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'text-slate-400 hover:text-slate-600'}`}
                                >
                                    {tab === 'upcoming' ? 'Próximas' : tab === 'completed' ? 'Finalizadas' : 'Canceladas'}
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
                            <Search size={16} className="text-slate-400" />
                            <input type="text" placeholder="Buscar sesión..." className="bg-transparent border-none outline-none text-[10px] font-bold text-slate-600 placeholder:text-slate-300 w-40" />
                        </div>
                    </div>

                    {/* Meeting Cards */}
                    <div className="space-y-6">
                        {MEETINGS_DATA.filter(m => {
                            if (activeTab === 'upcoming') return m.status === 'scheduled';
                            return m.status === activeTab;
                        }).map((meeting) => (
                            <MeetingCard key={meeting.id} meeting={meeting} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function MeetingCard({ meeting }: { meeting: Meeting }) {
    const isRemote = meeting.type === 'remoto';

    return (
        <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-100/50 border-2 border-transparent hover:border-indigo-100 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-all" />

            <div className="flex flex-col md:flex-row gap-10">
                {/* Date/Time Indicator */}
                <div className="flex flex-row md:flex-col items-center justify-center gap-2 md:gap-1 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 min-w-[120px]">
                    <span className="text-3xl font-black text-indigo-600">{meeting.date.split('-')[2]}</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{new Date(meeting.date).toLocaleDateString('es-ES', { month: 'short' })}</span>
                    <div className="w-10 h-1 bg-indigo-100 rounded-full my-2 hidden md:block" />
                    <span className="text-[10px] font-bold text-slate-600 uppercase">{meeting.time}</span>
                </div>

                {/* Details */}
                <div className="flex-1 space-y-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2 group-hover:text-indigo-600 transition-colors uppercase">{meeting.title}</h3>
                            <div className="flex items-center gap-6">
                                <span className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    {isRemote ? <Video size={14} className="text-emerald-500" /> : <MapPin size={14} className="text-rose-500" />}
                                    {meeting.location}
                                </span>
                                <span className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                    <Users size={14} className="text-blue-500" />
                                    {meeting.attendees.length} Asistentes
                                </span>
                            </div>
                        </div>
                        <button className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:bg-slate-900 hover:text-white transition-all">
                            <MoreHorizontal size={20} />
                        </button>
                    </div>

                    <p className="text-slate-500 font-medium leading-relaxed italic border-l-4 border-slate-100 pl-6 py-2">
                        "{meeting.description}"
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                        <div className="flex -space-x-4">
                            {meeting.attendees.map((a, i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-indigo-50 border-2 border-white flex items-center justify-center text-[10px] font-black text-indigo-600 ring-4 ring-white">
                                    {a.split(' ')[0][0]}{a.split(' ')[1] ? a.split(' ')[1][0] : ''}
                                </div>
                            ))}
                        </div>
                        <div className="flex gap-4">
                            <Button variant="outline" className="h-12 border-2 border-slate-100 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-600 hover:bg-slate-50">
                                <FileText size={16} className="mr-2" /> Minuta
                            </Button>
                            <Button className="h-12 bg-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-indigo-700 shadow-xl shadow-indigo-100 transition-all flex items-center">
                                {meeting.status === 'completed' ? 'Ver Grabación' : 'Entrar a Sala'}
                                <ChevronRight size={16} className="ml-2" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PendingAction({ title, time }: any) {
    return (
        <div className="flex items-center justify-between group cursor-pointer border-b border-white/5 pb-4">
            <div>
                <p className="text-sm font-black text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{title}</p>
                <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">{time}</p>
            </div>
            <div className="p-2 bg-white/5 rounded-xl text-slate-500 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <ChevronRight size={14} />
            </div>
        </div>
    );
}
