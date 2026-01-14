import { 
  X, 
  User, 
  Phone, 
  Mail, 
  Building2, 
  MapPin, 
  DollarSign, 
  ShoppingBag,
  Calendar,
  FileText,
  Edit
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Client } from './types';

interface ClientPreviewProps {
  client: Client;
  onClose: () => void;
}

export function ClientPreview({ client, onClose }: ClientPreviewProps) {
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

  const getStatusColor = (status: Client['status']) => {
    switch (status) {
      case 'vip':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'inactive':
        return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  const getStatusLabel = (status: Client['status']) => {
    switch (status) {
      case 'vip':
        return 'Cliente VIP';
      case 'active':
        return 'Activo';
      case 'inactive':
        return 'Inactivo';
    }
  };

  const handleEdit = () => {
    alert('Funcionalidad de edición de cliente en desarrollo');
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-lg sticky top-6">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <User size={24} className="text-blue-700" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{client.name}</h2>
              <p className="text-sm text-gray-500">ID: {client.id}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <span
          className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
            client.status
          )}`}
        >
          {getStatusLabel(client.status)}
        </span>
      </div>

      {/* Contact Information */}
      <div className="p-6 border-b border-gray-200 space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Información de Contacto</h3>
        
        <div className="flex items-start gap-3">
          <Phone size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500">Teléfono</p>
            <p className="text-sm text-gray-800">{client.phone}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Mail size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-sm text-gray-800 break-words">{client.email}</p>
          </div>
        </div>

        {client.company && (
          <div className="flex items-start gap-3">
            <Building2 size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Empresa</p>
              <p className="text-sm text-gray-800">{client.company}</p>
            </div>
          </div>
        )}

        {client.address && (
          <div className="flex items-start gap-3">
            <MapPin size={16} className="text-gray-400 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs text-gray-500">Dirección</p>
              <p className="text-sm text-gray-800">{client.address}</p>
            </div>
          </div>
        )}
      </div>

      {/* Purchase Statistics */}
      <div className="p-6 border-b border-gray-200 space-y-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Estadísticas de Compra</h3>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign size={16} className="text-blue-600" />
            <p className="text-xs text-blue-600 font-medium">Total en Compras</p>
          </div>
          <p className="text-2xl font-bold text-blue-800">
            {formatCurrency(client.totalPurchases)}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Calendar size={16} className="text-gray-400 mt-0.5" />
          <div>
            <p className="text-xs text-gray-500">Última Compra</p>
            <p className="text-sm text-gray-800">{formatDate(client.lastPurchase)}</p>
          </div>
        </div>
      </div>

      {/* Notes */}
      {client.notes && (
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <FileText size={16} className="text-gray-400" />
            <h3 className="text-sm font-semibold text-gray-700">Notas</h3>
          </div>
          <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg border border-yellow-100">
            {client.notes}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="p-6">
        <Button
          onClick={handleEdit}
          className="w-full bg-blue-800 hover:bg-blue-900 text-white"
        >
          <Edit size={16} className="mr-2" />
          Editar Cliente
        </Button>
      </div>
    </div>
  );
}
