import { useState } from 'react';
import { FileText, Download, Calendar, TrendingUp, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { ExportReportModal } from './ExportReportModal';

const EXECUTIVE_KPI_DATA = [
    { month: 'Ene', real: 85, meta: 80 },
    { month: 'Feb', real: 88, meta: 82 },
    { month: 'Mar', real: 92, meta: 85 },
    { month: 'Abr', real: 90, meta: 88 },
    { month: 'May', real: 95, meta: 90 },
    { month: 'Jun', real: 98, meta: 92 },
];

export function ExecutiveReportsPage() {
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [fiscalCycle, setFiscalCycle] = useState('2026');

    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            {/* Header section with executive style */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">Inteligencia de Negocio</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Reportes Ejecutivos</h1>
                    <p className="text-gray-500 font-medium mt-2">Visión consolidada de los indicadores clave y salud corporativa global.</p>
                </div>

                <div className="flex gap-4">
                    <Button
                        variant="outline"
                        onClick={() => setIsExportModalOpen(true)}
                        className="bg-white border-2 border-slate-100 text-slate-800 px-8 py-6 rounded-2xl shadow-sm font-black flex items-center gap-3 hover:bg-slate-50 hover:border-slate-200 transition-all"
                    >
                        <Download size={20} />
                        Exportar Consolidado
                    </Button>
                    <Button
                        className="bg-slate-900 hover:bg-black text-white px-8 py-6 rounded-2xl shadow-xl shadow-gray-200 transition-all hover:-translate-y-1 font-black flex items-center gap-3"
                        onClick={() => {
                            const newCycle = prompt('Ingrese el Ciclo Fiscal (ej: 2026, 2027):', fiscalCycle);
                            if (newCycle) setFiscalCycle(newCycle);
                        }}
                    >
                        <Calendar size={20} />
                        Ciclo Fiscal {fiscalCycle}
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Desempeño vs Meta */}
                <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                        <div>
                            <h3 className="text-xl font-black text-gray-800 tracking-tight">Rendimiento Global vs Meta</h3>
                            <p className="text-xs text-gray-400 font-bold uppercase mt-1 tracking-widest leading-none">KPI de cumplimiento estratégico</p>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-2.5 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-2xl text-[10px] font-black uppercase tracking-widest">
                            <TrendingUp size={16} />
                            +5.4% SOBRE META Q2
                        </div>
                    </div>

                    <div className="h-[400px] w-full flex-1">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={EXECUTIVE_KPI_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorRealExec" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis
                                    dataKey="month"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: '900', letterSpacing: '1px' }}
                                    dy={15}
                                />
                                <YAxis
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: '700' }}
                                    domain={[70, 100]}
                                />
                                <Tooltip
                                    cursor={{ stroke: '#2563eb', strokeWidth: 2, strokeDasharray: '5 5' }}
                                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', padding: '20px', fontWeight: 'bold' }}
                                />
                                <Area type="monotone" dataKey="real" stroke="#2563eb" fillOpacity={1} fill="url(#colorRealExec)" strokeWidth={5} animationDuration={2000} />
                                <Area type="monotone" dataKey="meta" stroke="#e2e8f0" fill="none" strokeDasharray="8 8" strokeWidth={3} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Lista de Reportes Consolidados */}
                <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-3">
                            <h3 className="text-xl font-black text-gray-800 tracking-tight">Expedientes de Gestión</h3>
                            <div className="bg-blue-50 p-1.5 rounded-lg text-blue-600">
                                <ShieldCheck size={18} />
                            </div>
                        </div>
                        <Button variant="ghost" className="text-blue-600 text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 px-4 py-2 rounded-xl">Iniciar Auditoría</Button>
                    </div>

                    <div className="space-y-4 flex-1">
                        <ReportItem title="Informe de Auditoría Interna Q1" date="Publicado hace 3 días" size="4.2 MB" />
                        <ReportItem title="Proyección Financiera 2H 2026" date="Publicado hace 1 semana" size="1.8 MB" />
                        <ReportItem title="Análisis de Mercado Regional" date="Publicado hace 2 semanas" size="8.5 MB" />
                        <ReportItem title="Evaluación de Desempeño Gerencial" date="Publicado hace 1 mes" size="2.1 MB" />
                    </div>

                    <Button variant="outline" className="w-full mt-10 p-8 border-2 border-slate-100 text-slate-800 rounded-3xl font-black text-sm hover:bg-slate-50 hover:border-slate-200 transition-all flex items-center justify-center gap-2 group">
                        Explorar Archivo Histórico Completo
                        <ChevronRight size={18} className="text-slate-400 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
            </div>

            {/* Modals */}
            <ExportReportModal
                isOpen={isExportModalOpen}
                onClose={() => setIsExportModalOpen(false)}
            />
        </div>
    );
}

function ReportItem({ title, date, size }: any) {
    return (
        <div className="flex items-center justify-between p-6 rounded-[1.5rem] bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-lg transition-all group cursor-pointer">
            <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <FileText size={22} />
                </div>
                <div>
                    <h4 className="text-sm font-black text-gray-800 tracking-tight uppercase group-hover:text-blue-600 transition-colors">{title}</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1.5">{date} • {size}</p>
                </div>
            </div>
            <Button size="icon" variant="ghost" className="w-12 h-12 rounded-2xl text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-all opacity-0 group-hover:opacity-100">
                <Download size={20} />
            </Button>
        </div>
    );
}
