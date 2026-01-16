import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { FileText, Download, TrendingUp, Calendar, Filter, Zap } from 'lucide-react';
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
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Reportes de Eficiencia Operativa</h2>
                    <p className="text-gray-500">Análisis técnico de procesos y productividad industrial</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2 bg-white shadow-sm border-gray-200 font-bold">
                        <Filter size={18} /> Filtrar Línea
                    </Button>
                    <Button className="bg-blue-800 hover:bg-blue-900 shadow-md gap-2 font-bold">
                        <Download size={18} /> Generar Informe
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Productivity Chart */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-2 mb-6">
                        <Zap className="text-amber-500" size={20} />
                        <h3 className="text-lg font-bold text-gray-800">Productividad Semanal (Líneas de Empaque)</h3>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={PRODUCTIVITY_DATA}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                                />
                                <Line type="monotone" dataKey="target" stroke="#cbd5e1" strokeDasharray="5 5" strokeWidth={2} dot={false} />
                                <Line type="monotone" dataKey="prod" stroke="#3b82f6" strokeWidth={4} dot={{ r: 6, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Available Monthly Reports */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Informes Consolidados</h3>
                    <div className="flex-1 space-y-3">
                        <ReportFileItem title="Incidencias de Almacén - Ene 2026" date="14 Ene, 2026" size="1.2 MB" />
                        <ReportFileItem title="Consumo Combustible Flota - Q4" date="10 Ene, 2026" size="4.5 MB" />
                        <ReportFileItem title="Auditoría de Stock Valencia" date="05 Ene, 2026" size="2.1 MB" />
                        <ReportFileItem title="Tiempos de Despacho Regional" date="01 Ene, 2026" size="3.8 MB" />
                    </div>
                    <Button variant="ghost" className="mt-4 text-blue-600 hover:bg-blue-50 font-bold">Ver Historial Completo</Button>
                </div>
            </div>
        </div>
    );
}

function ReportFileItem({ title, date, size }: any) {
    return (
        <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50/50 border border-transparent hover:border-blue-200 hover:bg-blue-50/30 transition-all group">
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                    <FileText size={20} />
                </div>
                <div>
                    <h4 className="text-sm font-bold text-gray-800 truncate max-w-[200px]">{title}</h4>
                    <p className="text-[10px] font-medium text-gray-400">{date} • {size}</p>
                </div>
            </div>
            <button className="p-2 text-gray-300 hover:text-blue-600 transition-colors">
                <Download size={18} />
            </button>
        </div>
    );
}
