import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Zap, FileText, Megaphone, ArrowUpRight, DollarSign } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const SALES_BY_BRANCH_DATA = [
    { name: 'Valencia', sales: 450000, target: 400000 },
    { name: 'Puerto La Cruz', sales: 320000, target: 350000 },
    { name: 'Maracaibo', sales: 510000, target: 480000 },
];

export function StrategicDashboard() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Executive Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ExecutiveWidget
                    title="Rentabilidad Global"
                    value="24.8%"
                    trend="+2.4%"
                    icon={<DollarSign className="text-emerald-600" size={24} />}
                    color="emerald"
                />
                <ExecutiveWidget
                    title="Crecimiento Anual"
                    value="112%"
                    trend="vs Meta"
                    icon={<TrendingUp className="text-blue-600" size={24} />}
                    color="blue"
                />
                <ExecutiveWidget
                    title="Satisfacción Cliente"
                    value="94/100"
                    trend="+5 pts"
                    icon={<Users className="text-purple-600" size={24} />}
                    color="purple"
                />
                <ExecutiveWidget
                    title="Eficiencia Operativa"
                    value="88.5%"
                    trend="+1.2%"
                    icon={<Zap className="text-amber-600" size={24} />}
                    color="amber"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Branch Performance Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-800">Rendimiento por Sucursal (Ventas vs Meta)</h3>
                        <div className="flex gap-2 text-xs">
                            <span className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-600 rounded" /> Ventas</span>
                            <span className="flex items-center gap-1"><div className="w-3 h-3 bg-gray-200 rounded" /> Meta</span>
                        </div>
                    </div>
                    <div className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={SALES_BY_BRANCH_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} tickFormatter={(val) => `$${val / 1000}k`} />
                                <Tooltip
                                    cursor={{ fill: '#f8fafc' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="sales" fill="#1e40af" radius={[4, 4, 0, 0]} barSize={40} />
                                <Bar dataKey="target" fill="#e2e8f0" radius={[4, 4, 0, 0]} barSize={40} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Quick Actions & Insights */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
                        <h3 className="text-lg font-bold text-gray-800 mb-6">Acciones Estratégicas</h3>
                        <div className="space-y-4">
                            <Button className="w-full justify-start h-14 bg-white hover:bg-blue-50 text-gray-700 border-gray-200 shadow-none gap-3">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                                    <FileText size={20} />
                                </div>
                                <div className="text-left">
                                    <span className="block text-sm font-bold">Generar reporte Junta</span>
                                    <span className="block text-[10px] text-gray-400">PDF consolidado mensual</span>
                                </div>
                            </Button>

                            <Button className="w-full justify-start h-14 bg-white hover:bg-blue-50 text-gray-700 border-gray-200 shadow-none gap-3">
                                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
                                    <Megaphone size={20} />
                                </div>
                                <div className="text-left">
                                    <span className="block text-sm font-bold">Publicar anuncio</span>
                                    <span className="block text-[10px] text-gray-400">Notificación corporativa global</span>
                                </div>
                            </Button>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Insights del Sistema</h4>
                            <div className="space-y-3">
                                <InsightItem
                                    text="Maracaibo superó la meta mensual por 6.2%"
                                    type="positive"
                                />
                                <InsightItem
                                    text="Puerto La Cruz presenta desfase de -8.5% en Ventas"
                                    type="nagative"
                                />
                                <InsightItem
                                    text="Eficiencia logística mejoró tras cambio en rutas"
                                    type="positive"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ExecutiveWidget({ title, value, trend, icon, color }: any) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-${color}-50 text-${color}-600 group-hover:scale-110 transition-transform`}>
                    {icon}
                </div>
                <div className={`flex items-center text-xs font-bold ${trend.startsWith('+') ? 'text-emerald-500' : 'text-gray-400'}`}>
                    {trend} {trend.startsWith('+') && <ArrowUpRight size={14} />}
                </div>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <h3 className="text-2xl font-bold text-gray-800 mt-1">{value}</h3>
            </div>
        </div>
    );
}

function InsightItem({ text, type }: { text: string, type: 'positive' | 'nagative' }) {
    return (
        <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 group hover:bg-white border border-transparent hover:border-gray-100 transition-all">
            <div className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${type === 'positive' ? 'bg-emerald-500' : 'bg-red-500'}`} />
            <p className="text-xs text-gray-600 leading-relaxed">{text}</p>
        </div>
    );
}
