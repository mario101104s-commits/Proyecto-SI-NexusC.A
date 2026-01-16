import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LayoutDashboard, TrendingUp, AlertTriangle, Package, ShoppingCart, UserMinus } from 'lucide-react';

const DEPT_PERFORMANCE_DATA = [
    { name: 'Ventas', score: 92, target: 90 },
    { name: 'Operaciones', score: 85, target: 88 },
    { name: 'RRHH', score: 95, target: 90 },
    { name: 'Finanzas', score: 88, target: 85 },
];

export function GeneralManagerDashboard() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Managerial Header Widgets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ManagerWidget
                    title="Desempeño Promedio Gl."
                    value="90.2%"
                    trend="+3.1%"
                    icon={<LayoutDashboard className="text-blue-600" size={24} />}
                    color="blue"
                />
                <ManagerWidget
                    title="Metas Trimestrales"
                    value="78%"
                    trend="Q1 en curso"
                    icon={<TrendingUp className="text-emerald-600" size={24} />}
                    color="emerald"
                />
                <ManagerWidget
                    title="Alertas Críticas"
                    value="3"
                    trend="Acción requerida"
                    icon={<AlertTriangle className="text-red-600" size={24} />}
                    color="red"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Department Performance Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-800">Desempeño por Gerencia</h3>
                        <span className="text-xs font-medium text-gray-400">Puntuación de Eficiencia (0-100)</span>
                    </div>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={DEPT_PERFORMANCE_DATA} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                                <XAxis type="number" domain={[0, 100]} hide />
                                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 13 }} width={100} />
                                <Tooltip
                                    cursor={{ fill: '#f8fafc' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                />
                                <Bar dataKey="score" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={25} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Managerial Alert Panel */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center gap-2">
                        Alertas Gerenciales
                    </h3>
                    <div className="space-y-4">
                        <AlertItem
                            icon={<Package size={18} />}
                            title="Stock Crítico: Filtros Aceite"
                            desc="Inventario debajo del 5% del stock de seguridad."
                            color="red"
                        />
                        <AlertItem
                            icon={<ShoppingCart size={18} />}
                            title="Descenso en Ventas (PLC)"
                            desc="Puerto La Cruz registra -12% en la última semana."
                            color="amber"
                        />
                        <AlertItem
                            icon={<UserMinus size={18} />}
                            title="Alta Rotación: Almacén"
                            desc="3 bajas reportadas en el departamento de logística."
                            color="blue"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ManagerWidget({ title, value, trend, icon, color }: any) {
    const colorMap: any = {
        blue: 'bg-blue-50 text-blue-600',
        emerald: 'bg-emerald-50 text-emerald-600',
        red: 'bg-red-50 text-red-600',
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${colorMap[color]} group-hover:scale-110 transition-transform`}>
                    {icon}
                </div>
                <div className={`text-xs font-bold ${trend.startsWith('+') ? 'text-emerald-500' : 'text-gray-400'}`}>
                    {trend}
                </div>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <h3 className="text-2xl font-black text-gray-800 mt-1">{value}</h3>
            </div>
        </div>
    );
}

function AlertItem({ icon, title, desc, color }: any) {
    const colorMap: any = {
        red: 'bg-red-50 text-red-600 border-red-100',
        amber: 'bg-amber-50 text-amber-600 border-amber-100',
        blue: 'bg-blue-50 text-blue-600 border-blue-100',
    };

    return (
        <div className={`p-4 rounded-xl border ${colorMap[color]} transition-all hover:scale-[1.02] cursor-default`}>
            <div className="flex items-center gap-3 mb-1">
                {icon}
                <h4 className="text-sm font-bold">{title}</h4>
            </div>
            <p className="text-xs opacity-80 leading-relaxed ml-7">{desc}</p>
        </div>
    );
}
