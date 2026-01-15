import { MoreVertical, ArrowUpRight, ArrowDownLeft, Check, Clock } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Payment } from './types';

interface PaymentsListProps {
    payments: Payment[];
}

export function PaymentsList({ payments }: PaymentsListProps) {
    const getStatusBadge = (status: Payment['status']) => {
        switch (status) {
            case 'completed':
                return (
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit">
                        <Check size={12} /> Completado
                    </span>
                );
            case 'pending':
                return (
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit">
                        <Clock size={12} /> Pendiente
                    </span>
                );
        }
    };

    const getTypeIcon = (type: Payment['type']) => {
        return type === 'income'
            ? <ArrowDownLeft size={18} className="text-green-600" />
            : <ArrowUpRight size={18} className="text-red-600" />;
    };

    const getMethodLabel = (method: Payment['method']) => {
        switch (method) {
            case 'transfer': return 'Transferencia';
            case 'cash': return 'Efectivo';
            case 'check': return 'Cheque';
            case 'card': return 'Tarjeta';
            default: return method;
        }
    };

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm animate-in fade-in duration-300">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-gray-700">Referencia</th>
                            <th className="px-6 py-4 font-semibold text-gray-700">Entidad</th>
                            <th className="px-6 py-4 font-semibold text-gray-700">Tipo</th>
                            <th className="px-6 py-4 font-semibold text-gray-700">Método</th>
                            <th className="px-6 py-4 font-semibold text-gray-700">Monto</th>
                            <th className="px-6 py-4 font-semibold text-gray-700">Estado</th>
                            <th className="px-6 py-4 text-right font-semibold text-gray-700">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {payments.map((payment) => (
                            <tr key={payment.id} className="hover:bg-gray-50 transition-colors group">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    <div>
                                        {payment.reference}
                                        <p className="text-xs text-gray-500 font-normal mt-0.5">{payment.date}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{payment.entity}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`p-1.5 rounded-full ${payment.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`}>
                                            {getTypeIcon(payment.type)}
                                        </div>
                                        <span className={`capitalize ${payment.type === 'income' ? 'text-green-700' : 'text-red-700'} font-medium`}>
                                            {payment.type === 'income' ? 'Ingreso' : 'Egreso'}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">{getMethodLabel(payment.method)}</td>
                                <td className={`px-6 py-4 font-bold ${payment.type === 'income' ? 'text-green-600' : 'text-gray-800'}`}>
                                    {payment.type === 'income' ? '+' : '-'}${payment.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                                </td>
                                <td className="px-6 py-4">{getStatusBadge(payment.status)}</td>
                                <td className="px-6 py-4 text-right">
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-blue-600">
                                        <MoreVertical size={16} />
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
