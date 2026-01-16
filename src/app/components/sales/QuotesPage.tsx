import { FileText, Plus, Search, Filter, ChevronRight, Clock, DollarSign, ArrowUpRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function QuotesPage({ readOnly = false }: { readOnly?: boolean }) {
    const quotes = [
        { id: "QT-2024-001", client: "Inversiones Galácticas", amount: "$124,500", date: "Hace 2 horas", status: "Borrador", probability: "60%" },
        { id: "QT-2024-002", client: "Constructora Horizonte", amount: "$45,200", date: "Hace 5 horas", status: "Enviado", probability: "85%" },
        { id: "QT-2024-003", client: "Logística Global S.A.", amount: "$89,000", date: "Ayer", status: "Negociando", probability: "40%" },
        { id: "QT-2024-004", client: "Supermercados El Éxito", amount: "$12,400", date: "Hace 2 días", status: "Aceptado", probability: "100%" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight">Presupuestos y <span className="text-indigo-600">Cotizaciones</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <FileText size={18} className="text-indigo-500" />
                        Pipeline de ventas y gestión de propuestas comerciales
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-indigo-100 flex items-center gap-2">
                        <Plus size={20} />
                        Nueva Cotización
                    </Button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: "Pipeline Total", value: "$1.4M", icon: DollarSign, color: "indigo" },
                    { label: "En Negociación", value: "12", icon: Clock, color: "amber" },
                    { label: "Tasa de Cierre", value: "64%", icon: ArrowUpRight, color: "emerald" },
                    { label: "Expiran Pronto", value: "3", icon: Filter, color: "rose" },
                ].map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100">
                        <div className={`p-3 rounded-2xl w-fit mb-3 bg-${stat.color}-50 text-${stat.color}-600`}>
                            <stat.icon size={20} />
                        </div>
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{stat.label}</p>
                        <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Search and List */}
            <div className="bg-white rounded-[3rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <Input
                            placeholder="Buscar por ID o cliente..."
                            className="pl-12 py-7 bg-gray-50/50 border-none rounded-2xl font-bold focus-visible:ring-indigo-500"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">ID / Cliente</th>
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Monto Estimado</th>
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Probabilidad</th>
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Estado</th>
                                <th className="px-8 py-5 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Gestión</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {quotes.map((quote) => (
                                <tr key={quote.id} className="hover:bg-indigo-50/30 transition-colors group">
                                    <td className="px-8 py-8">
                                        <div>
                                            <p className="text-[10px] font-black text-indigo-500 mb-1">{quote.id}</p>
                                            <p className="font-black text-gray-900">{quote.client}</p>
                                            <p className="text-xs font-bold text-gray-400 mt-1 flex items-center gap-1">
                                                <Clock size={12} /> {quote.date}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="px-8 py-8">
                                        <span className="text-lg font-black text-gray-900">{quote.amount}</span>
                                    </td>
                                    <td className="px-8 py-8">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 bg-gray-100 h-2 rounded-full max-w-[80px] overflow-hidden">
                                                <div
                                                    className="h-full bg-indigo-500 rounded-full"
                                                    style={{ width: quote.probability }}
                                                />
                                            </div>
                                            <span className="text-xs font-black text-gray-600">{quote.probability}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-8">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border
                                            ${quote.status === 'Aceptado' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                                quote.status === 'Negociando' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                    quote.status === 'Enviado' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                                                        'bg-gray-50 text-gray-400 border-gray-100'}`}>
                                            {quote.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-8 text-right">
                                        <Button className="bg-white border text-gray-900 border-gray-200 hover:bg-gray-50 px-4 py-2 rounded-xl font-bold text-sm shadow-sm transition-all flex items-center gap-2 float-right">
                                            Detalles
                                            <ChevronRight size={16} />
                                        </Button>
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
