import { Edit, Send, ShoppingCart, FileText, Calendar, DollarSign } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Quotation } from './types';

interface QuotationsSectionProps {
  quotations: Quotation[];
}

export function QuotationsSection({ quotations }: QuotationsSectionProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('es-VE', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(date);
  };

  const getStatusColor = (status: Quotation['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'sent':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'approved':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'rejected':
        return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  const getStatusLabel = (status: Quotation['status']) => {
    switch (status) {
      case 'pending':
        return 'Pendiente';
      case 'sent':
        return 'Enviada';
      case 'approved':
        return 'Aprobada';
      case 'rejected':
        return 'Rechazada';
    }
  };

  const handleEdit = (quotationId: string) => {
    alert(`Editar cotización ${quotationId} - Funcionalidad en desarrollo`);
  };

  const handleSend = (quotationId: string) => {
    alert(`Enviar cotización ${quotationId} - Funcionalidad en desarrollo`);
  };

  const handleConvertToOrder = (quotationId: string) => {
    alert(`Convertir cotización ${quotationId} a pedido - Funcionalidad en desarrollo`);
  };

  const pendingQuotations = quotations.filter(
    (q) => q.status === 'pending' || q.status === 'sent'
  );

  if (pendingQuotations.length === 0) {
    return (
      <div className="text-center py-8">
        <FileText size={48} className="mx-auto text-gray-300 mb-3" />
        <p className="text-gray-500">No hay cotizaciones pendientes</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {pendingQuotations.map((quotation) => (
        <div
          key={quotation.id}
          className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-gray-800">{quotation.clientName}</h3>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                    quotation.status
                  )}`}
                >
                  {getStatusLabel(quotation.status)}
                </span>
              </div>
              <p className="text-sm text-gray-500">Cotización #{quotation.id}</p>
            </div>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-gray-100">
            <div className="flex items-center gap-2 text-sm">
              <Calendar size={16} className="text-gray-400" />
              <div>
                <p className="text-gray-500 text-xs">Fecha</p>
                <p className="text-gray-700 font-medium">{formatDate(quotation.date)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar size={16} className="text-gray-400" />
              <div>
                <p className="text-gray-500 text-xs">Válida hasta</p>
                <p className="text-gray-700 font-medium">{formatDate(quotation.validUntil)}</p>
              </div>
            </div>
          </div>

          {/* Items Preview */}
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-2">
              {quotation.items.length} {quotation.items.length === 1 ? 'producto' : 'productos'}
            </p>
            <div className="space-y-1">
              {quotation.items.slice(0, 2).map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {item.product} <span className="text-gray-400">x{item.quantity}</span>
                  </span>
                  <span className="text-gray-700 font-medium">
                    {formatCurrency(item.total)}
                  </span>
                </div>
              ))}
              {quotation.items.length > 2 && (
                <p className="text-xs text-gray-400">
                  +{quotation.items.length - 2} producto(s) más
                </p>
              )}
            </div>
          </div>

          {/* Total */}
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
            <span className="text-sm font-semibold text-gray-600">Total:</span>
            <div className="flex items-center gap-1">
              <DollarSign size={18} className="text-green-600" />
              <span className="text-xl font-bold text-gray-800">
                {formatCurrency(quotation.total)}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleEdit(quotation.id)}
              className="flex items-center gap-1 border-gray-300 hover:bg-gray-100"
            >
              <Edit size={14} />
              Editar
            </Button>
            {quotation.status === 'pending' && (
              <Button
                size="sm"
                onClick={() => handleSend(quotation.id)}
                className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Send size={14} />
                Enviar
              </Button>
            )}
            <Button
              size="sm"
              onClick={() => handleConvertToOrder(quotation.id)}
              className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white"
            >
              <ShoppingCart size={14} />
              Convertir a Pedido
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
