import { X, Activity, Truck, Package, AlertTriangle, ArrowRight, Zap, Target } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface OpsDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        title: string;
        type: 'warehouse' | 'route' | 'metric';
        status: string;
        details: string;
    } | null;
}

export function OpsDetailModal({ isOpen, onClose, data }: OpsDetailModalProps) {
    if (!isOpen || !data) return null;

    const typeIcons = {
        warehouse: <Package size={28} className="text-blue-600" />,
        route: <Truck size={28} className="text-emerald-600" />,
        metric: <Activity size={28} className="text-purple-600" />,
    };

    const typeColors = {
        warehouse: 'bg-blue-50 text-blue-600 border-blue-100',
        route: 'bg-emerald-50 text-emerald-600 border-emerald-100',
        metric: 'bg-purple-50 text-purple-600 border-purple-100',
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300" onClick={onClose} />

            <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 border border-slate-100">
                <div className="p-12">
                    <div className="flex justify-between items-start mb-10">
                        <div className="flex items-center gap-6">
                            <div className={`p-5 rounded-3xl ${typeColors[data.type].split(' ')[0]} ${typeColors[data.type].split(' ')[1]}`}>
                                {typeIcons[data.type]}
                            </div>
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full border border-slate-200 text-slate-400">
                                    {data.type}
                                </span>
                                <h2 className="text-3xl font-black text-slate-900 mt-3 tracking-tight">{data.title}</h2>
                            </div>
                        </div>
                        <button onClick={onClose} className="p-3 hover:bg-slate-100 rounded-2xl transition-all text-slate-400">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="space-y-10">
                        <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`w-3 h-3 rounded-full ${data.status.includes('Operativo') || data.status.includes('En Ruta') ? 'bg-emerald-500' : 'bg-rose-500'} animate-pulse`} />
                                <span className="text-xs font-black uppercase tracking-widest text-slate-500">{data.status}</span>
                            </div>
                            <p className="text-slate-600 font-medium leading-relaxed italic text-lg text-pretty">
                                "{data.details}"
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 bg-white border border-slate-100 rounded-2xl">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <Zap size={12} className="text-amber-500" /> Latencia Estimada
                                </p>
                                <p className="text-lg font-black text-slate-800">-45 min aprox.</p>
                            </div>
                            <div className="p-6 bg-white border border-slate-100 rounded-2xl">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                    <Target size={12} className="text-blue-500" /> Objetivo
                                </p>
                                <p className="text-lg font-black text-slate-800">100% Eficiencia</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 pt-6">
                            <Button className="w-full py-8 bg-slate-900 text-white rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3">
                                <ArrowRight size={18} />
                                Gestionar Recursos
                            </Button>
                            <Button variant="ghost" className="w-full py-8 text-slate-500 font-black text-sm uppercase tracking-widest hover:bg-slate-50 rounded-[1.5rem] flex items-center justify-center gap-3">
                                Descargar Reporte Técnico
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
