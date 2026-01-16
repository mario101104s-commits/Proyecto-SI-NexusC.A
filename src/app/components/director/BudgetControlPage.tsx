import { DollarSign, PieChart, TrendingUp, AlertCircle, FileSpreadsheet } from 'lucide-react';
import {
    PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend
} from 'recharts';
import { Button } from '@/app/components/ui/button';

const BUDGET_DATA = [
    { name: 'Operaciones', value: 450000, color: '#1e40af' },
    { name: 'Marketing', value: 120000, color: '#3b82f6' },
    { name: 'RRHH', value: 80000, color: '#8b5cf6' },
    { name: 'Tecnología', value: 150000, color: '#10b981' },
];

export function BudgetControlPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Control Presupuestario</h2>
                    <p className="text-gray-500">Vigilancia de asignaciones y ejecución de gastos por departamento</p>
                </div>
                <Button className="gap-2 bg-emerald-700 hover:bg-emerald-800 shadow-md">
                    <FileSpreadsheet size={18} /> Ajustar Asignaciones
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <BudgetStat title="Presupuesto Anual" value="$1.5M" trend="Total" icon={<DollarSign size={20} />} color="blue" />
                <BudgetStat title="Ejecutado a la Fecha" value="$642K" trend="42.8%" icon={<TrendingUp size={20} />} color="emerald" />
                <BudgetStat title="Remanente" value="$858K" trend="En curso" icon={<PieChart size={20} />} color="purple" />
                <BudgetStat title="Alertas de Desvío" value="2" trend="Crítico" icon={<AlertCircle size={20} />} color="red" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Gráfico de Torta - Distribución */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Distribución del Presupuesto por Área</h3>
                    <div className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <RePieChart>
                                <Pie
                                    data={BUDGET_DATA}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={80}
                                    outerRadius={120}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {BUDGET_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    formatter={(val: number) => `$${(val / 1000).toFixed(0)}k`}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                            </RePieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Tabla de Desviaciones */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6">Vigilancia de Desviaciones</h3>
                    <div className="space-y-6">
                        <DeviationItem
                            area="Mantenimiento Valencia"
                            diff="+12%"
                            status="critical"
                            reason="Reparaciones de emergencia en flota"
                        />
                        <DeviationItem
                            area="Marketing Digital"
                            diff="-8%"
                            status="positive"
                            reason="Optimización de campañas publicitarias"
                        />
                        <DeviationItem
                            area="Suministros Oficina"
                            diff="+5%"
                            status="warning"
                            reason="Ajuste inflacionario de proveedores"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function BudgetStat({ title, value, trend, icon, color }: any) {
    const colorMap: any = {
        blue: 'bg-blue-50 text-blue-600',
        emerald: 'bg-emerald-50 text-emerald-600',
        purple: 'bg-purple-50 text-purple-600',
        red: 'bg-red-50 text-red-600'
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl ${colorMap[color]}`}>
                    {icon}
                </div>
                <p className="text-sm font-bold text-gray-500">{title}</p>
            </div>
            <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-black text-gray-800">{value}</h3>
                <span className="text-[10px] uppercase font-bold text-gray-400">{trend}</span>
            </div>
        </div>
    );
}

function DeviationItem({ area, diff, status, reason }: any) {
    return (
        <div className="space-y-2">
            <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-gray-800">{area}</h4>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${status === 'critical' ? 'bg-red-100 text-red-700' :
                    status === 'warning' ? 'bg-amber-100 text-amber-700' :
                        'bg-emerald-100 text-emerald-700'
                    }`}>
                    {diff}
                </span>
            </div>
            <p className="text-xs text-gray-500 italic">"{reason}"</p>
        </div>
    );
}
