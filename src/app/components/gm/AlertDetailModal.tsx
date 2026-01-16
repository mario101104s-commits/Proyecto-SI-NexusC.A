import { X, AlertTriangle, Activity, ShieldAlert, Zap, ArrowRight, User } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface AlertDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    alert: {
        title: string;
        desc: string;
        urgency: 'Crítico' | 'Aviso' | 'Normal';
    } | null;
}

export function AlertDetailModal({ isOpen, onClose, alert }: AlertDetailModalProps) {
    if (!isOpen || !alert) return null;

    const urgencyStyles = {
        'Crítico': 'bg-rose-50 text-rose-600 border-rose-100',
        'Aviso': 'bg-amber-50 text-amber-600 border-amber-100',
        'Normal': 'bg-blue-50 text-blue-600 border-blue-100',
    };

    const urgencyIcons = {
        'Crítico': <ShieldAlert size={28} className="text-rose-600" />,
        'Aviso': <AlertTriangle size={28} className="text-amber-600" />,
        'Normal': <Activity size={28} className="text-blue-600" />,
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose} />

            <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 border border-slate-100">
                {/* Header Decoration */}
                <div className={`h-3 w-full ${alert.urgency === 'Crítico' ? 'bg-rose-500' : alert.urgency === 'Aviso' ? 'bg-amber-500' : 'bg-blue-500'}`} />

                <div className="p-12">
                    <div className="flex justify-between items-start mb-10">
                        <div className="flex items-center gap-6">
                            <div className={`p-5 rounded-3xl ${urgencyStyles[alert.urgency].split(' ')[0]} ${urgencyStyles[alert.urgency].split(' ')[1]}`}>
                                {urgencyIcons[alert.urgency]}
                            </div>
                            <div>
                                <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${urgencyStyles[alert.urgency]}`}>
                                    {alert.urgency}
                                </span>
                                <h2 className="text-3xl font-black text-slate-900 mt-3 tracking-tight">{alert.title}</h2>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-3 hover:bg-slate-100 rounded-2xl transition-all text-slate-400">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="space-y-10">
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                            <p className="text-slate-600 font-medium leading-relaxed italic text-lg">
                                "{alert.desc}"
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-white border border-slate-100 rounded-2xl">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <Zap size={12} className="text-amber-500" /> Impacto Estimado
                                </p>
                                <p className="text-lg font-black text-slate-800">-8% Eficiencia Semanal</p>
                            </div>
                            <div className="p-6 bg-white border border-slate-100 rounded-2xl">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <User size={12} className="text-blue-500" /> Responsable
                                </p>
                                <p className="text-lg font-black text-slate-800">Gerente del Área</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 pt-6">
                            <Button className="w-full py-8 bg-slate-900 text-white rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3">
                                <ArrowRight size={18} />
                                Tomar Acción Inmediata
                            </Button>
                            <Button variant="ghost" className="w-full py-8 text-slate-500 font-black text-sm uppercase tracking-widest hover:bg-slate-50 rounded-[1.5rem] flex items-center justify-center gap-3">
                                Solicitar Informe Detallado
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
