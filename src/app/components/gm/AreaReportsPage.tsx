import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Search, Filter, Download, Briefcase, TrendingUp, Users, ShoppingBag } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const DEPT_DISTRIBUTION = [
    { name: 'Ventas', value: 40, color: '#1e40af' },
    { name: 'Operaciones', value: 30, color: '#3b82f6' },
    { name: 'Finanzas', value: 20, color: '#60a5fa' },
    { name: 'RRHH', value: 10, color: '#93c5fd' },
];

export function AreaReportsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Reportes por Área</h2>
                    <p className="text-gray-500">Seguimiento detallado de indicadores por departamento</p>
                </div>
                <div className="flex gap-3">
                    <Button variant="outline" className="gap-2 bg-white shadow-sm">
                        <Filter size={18} /> Filtrar Áreas
                    </Button>
                    <Button className="gap-2 bg-blue-800 hover:bg-blue-900 shadow-md">
                        <Download size={18} /> Consolidado PDF
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Distribución de Carga de Trabajo */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Distribución Operativa</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={DEPT_DISTRIBUTION}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={100}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {DEPT_DISTRIBUTION.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Resumen de Gerencias */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 text-center lg:text-left">Salud de las Gerencias</h3>
                    <div className="space-y-5">
                        <AreaStatusItem label="Gerencia de Ventas" status="En Meta" color="emerald" icon={<TrendingUp size={18} />} />
                        <AreaStatusItem label="Gerencia de Operaciones" status="En Riesgo" color="red" icon={<Briefcase size={18} />} />
                        <AreaStatusItem label="Gerencia de Finanzas" status="Estable" color="blue" icon={<ShoppingBag size={18} />} />
                        <AreaStatusItem label="Gerencia de RRHH" status="Estable" color="blue" icon={<Users size={18} />} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function AreaStatusItem({ label, status, color, icon }: any) {
    const colorMap: any = {
        emerald: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        red: 'bg-red-50 text-red-600 border-red-100',
        blue: 'bg-blue-50 text-blue-600 border-blue-100',
    };

    return (
        <div className={`flex items-center justify-between p-4 rounded-xl border ${colorMap[color]}`}>
            <div className="flex items-center gap-3">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                    {icon}
                </div>
                <span className="text-sm font-bold">{label}</span>
            </div>
            <span className="text-xs font-black uppercase tracking-wider">{status}</span>
        </div>
    );
}
