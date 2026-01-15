import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    AreaChart, Area
} from 'recharts';

const CASH_FLOW_DATA = [
    { month: 'Ene', income: 15400, expense: 8200 },
    { month: 'Feb', income: 12000, expense: 9500 },
    { month: 'Mar', income: 18500, expense: 7800 },
    { month: 'Abr', income: 14200, expense: 8100 },
    { month: 'May', income: 16800, expense: 8900 },
    { month: 'Jun', income: 21000, expense: 11000 }
];

const BALANCE_DATA = [
    { month: 'Ene', balance: 7200 },
    { month: 'Feb', balance: 2500 },
    { month: 'Mar', balance: 10700 },
    { month: 'Abr', balance: 6100 },
    { month: 'May', balance: 7900 },
    { month: 'Jun', balance: 10000 }
];

export function FinanceReports() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {/* Income vs Expenses Chart */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-[350px]">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Ingresos vs Egresos (Semestral)</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={CASH_FLOW_DATA} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                        <Tooltip
                            formatter={(value: number) => [`$${value.toLocaleString()}`, undefined]}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Legend />
                        <Bar dataKey="income" name="Ingresos" fill="#10b981" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="expense" name="Egresos" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Cash Flow Balance Chart */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm h-[350px]">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Balance de Flujo de Caja</h3>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={BALANCE_DATA} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                        <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
                        <Tooltip
                            formatter={(value: number) => [`$${value.toLocaleString()}`, "Balance"]}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Area type="monotone" dataKey="balance" stroke="#3b82f6" fillOpacity={1} fill="url(#colorBalance)" strokeWidth={3} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
