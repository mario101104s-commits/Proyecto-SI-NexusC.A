import { X, ShoppingBag, User, DollarSign, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface SellerDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any | null;
}

export function SellerDetailModal({ isOpen, onClose, data }: SellerDetailModalProps) {
    if (!isOpen || !data) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />

            <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header Section */}
                <div className={`p-8 text-white ${data.type === 'order' ? 'bg-indigo-600' : data.type === 'client' ? 'bg-emerald-600' : 'bg-amber-500'}`}>
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white/10 rounded-2xl">
                            {data.type === 'order' ? <ShoppingBag size={24} /> : data.type === 'client' ? <User size={24} /> : <DollarSign size={24} />}
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight">{data.label || data.name || data.id}</h2>
                    <p className="text-white/80 font-bold uppercase tracking-widest text-xs mt-2">
                        {data.type === 'order' ? `Pedido en ${data.status || 'Proceso'}` : data.type === 'client' ? 'Expediente del Cliente' : 'Corte de Comisiones'}
                    </p>
                </div>

                {/* Content Section */}
                <div className="p-10 space-y-8">
                    {data.type === 'order' ? (
                        <>
                            <div className="flex items-center justify-between p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Total del Pedido</p>
                                    <p className="text-3xl font-black text-gray-900">{data.amount || '$0.00'}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Método Pago</p>
                                    <p className="text-sm font-bold text-indigo-600">Crédito 30 días</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest px-1">Artículos en Orden</h4>
                                <div className="space-y-3 bg-indigo-50/30 p-6 rounded-[2rem] border border-indigo-100/50">
                                    <OrderItem label="Producto A - Lote Premium" qty="50 un" price="$2,500" />
                                    <OrderItem label="Producto B - Estandar" qty="100 un" price="$1,200" />
                                    <OrderItem label="Servicio de Flete" qty="1 un" price="$150" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100 text-center">
                                    <p className="text-[10px] font-black text-emerald-600 uppercase mb-1">Compras Mes</p>
                                    <p className="text-2xl font-black text-emerald-700">$14,200</p>
                                </div>
                                <div className="p-6 bg-amber-50 rounded-[2rem] border border-amber-100 text-center">
                                    <p className="text-[10px] font-black text-amber-600 uppercase mb-1">Fidelidad</p>
                                    <p className="text-2xl font-black text-amber-700">9.4/10</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest px-1">Última Interacción</h4>
                                <div className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Clock size={14} className="text-gray-400" />
                                        <span className="text-[10px] font-black text-gray-400">Hace 3 días</span>
                                    </div>
                                    <p className="text-sm font-bold text-gray-800 leading-relaxed">
                                        "El cliente solicita cotización para renovación de stock de temporada. Interesado en nuevos descuentos por volumen."
                                    </p>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="flex gap-4 pt-4">
                        <Button className="flex-1 py-6 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-2xl font-black text-sm transition-all">
                            Exportar PDF
                        </Button>
                        <Button className={`flex-1 py-6 text-white rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 group shadow-xl ${data.type === 'order' ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100' : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-100'}`}>
                            {data.type === 'order' ? 'Seguir Envío' : 'Gestionar Cliente'}
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OrderItem({ label, qty, price }: any) {
    return (
        <div className="flex justify-between items-center py-2 border-b border-indigo-100/50 last:border-0">
            <div>
                <p className="text-xs font-black text-gray-900">{label}</p>
                <p className="text-[10px] font-bold text-gray-400">{qty}</p>
            </div>
            <p className="text-sm font-black text-indigo-600">{price}</p>
        </div>
    );
}
