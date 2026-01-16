import { DollarSign, ArrowUpRight, FileText, Wallet } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function PayrollPage() {
    const historical = [
        { period: "Enero 2026", date: "30 Ene", total: "$84,200", status: "Programado", emp: 156 },
        { period: "Diciembre 2025", date: "24 Dic", total: "$92,500", status: "Pagado", emp: 154 },
        { period: "Noviembre 2025", date: "30 Nov", total: "$81,400", status: "Pagado", emp: 152 },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight italic">Gestión de <span className="text-emerald-600">Nómina</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <DollarSign size={18} className="text-emerald-500" />
                        Procesamiento de haberes, impuestos y beneficios corporativos
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-emerald-100 flex items-center gap-2 border-none">
                        <ArrowUpRight size={20} />
                        Procesar Nómina
                    </Button>
                </div>
            </div>

            {/* Current Period Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-slate-900 p-12 rounded-[4rem] text-white flex flex-col justify-between relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700" />

                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 bg-emerald-500/20 rounded-2xl text-emerald-400">
                                <Wallet size={32} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Período Actual</p>
                                <h2 className="text-3xl font-black tracking-tight">Enero 2026 - Nexus HQ</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-12">
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Total a Dispersar</p>
                                <p className="text-5xl font-black tracking-tighter">$84,200.00</p>
                            </div>
                            <div>
                                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Fecha de Pago</p>
                                <p className="text-3xl font-black tracking-tight">30 Ene, 2026</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-8">
                        <div className="flex -space-x-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-black">M</div>
                            <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-black">A</div>
                            <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-black">+150</div>
                        </div>
                        <p className="text-xs font-bold text-gray-400 italic">Nómina validada por el departamento de Finanzas.</p>
                    </div>
                </div>

                <div className="bg-white p-10 rounded-[4rem] shadow-xl shadow-gray-100 border border-gray-50">
                    <h4 className="text-xl font-black text-gray-800 tracking-tight mb-8">Resumen Fiscal</h4>
                    <div className="space-y-6">
                        <PayoutRow label="Sueldos Netos" value="$62,400" />
                        <PayoutRow label="Seguridad Social" value="$12,800" />
                        <PayoutRow label="Impuestos (IRS)" value="$7,500" />
                        <div className="pt-6 border-t border-gray-50">
                            <PayoutRow label="Bonos Enero" value="$1,500" color="text-emerald-500" />
                        </div>
                    </div>
                    <Button variant="ghost" className="w-full mt-8 py-6 rounded-2xl bg-gray-50 text-emerald-600 font-black text-xs uppercase tracking-widest hover:bg-emerald-50">
                        Descargar Formulario 941
                    </Button>
                </div>
            </div>

            {/* History Table */}
            <div className="bg-white rounded-[3.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
                <div className="p-10 border-b border-gray-50 flex justify-between items-center">
                    <h4 className="text-xl font-black text-gray-800 tracking-tight">Historial de Pagos</h4>
                    <Button variant="ghost" className="text-gray-400 font-black text-xs uppercase tracking-widest hover:bg-gray-50 rounded-xl">
                        Ver Todo
                    </Button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Período</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Fecha Pago</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Monto Total</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Estado</th>
                                <th className="text-right px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Acción</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {historical.map((item, idx) => (
                                <tr key={idx} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-10 py-8">
                                        <p className="text-base font-black text-gray-900">{item.period}</p>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase">{item.emp} Colaboradores</p>
                                    </td>
                                    <td className="px-10 py-8 font-bold text-gray-600">{item.date}</td>
                                    <td className="px-10 py-8 font-black text-gray-900">{item.total}</td>
                                    <td className="px-10 py-8">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border
                                            ${item.status === 'Pagado' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <button className="p-3 bg-gray-50 text-gray-400 hover:bg-emerald-600 hover:text-white rounded-2xl transition-all shadow-sm">
                                            <FileText size={18} />
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

function PayoutRow({ label, value, color = "text-gray-900" }: any) {
    return (
        <div className="flex justify-between items-center">
            <p className="text-sm font-bold text-gray-400">{label}</p>
            <p className={`text-lg font-black ${color}`}>{value}</p>
        </div>
    );
}
