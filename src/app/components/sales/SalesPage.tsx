import { useState } from 'react';
import { Search, Plus, FileText, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { MOCK_CLIENTS, MOCK_QUOTATIONS, Client, Quotation } from './types';
import { ClientsTable } from './ClientsTable';
import { QuotationsSection } from './QuotationsSection';
import { ClientPreview } from './ClientPreview';

export function SalesPage({ readOnly = false }: { readOnly?: boolean }) {
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


  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      {/* Header section with executive style */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-2">Comercial & CRM</h2>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Ventas y Clientes</h1>
          <p className="text-gray-500 font-medium mt-2">Gestión estratégica de oportunidades, cotizaciones y relaciones comerciales.</p>
        </div>

        {!readOnly && (
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleNewClient}
              className="bg-slate-900 hover:bg-black text-white px-6 py-6 rounded-2xl shadow-xl shadow-gray-200 transition-all hover:-translate-y-1 font-bold"
            >
              <Plus size={18} className="mr-2" />
              Nuevo Cliente
            </Button>
            <Button
              onClick={handleNewQuotation}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-6 rounded-2xl shadow-xl shadow-emerald-100 transition-all hover:-translate-y-1 font-bold"
            >
              <FileText size={18} className="mr-2" />
              Cotización
            </Button>
          </div>
        )}
      </div>

      {/* Search Bar - Upgraded to Premium */}
      <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-50 p-6">
        <div className="relative">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={24} />
          <Input
            type="text"
            placeholder="Buscar en el ecosistema de clientes (nombre, empresa, email)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-14 h-16 bg-gray-50/50 border-none rounded-2xl text-lg font-medium focus-visible:ring-2 focus-visible:ring-blue-500/20"
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Column - Clients Table and Quotations */}
        <div className="lg:col-span-2 space-y-10">
          {/* Clients Table */}
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-gray-800 tracking-tight">Cartera de Clientes</h3>
              <span className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">{filteredClients.length} activos</span>
            </div>
            <ClientsTable
              clients={filteredClients}
              onSelectClient={setSelectedClient}
              selectedClientId={selectedClient?.id}
            />
          </div>

          {/* Quotations Section */}
          <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-black text-gray-800 tracking-tight">Propuestas en Curso</h3>
              <TrendingUp className="text-emerald-500" size={20} />
            </div>
            <QuotationsSection quotations={quotations} />
          </div>
        </div>

        {/* Right Column - Client Preview */}
        <div className="lg:col-span-1">
          {selectedClient ? (
            <div className="sticky top-28">
              <ClientPreview
                client={selectedClient}
                onClose={() => setSelectedClient(null)}
              />
            </div>
          ) : (
            <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-300 mb-6">
                <Users size={32} />
              </div>
              <p className="text-slate-500 font-bold max-w-[200px]">
                Seleccione un perfil de cliente para visualizar el expediente completo
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}