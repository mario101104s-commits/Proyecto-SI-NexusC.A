import { History, Search, Filter, Download, ArrowUpToLine, ArrowDownToLine, User, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const MOVEMENTS_DATA = [
    { id: 'MOV-7721', type: 'ENTRADA', item: 'Amortiguadores 4x4 Off-Road', qty: 50, user: 'Argenis P.', time: '10:24 AM', date: 'Hoy' },
    { id: 'MOV-7722', type: 'SALIDA', item: 'Filtros Gasoil Mack MP8', qty: 12, user: 'Luis G.', time: '09:55 AM', date: 'Hoy' },
    { id: 'MOV-7719', type: 'ENTRADA', item: 'Aceite Sintético 20W50 Full', qty: 120, user: 'Supervisor', time: '08:30 AM', date: 'Hoy' },
    { id: 'MOV-7715', type: 'SALIDA', item: 'Bujías Iridium Premium', qty: 48, user: 'Elena M.', time: '07:15 AM', date: 'Hoy' },
    { id: 'MOV-7710', type: 'SALIDA', item: 'Discos de Freno Toyota Hilux', qty: 4, user: 'Luis G.', time: '05:40 PM', date: 'Ayer' },
];

export function MovementHistoryPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-3">Trazabilidad de Stock</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Historial de Movimientos</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">Registro detallado de entradas, salidas y ajustes de inventario</p>
                </div>
                <div className="flex gap-4">
                    <div className="relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-blue-500 transition-colors" size={18} />
                        <input
                            type="text"
                            placeholder="Buscar por item, usuario o ID..."
                            className="py-7 pl-16 pr-10 bg-white border border-gray-100 rounded-[1.5rem] font-bold text-xs shadow-xl shadow-gray-100/50 focus:ring-2 focus:ring-blue-500/20 outline-none w-80 transition-all"
                        />
                    </div>
                    <Button className="py-7 px-10 bg-slate-900 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-gray-200 flex items-center gap-3">
                        <Download size={18} /> Exportar Log
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-[3.5rem] shadow-2xl shadow-gray-100/50 border border-gray-50 overflow-hidden">
                <div className="p-10 border-b border-gray-50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-[1.25rem] flex items-center justify-center">
                            <History size={24} />
                        </div>
                        <h3 className="text-xl font-black text-gray-800 tracking-tight">Movimientos Recientes</h3>
                    </div>
                    <Button variant="ghost" className="rounded-2xl gap-2 font-black text-[10px] uppercase tracking-widest text-gray-400 hover:text-blue-600">
                        <Filter size={16} /> Filtros Avanzados
                    </Button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="px-10 py-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Estado / ID</th>
                                <th className="px-10 py-8 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Cantidad</th>
                                <th className="px-10 py-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Responsable</th>
                                <th className="px-10 py-8 text-[10px] font-black text-gray-400 uppercase tracking-widest">Fecha y Hora</th>
                                <th className="px-10 py-8 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Detalles</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {MOVEMENTS_DATA.map((mov) => (
                                <tr key={mov.id} className="hover:bg-slate-50/50 transition-all group cursor-pointer">
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-6">
                                            <div className={`p-4 rounded-2xl transition-all duration-500 ${mov.type === 'ENTRADA' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-500 group-hover:text-white'
                                                }`}>
                                                {mov.type === 'ENTRADA' ? <ArrowDownToLine size={24} /> : <ArrowUpToLine size={24} />}
                                            </div>
                                            <div>
                                                <p className="text-[14px] font-black text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{mov.item}</p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{mov.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-center">
                                        <span className={`px-5 py-2 rounded-2xl text-[12px] font-black ${mov.type === 'ENTRADA' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'
                                            }`}>
                                            {mov.type === 'ENTRADA' ? '+' : '-'}{mov.qty}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                                <User size={14} />
                                            </div>
                                            <span className="text-xs font-black text-slate-700">{mov.user}</span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex flex-col">
                                            <span className="text-xs font-black text-slate-800">{mov.time}</span>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{mov.date}</span>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <button className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
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
