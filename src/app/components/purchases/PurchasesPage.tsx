import { useState } from 'react';
import { Plus, ShoppingBag, Truck } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { MOCK_ORDERS, MOCK_SUPPLIERS } from './types';
import { OrdersList } from './OrdersList';
import { SuppliersList } from './SuppliersList';
import { NewOrderModal } from './NewOrderModal';

export function PurchasesPage() {
    const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">Compras y Proveedores</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Gestión de órdenes de compra y relación con proveedores
                    </p>
                </div>

                <Button
                    className="bg-blue-800 hover:bg-blue-900 text-white shadow-md"
                    onClick={() => setIsNewOrderModalOpen(true)}
                >
                    <Plus size={18} className="mr-2" />
                    Nueva Orden de Compra
                </Button>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Column: Orders */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center gap-2 mb-2">
                        <ShoppingBag size={20} className="text-blue-700" />
                        <h2 className="text-lg font-semibold text-gray-800">Órdenes Recientes</h2>
                    </div>

                    <OrdersList orders={MOCK_ORDERS} />
                </div>

                {/* Side Column: Suppliers */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-2">
                        <Truck size={20} className="text-gray-600" />
                        <h2 className="text-lg font-semibold text-gray-800">Proveedores Activos</h2>
                    </div>

                    <SuppliersList suppliers={MOCK_SUPPLIERS} />
                </div>
            </div>

            {/* Modals */}
            <NewOrderModal
                isOpen={isNewOrderModalOpen}
                onClose={() => setIsNewOrderModalOpen(false)}
            />
        </div>
    );
}
