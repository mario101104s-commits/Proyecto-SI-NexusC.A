export interface ReportFilter {
    dateRange: 'today' | 'week' | 'month' | 'quarter' | 'year';
    department: string;
    type: 'sales' | 'inventory' | 'hr' | 'financial';
}

export interface SavedReport {
    id: string;
    name: string;
    type: string;
    lastGenerated: string;
    isFavorite: boolean;
}

export interface SalesByBranchData {
    branch: string;
    sales: number;
    target: number;
}

export interface InventoryTrendData {
    month: string;
    stockLevel: number;
    turnover: number;
}

export interface EmployeePerformanceData {
    name: string;
    score: number;
    sales: number;
}

export const MOCK_SAVED_REPORTS: SavedReport[] = [
    { id: '1', name: 'Ventas Mensuales - Sucursal Central', type: 'Ventas', lastGenerated: '2026-01-10', isFavorite: true },
    { id: '2', name: 'Inventario de Bajo Stock', type: 'Inventario', lastGenerated: '2026-01-12', isFavorite: false },
    { id: '3', name: 'Rendimiento de Ventas Q4 2025', type: 'RRHH', lastGenerated: '2025-12-31', isFavorite: true },
    { id: '4', name: 'Gastos Operativos Enero', type: 'Financiero', lastGenerated: '2026-01-05', isFavorite: false },
];

export const MOCK_SALES_BY_BRANCH: SalesByBranchData[] = [
    { branch: 'Central', sales: 150000, target: 120000 },
    { branch: 'Norte', sales: 98000, target: 100000 },
    { branch: 'Sur', sales: 110000, target: 95000 },
    { branch: 'Oeste', sales: 85000, target: 90000 },
    { branch: 'Este', sales: 105000, target: 100000 },
];

export const MOCK_INVENTORY_TREND: InventoryTrendData[] = [
    { month: 'Ago', stockLevel: 4200, turnover: 85 },
    { month: 'Sep', stockLevel: 3800, turnover: 92 },
    { month: 'Oct', stockLevel: 4500, turnover: 78 },
    { month: 'Nov', stockLevel: 5100, turnover: 88 },
    { month: 'Dic', stockLevel: 3500, turnover: 120 },
    { month: 'Ene', stockLevel: 4100, turnover: 95 },
];

export const MOCK_EMPLOYEE_PERFORMANCE: EmployeePerformanceData[] = [
    { name: 'Ana G.', score: 95, sales: 45000 },
    { name: 'Luis R.', score: 88, sales: 38000 },
    { name: 'Carlos M.', score: 92, sales: 41000 },
    { name: 'Sofia L.', score: 85, sales: 32000 },
    { name: 'Pedro J.', score: 78, sales: 28000 },
];
