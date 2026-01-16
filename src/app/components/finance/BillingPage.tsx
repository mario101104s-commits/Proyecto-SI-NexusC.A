import { FileText, Download, Plus, Search, Filter, ChevronRight, Clock, DollarSign, CreditCard } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function BillingPage() {
    const bills = [
        { id: "INV-2024-001", client: "Inversiones Galácticas", amount: "$12,500.00", date: "15 Ene, 2024", status: "Pagado", type: "Venta Directa" },
        { id: "INV-2024-002", client: "Constructora Horizonte", amount: "$4,200.50", date: "14 Ene, 2024", status: "Pendiente", type: "Servicios" },
        { id: "INV-2024-003", client: "Logística Global S.A.", amount: "$8,900.00", date: "12 Ene, 2024", status: "Atrasado", type: "Venta Directa" },
        { id: "INV-2024-004", client: "Supermercados El Éxito", amount: "$1,400.00", date: "10 Ene, 2024", status: "Pagado", type: "Mantenimiento" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight">Centro de <span className="text-indigo-600">Facturación</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <CreditCard size={18} className="text-indigo-500" />
                        Gestión centralizada de cobros y facturas fiscales
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-white border-2 border-gray-100 hover:border-indigo-100 text-gray-900 px-6 py-6 rounded-2xl font-black transition-all flex items-center gap-2 shadow-sm">
                        <Download size={18} />
                        Exportar
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-indigo-100 flex items-center gap-2">
                        <Plus size={20} />
                        Nueva Factura
                    </Button>
                </div>
            </div>

            {/* Billing Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: "Facturado Mes", value: "$124,500", icon: DollarSign, color: "indigo" },
                    { label: "Por Cobrar", value: "$45,200", icon: Clock, color: "amber" },
                    { label: "Cobrado Hoy", value: "$12,400", icon: CreditCard, color: "emerald" },
                    { label: "Facturas Vencidas", value: "3", icon: Filter, color: "rose" },
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

            {/* List */}
            <div className="bg-white rounded-[3rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <Input
                            placeholder="Buscar por ID, cliente o tipo..."
                            className="pl-12 py-7 bg-gray-50/50 border-none rounded-2xl font-bold focus-visible:ring-indigo-500"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gray-50/50">
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Factura / Cliente</th>
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Tipo</th>
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Fecha</th>
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Monto</th>
                                <th className="text-left px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Estado</th>
                                <th className="px-8 py-5 text-right text-[10px] font-black text-gray-400 uppercase tracking-widest">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {bills.map((bill) => (
                                <tr key={bill.id} className="hover:bg-indigo-50/30 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div>
                                            <p className="text-[10px] font-black text-indigo-500 mb-1">{bill.id}</p>
                                            <p className="font-black text-gray-900">{bill.client}</p>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{bill.type}</span>
                                    </td>
                                    <td className="px-8 py-6 text-sm font-bold text-gray-600">{bill.date}</td>
                                    <td className="px-8 py-6 text-sm font-black text-gray-900">{bill.amount}</td>
                                    <td className="px-8 py-6">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border
                                            ${bill.status === 'Pagado' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                                bill.status === 'Pendiente' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                    'bg-rose-50 text-rose-600 border-rose-100'}`}>
                                            {bill.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                                                <Download size={18} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                                                <FileText size={18} />
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
