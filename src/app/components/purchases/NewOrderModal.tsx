import { X, Plus, Calendar, Building2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { MOCK_SUPPLIERS } from './types';

interface NewOrderModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function NewOrderModal({ isOpen, onClose }: NewOrderModalProps) {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Crear Orden - Funcionalidad en desarrollo');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 overflow-hidden animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800">Nueva Orden de Compra</h2>
                    <Button variant="ghost" size="sm" onClick={onClose} className="p-2 h-auto text-gray-500 hover:text-red-500">
                        <X size={20} />
                    </Button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Proveedor</label>
                        <div className="relative">
                            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <select className="w-full h-11 pl-10 pr-4 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">Seleccionar proveedor...</option>
                                {MOCK_SUPPLIERS.map(s => (
                                    <option key={s.id} value={s.id}>{s.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Fecha de Entrega Esperada</label>
                        <div className="relative">
                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <Input type="date" className="pl-10 h-11 bg-gray-50 border-gray-200" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Notas / Referencia</label>
                        <textarea
                            className="w-full p-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                            placeholder="Detalles adicionales de la orden..."
                        />
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4">
                        <Button type="button" variant="outline" onClick={onClose} className="text-gray-600">
                            Cancelar
                        </Button>
                        <Button type="submit" className="bg-blue-800 hover:bg-blue-900 text-white shadow-md">
                            <Plus size={18} className="mr-2" />
                            Crear Orden
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
