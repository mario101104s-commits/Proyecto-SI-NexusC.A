import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, AlertTriangle, Package, ShoppingCart, UserMinus, Calendar, ChevronRight, Activity, Target } from 'lucide-react';

const DEPT_PERFORMANCE_DATA = [
    { name: 'Ventas', score: 92, color: '#3b82f6' },
    { name: 'Operaciones', score: 85, color: '#10b981' },
    { name: 'RRHH', score: 95, color: '#8b5cf6' },
    { name: 'Finanzas', score: 88, color: '#f59e0b' },
];

export function GeneralManagerDashboard() {
    const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Control Center Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-2">Centro de Control Gerencial</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Gerencia General</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">
                        <Calendar size={18} className="text-gray-400" />
                        {today.charAt(0).toUpperCase() + today.slice(1)}
                    </p>
                </div>
                <div className="flex bg-white p-2 rounded-[2rem] shadow-sm border border-gray-100">
                    <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-black text-sm tracking-wider uppercase transition-all shadow-xl shadow-gray-200 hover:-translate-y-1">En Tiempo Real</button>
                    <button className="px-8 py-3 text-gray-400 font-black text-sm tracking-wider uppercase hover:text-gray-900 transition-all">Histórico</button>
                </div>
            </div>

            {/* Managerial KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ManagerWidget
                    title="Eficiencia Global"
                    value="90.2%"
                    trend="+3.1%"
                    icon={<Activity size={24} />}
                    color="blue"
                    bg="bg-blue-600"
                />
                <ManagerWidget
                    title="Meta Trimestral"
                    value="78%"
                    trend="Q1 en curso"
                    icon={<Target size={24} />}
                    color="emerald"
                    bg="bg-emerald-600"
                />
                <ManagerWidget
                    title="Alertas Activas"
                    value="03"
                    trend="Requiere Atención"
                    icon={<AlertTriangle size={24} />}
                    color="rose"
                    bg="bg-rose-600"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Department Health Chart */}
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h3 className="text-xl font-black text-gray-800 tracking-tight">Salud Departamental</h3>
                            <p className="text-sm text-gray-400 font-bold mt-1 uppercase tracking-wider">Índice de Rendimiento Operativo</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-2xl">
                            <TrendingUp className="text-gray-400" size={20} />
                        </div>
                    </div>

                    <div className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={DEPT_PERFORMANCE_DATA} layout="vertical" margin={{ left: 20, right: 30 }}>
                                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                                <XAxis type="number" domain={[0, 100]} hide />
                                <YAxis
                                    dataKey="name"
                                    type="category"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#475569', fontSize: 13, fontWeight: 800 }}
                                    width={110}
                                />
                                <Tooltip
                                    cursor={{ fill: '#f8fafc' }}
                                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '15px' }}
                                />
                                <Bar dataKey="score" radius={[0, 10, 10, 0]} barSize={28}>
                                    {DEPT_PERFORMANCE_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Command Alert Center */}
                <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-gray-200 text-white flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black flex items-center gap-3">
                            <span className="w-2 h-8 bg-rose-500 rounded-full" /> Alert Center
                        </h3>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-rose-400 animate-pulse">Live</span>
                    </div>

                    <div className="space-y-5 flex-1 overflow-y-auto custom-scrollbar pr-2">
                        <ManagerAlertItem
                            icon={<Package className="text-rose-400" size={18} />}
                            title="Desabastecimiento"
                            desc="Stock crítico en Filtros (VAL)"
                            urgency="Crítico"
                        />
                        <ManagerAlertItem
                            icon={<ShoppingCart className="text-amber-400" size={18} />}
                            title="Desvío de Ventas"
                            desc="PLC registra -12% vs semanial"
                            urgency="Aviso"
                        />
                        <ManagerAlertItem
                            icon={<UserMinus className="text-blue-400" size={18} />}
                            title="Rotación de Personal"
                            desc="3 bajas reportadas en Logística"
                            urgency="Normal"
                        />
                    </div>

                    <button className="mt-8 w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                        Atender Todas <ChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}

function ManagerWidget({ title, value, trend, icon, color, bg }: any) {
    return (
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex items-center gap-6 group hover:shadow-2xl transition-all duration-500 cursor-pointer">
            <div className={`p-5 rounded-[1.75rem] ${bg} text-white shadow-lg shadow-${color}-100 group-hover:scale-110 transition-transform duration-500`}>
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{title}</p>
                <div className="flex items-end gap-2">
                    <h3 className="text-3xl font-black text-gray-800 tracking-tight">{value}</h3>
                    <span className={`text-[10px] font-bold mb-1.5 ${trend.includes('+') ? 'text-emerald-500' : 'text-blue-500'}`}>{trend}</span>
                </div>
            </div>
        </div>
    );
}

function ManagerAlertItem({ icon, title, desc, urgency }: any) {
    const borders: any = {
        Crítico: 'border-l-rose-500',
        Aviso: 'border-l-amber-500',
        Normal: 'border-l-blue-500',
    };

    return (
        <div className={`p-4 rounded-2xl bg-white/5 border-l-4 ${borders[urgency]} hover:bg-white/10 transition-all group cursor-pointer`}>
            <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                    {icon}
                    <h4 className="text-sm font-black text-gray-100">{title}</h4>
                </div>
                <span className={`text-[8px] font-black uppercase tracking-widest ${urgency === 'Crítico' ? 'text-rose-400' : 'text-gray-400'}`}>{urgency}</span>
            </div>
            <p className="text-[11px] text-gray-400 font-medium ml-7">{desc}</p>
        </div>
    );
}

