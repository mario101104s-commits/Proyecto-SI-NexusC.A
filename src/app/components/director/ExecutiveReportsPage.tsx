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
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Reportes Ejecutivos</h2>
                    <p className="text-gray-500">Resumen consolidado de indicadores clave de rendimiento (KPIs)</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2 bg-white shadow-sm border-gray-200">
                        <Download size={18} /> Exportar Consolidado
                    </Button>
                    <Button className="gap-2 bg-blue-800 hover:bg-blue-900 shadow-md">
                        <Calendar size={18} /> Rango Fiscal 2026
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Desempeño vs Meta */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-800">Desempeño Global vs Meta (%)</h3>
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg text-xs font-bold">
                            +5.4% de sobrecumplimiento
                        </div>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={EXECUTIVE_KPI_DATA}>
                                <defs>
                                    <linearGradient id="colorReal" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#1e40af" stopOpacity={0.1} />
                                        <stop offset="95%" stopColor="#1e40af" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} domain={[70, 100]} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Area type="monotone" dataKey="real" stroke="#1e40af" fillOpacity={1} fill="url(#colorReal)" strokeWidth={3} />
                                <Area type="monotone" dataKey="meta" stroke="#cbd5e1" fill="none" strokeDasharray="5 5" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Lista de Reportes Consolidados */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Paquetes de Reportes Mensuales</h3>
                    <div className="space-y-4">
                        <ReportItem title="Informe de Auditoría Interna Q1" date="Hace 3 días" size="4.2 MB" />
                        <ReportItem title="Proyección Financiera 2H 2026" date="Hace 1 semana" size="1.8 MB" />
                        <ReportItem title="Análisis de Mercado Regional" date="Hace 2 semanas" size="8.5 MB" />
                        <ReportItem title="Evaluación de Desempeño Gerencial" date="Hace 1 mes" size="2.1 MB" />
                    </div>
                    <Button variant="ghost" className="w-full mt-6 text-blue-800 hover:bg-blue-50 font-bold text-sm">
                        Ver archivo histórico completa
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
