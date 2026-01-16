import { TrendingUp, ShoppingBag, ChevronRight, Target, Clock, Filter } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function MySalesPage() {
    const recentSales = [
        { id: "ORD-9921", date: "Hoy, 10:45 AM", client: "Corporación Textil", total: "$2,450.00", status: "Confirmado", commission: "$122.50" },
        { id: "ORD-9915", date: "Ayer, 04:30 PM", client: "Ferretería Central", total: "$1,120.00", status: "Enviado", commission: "$56.00" },
        { id: "ORD-9908", date: "14 Ene", client: "AgroIndustrias SAC", total: "$5,600.00", status: "Confirmado", commission: "$280.00" },
        { id: "ORD-9902", date: "13 Ene", client: "Mecánica Lima", total: "$890.00", status: "Entregado", commission: "$44.50" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight italic">Mis <span className="text-emerald-600">Ventas</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <TrendingUp size={18} className="text-emerald-500" />
                        Seguimiento personal de objetivos, órdenes y comisiones
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-emerald-100 flex items-center gap-2 border-none">
                        <ShoppingBag size={20} />
                        Nueva Orden
                    </Button>
                </div>
            </div>

            {/* Performance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white overflow-hidden relative group">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Target size={120} />
                    </div>
                    <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-2">Comisiones del Mes</p>
                    <h3 className="text-5xl font-black tracking-tighter mb-4">$3,420.50</h3>
                    <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase">
                        <TrendingUp size={14} /> +15.3% vs mes anterior
                    </div>
                    <button className="mt-8 text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white transition-colors">Solicitar Corte de Caja</button>
                </div>

                <div className="col-span-1 md:col-span-2 bg-white p-10 rounded-[3.5rem] shadow-xl shadow-gray-100 border border-gray-50">
                    <div className="flex items-center justify-between mb-8">
                        <h4 className="text-xl font-black text-gray-800 tracking-tight">Progreso Mensual</h4>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-xl text-[10px] font-black text-gray-400 tracking-widest uppercase">
                            Objetivo: $40,000
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex justify-between items-end">
                            <p className="text-3xl font-black text-gray-900">$22,400 <span className="text-sm text-gray-400 font-bold">Vendido</span></p>
                            <p className="text-xl font-black text-emerald-600">56%</p>
                        </div>
                        <div className="w-full h-4 bg-gray-50 rounded-full overflow-hidden border border-gray-100 p-1">
                            <div className="h-full bg-emerald-500 rounded-full shadow-lg shadow-emerald-100 animate-in slide-in-from-left duration-1000" style={{ width: '56%' }} />
                        </div>
                        <p className="text-[11px] font-bold text-gray-400 italic">Te faltan $17,600 para alcanzar el bono de desempeño.</p>
                    </div>
                </div>
            </div>

            {/* Recent Orders List */}
            <div className="bg-white rounded-[3.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
                <div className="p-10 border-b border-gray-50 flex justify-between items-center">
                    <h4 className="text-xl font-black text-gray-800 tracking-tight">Historial Reciente</h4>
                    <Button variant="ghost" className="text-emerald-600 font-black text-xs uppercase tracking-widest hover:bg-emerald-50 rounded-xl">
                        Descargar Reporte <Filter size={14} className="ml-2" />
                    </Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Orden</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Cliente</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Total</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Estado</th>
                                <th className="text-right px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Acción</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {recentSales.map((sale) => (
                                <tr key={sale.id} className="hover:bg-emerald-50/50 transition-colors group">
                                    <td className="px-10 py-8">
                                        <p className="text-base font-black text-gray-900">{sale.id}</p>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase mt-1 flex items-center gap-1">
                                            <Clock size={10} /> {sale.date}
                                        </p>
                                    </td>
                                    <td className="px-10 py-8 font-bold text-gray-700">{sale.client}</td>
                                    <td className="px-10 py-8 font-black text-gray-900">{sale.total}</td>
                                    <td className="px-10 py-8">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border
                                            ${sale.status === 'Entregado' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                                sale.status === 'Confirmado' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                    'bg-amber-50 text-amber-600 border-amber-100'}`}>
                                            {sale.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <button className="p-3 bg-gray-50 text-gray-400 hover:bg-emerald-600 hover:text-white rounded-2xl transition-all shadow-sm">
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
