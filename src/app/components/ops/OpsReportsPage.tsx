import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { FileText, Download, TrendingUp, Filter, Zap, ArrowRight, Activity } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const PRODUCTIVITY_DATA = [
    { day: 'Lun', prod: 85, target: 80 },
    { day: 'Mar', prod: 88, target: 80 },
    { day: 'Mie', prod: 75, target: 80 },
    { day: 'Jue', prod: 92, target: 80 },
    { day: 'Vie', prod: 80, target: 80 },
];

export function OpsReportsPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-20">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-sm font-black text-amber-600 uppercase tracking-[0.2em] mb-3">Analítica Avanzada</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Reportes de Eficiencia</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">Análisis técnico de procesos y productividad industrial consolidada</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="py-7 px-8 bg-white text-gray-900 border border-gray-100 rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all shadow-xl shadow-gray-100/50 flex items-center gap-3">
                        <Filter size={18} className="text-amber-500" /> Filtrar Segmento
                    </Button>
                    <Button className="py-7 px-10 bg-slate-900 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-gray-200 flex items-center gap-3">
                        <Download size={18} /> Generar Informe Global
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Productivity Chart */}
                <div className="lg:col-span-2 bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-gray-100/50 border border-gray-50 group hover:shadow-amber-900/5 transition-all duration-500">
                    <div className="flex items-center justify-between mb-12">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-amber-50 rounded-[1.5rem] flex items-center justify-center text-amber-600 shadow-inner">
                                <Zap size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-gray-800 tracking-tight">Productividad Semanal</h3>
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Rendimiento vs Meta (80%)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 p-4 bg-slate-50 rounded-2xl">
                            <Activity size={18} className="text-emerald-500" />
                            <span className="text-xs font-black text-emerald-600">+12.4% Est.</span>
                        </div>
                    </div>
                    <div className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={PRODUCTIVITY_DATA}>
                                <defs>
                                    <linearGradient id="colorProd" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 800 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 13, fontWeight: 800 }} />
                                <Tooltip
                                    cursor={{ stroke: '#f59e0b', strokeWidth: 2 }}
                                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.1)', padding: '20px' }}
                                />
                                <Area type="monotone" dataKey="prod" stroke="#f59e0b" strokeWidth={5} fillOpacity={1} fill="url(#colorProd)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Available Monthly Reports */}
                <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl shadow-gray-200 text-white flex flex-col">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-2xl font-black flex items-center gap-4">
                            <span className="w-2 h-10 bg-amber-500 rounded-full" /> Archivo
                        </h3>
                        <div className="p-3 bg-white/10 rounded-2xl">
                            <TrendingUp size={20} className="text-emerald-400" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-5 overflow-y-auto custom-scrollbar pr-2">
                        <ReportFileItem title="Incidencias Valencia" date="14 Ene, 2026" size="1.2 MB" />
                        <ReportFileItem title="Combustible Flota Q4" date="10 Ene, 2026" size="4.5 MB" />
                        <ReportFileItem title="Auditoría Maracaibo" date="05 Ene, 2026" size="2.1 MB" />
                        <ReportFileItem title="Picking Tiempos Regional" date="01 Ene, 2026" size="3.8 MB" />
                    </div>
                    <button className="mt-10 w-full py-5 bg-white text-slate-900 rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-amber-500 hover:text-white transition-all shadow-xl shadow-black/20 flex items-center justify-center gap-3 group">
                        Ver Historial <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function ReportFileItem({ title, date, size }: any) {
    return (
        <div className="flex items-center justify-between p-6 rounded-[2rem] bg-white/5 border border-transparent hover:border-amber-500/30 hover:bg-white/10 transition-all group cursor-pointer">
            <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 shadow-inner">
                    <FileText size={24} />
                </div>
                <div>
                    <h4 className="text-sm font-black text-gray-100 mb-1 group-hover:text-amber-500 transition-colors">{title}</h4>
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{date} • {size}</p>
                </div>
            </div>
            <button className="p-2 text-gray-500 hover:text-white transition-colors">
                <Download size={20} />
            </button>
        </div>
    );
}
