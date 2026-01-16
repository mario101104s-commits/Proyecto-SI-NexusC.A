import { useState } from 'react';
import { Plus, FileText, PieChart, CreditCard } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { MOCK_STATS, MOCK_INVOICES, MOCK_PAYMENTS } from './types';
import { FinancialSummary } from './FinancialSummary';
import { InvoicesTable } from './InvoicesTable';
import { InvoiceGenerator } from './InvoiceGenerator';
import { PaymentsList } from './PaymentsList';
import { FinanceReports } from './FinanceReports';

type FinanceTab = 'invoices' | 'payments' | 'reports';

export function FinancePage({ readOnly = false }: { readOnly?: boolean }) {
    const [activeTab, setActiveTab] = useState<FinanceTab>('invoices');
    const [isGeneratingInvoice, setIsGeneratingInvoice] = useState(false);

    if (isGeneratingInvoice) {
        return <InvoiceGenerator onCancel={() => setIsGeneratingInvoice(false)} />;
    }

    return (
        <div className="space-y-10 animate-in fade-in duration-500">
            {/* Header section with executive style */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">Módulo Financiero</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Finanzas y Facturación</h1>
                    <p className="text-gray-500 font-medium mt-2">Gestión integral de ingresos, egresos y cumplimiento fiscal.</p>
                </div>

                {!readOnly && (
                    <Button
                        className="bg-slate-900 hover:bg-black text-white px-8 py-6 rounded-2xl shadow-xl shadow-gray-200 transition-all hover:-translate-y-1 font-bold"
                        onClick={() => setIsGeneratingInvoice(true)}
                    >
                        <Plus size={20} className="mr-2" />
                        Generar Factura Nueva
                    </Button>
                )}
            </div>

            {/* Summary Section - Upgraded to Executive Cards */}
            <FinancialSummary stats={MOCK_STATS} />

            {/* Tabs Navigation - Premium Style */}
            <div className="flex bg-white p-2 rounded-[2rem] shadow-sm border border-gray-100 w-fit">
                <button
                    onClick={() => setActiveTab('invoices')}
                    className={`flex items-center gap-2 px-8 py-3 rounded-2xl text-sm font-black transition-all ${activeTab === 'invoices'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                        : 'text-gray-400 hover:text-gray-600'
                        }`}
                >
                    <FileText size={18} />
                    Control de Facturas
                </button>
                <button
                    onClick={() => setActiveTab('payments')}
                    className={`flex items-center gap-2 px-8 py-3 rounded-2xl text-sm font-black transition-all ${activeTab === 'payments'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                        : 'text-gray-400 hover:text-gray-600'
                        }`}
                >
                    <CreditCard size={18} />
                    Gestión de Pagos
                </button>
                <button
                    onClick={() => setActiveTab('reports')}
                    className={`flex items-center gap-2 px-8 py-3 rounded-2xl text-sm font-black transition-all ${activeTab === 'reports'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                        : 'text-gray-400 hover:text-gray-600'
                        }`}
                >
                    <PieChart size={18} />
                    Reportes y Análisis
                </button>
            </div>

            {/* Tab Content Area */}
            <div className="min-h-[500px]">
                {activeTab === 'invoices' && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-6">
                        <div className="flex justify-between items-center px-4">
                            <h2 className="text-2xl font-black text-gray-800 tracking-tight">Registro de Facturas</h2>
                            <div className="flex gap-2">
                                <Button variant="outline" className="rounded-xl font-bold border-gray-200">Exportar Excel</Button>
                                <Button variant="outline" className="rounded-xl font-bold border-gray-200">Filtros Avanzados</Button>
                            </div>
                        </div>
                        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 overflow-hidden">
                            <InvoicesTable invoices={MOCK_INVOICES} />
                        </div>
                    </div>
                )}

                {activeTab === 'payments' && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <PaymentsList payments={MOCK_PAYMENTS} />
                    </div>
                )}

                {activeTab === 'reports' && (
                    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                        <FinanceReports />
                    </div>
                )}
            </div>
        </div>
    );
}
