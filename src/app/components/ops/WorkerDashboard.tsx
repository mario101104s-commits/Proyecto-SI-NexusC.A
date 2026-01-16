import { ClipboardList, Calendar, Bell, FileText, LogIn, LogOut, ShieldCheck, ChevronRight, Zap } from 'lucide-react';

export function WorkerDashboard({ onNavigate }: { onNavigate?: (menu: string) => void }) {
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
            {/* Shift Command Header */}
            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-blue-600/20 transition-all duration-700" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                    <div>
                        <div className="flex items-center gap-3 text-blue-400 mb-4">
                            <ShieldCheck size={20} />
                            <span className="text-xs font-black uppercase tracking-widest">Seguridad Nexus Activa</span>
                        </div>
                        <h2 className="text-4xl font-black mb-2 tracking-tight">¡Hola de nuevo, Mario! 👋</h2>
                        <p className="text-slate-400 font-medium">Tienes <span className="text-white font-bold">04 tareas</span> críticas asignadas para tu turno.</p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-xs tracking-wider uppercase flex items-center gap-3 hover:bg-blue-50 transition-all shadow-xl shadow-white/5 active:scale-95">
                                <LogIn size={18} /> Iniciar Turno (AM)
                            </button>
                            <button className="px-8 py-4 bg-slate-800 text-slate-400 border border-slate-700 rounded-2xl font-black text-xs tracking-wider uppercase flex items-center gap-3 hover:text-white hover:bg-slate-700 transition-all active:scale-95">
                                <LogOut size={18} /> Finalizar Turno
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-8 bg-white/5 rounded-[2.5rem] border border-white/5 backdrop-blur-sm min-w-[200px]">
                        <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Progreso del Turno</p>
                        <div className="relative w-24 h-24">
                            <svg className="w-full h-full" viewBox="0 0 36 36">
                                <path className="text-white/10" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                <path className="text-blue-500" strokeDasharray="65, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-lg font-black tracking-tighter">65%</span>
                            </div>
                        </div>
                        <p className="text-[9px] font-bold text-slate-500 mt-4 uppercase">Horas: 05h 22m</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Active Task Queue */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-xl font-black text-gray-800 tracking-tight flex items-center gap-3">
                            <ClipboardList className="text-blue-600" size={24} /> Mis Tareas
                        </h3>
                        <div className="flex gap-2">
                            <div className="px-3 py-1 bg-blue-50 rounded-lg text-[9px] font-black text-blue-600 uppercase tracking-widest">Activas: 2</div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <WorkerTaskItem title="Descargar container #C-223" type="ALMACÉN" priority="URGENTE" icon={<Zap size={16} />} />
                        <WorkerTaskItem title="Inventario Pasillo 4 (Filtros)" type="CONTEO" priority="ALTA" icon={<Zap size={16} />} />
                        <WorkerTaskItem title="Etiquetado de Lote Q4-9" type="PLANTA" priority="MEDIA" icon={<Zap size={16} />} />
                        <WorkerTaskItem title="Apoyo en despacho a PLC" type="LOGÍSTICA" priority="BAJA" icon={<Zap size={16} />} />
                    </div>
                </div>

                {/* Internal Comms & News */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black text-gray-800 tracking-tight flex items-center gap-3">
                            <Bell className="text-amber-500" size={24} /> Comunicados
                        </h3>
                    </div>

                    <div className="space-y-6 flex-1">
                        <SimpleCommItem
                            title="Nueva Normativa de Seguridad Industrial"
                            date="Hace 2 horas"
                            type="SEGURIDAD"
                            icon={<ShieldCheck className="text-blue-600" size={18} />}
                        />
                        <SimpleCommItem
                            title="Cambio de Horario - Semana Santa"
                            date="Ayer"
                            type="HORARIO"
                            icon={<Calendar className="text-emerald-600" size={18} />}
                        />
                        <SimpleCommItem
                            title="Reincorporación de Beneficios"
                            date="Hace 3 días"
                            type="RRHH"
                            icon={<FileText className="text-purple-600" size={18} />}
                        />
                    </div>

                    <button className="mt-8 w-full py-4 border-2 border-dashed border-gray-100 text-gray-400 rounded-2xl font-black text-xs uppercase tracking-widest hover:border-blue-200 hover:text-blue-600 transition-all flex items-center justify-center gap-2">
                        Ver Todos los Comunicados <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}

function WorkerTaskItem({ title, type, priority, icon }: any) {
    const priorities: any = {
        URGENTE: 'bg-rose-600 text-white',
        ALTA: 'bg-amber-500 text-white',
        MEDIA: 'bg-blue-500 text-white',
        BAJA: 'bg-slate-100 text-slate-400',
    };

    return (
        <div className="group flex items-center justify-between p-6 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-gray-100 transition-all cursor-pointer">
            <div className="flex items-center gap-5">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 ${priorities[priority]}`}>
                    {icon}
                </div>
                <div>
                    <h4 className="text-sm font-black text-gray-800 tracking-tight group-hover:text-blue-600 transition-colors uppercase">{title}</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">{type}</p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-2">
                <span className={`text-[8px] font-black px-3 py-1 rounded-lg uppercase tracking-widest ${priorities[priority]}`}>{priority}</span>
            </div>
        </div>
    );
}

function SimpleCommItem({ title, date, type, icon }: any) {
    return (
        <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-all cursor-default group">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-md transition-all">
                {icon}
            </div>
            <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-[9px] font-black text-blue-500 uppercase tracking-widest">{type}</span>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">{date}</span>
                </div>
                <h4 className="text-sm font-black text-gray-800 leading-tight group-hover:text-blue-600 transition-colors">{title}</h4>
            </div>
        </div>
    );
}

