import { useState } from 'react';
import { Plus, ShoppingBag, Truck } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { MOCK_ORDERS, MOCK_SUPPLIERS } from './types';
import { OrdersList } from './OrdersList';
import { SuppliersList } from './SuppliersList';
import { NewOrderModal } from './NewOrderModal';

export function PurchasesPage({ readOnly = false }: { readOnly?: boolean }) {
    const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false);

    return (
        <div className="space-y-10 animate-in fade-in duration-500">
            {/* Header section with executive style */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-rose-600 uppercase tracking-widest mb-2">Abastecimiento Estratégico</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Compras y Proveedores</h1>
                    <p className="text-gray-500 font-medium mt-2">Optimización de la cadena de suministro y gestión de relaciones con aliados.</p>
                </div>

                {!readOnly && (
                    <Button
                        className="bg-slate-900 hover:bg-black text-white px-8 py-6 rounded-2xl shadow-xl shadow-gray-200 transition-all hover:-translate-y-1 font-bold"
                        onClick={() => setIsNewOrderModalOpen(true)}
                    >
                        <Plus size={20} className="mr-2" />
                        Nueva Orden de Suministro
                    </Button>
                )}
            </div>

            {/* Content Grid Upgraded */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Main Column: Orders */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between px-4 mb-2">
                        <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-rose-50 rounded-xl text-rose-600">
                                <ShoppingBag size={20} />
                            </div>
                            <h2 className="text-2xl font-black text-gray-800 tracking-tight">Registro de Órdenes</h2>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Actualizado hace 5m</span>
                    </div>

                    <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 overflow-hidden p-2">
                        <OrdersList orders={MOCK_ORDERS} />
                    </div>
                </div>

                {/* Side Column: Suppliers */}
                <div className="space-y-6">
                    <div className="flex items-center gap-3 px-4 mb-2">
                        <div className="p-2.5 bg-slate-100 rounded-xl text-slate-600">
                            <Truck size={20} />
                        </div>
                        <h2 className="text-2xl font-black text-gray-800 tracking-tight">Panel de Aliados</h2>
                    </div>

                    <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 p-6">
                        <SuppliersList suppliers={MOCK_SUPPLIERS} />
                    </div>
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
