import { X, Users, Briefcase, ChevronRight, Award } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface SalesDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any | null;
}

export function SalesDetailModal({ isOpen, onClose, data }: SalesDetailModalProps) {
    if (!isOpen || !data) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />

            <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header Section */}
                <div className="bg-slate-900 p-8 text-white">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white/10 rounded-2xl">
                            {data.type === 'seller' ? <Users size={24} /> : <Briefcase size={24} />}
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight">{data.name}</h2>
                    <p className="text-blue-400 font-bold uppercase tracking-widest text-xs mt-2">
                        {data.type === 'seller' ? 'Perfil de Rendimiento Comercial' : 'Detalle de Oportunidad Estratégica'}
                    </p>
                </div>

                {/* Content Section */}
                <div className="p-10 space-y-8">
                    {data.type === 'seller' ? (
                        <>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Ventas Totales</p>
                                    <p className="text-2xl font-black text-gray-900">{data.sales}</p>
                                </div>
                                <div className="p-6 bg-blue-50 rounded-[2rem] border border-blue-100">
                                    <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Cuota Alcanzada</p>
                                    <p className="text-2xl font-black text-blue-700">{data.quota}%</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest px-1">Distribución de KPIs</h4>
                                <div className="space-y-6 bg-gray-50 p-6 rounded-[2rem]">
                                    <KPIBar label="Conversión" value={85} color="bg-emerald-500" />
                                    <KPIBar label="Retención" value={92} color="bg-blue-500" />
                                    <KPIBar label="Tiempo de Cierre" value={65} color="bg-purple-500" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="flex items-center justify-between p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100">
                                <div>
                                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Propuesta Estimada</p>
                                    <p className="text-3xl font-black text-emerald-700">{data.amount}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Cierre Probable</p>
                                    <p className="text-3xl font-black text-emerald-700">{data.prob}%</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest px-1">Progreso de Negociación</h4>
                                <div className="space-y-4">
                                    <StepItem label="Cualificación de Oportunidad" completed />
                                    <StepItem label="Presentación de Propuesta" completed />
                                    <StepItem label="Revisión Legal / Técnica" />
                                    <StepItem label="Aprobación Final" />
                                </div>
                            </div>
                        </>
                    )}

                    <div className="pt-4">
                        <Button className="w-full py-6 bg-slate-900 hover:bg-black text-white rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 group">
                            Ver Expediente Completo <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function KPIBar({ label, value, color }: { label: string, value: number, color: string }) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-black uppercase">
                <span className="text-gray-500">{label}</span>
                <span className="text-gray-900">{value}%</span>
            </div>
            <div className="h-2 bg-white rounded-full overflow-hidden border border-gray-100">
                <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${value}%` }} />
            </div>
        </div>
    );
}

function StepItem({ label, completed = false }: { label: string, completed?: boolean }) {
    return (
        <div className="flex items-center gap-4 group">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition-colors ${completed ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-gray-200 text-transparent'}`}>
                {completed && <Award size={12} />}
            </div>
            <span className={`text-sm font-bold ${completed ? 'text-gray-900' : 'text-gray-400'}`}>{label}</span>
        </div>
    );
}
