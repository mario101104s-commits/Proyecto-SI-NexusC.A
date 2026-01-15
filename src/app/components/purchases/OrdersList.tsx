import { Eye, Clock, CheckCircle, XCircle } from 'lucide-react';
import { PurchaseOrder } from './types';

interface OrdersListProps {
    orders: PurchaseOrder[];
}

export function OrdersList({ orders }: OrdersListProps) {
    const getStatusConfig = (status: PurchaseOrder['status']) => {
        switch (status) {
            case 'received':
                return {
                    label: 'Recibido',
                    color: 'bg-green-100 text-green-700 border-green-200',
                    icon: <CheckCircle size={14} className="text-green-600" />
                };
            case 'pending':
                return {
                    label: 'Pendiente',
                    color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
                    icon: <Clock size={14} className="text-yellow-600" />
                };
            case 'cancelled':
                return {
                    label: 'Cancelado',
                    color: 'bg-red-100 text-red-700 border-red-200',
                    icon: <XCircle size={14} className="text-red-600" />
                };
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('es-VE', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orden</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Proveedor</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {orders.map((order) => {
                            const status = getStatusConfig(order.status);
                            return (
                                <tr key={order.id} className="hover:bg-gray-50 transition-colors cursor-pointer group">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
                                            {order.number}
                                        </span>
                                        <p className="text-xs text-gray-500">{order.items} items</p>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {order.supplierName}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {formatDate(order.date)}
                                        <span className="block text-xs text-gray-400">Esp: {formatDate(order.expectedDate)}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">
                                        {formatCurrency(order.total)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${status.color}`}>
                                            {status.icon}
                                            {status.label}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
