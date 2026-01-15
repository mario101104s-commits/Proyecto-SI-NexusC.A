export type InvoiceStatus = 'paid' | 'pending' | 'overdue';

export interface Invoice {
    id: string;
    number: string;
    client: string;
    amount: number;
    date: string;
    dueDate: string;
    status: InvoiceStatus;
}

export interface FinancialStats {
    monthlyIncome: number;
    monthlyExpenses: number;
    pendingInvoicesCount: number;
    pendingInvoicesAmount: number;
}

export const MOCK_INVOICES: Invoice[] = [
    {
        id: '1',
        number: 'FAC-2026-001',
        client: 'Industrias Venoco C.A.',
        amount: 1540.00,
        date: '2026-01-05',
        dueDate: '2026-01-20',
        status: 'paid'
    },
    {
        id: '2',
        number: 'FAC-2026-002',
        client: 'Construcciones El Sol',
        amount: 2300.50,
        date: '2026-01-10',
        dueDate: '2026-01-25',
        status: 'pending'
    },
    {
        id: '3',
        number: 'FAC-2026-003',
        client: 'Taller Mecánico Express',
        amount: 450.00,
        date: '2026-01-12',
        dueDate: '2026-01-27',
        status: 'pending'
    },
    {
        id: '4',
        number: 'FAC-2025-156',
        client: 'Distribuidora Los Andes',
        amount: 3200.00,
        date: '2025-12-15',
        dueDate: '2025-12-30',
        status: 'overdue'
    }
];

export const MOCK_STATS: FinancialStats = {
    monthlyIncome: 15400.00,
    monthlyExpenses: 8200.00,
    pendingInvoicesCount: 3,
    pendingInvoicesAmount: 2750.50
};
