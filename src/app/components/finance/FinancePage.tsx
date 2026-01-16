import { useState } from 'react';
import { Plus, FileText, PieChart, CreditCard, DollarSign, Calendar } from 'lucide-react';
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
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-20">
            {/* Header section with executive style */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-indigo-600 uppercase tracking-[0.2em] mb-3">Módulo Financiero</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Finanzas y Facturación</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">
                        <Calendar size={18} className="text-gray-400" />
                        Gestión integral de ingresos, egresos y cumplimiento fiscal
                    </p>
                </div>

                {!readOnly && (
                    <Button
                        className="bg-slate-900 hover:bg-black text-white px-8 py-7 rounded-[2rem] shadow-xl shadow-gray-200 transition-all hover:-translate-y-1 active:scale-95 font-black text-sm uppercase tracking-widest"
                        onClick={() => setIsGeneratingInvoice(true)}
                    >
                        <Plus size={20} className="mr-2" />
                        Generar Factura Nueva
                    </Button>
                )}
            </div>

            {/* Summary Section - Upgraded to Executive Cards */}
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-50">
                <div className="flex items-center gap-3 mb-10">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl">
                        <DollarSign size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-black text-gray-800 tracking-tight">Resumen Ejecutivo</h3>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Indicadores financieros en tiempo real</p>
                    </div>
                </div>
                <FinancialSummary stats={MOCK_STATS} />
            </div>

            {/* Tabs Navigation - Premium Style */}
            <div className="flex bg-white p-3 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-100 w-fit">
                <button
                    onClick={() => setActiveTab('invoices')}
                    className={`flex items-center gap-3 px-10 py-5 rounded-[2rem] text-sm font-black transition-all ${activeTab === 'invoices'
                        ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200'
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                        }`}
                >
                    <FileText size={20} />
                    Control de Facturas
                </button>
                <button
                    onClick={() => setActiveTab('payments')}
                    className={`flex items-center gap-3 px-10 py-5 rounded-[2rem] text-sm font-black transition-all ${activeTab === 'payments'
                        ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200'
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                        }`}
                >
                    <CreditCard size={20} />
                    Gestión de Pagos
                </button>
                <button
                    onClick={() => setActiveTab('reports')}
                    className={`flex items-center gap-3 px-10 py-5 rounded-[2rem] text-sm font-black transition-all ${activeTab === 'reports'
                        ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-200'
                        : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                        }`}
                >
                    <PieChart size={20} />
                    Reportes y Análisis
                </button>
            </div>

            {/* Tab Content Area */}
            <div className="min-h-[500px]">
                {activeTab === 'invoices' && (
                    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700 space-y-8">
                        <div className="flex justify-between items-center px-6">
                            <div>
                                <h2 className="text-3xl font-black text-gray-800 tracking-tight">Registro de Facturas</h2>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Listado histórico de transacciones</p>
                            </div>
                            <div className="flex gap-3">
                                <Button variant="outline" className="rounded-2xl px-6 py-4 font-black text-xs uppercase tracking-widest border-gray-200 hover:bg-gray-50">Exportar Excel</Button>
                                <Button variant="outline" className="rounded-2xl px-6 py-4 font-black text-xs uppercase tracking-widest border-gray-200 hover:bg-gray-50">Filtros Avanzados</Button>
                            </div>
                        </div>
                        <div className="bg-white rounded-[3rem] shadow-2xl shadow-gray-200/50 border border-gray-50 overflow-hidden">
                            <InvoicesTable invoices={MOCK_INVOICES} />
                        </div>
                    </div>
                )}

                {activeTab === 'payments' && (
                    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
                        <PaymentsList payments={MOCK_PAYMENTS} />
                    </div>
                )}

                {activeTab === 'reports' && (
                    <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
                        <FinanceReports />
                    </div>
                )}
            </div>
        </div>
    );
}
