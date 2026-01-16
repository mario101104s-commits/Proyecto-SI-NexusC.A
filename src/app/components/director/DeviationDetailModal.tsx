import { X, AlertTriangle, ArrowRight, History, ShieldAlert } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface DeviationDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    deviation: {
        area: string;
        diff: string;
        status: string;
        reason: string;
    } | null;
}

export function DeviationDetailModal({ isOpen, onClose, deviation }: DeviationDetailModalProps) {
    if (!isOpen || !deviation) return null;

    const isCritical = deviation.status === 'critical';

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[3rem] shadow-2xl w-full max-w-xl mx-4 overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className={`${isCritical ? 'bg-rose-600' : 'bg-amber-500'} p-8 text-white relative`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl">
                                <AlertTriangle size={24} />
                            </div>
                            <div>
                                <h2 className="text-xl font-black tracking-tight">{deviation.area}</h2>
                                <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest mt-1">Expediente de Desviación Presupuestaria</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-10 space-y-8">
                    <div className="flex items-center justify-between p-8 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-inner">
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Impacto Financiero</p>
                            <h3 className={`text-4xl font-black ${isCritical ? 'text-rose-600' : 'text-amber-600'}`}>
                                {deviation.diff}
                            </h3>
                        </div>
                        <div className="text-right">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Estado de Riesgo</p>
                            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ${isCritical ? 'bg-rose-100 text-rose-700 ring-rose-200' : 'bg-amber-100 text-amber-700 ring-amber-200'}`}>
                                {isCritical ? 'Urgente / Crítico' : 'Bajo Seguimiento'}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Justificación del Responsable</h4>
                        <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-2xl italic text-slate-700 font-medium">
                            "{deviation.reason}"
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                            <History size={18} className="text-slate-400" />
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Registrado hace 4h</div>
                        </div>
                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                            <ShieldAlert size={18} className="text-slate-400" />
                            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">ID: #BUD-2026-092</div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-slate-50 flex gap-4">
                        <Button variant="outline" className="flex-1 h-14 rounded-2xl border-2 border-slate-100 font-black text-slate-700 hover:bg-slate-50">
                            Ignorar Alerta
                        </Button>
                        <Button className={`${isCritical ? 'bg-rose-600 hover:bg-rose-700' : 'bg-slate-900 hover:bg-black'} flex-[2] h-14 rounded-2xl text-white font-black shadow-xl transition-all flex items-center justify-center gap-2`}>
                            {isCritical ? 'Solicitar Auditoría' : 'Ajustar Presupuesto'}
                            <ArrowRight size={18} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
