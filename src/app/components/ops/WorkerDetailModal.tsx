import { X, Zap, Clock, ShieldCheck, MapPin, FileText, Download, CheckCircle2 } from 'lucide-react';

interface WorkerDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
}

export function WorkerDetailModal({ isOpen, onClose, data }: WorkerDetailModalProps) {
    if (!isOpen || !data) return null;

    const renderContent = () => {
        switch (data.type) {
            case 'task':
                return (
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 p-6 bg-slate-900 text-white rounded-[2rem] shadow-xl shadow-slate-200">
                            <div className="p-4 bg-blue-600 rounded-2xl">
                                <Zap size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Instrucción Operativa</p>
                                <h3 className="text-2xl font-black tracking-tight">{data.title}</h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-2"><Clock size={12} /> Prioridad</p>
                                <p className="text-base font-black text-slate-900">{data.priority || "Normal"}</p>
                            </div>
                            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-2"><MapPin size={12} /> Zona</p>
                                <p className="text-base font-black text-slate-900">{data.zone || "Pasillo 4"}</p>
                            </div>
                        </div>

                        <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                            <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <ShieldCheck size={14} /> Procedimiento de Seguridad
                            </h4>
                            <ul className="space-y-2">
                                {['Usar guantes de protección', 'Verificar sello de seguridad', 'Registrar peso final'].map((step, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                        {step}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="w-full py-5 bg-slate-900 hover:bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl active:scale-95">
                            Marcar como Completado
                        </button>
                    </div>
                );
            case 'document':
                return (
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 p-6 bg-emerald-50 rounded-[2rem]">
                            <div className="p-4 bg-emerald-600 text-white rounded-2xl">
                                <FileText size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Documento Personal</p>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{data.title}</h3>
                            </div>
                        </div>

                        <div className="aspect-[3/4] bg-slate-100 rounded-[2.5rem] flex flex-col items-center justify-center border-2 border-dashed border-slate-200 p-10 text-center">
                            <div className="p-6 bg-white rounded-3xl shadow-xl mb-6">
                                <CheckCircle2 size={48} className="text-emerald-500" />
                            </div>
                            <h4 className="font-black text-slate-800 mb-2">Previsualización Segura Nexus</h4>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-tight">Este documento está encriptado y validado por RRHH.</p>
                        </div>

                        <button className="w-full py-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-2">
                            <Download size={18} /> Descargar Archivo
                        </button>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-end bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-500 p-4">
            <div className="h-[90vh] w-full max-w-lg bg-white rounded-[3rem] shadow-2xl flex flex-col animate-in slide-in-from-right-8 duration-500 relative overflow-hidden">
                <div className="p-8 pb-4 flex justify-between items-center shrink-0">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500" /> Detalle del Elemento
                    </span>
                    <button onClick={onClose} className="p-3 bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-500 rounded-2xl transition-all">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-10 py-6 custom-scrollbar">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
