import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, Users, Zap, FileText, Megaphone, ArrowUpRight, DollarSign, Calendar, ChevronRight } from 'lucide-react';

const SALES_BY_BRANCH_DATA = [
    { name: 'Valencia', sales: 450000, target: 400000, color: '#3b82f6' },
    { name: 'Puerto La Cruz', sales: 320000, target: 350000, color: '#f59e0b' },
    { name: 'Maracaibo', sales: 510000, target: 480000, color: '#10b981' },
];

export function StrategicDashboard() {
    const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
            {/* Greeting Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                    <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">Panel de Control Estratégico</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Bienvenido, Director</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">
                        <Calendar size={18} className="text-gray-400" />
                        {today.charAt(0).toUpperCase() + today.slice(1)}
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-3 bg-white border border-gray-200 rounded-2xl font-bold text-sm text-gray-700 hover:shadow-lg transition-all flex items-center gap-2">
                        <FileText size={18} /> Exportar Reporte
                    </button>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-bold text-sm hover:bg-blue-700 shadow-xl shadow-blue-200 transition-all">
                        Nueva Estrategia
                    </button>
                </div>
            </div>

            {/* Premium Executive Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ExecutiveWidget
                    title="Rentabilidad Global"
                    value="24.8%"
                    trend="+2.4%"
                    icon={<DollarSign size={24} />}
                    color="blue"
                    bgGradient="from-blue-600 to-indigo-700"
                />
                <ExecutiveWidget
                    title="Crecimiento Anual"
                    value="112%"
                    trend="vs Meta"
                    icon={<TrendingUp size={24} />}
                    color="emerald"
                    bgGradient="from-emerald-600 to-teal-700"
                />
                <ExecutiveWidget
                    title="Satisfacción Cliente"
                    value="94/100"
                    trend="+5 pts"
                    icon={<Users size={24} />}
                    color="purple"
                    bgGradient="from-purple-600 to-violet-700"
                />
                <ExecutiveWidget
                    title="Eficiencia Operativa"
                    value="88.5%"
                    trend="+1.2%"
                    icon={<Zap size={24} />}
                    color="amber"
                    bgGradient="from-amber-500 to-orange-600"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Branch Performance Section */}
                <div className="lg:col-span-3 bg-white p-10 rounded-[3rem] shadow-xl shadow-gray-100 border border-gray-50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full -mr-32 -mt-32 blur-3xl transition-all group-hover:bg-blue-100/50" />

                    <div className="relative">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <h3 className="text-xl font-black text-gray-800 tracking-tight">Rendimiento Geográfico</h3>
                                <p className="text-sm text-gray-400 font-bold mt-1 uppercase tracking-wider">Ventas Reales vs Objetivos</p>
                            </div>
                            <div className="flex gap-4 p-1 bg-gray-50 rounded-xl">
                                <button className="px-4 py-1.5 bg-white shadow-sm rounded-lg text-xs font-black text-blue-600 uppercase tracking-wider">Mensual</button>
                                <button className="px-4 py-1.5 text-xs font-black text-gray-400 uppercase tracking-wider">Anual</button>
                            </div>
                        </div>

                        <div className="h-[400px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={SALES_BY_BRANCH_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} barGap={12}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b', fontSize: 13, fontWeight: 700 }}
                                        dy={10}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                                        tickFormatter={(val) => `$${val / 1000}k`}
                                    />
                                    <Tooltip
                                        cursor={{ fill: '#f8fafc' }}
                                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', padding: '20px' }}
                                        itemStyle={{ fontWeight: 800, fontSize: '14px' }}
                                    />
                                    <Bar dataKey="sales" radius={[12, 12, 12, 12]} barSize={45}>
                                        {SALES_BY_BRANCH_DATA.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.9} />
                                        ))}
                                    </Bar>
                                    <Bar dataKey="target" fill="#e2e8f0" radius={[12, 12, 12, 12]} barSize={45} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Insights & Actions */}
                <div className="lg:col-span-1 space-y-8">
                    <div className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl shadow-blue-900/10 text-white relative overflow-hidden h-full flex flex-col">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -mr-16 -mt-16 blur-2xl" />

                        <h3 className="text-xl font-black mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-blue-500 rounded-full" /> Insights del Negocio
                        </h3>

                        <div className="space-y-6">
                            <InsightDetail
                                title="Líder Regional"
                                text="Maracaibo supera la meta por 6.2%."
                                trend="positivo"
                            />
                            <InsightDetail
                                title="Alerta Crítica"
                                text="Puerto La Cruz presenta desfase del 8%."
                                trend="negativo"
                            />
                            <InsightDetail
                                title="Optimización"
                                text="Eficiencia logística +12% vs Q3."
                                trend="positivo"
                            />
                        </div>
                    </div>

                    <div className="bg-white p-10 rounded-[3rem] shadow-xl shadow-gray-100 border border-gray-50">
                        <h3 className="text-lg font-black text-gray-800 mb-8 uppercase tracking-wider text-center">Acciones Prioritarias</h3>
                        <div className="space-y-4">
                            <StrategicActionItem
                                icon={<Megaphone className="text-blue-600" size={20} />}
                                title="Comunicado Global"
                                sub="Objetivos Trimestrales"
                                color="blue"
                            />
                            <StrategicActionItem
                                icon={<FileText className="text-purple-600" size={20} />}
                                title="Reporte Completo"
                                sub="Sincronización con Junta"
                                color="purple"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ExecutiveWidget({ title, value, trend, icon, bgGradient }: any) {
    return (
        <div className={`relative p-10 rounded-[2.5rem] bg-gradient-to-br ${bgGradient} text-white shadow-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 cursor-pointer`}>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                        {icon}
                    </div>
                    <div className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest leading-none">
                        {trend} <ArrowUpRight size={12} />
                    </div>
                </div>
                <p className="text-white/70 text-xs font-black uppercase tracking-widest">{title}</p>
                <h3 className="text-3xl font-black mt-2 tracking-tighter">{value}</h3>
            </div>
        </div>
    );
}

function InsightDetail({ title, text, trend }: { title: string, text: string, trend: 'positivo' | 'negativo' }) {
    return (
        <div className="group cursor-default">
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">{title}</p>
            <p className="text-sm font-medium text-slate-100 leading-relaxed mb-1">{text}</p>
            <div className="flex items-center gap-2">
                <div className={`h-1 flex-1 rounded-full bg-slate-800 overflow-hidden`}>
                    <div className={`h-full rounded-full ${trend === 'positivo' ? 'bg-emerald-500' : 'bg-rose-500'} w-2/3 animate-pulse`} />
                </div>
                <span className={`text-[10px] font-black ${trend === 'positivo' ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {trend === 'positivo' ? '↑ ESTABLE' : '↓ REVISIÓN'}
                </span>
            </div>
        </div>
    );
}

function StrategicActionItem({ icon, title, sub, color }: any) {
    const colors: any = {
        blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
        purple: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
    };

    return (
        <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 transition-all group">
            <div className="flex items-center gap-4 text-left">
                <div className={`p-3 rounded-xl transition-all duration-300 ${colors[color]}`}>
                    {icon}
                </div>
                <div>
                    <h4 className="text-sm font-black text-gray-800">{title}</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{sub}</p>
                </div>
            </div>
            <ChevronRight className="text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" size={20} />
        </button>
    );
}

