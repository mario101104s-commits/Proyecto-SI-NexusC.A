import { useState } from 'react';
import { ArrowLeft, Check, FileText } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

interface InvoiceGeneratorProps {
    onCancel: () => void;
}

export function InvoiceGenerator({ onCancel }: InvoiceGeneratorProps) {
    const [formData, setFormData] = useState({
        client: '',
        orderRef: '',
        date: new Date().toISOString().split('T')[0],
        dueDate: '',
        items: [{ description: '', quantity: 1, price: 0 }]
    });

    const handleAddItem = () => {
        setFormData({
            ...formData,
            items: [...formData.items, { description: '', quantity: 1, price: 0 }]
        });
    };

    const calculateTotal = () => {
        return formData.items.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-8 max-w-4xl mx-auto shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-6">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FileText className="text-blue-600" />
                        Nueva Factura
                    </h2>
                    <p className="text-gray-500 mt-1">Complete los detalles para generar y enviar la factura</p>
                </div>
                <Button variant="outline" onClick={onCancel} className="text-gray-600">
                    <ArrowLeft size={16} className="mr-2" />
                    Volver
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Cliente</label>
                    <Input
                        placeholder="Nombre del cliente o empresa"
                        value={formData.client}
                        onChange={e => setFormData({ ...formData, client: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Referencia de Pedido (Opcional)</label>
                    <Input
                        placeholder="Ej: PED-001"
                        value={formData.orderRef}
                        onChange={e => setFormData({ ...formData, orderRef: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Fecha de Emisión</label>
                    <Input
                        type="date"
                        value={formData.date}
                        onChange={e => setFormData({ ...formData, date: e.target.value })}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Fecha de Vencimiento</label>
                    <Input
                        type="date"
                        value={formData.dueDate}
                        onChange={e => setFormData({ ...formData, dueDate: e.target.value })}
                    />
                </div>
            </div>

            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Items</h3>
                <div className="space-y-3">
                    {formData.items.map((item, index) => (
                        <div key={index} className="grid grid-cols-12 gap-3 items-end">
                            <div className="col-span-6">
                                <Input
                                    placeholder="Descripción del servicio o producto"
                                    value={item.description}
                                    onChange={e => {
                                        const newItems = [...formData.items];
                                        newItems[index].description = e.target.value;
                                        setFormData({ ...formData, items: newItems });
                                    }}
                                />
                            </div>
                            <div className="col-span-2">
                                <Input
                                    type="number"
                                    min="1"
                                    placeholder="Cant."
                                    value={item.quantity}
                                    onChange={e => {
                                        const newItems = [...formData.items];
                                        newItems[index].quantity = parseInt(e.target.value) || 0;
                                        setFormData({ ...formData, items: newItems });
                                    }}
                                />
                            </div>
                            <div className="col-span-3">
                                <Input
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    placeholder="Precio Unit."
                                    value={item.price}
                                    onChange={e => {
                                        const newItems = [...formData.items];
                                        newItems[index].price = parseFloat(e.target.value) || 0;
                                        setFormData({ ...formData, items: newItems });
                                    }}
                                />
                            </div>
                            <div className="col-span-1 py-2 text-right font-medium text-gray-700">
                                ${(item.quantity * item.price).toFixed(2)}
                            </div>
                        </div>
                    ))}
                    <Button variant="ghost" onClick={handleAddItem} className="text-blue-600 hover:text-blue-700 mt-2">
                        + Agregar Item
                    </Button>
                </div>
            </div>

            <div className="flex flex-col items-end border-t border-gray-100 pt-6">
                <div className="flex items-center justify-between w-full md:w-1/3 mb-6">
                    <span className="text-lg font-semibold text-gray-700">Total a Pagar:</span>
                    <span className="text-2xl font-bold text-gray-900">${calculateTotal().toLocaleString('es-VE', { minimumFractionDigits: 2 })}</span>
                </div>

                <div className="flex gap-4">
                    <Button variant="outline" onClick={onCancel} className="w-32">Cancelar</Button>
                    <Button onClick={() => alert('Generar Factura - En desarrollo')} className="w-48 bg-blue-800 hover:bg-blue-900 text-white">
                        <Check size={18} className="mr-2" />
                        Emitir Factura
                    </Button>
                </div>
            </div>
        </div>
    );
}
