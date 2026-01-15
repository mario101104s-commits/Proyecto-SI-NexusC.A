export type Location = 'Valencia' | 'Puerto La Cruz' | 'Maracaibo';
export type Category = 'Industrial' | 'EPP' | 'Herramientas' | 'Químicos' | 'Repuestos';
export type StockStatus = 'normal' | 'low' | 'critical';

export interface Product {
    id: string;
    code: string;
    name: string;
    category: Category;
    location: Location;
    stock: number;
    minStock: number;
    price: number;
    image: string; // URL placeholder
    lastMovement: string;
}

export const MOCK_INVENTORY: Product[] = [
    {
        id: '1',
        code: 'VAL-001',
        name: 'Casco de Seguridad Industrial',
        category: 'EPP',
        location: 'Valencia',
        stock: 150,
        minStock: 20,
        price: 15.00,
        image: 'https://images.unsplash.com/photo-1581090700227-1e37b1904171?auto=format&fit=crop&q=80&w=200',
        lastMovement: '2026-01-12'
    },
    {
        id: '2',
        code: 'MCB-045',
        name: 'Disolvente Industrial 20L',
        category: 'Químicos',
        location: 'Maracaibo',
        stock: 8,
        minStock: 15,
        price: 45.50,
        image: 'https://images.unsplash.com/photo-1617947706249-16a70743b1c6?auto=format&fit=crop&q=80&w=200',
        lastMovement: '2026-01-10'
    },
    {
        id: '3',
        code: 'PLC-102',
        name: 'Llave Inglesa Ajustable',
        category: 'Herramientas',
        location: 'Puerto La Cruz',
        stock: 45,
        minStock: 10,
        price: 22.00,
        image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&q=80&w=200',
        lastMovement: '2026-01-08'
    },
    {
        id: '4',
        code: 'VAL-002',
        name: 'Rodamientos de Alta Velocidad',
        category: 'Repuestos',
        location: 'Valencia',
        stock: 5,
        minStock: 10,
        price: 85.00,
        image: 'https://images.unsplash.com/photo-1569917524959-1e2474477D8f?auto=format&fit=crop&q=80&w=200',
        lastMovement: '2026-01-11'
    },
    {
        id: '5',
        code: 'MCB-022',
        name: 'Guantes de Nitrilo (Caja)',
        category: 'EPP',
        location: 'Maracaibo',
        stock: 200,
        minStock: 50,
        price: 12.00,
        image: 'https://images.unsplash.com/photo-1587321523910-6663ce35d481?auto=format&fit=crop&q=80&w=200',
        lastMovement: '2026-01-13'
    },
    {
        id: '6',
        code: 'PLC-088',
        name: 'Compresor de Aire 50L',
        category: 'Industrial',
        location: 'Puerto La Cruz',
        stock: 2,
        minStock: 3,
        price: 350.00,
        image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=200',
        lastMovement: '2026-01-05'
    },
    {
        id: '7',
        code: 'VAL-055',
        name: 'Aceite Lubricante 5L',
        category: 'Químicos',
        location: 'Valencia',
        stock: 60,
        minStock: 15,
        price: 28.00,
        image: 'https://images.unsplash.com/photo-1627483298235-f3bac2567c1c?auto=format&fit=crop&q=80&w=200',
        lastMovement: '2026-01-14'
    },
    {
        id: '8',
        code: 'MCB-015',
        name: 'Multímetro Digital',
        category: 'Herramientas',
        location: 'Maracaibo',
        stock: 12,
        minStock: 5,
        price: 45.00,
        image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=200',
        lastMovement: '2026-01-09'
    }
];

export const LOCATIONS: Location[] = ['Valencia', 'Puerto La Cruz', 'Maracaibo'];
export const CATEGORIES: Category[] = ['Industrial', 'EPP', 'Herramientas', 'Químicos', 'Repuestos'];
