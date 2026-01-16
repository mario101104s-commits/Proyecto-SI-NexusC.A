import { ClipboardList, Plus, Search, Filter, Clock, CheckCircle2, AlertCircle, ChevronRight, MoreHorizontal } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function TasksPage() {
    const tasks = [
        { id: 1, title: "Envío Masivo de Facturación Enero", deadline: "17:00 PM", status: "Pendiente", priority: "Urgente" },
        { id: 2, title: "Actualización de Contratos Proveedor Maracay", deadline: "Ayer", status: "En curso", priority: "Media" },
        { id: 3, title: "Organizar Backup de Servidores Nexus", deadline: "Hace 2h", status: "Completado", priority: "Baja" },
        { id: 4, title: "Revisión de Gastos de Caja Chica", deadline: "Mañana", status: "Pendiente", priority: "Media" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight italic">Gestión de <span className="text-purple-600">Tareas</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <ClipboardList size={18} className="text-purple-500" />
                        Control operativo y seguimiento de asignaciones administrativas
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-purple-100 flex items-center gap-2 border-none">
                        <Plus size={20} />
                        Nueva Tarea
                    </Button>
                </div>
            </div>

            {/* Status Tabs */}
            <div className="flex flex-wrap gap-4 px-2">
                <StatusTab label="Todas" count={24} active />
                <StatusTab label="Pendientes" count={12} color="rose" />
                <StatusTab label="En Curso" count={5} color="indigo" />
                <StatusTab label="Completas" count={7} color="emerald" />
            </div>

            {/* Task List Table/Cards */}
            <div className="bg-white rounded-[3.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
                <div className="p-10 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="relative flex-1 max-w-sm">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            placeholder="Buscar tarea..."
                            className="w-full pl-14 py-4 bg-gray-50/50 border-none rounded-2xl font-bold text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                        />
                    </div>
                    <Button variant="ghost" className="text-gray-400 font-black text-xs uppercase tracking-widest hover:bg-gray-50 rounded-xl">
                        Más Filtros <Filter size={14} className="ml-2" />
                    </Button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Asignación</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Prioridad</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Estado</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Vencimiento</th>
                                <th className="text-right px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Acción</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {tasks.map((task) => (
                                <tr key={task.id} className="hover:bg-purple-50/20 transition-all group">
                                    <td className="px-10 py-8">
                                        <div>
                                            <p className="font-black text-gray-900 tracking-tight text-base mb-1 group-hover:text-purple-600 transition-colors uppercase italic">{task.id}. {task.title}</p>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Admin Team • Nexus Office</p>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-2 w-fit
                                            ${task.priority === 'Urgente' ? 'bg-rose-600 text-white shadow-lg shadow-rose-100' :
                                                task.priority === 'Media' ? 'bg-blue-50 text-blue-600 border border-blue-100' :
                                                    'bg-slate-100 text-slate-400'}`}>
                                            {task.priority === 'Urgente' && <AlertCircle size={12} />}
                                            {task.priority}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2.5 h-2.5 rounded-full ${task.status === 'Completado' ? 'bg-emerald-500' : task.status === 'En curso' ? 'bg-indigo-500 animate-pulse' : 'bg-rose-500'}`} />
                                            <span className="text-xs font-black text-gray-800 uppercase tracking-tight">{task.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-sm font-bold text-gray-500 italic">
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} className="text-gray-300" /> {task.deadline}
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all">
                                            <button className="p-3 bg-white border border-gray-100 text-gray-400 hover:text-emerald-600 hover:border-emerald-200 rounded-xl transition-all"><CheckCircle2 size={18} /></button>
                                            <button className="p-3 bg-white border border-gray-100 text-gray-400 hover:text-purple-600 hover:border-purple-200 rounded-xl transition-all"><MoreHorizontal size={18} /></button>
                                            <button className="p-3 bg-purple-600 text-white rounded-xl shadow-lg shadow-purple-100 hover:bg-purple-700 transition-all"><ChevronRight size={18} /></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function StatusTab({ label, count, color = "slate", active = false }: any) {
    const accents: any = {
        slate: 'text-gray-400 hover:text-gray-900 border-transparent',
        rose: 'text-rose-400 hover:text-rose-600 border-transparent',
        indigo: 'text-indigo-400 hover:text-indigo-600 border-transparent',
        emerald: 'text-emerald-400 hover:text-emerald-600 border-transparent',
    };

    return (
        <button className={`pb-4 px-6 font-black text-sm uppercase tracking-widest border-b-4 transition-all flex items-center gap-3
            ${active ? 'border-purple-600 text-purple-600' : accents[color]}`}>
            {label}
            <span className={`px-2 py-0.5 rounded-lg text-[10px] ${active ? 'bg-purple-50 text-purple-600' : 'bg-gray-50 text-gray-400'}`}>{count}</span>
        </button>
    );
}
