export type PurchaseStatus = 'pending' | 'received' | 'cancelled';
export type SupplierStatus = 'active' | 'inactive';

export interface Supplier {
    id: string;
    name: string;
    contact: string;
    phone: string;
    email: string;
    products: string[];
    status: SupplierStatus;
}

export interface PurchaseOrder {
    id: string;
    number: string;
    supplierId: string;
    supplierName: string;
    date: string;
    expectedDate: string;
    total: number;
    status: PurchaseStatus;
    items: number; // Count of items
}

export const MOCK_SUPPLIERS: Supplier[] = [
    {
        id: '1',
        name: 'Industrial Supplies Co.',
        contact: 'Carlos Rodríguez',
        phone: '+58 414-1234567',
        email: 'ventas@indusupplies.com',
        products: ['Herramientas', 'EPP'],
        status: 'active',
    },
    {
        id: '2',
        name: 'Químicos del Centro',
        contact: 'Ana Silva',
        phone: '+58 412-9876543',
        email: 'contacto@quimicoscentro.ve',
        products: ['Disolventes', 'Lubricantes'],
        status: 'active',
    },
    {
        id: '3',
        name: 'Importadora Global',
        contact: 'Miguel Ángel',
        phone: '+58 424-5551122',
        email: 'mangel@globalimport.com',
        products: ['Repuestos Maquinaria'],
        status: 'active',
    },
];

export const MOCK_ORDERS: PurchaseOrder[] = [
    {
        id: '1',
        number: 'OC-2026-001',
        supplierId: '1',
        supplierName: 'Industrial Supplies Co.',
        date: '2026-01-10',
        expectedDate: '2026-01-15',
        total: 1250.00,
        status: 'received',
        items: 45,
    },
    {
        id: '2',
        number: 'OC-2026-002',
        supplierId: '2',
        supplierName: 'Químicos del Centro',
        date: '2026-01-12',
        expectedDate: '2026-01-18',
        total: 850.50,
        status: 'pending',
        items: 120,
    },
    {
        id: '3',
        number: 'OC-2026-003',
        supplierId: '1',
        supplierName: 'Industrial Supplies Co.',
        date: '2026-01-14',
        expectedDate: '2026-01-20',
        total: 2100.00,
        status: 'pending',
        items: 15,
    },
];
