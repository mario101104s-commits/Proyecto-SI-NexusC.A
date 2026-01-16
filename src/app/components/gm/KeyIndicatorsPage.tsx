import { useState } from 'react';
import {
    Activity, Users, Calendar, Download,
    ChevronRight, Target, Zap, Globe
} from 'lucide-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Button } from '@/app/components/ui/button';

const PERFORMANCE_TREND_DATA = [
    { name: 'Ene', value: 4000, target: 3800 },
    { name: 'Feb', value: 3000, target: 3200 },
    { name: 'Mar', value: 2000, target: 2500 },
    { name: 'Abr', value: 2780, target: 2600 },
    { name: 'May', value: 1890, target: 2100 },
    { name: 'Jun', value: 2390, target: 2400 },
    { name: 'Jul', value: 3490, target: 3200 },
];

const REVENUE_BY_SOURCE = [
    { name: 'Directo', value: 45, color: '#3b82f6' },
    { name: 'Distribuidores', value: 30, color: '#10b981' },
    { name: 'E-commerce', value: 15, color: '#8b5cf6' },
    { name: 'Otros', value: 10, color: '#f59e0b' },
];

export function KeyIndicatorsPage() {
    const [timeRange, setTimeRange] = useState('mensual');

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
            {/* Executive Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-3">Inteligencia de Negocios</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight leading-none">Indicadores Clave (KPIs)</h1>
                    <p className="text-gray-500 font-medium mt-4 text-lg">Análisis de rendimiento estratégico y métricas globales de salud corporativa.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-4 bg-white border-2 border-slate-100 rounded-[2rem] font-black text-sm text-slate-700 hover:shadow-xl hover:border-slate-200 transition-all flex items-center gap-3 active:scale-95 group">
                        <Calendar size={18} className="text-blue-600" />
                        Histórico
                    </button>
                    <button className="px-8 py-4 bg-slate-900 text-white rounded-[2rem] font-black text-sm hover:bg-black shadow-2xl shadow-slate-200 transition-all active:scale-95 flex items-center gap-3">
                        <Download size={18} />
                        Exportar Dashboard
                    </button>
                </div>
            </div>

            {/* Premium KPI Widgets Slider/Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <KPICard
                    title="ROI Proyectado"
                    value="32.5%"
                    trend="+4.2%"
                    icon={<Activity />}
                    color="blue"
                    desc="Retorno de inversión anual"
                />
                <KPICard
                    title="CAC (Costo Adq)"
                    value="$124"
                    trend="-12%"
                    icon={<Users />}
                    color="emerald"
                    desc="Costo adquisición cliente"
                />
                <KPICard
                    title="LTV (Valor Vida)"
                    value="$2,450"
                    trend="+18%"
                    icon={<Target />}
                    color="purple"
                    desc="Lifetime Value promedio"
                />
                <KPICard
                    title="Burn Rate"
                    value="$45K/m"
                    trend="Estable"
                    icon={<Zap />}
                    color="rose"
                    desc="Gasto operativo mensual"
                />
            </div>

            {/* Analytical Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Performance Trend Area Chart */}
                <div className="lg:col-span-2 bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-slate-100/50 border border-slate-50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full -mr-40 -mt-40 blur-3xl transition-all group-hover:bg-blue-100/30" />

                    <div className="relative">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                            <div>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none">Desempeño Operativo</h3>
                                <p className="text-xs text-slate-400 font-bold mt-2 uppercase tracking-[0.2em]">Ejecución vs Metas Estratégicas</p>
                            </div>
                            <div className="flex gap-2 p-1.5 bg-slate-50 rounded-2xl ring-1 ring-slate-100">
                                {['Semanal', 'Mensual', 'Anual'].map((period) => (
                                    <button
                                        key={period}
                                        onClick={() => setTimeRange(period.toLowerCase())}
                                        className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${timeRange === period.toLowerCase() ? 'bg-white text-blue-600 shadow-md ring-1 ring-slate-200' : 'text-slate-400'}`}
                                    >
                                        {period}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={PERFORMANCE_TREND_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#e2e8f0" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#e2e8f0" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: '700' }}
                                        dy={15}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: '700' }}
                                    />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', padding: '20px' }}
                                    />
                                    <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
                                    <Area type="monotone" dataKey="target" stroke="#cbd5e1" strokeWidth={2} strokeDasharray="10 10" fillOpacity={1} fill="url(#colorTarget)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Vertical Distribution / Info Card */}
                <div className="flex flex-col gap-10">
                    <div className="bg-slate-900 p-10 rounded-[3.5rem] shadow-2xl shadow-blue-900/10 text-white relative overflow-hidden flex-1 group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform" />

                        <h3 className="text-xl font-black mb-10 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-blue-500 rounded-full" /> Fuentes de Ingreso
                        </h3>

                        <div className="space-y-8">
                            {REVENUE_BY_SOURCE.map((item) => (
                                <div key={item.name} className="space-y-3">
                                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                                        <span className="text-slate-400">{item.name}</span>
                                        <span className="text-white">{item.value}%</span>
                                    </div>
                                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <div
                                            className="h-full rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                                            style={{ width: `${item.value}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button variant="ghost" className="w-full mt-12 h-14 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest border border-white/10 flex items-center justify-center gap-3">
                            Ver Desglose Financiero
                            <ChevronRight size={16} />
                        </Button>
                    </div>

                    <div className="bg-blue-600 p-10 rounded-[3.5rem] shadow-2xl shadow-blue-200 text-white relative overflow-hidden">
                        <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
                        <Globe className="absolute right-8 top-8 opacity-20" size={80} strokeWidth={1} />

                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 opacity-70">Impacto en Mercado</h3>
                        <h2 className="text-4xl font-black tracking-tighter mb-4">+12.8%</h2>
                        <p className="text-xs font-bold leading-relaxed opacity-90 uppercase tracking-widest">Crecimiento en cuota de mercado vs Competencia Q3</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function KPICard({ title, value, trend, icon, color, desc }: any) {
    const isPositive = trend.startsWith('+');
    const colors: any = {
        blue: 'bg-blue-50 text-blue-600 ring-blue-100',
        emerald: 'bg-emerald-50 text-emerald-600 ring-emerald-100',
        purple: 'bg-purple-50 text-purple-600 ring-purple-100',
        rose: 'bg-rose-50 text-rose-600 ring-rose-100',
    };

    return (
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-100 border border-slate-50 flex flex-col items-start gap-6 group hover:-translate-y-2 transition-all duration-500 cursor-default">
            <div className={`p-5 rounded-3xl ${colors[color]} group-hover:bg-slate-900 group-hover:text-white transition-all duration-500`}>
                {icon}
            </div>
            <div>
                <div className="flex items-center gap-3 mb-1">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{title}</p>
                    <span className={`text-[9px] font-black px-2 py-0.5 rounded-md ${isPositive ? 'text-emerald-600 bg-emerald-50' : 'text-slate-500 bg-slate-50'}`}>
                        {trend}
                    </span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">{value}</h3>
                <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-tight">{desc}</p>
            </div>
        </div>
    );
}
