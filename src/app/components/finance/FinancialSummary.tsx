import { TrendingUp, TrendingDown, Clock, DollarSign } from 'lucide-react';
import { FinancialStats } from './types';

interface FinancialSummaryProps {
    stats: FinancialStats;
}

export function FinancialSummary({ stats }: FinancialSummaryProps) {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('es-VE', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Income */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Ingresos Mensuales</p>
                    <h3 className="text-2xl font-bold text-gray-800">{formatCurrency(stats.monthlyIncome)}</h3>
                </div>
                <div className="mt-4 flex items-center text-sm text-green-600">
                    <TrendingUp size={16} className="mr-1" />
                    <span>+12.5% vs mes anterior</span>
                </div>
            </div>

            {/* Expenses */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Gastos Mensuales</p>
                    <h3 className="text-2xl font-bold text-gray-800">{formatCurrency(stats.monthlyExpenses)}</h3>
                </div>
                <div className="mt-4 flex items-center text-sm text-red-600">
                    <TrendingDown size={16} className="mr-1" />
                    <span>-2.3% vs mes anterior</span>
                </div>
            </div>

            {/* Pending Amount */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500 mb-1">Por Cobrar</p>
                    <h3 className="text-2xl font-bold text-gray-800">{formatCurrency(stats.pendingInvoicesAmount)}</h3>
                </div>
                <div className="mt-4 flex items-center text-sm text-yellow-600">
                    <Clock size={16} className="mr-1" />
                    <span>{stats.pendingInvoicesCount} facturas pendientes</span>
                </div>
            </div>

            {/* Net Profit (Calculated) */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 rounded-xl p-6 flex flex-col justify-between text-white shadow-lg">
                <div>
                    <p className="text-sm font-medium text-blue-100 mb-1">Beneficio Neto</p>
                    <h3 className="text-2xl font-bold">{formatCurrency(stats.monthlyIncome - stats.monthlyExpenses)}</h3>
                </div>
                <div className="mt-4 flex items-center text-sm text-blue-100 opacity-90">
                    <DollarSign size={16} className="mr-1" />
                    <span>Margen: {((stats.monthlyIncome - stats.monthlyExpenses) / stats.monthlyIncome * 100).toFixed(1)}%</span>
                </div>
            </div>
        </div>
    );
}
