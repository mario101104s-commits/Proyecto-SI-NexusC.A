import { Eye, Phone, Mail, Building2 } from 'lucide-react';
import { Client } from './types';

interface ClientsTableProps {
  clients: Client[];
  onSelectClient: (client: Client) => void;
  selectedClientId?: string;
}

export function ClientsTable({ clients, onSelectClient, selectedClientId }: ClientsTableProps) {
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
        return 'VIP';
      case 'active':
        return 'Activo';
      case 'inactive':
        return 'Inactivo';
    }
  };

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

  if (clients.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No se encontraron clientes</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
              Cliente
            </th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
              Contacto
            </th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
              Última Compra
            </th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
              Total Compras
            </th>
            <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">
              Estado
            </th>
            <th className="text-center py-3 px-4 text-sm font-semibold text-gray-600">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr
              key={client.id}
              className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                selectedClientId === client.id ? 'bg-blue-50' : ''
              }`}
            >
              <td className="py-4 px-4">
                <div>
                  <p className="font-medium text-gray-800">{client.name}</p>
                  {client.company && (
                    <div className="flex items-center gap-1 mt-1">
                      <Building2 size={12} className="text-gray-400" />
                      <p className="text-xs text-gray-500">{client.company}</p>
                    </div>
                  )}
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={14} className="text-gray-400" />
                    <span>{client.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={14} className="text-gray-400" />
                    <span className="truncate max-w-[200px]">{client.email}</span>
                  </div>
                </div>
              </td>
              <td className="py-4 px-4">
                <span className="text-sm text-gray-600">
                  {formatDate(client.lastPurchase)}
                </span>
              </td>
              <td className="py-4 px-4">
                <span className="font-semibold text-gray-800">
                  {formatCurrency(client.totalPurchases)}
                </span>
              </td>
              <td className="py-4 px-4">
                <span
                  className={`inline-flex px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    client.status
                  )}`}
                >
                  {getStatusLabel(client.status)}
                </span>
              </td>
              <td className="py-4 px-4 text-center">
                <button
                  onClick={() => onSelectClient(client)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Eye size={16} />
                  <span>Ver</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
