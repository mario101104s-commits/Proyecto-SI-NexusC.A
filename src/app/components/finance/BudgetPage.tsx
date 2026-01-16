import { TrendingUp, ArrowDownCircle, ArrowUpCircle, Filter, Search, ChevronRight, PieChart, BarChart } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function BudgetPage() {
    const budgetCategories = [
        { name: "Operaciones de Almacén", total: "$120,000", used: "$85,000", percentage: "71%", status: "Ok" },
        { name: "Fuerza de Ventas", total: "$45,000", used: "$42,500", percentage: "94%", status: "Warning" },
        { name: "Marketing y Logística", total: "$30,000", used: "$12,000", percentage: "40%", status: "Ok" },
        { name: "Administración General", total: "$25,000", used: "$26,400", percentage: "105%", status: "Over" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight">Presupuesto <span className="text-indigo-600">Corporativo</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <TrendingUp size={18} className="text-indigo-500" />
                        Control de ejecución presupuestaria y proyecciones anuales
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-white border-2 border-gray-100 hover:border-indigo-100 text-gray-900 px-6 py-6 rounded-2xl font-black transition-all flex items-center gap-2 shadow-sm">
                        <BarChart size={18} />
                        Análisis
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-indigo-100">
                        Ajustar Presupuesto
                    </Button>
                </div>
            </div>

            {/* Execution Overview */}
            <div className="bg-white p-10 rounded-[3.5rem] shadow-xl shadow-gray-100 border border-gray-100">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="space-y-4 flex-1">
                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Ejecución Total 2024</p>
                        <div className="flex items-baseline gap-4">
                            <h2 className="text-6xl font-black text-gray-900">$224,500</h2>
                            <p className="text-gray-400 font-bold">de $450,000 proyectados</p>
                        </div>
                        <div className="w-full bg-gray-100 h-6 rounded-3xl overflow-hidden relative">
                            <div className="bg-indigo-600 h-full rounded-3xl transition-all" style={{ width: '49.8%' }} />
                            <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white">49.8% COMPLETADO</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100">
                            <p className="text-[10px] font-black text-emerald-600 uppercase mb-1">Ahorro</p>
                            <p className="text-2xl font-black text-emerald-700">$12,400</p>
                        </div>
                        <div className="p-6 bg-rose-50 rounded-[2rem] border border-rose-100">
                            <p className="text-[10px] font-black text-rose-600 uppercase mb-1">Desviación</p>
                            <p className="text-2xl font-black text-rose-700">-$2,100</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Categorized Breakdown */}
            <div className="bg-white rounded-[3rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                    <h3 className="text-xl font-black text-gray-900">Desglose por Departamento</h3>
                    <div className="flex gap-2">
                        <Button className="p-3 bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-xl transition-all">
                            <PieChart size={18} />
                        </Button>
                        <Button className="p-3 bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-xl transition-all">
                            <Filter size={18} />
                        </Button>
                    </div>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {budgetCategories.map((cat, i) => (
                        <div key={i} className="p-8 bg-gray-50/50 rounded-[2.5rem] border border-gray-100 hover:border-indigo-100 transition-all group">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h4 className="text-lg font-black text-gray-900 group-hover:text-indigo-600 transition-colors">{cat.name}</h4>
                                    <p className="text-xs font-bold text-gray-400 mt-1">Presupuesto Asignado: {cat.total}</p>
                                </div>
                                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border
                                    ${cat.status === 'Ok' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                        cat.status === 'Warning' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                            'bg-rose-50 text-rose-600 border-rose-100'}`}>
                                    {cat.status}
                                </span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-xs font-black">
                                    <span className="text-gray-500">Ejecutado: {cat.used}</span>
                                    <span className={cat.status === 'Over' ? 'text-rose-600' : 'text-indigo-600'}>{cat.percentage}</span>
                                </div>
                                <div className="w-full bg-white h-3 rounded-full overflow-hidden border border-gray-100">
                                    <div
                                        className={`h-full rounded-full transition-all ${cat.status === 'Over' ? 'bg-rose-500' :
                                                cat.status === 'Warning' ? 'bg-amber-500' : 'bg-indigo-600'
                                            }`}
                                        style={{ width: parseInt(cat.percentage) > 100 ? '100%' : cat.percentage }}
                                    />
                                </div>
                            </div>

                            <div className="flex justify-end mt-6">
                                <button className="text-sm font-black text-indigo-600 flex items-center gap-1 hover:gap-2 transition-all">
                                    Ver Movimientos <ChevronRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
