import { Download, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Invoice } from './types';

interface InvoicesTableProps {
    invoices: Invoice[];
}

export function InvoicesTable({ invoices }: InvoicesTableProps) {
    const getStatusConfig = (status: Invoice['status']) => {
        switch (status) {
            case 'paid':
                return {
                    label: 'Pagada',
                    color: 'bg-green-100 text-green-700 border-green-200',
                    icon: <CheckCircle size={14} />
                };
            case 'pending':
                return {
                    label: 'Pendiente',
                    color: 'bg-yellow-100 text-yellow-700 border-yellow-200',
                    icon: <ClockIcon size={14} />
                };
            case 'overdue':
                return {
                    label: 'Vencida',
                    color: 'bg-red-100 text-red-700 border-red-200',
                    icon: <AlertCircle size={14} />
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
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Factura</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Monto</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vencimiento</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {invoices.map((invoice) => {
                            const status = getStatusConfig(invoice.status);
                            return (
                                <tr key={invoice.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <FileText size={16} className="text-gray-400" />
                                            <span className="font-medium text-gray-900">{invoice.number}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                        {invoice.client}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-800">
                                        {formatCurrency(invoice.amount)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {formatDate(invoice.dueDate)}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border ${status.color}`}>
                                            {status.icon}
                                            {status.label}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="h-8 w-8 p-0 text-gray-500 hover:text-blue-600 hover:bg-blue-50"
                                                title="Descargar PDF"
                                                onClick={() => alert('Descargar PDF - En desarrollo')}
                                            >
                                                <Download size={16} />
                                            </Button>
                                            {invoice.status !== 'paid' && (
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-8 w-8 p-0 text-gray-500 hover:text-green-600 hover:bg-green-50"
                                                    title="Marcar como Pagada"
                                                    onClick={() => alert('Marcar como pagada - En desarrollo')}
                                                >
                                                    <CheckCircle size={16} />
                                                </Button>
                                            )}
                                        </div>
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

// Icon helper since ClockIcon isn't exported by default in some sets, using a simple SVG or Lucide Clock
import { Clock } from 'lucide-react';
const ClockIcon = Clock;
