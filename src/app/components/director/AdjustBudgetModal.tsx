import { X, Save, AlertTriangle, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

interface AdjustBudgetModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AdjustBudgetModal({ isOpen, onClose }: AdjustBudgetModalProps) {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulación de guardado
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-2xl mx-4 overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="bg-slate-900 p-8 text-white relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <div className="flex items-center justify-between relative z-10">
                        <div>
                            <h2 className="text-2xl font-black tracking-tight">Ajustar Asignación Fiscal</h2>
                            <p className="text-blue-300 text-xs font-bold uppercase tracking-widest mt-1">Control de Presupuesto Q3-2026</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-10 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-sm font-black text-gray-700 uppercase tracking-wider ml-1">Unidad de Negocio</label>
                            <select className="w-full h-14 px-6 rounded-2xl border-none bg-slate-50 text-gray-700 font-bold focus:ring-2 focus:ring-blue-500/20 appearance-none shadow-sm">
                                <option>Marketing y Comunicaciones</option>
                                <option>Operaciones Logísticas</option>
                                <option>Recursos Humanos</option>
                                <option>Tecnología e Infraestructura</option>
                            </select>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-black text-gray-700 uppercase tracking-wider ml-1">Monto de Ajuste ($)</label>
                            <Input
                                type="number"
                                placeholder="0.00"
                                className="h-14 px-6 rounded-2xl border-none bg-slate-50 text-lg font-black text-gray-900 focus-visible:ring-2 focus-visible:ring-blue-500/20 shadow-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label className="text-sm font-black text-gray-700 uppercase tracking-wider ml-1">Justificación Estratégica</label>
                        <textarea
                            className="w-full p-6 rounded-2xl border-none bg-slate-50 text-gray-700 font-medium focus:ring-2 focus:ring-blue-500/20 shadow-sm min-h-[120px] resize-none"
                            placeholder="Describa el motivo del ajuste presupuestario..."
                        />
                    </div>

                    <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 flex items-start gap-4">
                        <div className="p-2 bg-amber-100 rounded-xl text-amber-600">
                            <AlertTriangle size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-black text-amber-900 tracking-tight">Advertencia de Impacto</p>
                            <p className="text-xs text-amber-700 font-medium mt-1 leading-relaxed">
                                Este ajuste superará el límite de desviación permitido (10%) para el departamento seleccionado. Se requerirá firma digital de la Gerencia General.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-4 pt-4 border-t border-gray-50">
                        <Button type="button" variant="ghost" onClick={onClose} className="px-8 h-14 font-black text-gray-400 hover:text-gray-900 rounded-2xl">
                            Cancelar
                        </Button>
                        <Button type="submit" className="bg-slate-900 hover:bg-black text-white px-10 h-14 rounded-2xl shadow-xl shadow-slate-200 transition-all hover:-translate-y-1 font-black flex items-center gap-3">
                            <Save size={20} />
                            Aplicar Cambios
                            <ArrowRight size={18} />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
