import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    Line, AreaChart, Area
} from 'recharts';
import { SalesByBranchData, InventoryTrendData, EmployeePerformanceData } from './types';

interface SalesChartProps {
    data: SalesByBranchData[];
}

export function SalesByBranchChart({ data }: SalesChartProps) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-[350px]">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Ventas por Sucursal vs Meta</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="branch" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                    <Tooltip
                        formatter={(value: number) => [`$${value.toLocaleString()}`, undefined]}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Bar dataKey="sales" name="Ventas Reales" fill="#2563eb" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="target" name="Meta Mensual" fill="#e2e8f0" radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

interface InventoryChartProps {
    data: InventoryTrendData[];
}

export function InventoryTrendChart({ data }: InventoryChartProps) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-[350px]">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Tendencia de Inventario y Rotación</h3>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                    <defs>
                        <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis yAxisId="left" axisLine={false} tickLine={false} />
                    <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} />
                    <Tooltip
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Area yAxisId="left" type="monotone" dataKey="stockLevel" name="Nivel de Stock" stroke="#3b82f6" fillOpacity={1} fill="url(#colorStock)" strokeWidth={2} />
                    <Line yAxisId="right" type="monotone" dataKey="turnover" name="Rotación (%)" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

interface PerformanceChartProps {
    data: EmployeePerformanceData[];
}

export function EmployeePerformanceChart({ data }: PerformanceChartProps) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-[350px]">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Desempeño de Empleados Top</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} width={80} />
                    <Tooltip
                        cursor={{ fill: 'transparent' }}
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Bar dataKey="score" name="Puntaje de Evaluación" fill="#10b981" radius={[0, 4, 4, 0]} barSize={20} />
                    <Bar dataKey="sales" name="Ventas Generadas ($)" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={20} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
