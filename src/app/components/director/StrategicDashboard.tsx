import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, Users, Zap, FileText, Megaphone, ArrowUpRight, DollarSign, Calendar, ChevronRight, X, Lightbulb, Target, Rocket } from 'lucide-react';
import { useState } from 'react';
import { ExportReportModal } from './ExportReportModal';
import { NewAnnouncementModal } from './NewAnnouncementModal';
import { Button } from '@/app/components/ui/button';

const SALES_BY_BRANCH_DATA = [
    { name: 'Valencia', sales: 450000, target: 400000, color: '#3b82f6' },
    { name: 'Puerto La Cruz', sales: 320000, target: 350000, color: '#f59e0b' },
    { name: 'Maracaibo', sales: 510000, target: 480000, color: '#10b981' },
];

interface StrategicDashboardProps {
    onNavigate?: (menu: string) => void;
}

export function StrategicDashboard({ onNavigate }: StrategicDashboardProps) {
    const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [isNewAnnouncementOpen, setIsNewAnnouncementOpen] = useState(false);
    const [isNewStrategyOpen, setIsNewStrategyOpen] = useState(false);
    const [performancePeriod, setPerformancePeriod] = useState('monthly');

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
            {/* Greeting Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">Panel de Control Estratégico</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Bienvenido, Director</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">
                        <Calendar size={18} className="text-gray-400" />
                        {today.charAt(0).toUpperCase() + today.slice(1)}
                    </p>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => setIsExportModalOpen(true)}
                        className="px-8 py-4 bg-white border-2 border-slate-100 rounded-2xl font-black text-sm text-slate-700 hover:shadow-xl hover:border-slate-200 transition-all flex items-center gap-3 active:scale-95"
                    >
                        <FileText size={20} className="text-blue-600" />
                        Exportar Reporte
                    </button>
                    <button
                        onClick={() => setIsNewStrategyOpen(true)}
                        className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-black shadow-2xl shadow-slate-200 transition-all active:scale-95 border border-slate-800"
                    >
                        Nueva Estrategia
                    </button>
                </div>
            </div>

            {/* Premium Executive Widgets - Clickable */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ExecutiveWidget
                    title="Rentabilidad Global"
                    value="24.8%"
                    trend="+2.4%"
                    icon={<DollarSign size={24} />}
                    bgGradient="from-blue-600 to-indigo-700"
                    onClick={() => onNavigate?.('executive_reports')}
                />
                <ExecutiveWidget
                    title="Crecimiento Anual"
                    value="112%"
                    trend="vs Meta"
                    icon={<TrendingUp size={24} />}
                    bgGradient="from-emerald-600 to-teal-700"
                    onClick={() => onNavigate?.('executive_reports')}
                />
                <ExecutiveWidget
                    title="Satisfacción Cliente"
                    value="94/100"
                    trend="+5 pts"
                    icon={<Users size={24} />}
                    bgGradient="from-purple-600 to-violet-700"
                    onClick={() => onNavigate?.('executive_reports')}
                />
                <ExecutiveWidget
                    title="Eficiencia Operativa"
                    value="88.5%"
                    trend="+1.2%"
                    icon={<Zap size={24} />}
                    bgGradient="from-amber-500 to-orange-600"
                    onClick={() => onNavigate?.('executive_reports')}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                {/* Branch Performance Section */}
                <div className="lg:col-span-3 bg-white p-12 rounded-[3rem] shadow-xl shadow-gray-100 border border-gray-50 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/50 rounded-full -mr-40 -mt-40 blur-3xl transition-all group-hover:bg-blue-100/50" />

                    <div className="relative">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                            <div>
                                <h3 className="text-2xl font-black text-gray-800 tracking-tight leading-none">Rendimiento Geográfico</h3>
                                <p className="text-xs text-gray-400 font-bold mt-2 uppercase tracking-[0.2em]">Ventas Reales vs Objetivos Institucionales</p>
                            </div>
                            <div className="flex gap-2 p-1.5 bg-slate-50 rounded-2xl ring-1 ring-slate-100">
                                <button
                                    onClick={() => setPerformancePeriod('monthly')}
                                    className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${performancePeriod === 'monthly' ? 'bg-white text-blue-600 shadow-md ring-1 ring-slate-200' : 'text-slate-400'}`}
                                >
                                    Mensual
                                </button>
                                <button
                                    onClick={() => setPerformancePeriod('yearly')}
                                    className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${performancePeriod === 'yearly' ? 'bg-white text-blue-600 shadow-md ring-1 ring-slate-200' : 'text-slate-400'}`}
                                >
                                    Anual
                                </button>
                            </div>
                        </div>

                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={SALES_BY_BRANCH_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} barGap={12}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis
                                        dataKey="name"
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b', fontSize: 11, fontWeight: '900' }}
                                        dy={15}
                                    />
                                    <YAxis
                                        axisLine={false}
                                        tickLine={false}
                                        tick={{ fill: '#64748b', fontSize: 11, fontWeight: '700' }}
                                        tickFormatter={(val) => `$${val / 1000}k`}
                                    />
                                    <Tooltip
                                        cursor={{ fill: '#f8fafc', radius: 12 }}
                                        contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', padding: '25px', fontWeight: 'bold' }}
                                    />
                                    <Bar dataKey="sales" radius={[10, 10, 10, 10]} barSize={40} animationDuration={2000}>
                                        {SALES_BY_BRANCH_DATA.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.9} />
                                        ))}
                                    </Bar>
                                    <Bar dataKey="target" fill="#e2e8f0" radius={[10, 10, 10, 10]} barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Insights & Actions */}
                <div className="lg:col-span-1 flex flex-col gap-8">
                    <div className="bg-slate-900 p-10 rounded-[3rem] shadow-2xl shadow-blue-900/10 text-white relative overflow-hidden flex-1 flex flex-col">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -mr-16 -mt-16 blur-2xl" />

                        <h3 className="text-xl font-black mb-10 flex items-center gap-3">
                            <span className="w-1.5 h-8 bg-blue-500 rounded-full" /> Insights
                        </h3>

                        <div className="space-y-8 flex-1">
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

                        <Button
                            variant="ghost"
                            onClick={() => onNavigate?.('executive_reports')}
                            className="w-full mt-10 h-14 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black text-xs uppercase tracking-widest border border-white/10 group"
                        >
                            Ver Análisis Detallado
                            <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-all" />
                        </Button>
                    </div>

                    <div className="bg-white p-10 rounded-[3.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col">
                        <h3 className="text-[10px] font-black text-gray-400 mb-8 uppercase tracking-[0.3em] text-center">Acciones Ejecutivas</h3>
                        <div className="space-y-4">
                            <StrategicActionItem
                                icon={<Megaphone className="text-blue-600" size={24} />}
                                title="Lanzar Comunicado"
                                sub="Difundir Objetivos Q3"
                                onClick={() => setIsNewAnnouncementOpen(true)}
                            />
                            <StrategicActionItem
                                icon={<FileText className="text-purple-600" size={24} />}
                                title="Monitor Presupuesto"
                                sub="Sincronizar Asignaciones"
                                onClick={() => onNavigate?.('budget_control')}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Local Nav Modals */}
            <ExportReportModal isOpen={isExportModalOpen} onClose={() => setIsExportModalOpen(false)} />
            <NewAnnouncementModal isOpen={isNewAnnouncementOpen} onClose={() => setIsNewAnnouncementOpen(false)} />

            {/* Local Strategy Modal Placeholder */}
            {isNewStrategyOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="bg-white rounded-[3rem] shadow-2xl w-full max-w-2xl mx-4 overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="bg-slate-900 p-10 text-white flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-600 rounded-2xl shadow-xl shadow-blue-500/20">
                                    <Lightbulb size={24} />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black tracking-tight leading-none">Nueva Iniciativa Estratégica</h2>
                                    <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mt-2">Planificación Horizonte 2026</p>
                                </div>
                            </div>
                            <button onClick={() => setIsNewStrategyOpen(false)} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="p-12 space-y-8">
                            <div className="grid grid-cols-3 gap-6">
                                <StrategyType icon={<Target />} label="Mercado" active />
                                <StrategyType icon={<Rocket />} label="Expansión" />
                                <StrategyType icon={<Users size={20} />} label="RRHH" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Descripción de la Misión</label>
                                <textarea className="w-full h-32 p-6 bg-slate-50 rounded-[2rem] border-none focus:ring-2 focus:ring-blue-500/20 text-slate-700 font-medium" placeholder="Defina los objetivos clave de esta estrategia..." />
                            </div>
                            <Button className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-100 flex items-center justify-center gap-3">
                                Crear Hoja de Ruta
                                <ChevronRight size={20} />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function ExecutiveWidget({ title, value, trend, icon, bgGradient, onClick }: any) {
    return (
        <div
            onClick={onClick}
            className={`relative p-10 rounded-[2.5rem] bg-gradient-to-br ${bgGradient} text-white shadow-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 cursor-pointer active:scale-95`}
        >
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
            <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                    <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-inner border border-white/10">
                        {icon}
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest leading-none ring-1 ring-white/20">
                        {trend} <ArrowUpRight size={12} />
                    </div>
                </div>
                <p className="text-white/60 text-xs font-black uppercase tracking-widest leading-none">{title}</p>
                <h3 className="text-4xl font-black mt-3 tracking-tighter">{value}</h3>
            </div>
        </div>
    );
}

function InsightDetail({ title, text, trend }: { title: string, text: string, trend: 'positivo' | 'negativo' }) {
    return (
        <div className="group cursor-default border-b border-white/5 pb-4">
            <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2 leading-none">{title}</p>
            <p className="text-sm font-bold text-slate-100 leading-relaxed mb-3">{text}</p>
            <div className="flex items-center gap-3">
                <div className={`h-1.5 flex-1 rounded-full bg-slate-800 overflow-hidden`}>
                    <div className={`h-full rounded-full ${trend === 'positivo' ? 'bg-emerald-500' : 'bg-rose-500'} w-2/3 shadow-[0_0_8px_rgba(16,185,129,0.5)]`} />
                </div>
                <span className={`text-[9px] font-black px-2 py-0.5 rounded-md ${trend === 'positivo' ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'}`}>
                    {trend === 'positivo' ? '↑ ESTABLE' : '↓ REVISIÓN'}
                </span>
            </div>
        </div>
    );
}

function StrategicActionItem({ icon, title, sub, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className="w-full flex items-center justify-between p-6 rounded-3xl bg-slate-50 hover:bg-white border-2 border-transparent hover:border-slate-100 transition-all group active:scale-95 shadow-sm hover:shadow-xl hover:shadow-slate-200/50"
        >
            <div className="flex items-center gap-5 text-left">
                <div className="p-4 rounded-2xl bg-white shadow-sm transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white group-hover:-rotate-6">
                    {icon}
                </div>
                <div>
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{title}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{sub}</p>
                </div>
            </div>
            <ChevronRight className="text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all" size={20} />
        </button>
    );
}

function StrategyType({ icon, label, active }: any) {
    return (
        <button className={`flex flex-col items-center gap-3 p-6 rounded-3xl transition-all border-2 ${active ? 'bg-blue-50 border-blue-600 text-blue-600 shadow-lg shadow-blue-100' : 'bg-slate-50 border-transparent text-slate-400 hover:bg-slate-100'}`}>
            <div className="p-2">{icon}</div>
            <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
        </button>
    );
}

