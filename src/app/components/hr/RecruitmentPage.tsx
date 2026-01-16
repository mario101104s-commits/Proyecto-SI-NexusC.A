import { Search, Filter, Plus, ChevronRight, User, Briefcase, Clock, MoreHorizontal } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function RecruitmentPage() {
    const jobs = [
        { id: "VAC-2024-01", title: "Vendedor Senior", dept: "Comercial", status: "Entrevistas", candidates: 12, urgent: true },
        { id: "VAC-2024-02", title: "Analista de Créditos", dept: "Finanzas", status: "Sourcing", candidates: 24, urgent: false },
        { id: "VAC-2024-03", title: "Sup. de Operaciones", dept: "Operaciones", status: "Oferta", candidates: 3, urgent: true },
        { id: "VAC-2024-04", title: "Asistente Admin", dept: "Administración", status: "Sourcing", candidates: 45, urgent: false },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight">Pipeline de <span className="text-rose-600">Selección</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <Briefcase size={18} className="text-rose-500" />
                        Gestión estratégica de vacantes y atracción de talento
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-rose-100 flex items-center gap-2">
                        <Plus size={20} />
                        Nueva Vacante
                    </Button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Vacantes Activas</p>
                    <h3 className="text-4xl font-black text-gray-900">12</h3>
                    <div className="flex items-center gap-2 mt-2 text-rose-500 font-bold text-xs uppercase">
                        <Clock size={14} /> 4 Reclutamientos Críticos
                    </div>
                </div>
                <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Total Candidatos</p>
                    <h3 className="text-4xl font-black text-gray-900">124</h3>
                    <p className="text-gray-400 font-bold text-xs mt-2 uppercase tracking-wide">Promedio: 10/vacante</p>
                </div>
                <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Tiempo de Cierre</p>
                    <h3 className="text-4xl font-black text-gray-900">18 <span className="text-lg text-gray-400">días</span></h3>
                    <p className="text-emerald-500 font-bold text-xs mt-2 uppercase tracking-wide">↓ 2 días vs mes ant.</p>
                </div>
            </div>

            {/* Search and Main List */}
            <div className="bg-white rounded-[3rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <Input
                            placeholder="Buscar vacante por título o ID..."
                            className="pl-12 py-7 bg-gray-50/50 border-none rounded-2xl font-bold focus-visible:ring-rose-500"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button className="p-3 bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-xl transition-all">
                            <Filter size={18} />
                        </Button>
                        <Button className="p-3 bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-xl transition-all">
                            <MoreHorizontal size={18} />
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Puesto y Departamento</th>
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Estado</th>
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Candidatos</th>
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Prioridad</th>
                                <th className="px-8 py-5 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Historial</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {jobs.map((job) => (
                                <tr key={job.id} className="hover:bg-rose-50/30 transition-colors group">
                                    <td className="px-8 py-8">
                                        <div>
                                            <p className="text-[10px] font-black text-rose-500 mb-1">{job.id}</p>
                                            <p className="text-lg font-black text-gray-900">{job.title}</p>
                                            <p className="text-xs font-bold text-gray-400 mt-1">{job.dept}</p>
                                        </div>
                                    </td>
                                    <td className="px-8 py-8">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border
                                            ${job.status === 'Oferta' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                                job.status === 'Entrevistas' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                    'bg-blue-50 text-blue-600 border-blue-100'}`}>
                                            {job.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-8">
                                        <div className="flex items-center gap-2">
                                            <User size={16} className="text-gray-400" />
                                            <span className="text-sm font-black text-gray-700">{job.candidates}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-8">
                                        {job.urgent ? (
                                            <span className="flex items-center gap-1.5 text-rose-600 font-black text-[10px] uppercase tracking-widest">
                                                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                                                Urgente
                                            </span>
                                        ) : (
                                            <span className="text-gray-400 font-black text-[10px] uppercase tracking-widest">Estándar</span>
                                        )}
                                    </td>
                                    <td className="px-8 py-8 text-right">
                                        <button className="p-3 bg-gray-50 hover:bg-rose-600 hover:text-white rounded-2xl transition-all group-hover:shadow-lg shadow-rose-100">
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
