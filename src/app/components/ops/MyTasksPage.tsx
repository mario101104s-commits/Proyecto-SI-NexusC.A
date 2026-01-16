import { Zap, Clock, ShieldCheck, CheckCircle2, MapPin, ChevronRight, Filter, Search } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function MyTasksPage() {
    const tasks = [
        { id: "X-201", title: "Descarga de Container", zone: "Muelle A", priority: "URGENTE", time: "Hace 15m" },
        { id: "C-114", title: "Conteo Ciclico Filtros", zone: "Pasillo B", priority: "ALTA", time: "Ahora" },
        { id: "T-009", title: "Etiquetado Lote R2", zone: "Planta Q", priority: "MEDIA", time: "14:00 PM" },
        { id: "L-442", title: "Limpieza Área 5", zone: "Patio Sur", priority: "BAJA", time: "16:00 PM" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Operator Header */}
            <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                        <Zap size={24} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-black tracking-tight">Mis Asignaciones</h1>
                        <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">Panel Operativo de Campo</p>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-8 p-6 bg-white/5 rounded-3xl border border-white/5">
                    <div className="text-center">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Completadas</p>
                        <p className="text-xl font-black text-emerald-400 tracking-tighter">08</p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="text-center">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Pendientes</p>
                        <p className="text-xl font-black text-blue-400 tracking-tighter">04</p>
                    </div>
                    <div className="w-px h-8 bg-white/10" />
                    <div className="text-center">
                        <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Turno</p>
                        <p className="text-xl font-black text-white tracking-tighter">AM</p>
                    </div>
                </div>
            </div>

            {/* Terminal Style Search */}
            <div className="relative group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input
                    placeholder="INGRESAR CÓDIGO DE TAREA..."
                    className="w-full pl-14 py-6 bg-white border border-slate-100 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-xl shadow-slate-100 focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-300"
                />
            </div>

            {/* Task Cards - Large Tap Areas */}
            <div className="space-y-4 px-1 pb-10">
                {tasks.map((task) => (
                    <div key={task.id} className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-50 border border-slate-50 hover:border-blue-200 transition-all active:scale-[0.98] group">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <span className={`w-2 h-10 rounded-full ${task.priority === 'URGENTE' ? 'bg-rose-500' : task.priority === 'ALTA' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                                <div>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">#{task.id}</p>
                                    <h4 className="text-xl font-black text-slate-900 tracking-tight leading-none uppercase italic group-hover:text-blue-600 transition-colors">{task.title}</h4>
                                </div>
                            </div>
                            <span className={`px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest
                                ${task.priority === 'URGENTE' ? 'bg-rose-50 text-rose-600' : 'bg-slate-50 text-slate-400'}`}>
                                {task.priority}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="flex items-center gap-3 text-slate-500 text-xs font-bold uppercase tracking-tight">
                                <MapPin size={14} className="text-blue-500" /> {task.zone}
                            </div>
                            <div className="flex items-center gap-3 text-slate-500 text-xs font-bold uppercase tracking-tight">
                                <Clock size={14} className="text-slate-300" /> {task.time}
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <Button className="flex-1 py-7 bg-white border-2 border-slate-100 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm">
                                <ShieldCheck size={18} className="mr-2" /> Protocolo
                            </Button>
                            <Button className="flex-1 py-7 bg-slate-900 hover:bg-black text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl transition-all">
                                <CheckCircle2 size={18} className="mr-2" /> Completar
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
