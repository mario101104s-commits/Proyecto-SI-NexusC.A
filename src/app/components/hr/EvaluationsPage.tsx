import { ClipboardList, Star, TrendingUp, ChevronRight, Calendar, Filter } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function EvaluationsPage() {
    const evaluations = [
        { id: 1, employee: "Carlos Mendoza", dept: "Ventas", score: "4.8/5", date: "12 Ene, 2026", status: "Completado" },
        { id: 2, employee: "Ana Rivas", dept: "Logística", score: "4.2/5", date: "10 Ene, 2026", status: "En Revisión" },
        { id: 3, employee: "Mario Sánchez", dept: "TI", score: "4.9/5", date: "Hoy", status: "Pendiente" },
        { id: 4, employee: "Lucía Torres", dept: "Administración", score: "4.5/5", date: "05 Ene, 2026", status: "Completado" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight italic">Evaluación de <span className="text-purple-600">Desempeño</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <ClipboardList size={18} className="text-purple-500" />
                        Monitoreo de objetivos corporativos y crecimiento profesional
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-purple-100 flex items-center gap-2 border-none">
                        <Star size={20} />
                        Nueva Evaluación
                    </Button>
                </div>
            </div>

            {/* Performance Global Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-10 rounded-[3.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col justify-center text-center">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Puntaje Promedio</p>
                    <h3 className="text-5xl font-black text-gray-900 tracking-tighter">4.62</h3>
                    <div className="flex justify-center gap-1 mt-4 text-amber-400">
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" />
                        <Star size={20} fill="currentColor" className="opacity-30" />
                    </div>
                </div>

                <div className="md:col-span-2 bg-slate-900 p-10 rounded-[4rem] text-white flex items-center justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <p className="text-[10px] font-black text-purple-400 uppercase tracking-widest mb-2">Ciclo Q1 2026</p>
                        <h4 className="text-2xl font-black mb-4 tracking-tight">Evaluaciones completadas: 78%</h4>
                        <div className="w-64 h-3 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-purple-500 rounded-full" style={{ width: '78%' }} />
                        </div>
                    </div>
                    <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 text-center relative z-10 backdrop-blur-sm">
                        <p className="text-sm font-black text-emerald-400">+12%</p>
                        <p className="text-[10px] font-bold text-gray-400 uppercase">Crecimiento Anual</p>
                    </div>
                    <TrendingUp size={200} className="absolute -right-10 -bottom-10 text-white/5 rotate-12" />
                </div>
            </div>

            {/* Evaluation List */}
            <div className="bg-white rounded-[3.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
                <div className="p-10 border-b border-gray-50 flex justify-between items-center">
                    <h4 className="text-xl font-black text-gray-800 tracking-tight">Revisiones Recientes</h4>
                    <Button variant="ghost" className="text-gray-400 font-black text-xs uppercase tracking-widest hover:bg-gray-50 rounded-xl">
                        Filtrar por Departamento <Filter size={14} className="ml-2" />
                    </Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Colaborador</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Departamento</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Puntaje</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Estado</th>
                                <th className="text-right px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Acción</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {evaluations.map((evalItem) => (
                                <tr key={evalItem.id} className="hover:bg-purple-50/30 transition-colors group">
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold uppercase">
                                                {evalItem.employee.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-base font-black text-gray-900">{evalItem.employee}</p>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase flex items-center gap-1">
                                                    <Calendar size={10} /> {evalItem.date}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 font-bold text-gray-600">{evalItem.dept}</td>
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-2">
                                            <span className="text-lg font-black text-gray-900">{evalItem.score}</span>
                                            <Star size={14} className="text-amber-400 fill-current" />
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border
                                            ${evalItem.status === 'Completado' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                                evalItem.status === 'En Revisión' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                                                    'bg-amber-50 text-amber-600 border-amber-100'}`}>
                                            {evalItem.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <button className="p-3 bg-gray-50 text-gray-400 hover:bg-purple-600 hover:text-white rounded-2xl transition-all shadow-sm">
                                            <ChevronRight size={18} />
                                        </button>
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
