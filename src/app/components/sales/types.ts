export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  company?: string;
  lastPurchase: string;
  totalPurchases: number;
  status: 'active' | 'inactive' | 'vip';
  address?: string;
  notes?: string;
}

export interface Quotation {
  id: string;
  clientId: string;
  clientName: string;
  date: string;
  total: number;
  status: 'pending' | 'sent' | 'approved' | 'rejected';
  items: QuotationItem[];
  validUntil: string;
}

export interface QuotationItem {
  id: string;
  product: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

// Mock data
export const MOCK_CLIENTS: Client[] = [
  {
    id: 'CLI001',
    name: 'María González',
    phone: '+58 412-1234567',
    email: 'maria.gonzalez@empresa.com',
    company: 'Inversiones MGZ C.A.',
    lastPurchase: '2026-01-10',
    totalPurchases: 45780,
    status: 'vip',
    address: 'Av. Principal, Caracas',
    notes: 'Cliente preferencial, solicita factura siempre',
  },
  {
    id: 'CLI002',
    name: 'Carlos Rodríguez',
    phone: '+58 424-9876543',
    email: 'carlos.r@gmail.com',
    company: 'Constructora El Pilar',
    lastPurchase: '2026-01-08',
    totalPurchases: 32100,
    status: 'active',
    address: 'Zona Industrial, Valencia',
    notes: 'Compras mensuales de materiales',
  },
  {
    id: 'CLI003',
    name: 'Ana Martínez',
    phone: '+58 414-5551234',
    email: 'ana.martinez@comercial.com',
    company: 'Comercial La Esperanza',
    lastPurchase: '2026-01-05',
    totalPurchases: 28950,
    status: 'active',
    address: 'Centro Comercial, Maracaibo',
  },
  {
    id: 'CLI004',
    name: 'José Pérez',
    phone: '+58 426-7778899',
    email: 'jose.perez@hotmail.com',
    lastPurchase: '2025-12-28',
    totalPurchases: 15600,
    status: 'active',
    address: 'Barquisimeto, Lara',
  },
  {
    id: 'CLI005',
    name: 'Laura Fernández',
    phone: '+58 412-3334455',
    email: 'laura.f@distribuidora.com',
    company: 'Distribuidora del Este',
    lastPurchase: '2025-12-15',
    totalPurchases: 52300,
    status: 'vip',
    address: 'Barcelona, Anzoátegui',
    notes: 'Descuento corporativo del 10%',
  },
  {
    id: 'CLI006',
    name: 'Pedro Ramírez',
    phone: '+58 424-1112233',
    email: 'pedro.ramirez@empresa.com',
    lastPurchase: '2025-11-20',
    totalPurchases: 8900,
    status: 'inactive',
    address: 'Maracay, Aragua',
  },
];

export const MOCK_QUOTATIONS: Quotation[] = [
  {
    id: 'COT001',
    clientId: 'CLI001',
    clientName: 'María González',
    date: '2026-01-12',
    total: 8750,
    status: 'pending',
    validUntil: '2026-01-26',
    items: [
      { id: '1', product: 'Tornillos M8 x 50mm (Caja x100)', quantity: 10, unitPrice: 250, total: 2500 },
      { id: '2', product: 'Tuercas M8 (Caja x100)', quantity: 10, unitPrice: 180, total: 1800 },
      { id: '3', product: 'Arandelas planas M8 (Caja x100)', quantity: 5, unitPrice: 150, total: 750 },
      { id: '4', product: 'Cable eléctrico 12 AWG (Metro)', quantity: 150, unitPrice: 25, total: 3700 },
    ],
  },
  {
    id: 'COT002',
    clientId: 'CLI002',
    clientName: 'Carlos Rodríguez',
    date: '2026-01-11',
    total: 12450,
    status: 'sent',
    validUntil: '2026-01-25',
    items: [
      { id: '1', product: 'Cemento Portland (Saco 50kg)', quantity: 30, unitPrice: 350, total: 10500 },
      { id: '2', product: 'Arena lavada (m³)', quantity: 3, unitPrice: 650, total: 1950 },
    ],
  },
  {
    id: 'COT003',
    clientId: 'CLI003',
    clientName: 'Ana Martínez',
    date: '2026-01-10',
    total: 6890,
    status: 'pending',
    validUntil: '2026-01-24',
    items: [
      { id: '1', product: 'Pintura acrílica blanca (Galón)', quantity: 20, unitPrice: 280, total: 5600 },
      { id: '2', product: 'Rodillos para pintura', quantity: 15, unitPrice: 45, total: 675 },
      { id: '3', product: 'Brochas 3 pulgadas', quantity: 25, unitPrice: 25, total: 625 },
    ],
  },
  {
    id: 'COT004',
    clientId: 'CLI004',
    clientName: 'José Pérez',
    date: '2026-01-09',
    total: 4200,
    status: 'approved',
    validUntil: '2026-01-23',
    items: [
      { id: '1', product: 'Tubería PVC 2" (6 metros)', quantity: 12, unitPrice: 350, total: 4200 },
    ],
  },
];
