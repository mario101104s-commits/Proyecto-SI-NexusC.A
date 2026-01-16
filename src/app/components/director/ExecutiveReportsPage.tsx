import { FileText, Download, Calendar } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const EXECUTIVE_KPI_DATA = [
    { month: 'Ene', real: 85, meta: 80 },
    { month: 'Feb', real: 88, meta: 82 },
    { month: 'Mar', real: 92, meta: 85 },
    { month: 'Abr', real: 90, meta: 88 },
    { month: 'May', real: 95, meta: 90 },
    { month: 'Jun', real: 98, meta: 92 },
];

export function ExecutiveReportsPage() {
    return (
        <div className="space-y-10 animate-in fade-in duration-700">
            {/* Header section with executive style */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">Inteligencia de Negocio</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Reportes Ejecutivos</h1>
                    <p className="text-gray-500 font-medium mt-2">Visión consolidada de los indicadores clave y salud corporativa.</p>
                </div>

                <div className="flex gap-3">
                    <Button variant="outline" className="bg-white border-gray-200 text-gray-700 px-6 py-6 rounded-2xl shadow-sm font-bold flex items-center gap-2">
                        <Download size={20} />
                        Consolidado
                    </Button>
                    <Button className="bg-slate-900 hover:bg-black text-white px-8 py-6 rounded-2xl shadow-xl shadow-gray-200 transition-all hover:-translate-y-1 font-bold">
                        <Calendar size={20} className="mr-2" />
                        Ciclo Fiscal 2026
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Desempeño vs Meta */}
                <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h3 className="text-xl font-black text-gray-800 tracking-tight">Rendimiento Global vs Meta</h3>
                            <p className="text-xs text-gray-400 font-bold uppercase mt-1 tracking-widest">Cumplimiento del período (%)</p>
                        </div>
                        <div className="px-4 py-2 bg-emerald-50 text-emerald-600 rounded-xl text-xs font-black">
                            +5.4% SOBRE META
                        </div>
                    </div>
                    <div className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={EXECUTIVE_KPI_DATA}>
                                <defs>
                                    <linearGradient id="colorReal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 'bold' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 'bold' }} domain={[70, 100]} />
                                <Tooltip
                                    cursor={{ stroke: '#2563eb', strokeWidth: 2 }}
                                    contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '15px' }}
                                />
                                <Area type="monotone" dataKey="real" stroke="#2563eb" fillOpacity={1} fill="url(#colorReal)" strokeWidth={4} />
                                <Area type="monotone" dataKey="meta" stroke="#e2e8f0" fill="none" strokeDasharray="8 8" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Lista de Reportes Consolidados */}
                <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-xl font-black text-gray-800 tracking-tight">Expedientes de Gestión</h3>
                        <Button variant="ghost" className="text-blue-600 text-xs font-black uppercase tracking-widest hover:bg-blue-50">Auditoría</Button>
                    </div>
                    <div className="space-y-4 flex-1">
                        <ReportItem title="Informe de Auditoría Interna Q1" date="Publicado hace 3 días" size="4.2 MB" />
                        <ReportItem title="Proyección Financiera 2H 2026" date="Publicado hace 1 semana" size="1.8 MB" />
                        <ReportItem title="Análisis de Mercado Regional" date="Publicado hace 2 semanas" size="8.5 MB" />
                        <ReportItem title="Evaluación de Desempeño Gerencial" date="Publicado hace 1 mes" size="2.1 MB" />
                    </div>
                    <Button variant="outline" className="w-full mt-10 p-6 border-2 border-slate-100 text-slate-800 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all">
                        Explorar Archivo Histórico Completo
                    </Button>
                </div>
            </div>
        </div>
    );
}

function ReportItem({ title, date, size }: any) {
    return (
        <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 border border-gray-100 transition-colors group">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-100 transition-colors">
                    <FileText size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-gray-800">{title}</h4>
                    <p className="text-xs text-gray-500">{date} • {size}</p>
                </div>
            </div>
            <Button size="icon" variant="ghost" className="text-gray-400 hover:text-blue-600">
                <Download size={18} />
            </Button>
        </div>
    );
}
