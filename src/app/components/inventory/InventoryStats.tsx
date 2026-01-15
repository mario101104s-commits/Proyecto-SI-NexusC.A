import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Product } from './types';

interface InventoryStatsProps {
    products: Product[];
}

export function InventoryStats({ products }: InventoryStatsProps) {
    // Calculate stock by category
    const data = products.reduce((acc, product) => {
        const existing = acc.find(item => item.name === product.category);
        if (existing) {
            existing.value += product.stock;
        } else {
            acc.push({ name: product.category, value: product.stock });
        }
        return acc;
    }, [] as { name: string; value: number }[]);

    const COLORS = ['#1e3a8a', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

    const lowStockCount = products.filter(p => p.stock <= p.minStock).length;
    const totalStock = products.reduce((acc, p) => acc + p.stock, 0);
    const totalValue = products.reduce((acc, p) => acc + (p.stock * p.price), 0);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Stock por Categoría</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                formatter={(value: number) => [value, 'Unidades']}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="space-y-4">
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <p className="text-sm text-gray-500 mb-1">Total Unidades</p>
                    <p className="text-3xl font-bold text-gray-800">{totalStock}</p>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6">
                    <p className="text-sm text-gray-500 mb-1">Valor del Inventario</p>
                    <p className="text-3xl font-bold text-gray-800">
                        ${totalValue.toLocaleString()}
                    </p>
                </div>

                <div className={`rounded-xl border p-6 ${lowStockCount > 0 ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'}`}>
                    <p className={`text-sm mb-1 ${lowStockCount > 0 ? 'text-red-600' : 'text-green-600'}`}>
                        Alertas de Stock
                    </p>
                    <p className={`text-3xl font-bold ${lowStockCount > 0 ? 'text-red-700' : 'text-green-700'}`}>
                        {lowStockCount}
                    </p>
                    <p className={`text-xs mt-1 ${lowStockCount > 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {lowStockCount > 0 ? 'Productos con stock crítico' : 'Todos los niveles óptimos'}
                    </p>
                </div>
            </div>
        </div>
    );
}
