import { useState } from 'react';
import { Search, Plus, FileText, ShoppingCart, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { MOCK_CLIENTS, MOCK_QUOTATIONS, Client, Quotation } from './types';
import { ClientsTable } from './ClientsTable';
import { QuotationsSection } from './QuotationsSection';
import { ClientPreview } from './ClientPreview';

export function SalesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [clients] = useState<Client[]>(MOCK_CLIENTS);
  const [quotations] = useState<Quotation[]>(MOCK_QUOTATIONS);

  const filteredClients = clients.filter(
    (client) =>
      client.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.phone.includes(searchQuery) ||
      client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      client.company?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNewClient = () => {
    alert('Funcionalidad de Nuevo Cliente en desarrollo');
  };

  const handleNewQuotation = () => {
    alert('Funcionalidad de Nueva Cotización en desarrollo');
  };

  const handleNewOrder = () => {
    alert('Funcionalidad de Generar Pedido en desarrollo');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Gestión de Ventas y CRM</h1>
          <p className="text-sm text-gray-500 mt-1">
            Administra clientes, cotizaciones y pedidos
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={handleNewClient}
            className="bg-blue-800 hover:bg-blue-900 text-white shadow-md"
          >
            <Plus size={18} className="mr-2" />
            Nuevo Cliente
          </Button>
          <Button
            onClick={handleNewQuotation}
            className="bg-green-700 hover:bg-green-800 text-white shadow-md"
          >
            <FileText size={18} className="mr-2" />
            Nueva Cotización
          </Button>
          <Button
            onClick={handleNewOrder}
            className="bg-purple-700 hover:bg-purple-800 text-white shadow-md"
          >
            <ShoppingCart size={18} className="mr-2" />
            Generar Pedido
          </Button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Buscar por nombre, teléfono, email o empresa..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 bg-gray-50 border-gray-200"
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Clients Table and Quotations */}
        <div className="lg:col-span-2 space-y-6">
          {/* Clients Table */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Clientes Recientes ({filteredClients.length})
            </h2>
            <ClientsTable
              clients={filteredClients}
              onSelectClient={setSelectedClient}
              selectedClientId={selectedClient?.id}
            />
          </div>

          {/* Quotations Section */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Cotizaciones Pendientes ({quotations.filter(q => q.status === 'pending' || q.status === 'sent').length})
            </h2>
            <QuotationsSection quotations={quotations} />
          </div>
        </div>

        {/* Right Column - Client Preview */}
        <div className="lg:col-span-1">
          {selectedClient ? (
            <ClientPreview
              client={selectedClient}
              onClose={() => setSelectedClient(null)}
            />
          ) : (
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-6 text-center">
              <p className="text-gray-500 text-sm">
                Selecciona un cliente para ver su perfil
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}