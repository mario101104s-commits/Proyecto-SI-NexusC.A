import { FileText, FileSpreadsheet, Download, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { useState } from 'react';

interface ExportReportModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ExportReportModal({ isOpen, onClose }: ExportReportModalProps) {
    const [isExporting, setIsExporting] = useState(false);
    const [isDone, setIsDone] = useState(false);

    if (!isOpen) return null;

    const handleExport = () => {
        setIsExporting(true);
        setTimeout(() => {
            setIsExporting(false);
            setIsDone(true);
            setTimeout(() => {
                onClose();
                setIsDone(false);
            }, 1500);
        }, 2000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg mx-4 overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="p-10 text-center">
                    {!isDone ? (
                        <>
                            <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center text-blue-600 mx-auto mb-6 shadow-sm">
                                <FileText size={40} />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">Exportar Reporte Ejecutivo</h2>
                            <p className="text-slate-500 font-bold mt-2 uppercase text-[10px] tracking-[0.2em]">Consolidado Q2-2026</p>

                            <div className="grid grid-cols-2 gap-4 mt-10">
                                <button className="p-6 rounded-2xl border-2 border-slate-100 hover:border-blue-600 hover:bg-blue-50 transition-all group flex flex-col items-center gap-3">
                                    <FileText size={32} className="text-slate-300 group-hover:text-blue-600" />
                                    <span className="text-xs font-black uppercase text-slate-500 group-hover:text-blue-900">PDF Document</span>
                                </button>
                                <button className="p-6 rounded-2xl border-2 border-slate-100 hover:border-emerald-600 hover:bg-emerald-50 transition-all group flex flex-col items-center gap-3">
                                    <FileSpreadsheet size={32} className="text-slate-300 group-hover:text-emerald-600" />
                                    <span className="text-xs font-black uppercase text-slate-500 group-hover:text-emerald-900">Excel Sheet</span>
                                </button>
                            </div>

                            <div className="mt-10 flex flex-col gap-3">
                                <Button
                                    onClick={handleExport}
                                    disabled={isExporting}
                                    className="bg-slate-900 hover:bg-black text-white h-16 rounded-2xl font-black text-lg shadow-xl shadow-slate-200 transition-all active:scale-95 flex items-center justify-center gap-3"
                                >
                                    {isExporting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                            Procesando...
                                        </>
                                    ) : (
                                        <>
                                            <Download size={20} />
                                            Iniciar Descarga
                                        </>
                                    )}
                                </Button>
                                <Button onClick={onClose} variant="ghost" className="h-14 font-black text-slate-400 hover:text-slate-900 rounded-2xl">
                                    Cancelar
                                </Button>
                            </div>
                        </>
                    ) : (
                        <div className="py-10 animate-in zoom-in duration-500">
                            <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-100">
                                <CheckCircle2 size={48} />
                            </div>
                            <h2 className="text-2xl font-black text-slate-900 tracking-tight">¡Archivo Generado!</h2>
                            <p className="text-slate-500 font-bold mt-2 uppercase text-[10px] tracking-[0.2em]">La descarga iniciará en segundos</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
