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

export interface Payment {
    id: string;
    reference: string;
    entity: string; // Client or Supplier
    amount: number;
    date: string;
    type: 'income' | 'expense';
    method: 'transfer' | 'cash' | 'check' | 'card';
    status: 'completed' | 'pending';
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

export const MOCK_PAYMENTS: Payment[] = [
    {
        id: '1',
        reference: 'REF-88392',
        entity: 'Industrias Venoco C.A.',
        amount: 1540.00,
        date: '2026-01-06',
        type: 'income',
        method: 'transfer',
        status: 'completed'
    },
    {
        id: '2',
        reference: 'PAGO-004',
        entity: 'Servicios de Limpieza S.A.',
        amount: 350.00,
        date: '2026-01-08',
        type: 'expense',
        method: 'cash',
        status: 'completed'
    },
    {
        id: '3',
        reference: 'REF-99201',
        entity: 'Construcciones El Sol',
        amount: 1000.00,
        date: '2026-01-11',
        type: 'income',
        method: 'check',
        status: 'pending'
    },
    {
        id: '4',
        reference: 'PAGO-005',
        entity: 'Papelería Central',
        amount: 120.50,
        date: '2026-01-12',
        type: 'expense',
        method: 'card',
        status: 'completed'
    }
] as Payment[]; 
