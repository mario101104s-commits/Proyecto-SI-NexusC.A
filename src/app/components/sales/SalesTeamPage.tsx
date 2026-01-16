import { Users, Award, TrendingUp, Mail, Phone, ChevronRight, Search, Filter } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function SalesTeamPage({ readOnly = false }: { readOnly?: boolean }) {
    const agents = [
        { id: 1, name: "Carlos Mendoza", role: "Vendedor Senior", performance: "105%", sales: "$1.2M", region: "Norte", status: "Online" },
        { id: 2, name: "Ana Isabel Luna", role: "Vendedor Senior", performance: "98%", sales: "$1.1M", region: "Centro", status: "In Meeting" },
        { id: 3, name: "Ricardo Silva", role: "Ejecutivo de Cuentas", performance: "92%", sales: "$850k", region: "Sur", status: "Online" },
        { id: 4, name: "Laura Torres", role: "Vendedor Junior", performance: "88%", sales: "$620k", region: "Norte", status: "Offline" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight">Equipo de <span className="text-indigo-600">Ventas</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <Users size={18} className="text-indigo-500" />
                        Gestión de rendimiento y fuerza de ventas activa
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-white border-2 border-gray-100 hover:border-indigo-100 text-gray-900 px-6 py-6 rounded-2xl font-black transition-all flex items-center gap-2 shadow-sm">
                        <Filter size={18} />
                        Filtros
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-indigo-100">
                        Añadir Vendedor
                    </Button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Cuota Colectiva</p>
                    <div className="flex items-end gap-3">
                        <h3 className="text-4xl font-black text-gray-900">96.8%</h3>
                        <span className="text-emerald-500 font-bold text-sm mb-1">+2.4% vs mes ant.</span>
                    </div>
                    <div className="w-full bg-gray-100 h-3 rounded-full mt-4 overflow-hidden">
                        <div className="bg-indigo-600 h-full rounded-full" style={{ width: '96.8%' }} />
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Top Performer</p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                            <Award size={24} />
                        </div>
                        <div>
                            <p className="text-lg font-black text-gray-900">Carlos Mendoza</p>
                            <p className="text-xs font-bold text-gray-400">105% de meta lograda</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-gray-100">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">Ventas Proyectadas</p>
                    <div className="flex items-end gap-3">
                        <h3 className="text-4xl font-black text-gray-900">$4.5M</h3>
                        <TrendingUp size={24} className="text-indigo-500 mb-1" />
                    </div>
                </div>
            </div>

            {/* Search and List */}
            <div className="bg-white rounded-[3rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <Input
                            placeholder="Buscar por nombre o región..."
                            className="pl-12 py-7 bg-gray-50/50 border-none rounded-2xl font-bold focus-visible:ring-indigo-500"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Colaborador</th>
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Rendimiento</th>
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Ventas Totales</th>
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Status</th>
                                <th className="px-8 py-5 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {agents.map((agent) => (
                                <tr key={agent.id} className="hover:bg-indigo-50/30 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-500 font-black text-lg">
                                                {agent.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-black text-gray-900 group-hover:text-indigo-600 transition-colors">{agent.name}</p>
                                                <p className="text-xs font-bold text-gray-400">{agent.role} · {agent.region}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex flex-col gap-1.5 min-w-[120px]">
                                            <div className="flex justify-between text-[10px] font-black">
                                                <span>Logro</span>
                                                <span>{agent.performance}</span>
                                            </div>
                                            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${parseInt(agent.performance) >= 100 ? 'bg-emerald-500' : 'bg-indigo-600'}`}
                                                    style={{ width: agent.performance }}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-black text-gray-700">{agent.sales}</td>
                                    <td className="px-8 py-6">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border
                                            ${agent.status === 'Online' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                                agent.status === 'In Meeting' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                    'bg-gray-50 text-gray-400 border-gray-100'}`}>
                                            {agent.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                                                <Mail size={18} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                                                <Phone size={18} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                                                <ChevronRight size={18} />
                                            </button>
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
