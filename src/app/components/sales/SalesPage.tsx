import { useState } from 'react';
import { Search, Plus, FileText, TrendingUp, Users, Calendar } from 'lucide-react';
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
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-20">
      {/* Header section with executive style */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2 className="text-sm font-black text-emerald-600 uppercase tracking-[0.2em] mb-3">Comercial & CRM</h2>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Ventas y Clientes</h1>
          <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">
            <Calendar size={18} className="text-gray-400" />
            Gestión estratégica de oportunidades y relaciones comerciales
          </p>
        </div>

        {!readOnly && (
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={handleNewClient}
              className="bg-slate-900 hover:bg-black text-white px-8 py-7 rounded-[2rem] shadow-xl shadow-gray-200 transition-all hover:-translate-y-1 active:scale-95 font-black text-sm uppercase tracking-widest"
            >
              <Plus size={20} className="mr-2" />
              Nuevo Cliente
            </Button>
            <Button
              onClick={handleNewQuotation}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-7 rounded-[2rem] shadow-xl shadow-emerald-100 transition-all hover:-translate-y-1 active:scale-95 font-black text-sm uppercase tracking-widest"
            >
              <FileText size={20} className="mr-2" />
              Cotización
            </Button>
          </div>
        )}
      </div>

      {/* Search Bar - Upgraded to Premium */}
      <div className="bg-white rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-50 p-8">
        <div className="relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-emerald-500" size={28} />
          <Input
            type="text"
            placeholder="Buscar en el ecosistema de clientes (nombre, empresa, email)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-16 h-20 bg-gray-50/50 border-none rounded-[2rem] text-xl font-bold placeholder:text-gray-300 focus-visible:ring-4 focus-visible:ring-emerald-500/10 transition-all"
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Clients Table and Quotations */}
        <div className="lg:col-span-2 space-y-12">
          {/* Clients Table */}
          <div className="bg-white rounded-[3rem] shadow-xl shadow-gray-100 border border-gray-50 p-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl font-black text-gray-800 tracking-tight">Cartera de Clientes</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Directorio de socios comerciales activos</p>
              </div>
              <span className="px-5 py-2 bg-emerald-50 text-emerald-600 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">{filteredClients.length} perfiles</span>
            </div>
            <ClientsTable
              clients={filteredClients}
              onSelectClient={setSelectedClient}
              selectedClientId={selectedClient?.id}
            />
          </div>

          {/* Quotations Section */}
          <div className="bg-white rounded-[3rem] shadow-xl shadow-gray-100 border border-gray-50 p-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl font-black text-gray-800 tracking-tight">Propuestas en Curso</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Pipeline de negociación activa</p>
              </div>
              <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                <TrendingUp size={24} />
              </div>
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
            <div className="bg-white border border-gray-100 rounded-[3rem] p-16 text-center shadow-xl shadow-gray-100 flex flex-col items-center justify-center min-h-[500px]">
              <div className="w-24 h-24 bg-gray-50 rounded-[2rem] shadow-inner flex items-center justify-center text-gray-200 mb-8">
                <Users size={48} />
              </div>
              <h4 className="text-xl font-black text-gray-800 mb-4 tracking-tight">Seleccione un Cliente</h4>
              <p className="text-gray-400 font-bold max-w-[240px] leading-relaxed">
                Elija un perfil del listado para visualizar el historial, métricas y contactos asociados.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}