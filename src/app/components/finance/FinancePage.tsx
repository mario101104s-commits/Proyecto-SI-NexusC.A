import { useState } from 'react';
import { Plus, FileText, PieChart, CreditCard } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { MOCK_STATS, MOCK_INVOICES } from './types';
import { FinancialSummary } from './FinancialSummary';
import { InvoicesTable } from './InvoicesTable';
import { InvoiceGenerator } from './InvoiceGenerator';

type FinanceTab = 'invoices' | 'payments' | 'reports';

export function FinancePage() {
    const [activeTab, setActiveTab] = useState<FinanceTab>('invoices');
    const [isGeneratingInvoice, setIsGeneratingInvoice] = useState(false);

    if (isGeneratingInvoice) {
        return <InvoiceGenerator onCancel={() => setIsGeneratingInvoice(false)} />;
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">Finanzas y Facturación</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Gestión de ingresos, egresos y facturación electrónica
                    </p>
                </div>

                <Button
                    className="bg-blue-800 hover:bg-blue-900 text-white shadow-md"
                    onClick={() => setIsGeneratingInvoice(true)}
                >
                    <Plus size={18} className="mr-2" />
                    Generar Factura
                </Button>
            </div>

            {/* Summary Cards */}
            <FinancialSummary stats={MOCK_STATS} />

            {/* Tabs Navigation */}
            <div className="flex border-b border-gray-200 mb-6">
                <button
                    onClick={() => setActiveTab('invoices')}
                    className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'invoices'
                            ? 'border-blue-800 text-blue-800'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                >
                    <FileText size={18} />
                    Facturas
                </button>
                <button
                    onClick={() => setActiveTab('payments')}
                    className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'payments'
                            ? 'border-blue-800 text-blue-800'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                >
                    <CreditCard size={18} />
                    Pagos
                </button>
                <button
                    onClick={() => setActiveTab('reports')}
                    className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors border-b-2 ${activeTab === 'reports'
                            ? 'border-blue-800 text-blue-800'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                >
                    <PieChart size={18} />
                    Reportes
                </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
                {activeTab === 'invoices' && (
                    <div className="animate-in fade-in duration-300">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-700">Facturas Recientes</h2>
                            <Button variant="outline" size="sm">Filtrar por Fecha</Button>
                        </div>
                        <InvoicesTable invoices={MOCK_INVOICES} />
                    </div>
                )}

                {activeTab === 'payments' && (
                    <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-300 bg-white rounded-xl border border-gray-200">
                        <CreditCard size={48} className="text-gray-300 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">Historial de Pagos</h3>
                        <p className="text-gray-500 max-w-sm mt-1">Este módulo permitirá gestionar los pagos recibidos y conciliaciones bancarias.</p>
                    </div>
                )}

                {activeTab === 'reports' && (
                    <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in duration-300 bg-white rounded-xl border border-gray-200">
                        <PieChart size={48} className="text-gray-300 mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">Reportes Financieros</h3>
                        <p className="text-gray-500 max-w-sm mt-1">Próximamente: Gráficos avanzados de flujo de caja y balances mensuales.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
