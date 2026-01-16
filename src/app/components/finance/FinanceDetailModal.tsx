import { X, ShieldCheck, ChevronRight, FileText, ArrowUpCircle, ArrowDownCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface FinanceDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any | null;
}

export function FinanceDetailModal({ isOpen, onClose, data }: FinanceDetailModalProps) {
    if (!isOpen || !data) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />

            <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header Section */}
                <div className="bg-indigo-600 p-8 text-white">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white/10 rounded-2xl">
                            {data.type === 'auth' ? <ShieldCheck size={24} /> : <FileText size={24} />}
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight">{data.label || (data.type === 'auth' ? data.ref_code : 'Análisis Financiero')}</h2>
                    <p className="text-indigo-200 font-bold uppercase tracking-widest text-xs mt-2">
                        {data.type === 'auth' ? 'Revisión de Autorización Requerida' : 'Auditoría de Cuenta Detallada'}
                    </p>
                </div>

                {/* Content Section */}
                <div className="p-10 space-y-8">
                    {data.type === 'auth' ? (
                        <>
                            <div className="flex items-center justify-between p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                                <div>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Concepto de Pago</p>
                                    <p className="text-2xl font-black text-gray-900">{data.auth_type || 'Gasto Operativo'}</p>
                                    <p className="text-sm font-bold text-indigo-600 mt-1">Dpto: {data.department}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Monto Total</p>
                                    <p className="text-3xl font-black text-gray-900">{data.amount}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest px-1">Checklist de Cumplimiento</h4>
                                <div className="space-y-3 bg-indigo-50/30 p-6 rounded-[2rem] border border-indigo-100/50">
                                    <CheckItem label="Factura Fiscal Válida (PDF)" checked />
                                    <CheckItem label="Orden de Compra Asociada" checked />
                                    <CheckItem label="Recibo de Almacén (GRN)" checked />
                                    <CheckItem label="Balance de Presupuesto Disponible" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <ArrowUpCircle size={14} className="text-emerald-500" />
                                        <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Ejecución</p>
                                    </div>
                                    <p className="text-2xl font-black text-emerald-700">92.4%</p>
                                </div>
                                <div className="p-6 bg-rose-50 rounded-[2rem] border border-rose-100">
                                    <div className="flex items-center gap-2 mb-2">
                                        <ArrowDownCircle size={14} className="text-rose-500" />
                                        <p className="text-[10px] font-black text-rose-600 uppercase tracking-widest">Desviación</p>
                                    </div>
                                    <p className="text-2xl font-black text-rose-700">-3.2%</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest px-1">Historial del Periodo</h4>
                                <div className="bg-gray-50 p-6 rounded-[2.5rem] divide-y divide-gray-100">
                                    <HistoryRow date="15 Ene" label="Apertura de Caja" amount="+$12,000" />
                                    <HistoryRow date="12 Ene" label="Pago Servicios" amount="-$2,400" />
                                    <HistoryRow date="10 Ene" label="Nómina Admins" amount="-$15,800" />
                                    <HistoryRow date="08 Ene" label="Ingresos Ventas" amount="+$45,200" />
                                </div>
                            </div>
                        </>
                    )}

                    <div className="flex gap-4 pt-4">
                        {data.type === 'auth' && (
                            <Button className="flex-1 py-6 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-2xl font-black text-sm transition-all">
                                Rechazar
                            </Button>
                        )}
                        <Button className="flex-1 py-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-100">
                            {data.type === 'auth' ? 'Aprobar Pago' : 'Descargar Reporte'}
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CheckItem({ label, checked = false }: { label: string, checked?: boolean }) {
    return (
        <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${checked ? 'bg-indigo-600 text-white' : 'bg-white border-2 border-gray-200'}`}>
                {checked && <CheckCircle2 size={12} />}
            </div>
            <span className={`text-xs font-bold ${checked ? 'text-gray-900' : 'text-gray-400'}`}>{label}</span>
        </div>
    );
}

function HistoryRow({ date, label, amount }: { date: string, label: string, amount: string }) {
    const isPositive = amount.startsWith('+');
    return (
        <div className="flex justify-between py-3 first:pt-0 last:pb-0">
            <div className="flex flex-col">
                <span className="text-[10px] font-black text-gray-400">{date}</span>
                <span className="text-sm font-bold text-gray-800">{label}</span>
            </div>
            <span className={`text-sm font-black ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>{amount}</span>
        </div>
    );
}
