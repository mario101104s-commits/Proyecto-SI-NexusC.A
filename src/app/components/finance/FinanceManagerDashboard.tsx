import { useState } from 'react';
import { DollarSign, TrendingUp, ArrowUpCircle, ArrowDownCircle, CheckCircle, FileText, BarChart3, Calendar, ChevronRight, Calculator, ShieldCheck } from 'lucide-react';
import { FinanceDetailModal } from './FinanceDetailModal';

export function FinanceManagerDashboard({ onNavigate }: { onNavigate?: (menu: string) => void }) {
    const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const [selectedDetail, setSelectedDetail] = useState<any>(null);

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
            {/* Finance Detail Modal */}
            <FinanceDetailModal
                isOpen={!!selectedDetail}
                onClose={() => setSelectedDetail(null)}
                data={selectedDetail}
            />

            {/* Financial Control Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-indigo-600 uppercase tracking-[0.2em] mb-3">Panel de Control Financiero</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Gerencia de Finanzas</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">
                        <Calendar size={18} className="text-gray-400" />
                        {today.charAt(0).toUpperCase() + today.slice(1)}
                    </p>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-3 bg-white border border-gray-200 rounded-2xl font-bold text-sm text-gray-700 hover:shadow-lg transition-all flex items-center gap-2 active:scale-95">
                        <Calculator size={18} /> Simular Flujo
                    </button>
                    <button
                        onClick={() => onNavigate?.('reconciliations')}
                        className="px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold text-sm hover:bg-indigo-700 shadow-xl shadow-indigo-200 transition-all active:scale-95"
                    >
                        Conciliación Bancaria
                    </button>
                </div>
            </div>

            {/* Premium Financial Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FinMetricCard
                    title="Liquidez Total"
                    value="$842,500"
                    sub="Disponible en Bancos"
                    icon={<DollarSign size={24} />}
                    color="indigo"
                    trend="+5.4k"
                    onClick={() => onNavigate?.('finance')}
                />
                <FinMetricCard
                    title="Cuentas por Cobrar"
                    value="$112,000"
                    sub="Cartera Vigente (0-30d)"
                    icon={<FileText size={24} />}
                    color="purple"
                    trend="-12k"
                    onClick={() => onNavigate?.('accounts_receivable')}
                />
                <FinMetricCard
                    title="Flujo de Caja Neto"
                    value="+$24,200"
                    sub="Proyectado Q1"
                    icon={<BarChart3 size={24} />}
                    color="emerald"
                    trend="+8%"
                    onClick={() => onNavigate?.('fin_reports')}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Income Statement / P&L Section */}
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/30 rounded-full -mr-32 -mt-32 blur-3xl" />

                    <div className="relative">
                        <div className="flex justify-between items-center mb-10">
                            <div>
                                <h3 className="text-xl font-black text-gray-800 tracking-tight">Estado de Resultados P&L</h3>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Cierre Parcial Enero 2026</p>
                            </div>
                            <button
                                onClick={() => onNavigate?.('fin_reports')}
                                className="p-3 bg-gray-50 rounded-2xl hover:bg-indigo-600 hover:text-white transition-all group"
                            >
                                <TrendingUp className="group-hover:scale-110 transition-transform" size={20} />
                            </button>
                        </div>

                        <div className="space-y-5">
                            <PremiumPnLRow label="Ingresos Operacionales" amount="$450,000" type="positive" onClick={() => setSelectedDetail({ label: 'Ingresos Operacionales', type: 'audit' })} />
                            <PremiumPnLRow label="Costo de Mercancía" amount="($210,000)" type="negative" onClick={() => setSelectedDetail({ label: 'Costo de Mercancía', type: 'audit' })} />
                            <div className="flex items-center gap-4 py-2">
                                <div className="h-px bg-gray-100 flex-1" />
                                <span className="text-[10px] font-black text-gray-300 uppercase tracking-tighter">SUBTOTAL BRUTO</span>
                                <div className="h-px bg-gray-100 flex-1" />
                            </div>
                            <PremiumPnLRow label="Utilidad Bruta" amount="$240,000" type="highlight" onClick={() => setSelectedDetail({ label: 'Utilidad Bruta', type: 'audit' })} />
                            <PremiumPnLRow label="Gastos Administrativos" amount="($85,000)" type="negative" onClick={() => setSelectedDetail({ label: 'Gastos Administrativos', type: 'audit' })} />
                            <PremiumPnLRow label="Impuestos de Ley" amount="($32,500)" type="negative" onClick={() => setSelectedDetail({ label: 'Impuestos de Ley', type: 'audit' })} />
                            <div className="h-0.5 bg-gray-100 my-4" />
                            <PremiumPnLRow label="Utilidad Neta (EBITDA)" amount="$122,500" type="final" onClick={() => onNavigate?.('budget')} />
                        </div>
                    </div>
                </div>

                {/* Authorization & Approval Queue */}
                <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-900/20 text-white flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-black flex items-center gap-3">
                            <ShieldCheck className="text-indigo-400" size={22} /> Autorizaciones
                        </h3>
                        <span className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-indigo-400 border border-white/5">Queue</span>
                    </div>

                    <div className="space-y-5 flex-1 overflow-y-auto custom-scrollbar pr-2 mb-8">
                        <AuthItem
                            type="Pago Proveedor" ref_code="INV-882" amount="$12,400" department="Inventario"
                            onClick={() => setSelectedDetail({ type: 'auth', ref_code: 'INV-882', auth_type: 'Pago Proveedor', amount: '$12,400', department: 'Inventario' })}
                        />
                        <AuthItem
                            type="Viáticos de Venta" ref_code="RG-012" amount="$450" department="Ventas"
                            onClick={() => setSelectedDetail({ type: 'auth', ref_code: 'RG-012', auth_type: 'Viáticos de Venta', amount: '$450', department: 'Ventas' })}
                        />
                        <AuthItem
                            type="Nómina Quincenal II" ref_code="NOM-01" amount="$45,000" department="RRHH"
                            onClick={() => setSelectedDetail({ type: 'auth', ref_code: 'NOM-01', auth_type: 'Nómina Quincenal II', amount: '$45,000', department: 'RRHH' })}
                        />
                    </div>

                    <button
                        onClick={() => onNavigate?.('billing')}
                        className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:bg-indigo-500 transition-all flex items-center justify-center gap-2 group active:scale-95 shadow-xl shadow-indigo-900/50"
                    >
                        Ir al Centro de Pagos <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function FinMetricCard({ title, value, sub, icon, color, trend, onClick }: any) {
    const accents: any = {
        indigo: 'text-indigo-600 bg-indigo-50 shadow-indigo-100',
        purple: 'text-purple-600 bg-purple-50 shadow-purple-100',
        emerald: 'text-emerald-600 bg-emerald-50 shadow-emerald-100',
    };

    return (
        <button
            onClick={onClick}
            className="bg-white p-8 rounded-[2.25rem] shadow-xl shadow-gray-100 border border-gray-50 group hover:-translate-y-2 transition-all duration-500 text-left w-full"
        >
            <div className={`w-14 h-14 rounded-2xl ${accents[color]} flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:scale-110 duration-500`}>{icon}</div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{title}</p>
            <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-black text-gray-800 tracking-tighter">{value}</h3>
                <span className={`text-[10px] font-bold ${trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>{trend}</span>
            </div>
            <p className="text-[10px] font-bold text-gray-400 mt-2">{sub}</p>
        </button>
    );
}

function PremiumPnLRow({ label, amount, type, onClick }: any) {
    const styles: any = {
        positive: 'text-gray-700 bg-transparent hover:bg-gray-50',
        negative: 'text-rose-600 bg-transparent hover:bg-rose-50',
        highlight: 'text-indigo-900 font-black bg-indigo-50 hover:bg-indigo-100',
        final: 'text-white bg-indigo-600 shadow-xl shadow-indigo-100 hover:bg-indigo-700',
    };

    return (
        <div
            onClick={onClick}
            className={`flex items-center justify-between p-4 rounded-2xl transition-all cursor-pointer ${styles[type]}`}
        >
            <div className="flex items-center gap-3">
                {type === 'positive' && <ArrowUpCircle size={16} className="text-emerald-500" />}
                {type === 'negative' && <ArrowDownCircle size={16} className="text-rose-500" />}
                {type === 'final' && <CheckCircle size={16} className="text-indigo-200" />}
                <span className={`text-sm ${type === 'final' || type === 'highlight' ? 'font-black' : 'font-bold'}`}>{label}</span>
            </div>
            <span className={`text-sm font-black`}>{amount}</span>
        </div>
    );
}

function AuthItem({ type, ref_code, amount, department, onClick }: any) {
    return (
        <div
            onClick={onClick}
            className="p-5 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group"
        >
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h4 className="text-xs font-black text-white group-hover:text-indigo-400 transition-colors tracking-tight uppercase tracking-wider">{type}</h4>
                    <p className="text-[10px] font-bold text-gray-500">{ref_code}</p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-black text-white">{amount}</p>
                </div>
            </div>
            <div className="flex items-center justify-between text-[9px] font-bold text-gray-400">
                <span>Dpto: {department}</span>
                <span className="flex items-center gap-1 text-indigo-400">Revisar <ChevronRight size={10} /></span>
            </div>
        </div>
    );
}

