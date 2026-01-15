import { BarChart3 } from 'lucide-react';
import {
    MOCK_SALES_BY_BRANCH,
    MOCK_INVENTORY_TREND,
    MOCK_EMPLOYEE_PERFORMANCE,
    MOCK_SAVED_REPORTS
} from './types';
import { ReportsFilters } from './ReportsFilters';
import { SalesByBranchChart, InventoryTrendChart, EmployeePerformanceChart } from './ReportsCharts';
import { SavedReports } from './SavedReports';

export function ReportsPage() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
                    <BarChart3 className="text-blue-800" />
                    Reportes y Análisis
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    Visualiza métricas clave y genera reportes detallados para la toma de decisiones.
                </p>
            </div>

            {/* Filters */}
            <ReportsFilters />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Charts Area (2/3 width) */}
                <div className="lg:col-span-2 space-y-6">
                    <SalesByBranchChart data={MOCK_SALES_BY_BRANCH} />
                    <InventoryTrendChart data={MOCK_INVENTORY_TREND} />
                    <EmployeePerformanceChart data={MOCK_EMPLOYEE_PERFORMANCE} />
                </div>

                {/* Sidebar (1/3 width) */}
                <div className="space-y-6">
                    <SavedReports reports={MOCK_SAVED_REPORTS} />

                    {/* Insight Widget Placeholder */}
                    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-6 text-white shadow-lg">
                        <h3 className="font-semibold text-lg mb-2">Nexus IA Insights</h3>
                        <p className="text-indigo-100 text-sm mb-4">
                            "Las ventas en la sucursal Norte están un 5% por debajo de la meta. Considera lanzar una promoción local."
                        </p>
                        <button className="bg-white/20 hover:bg-white/30 text-white text-sm font-medium py-1.5 px-3 rounded-lg transition-colors border border-white/30">
                            Ver Análisis Completo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
