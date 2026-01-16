import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Target, Zap, Shield, Activity } from 'lucide-react';

const RADAR_DATA = [
    { subject: 'Productividad', A: 120, B: 110, fullMark: 150 },
    { subject: 'Calidad', A: 98, B: 130, fullMark: 150 },
    { subject: 'Tiempos', A: 86, B: 130, fullMark: 150 },
    { subject: 'Costos', A: 99, B: 100, fullMark: 150 },
    { subject: 'Satisfacción', A: 85, B: 90, fullMark: 150 },
];

export function KeyIndicatorsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Indicadores Clave (KPIs)</h2>
                    <p className="text-gray-500">Panel de métricas de alto nivel para la toma de decisiones gerenciales</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Gráfico Radar de Eficiencia */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 text-center">Matriz de Eficiencia Organizacional</h3>
                    <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={RADAR_DATA}>
                                <PolarGrid stroke="#e2e8f0" />
                                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                                <PolarRadiusAxis hide />
                                <Radar
                                    name="Meta"
                                    dataKey="B"
                                    stroke="#94a3b8"
                                    fill="#94a3b8"
                                    fillOpacity={0.1}
                                />
                                <Radar
                                    name="Actual"
                                    dataKey="A"
                                    stroke="#3b82f6"
                                    fill="#3b82f6"
                                    fillOpacity={0.6}
                                />
                                <Tooltip />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Resumen de KPIs Críticos */}
                <div className="space-y-6">
                    <KPIBox title="Eficiencia de Entrega" value="92%" icon={<Zap size={20} className="text-amber-500" />} color="amber" />
                    <KPIBox title="Margen Operativo" value="28.4%" icon={<Target size={20} className="text-blue-500" />} color="blue" />
                    <KPIBox title="Retención de Talento" value="98.2%" icon={<Users size={20} className="text-purple-500" />} color="purple" />
                    <KPIBox title="Incidentes de Cobro" value="1" icon={<Shield size={20} className="text-red-500" />} color="red" />
                </div>
            </div>
        </div>
    );
}

function KPIBox({ title, value, icon, color }: any) {
    const colorMap: any = {
        amber: 'border-amber-100 bg-amber-50',
        blue: 'border-blue-100 bg-blue-50',
        purple: 'border-purple-100 bg-purple-50',
        red: 'border-red-100 bg-red-50',
    };

    return (
        <div className={`p-6 rounded-2xl border ${colorMap[color]} shadow-sm`}>
            <div className="flex items-center gap-4 mb-2">
                <div className="p-3 bg-white rounded-xl shadow-sm">
                    {icon}
                </div>
                <span className="text-sm font-bold text-gray-600">{title}</span>
            </div>
            <h3 className="text-2xl font-black text-gray-800 ml-14">{value}</h3>
        </div>
    );
}
