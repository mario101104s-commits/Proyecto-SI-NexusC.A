import { X, Send, Eye, Globe, Lock } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

interface NewAnnouncementModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function NewAnnouncementModal({ isOpen, onClose }: NewAnnouncementModalProps) {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-3xl mx-4 overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="bg-blue-600 p-8 text-white relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                    <div className="flex items-center justify-between relative z-10">
                        <div>
                            <h2 className="text-2xl font-black tracking-tight">Redactar Comunicado Corporativo</h2>
                            <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mt-1">Difusión Global de Directrices</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-10 space-y-8">
                    <div className="space-y-6">
                        <div className="space-y-3">
                            <label className="text-sm font-black text-gray-700 uppercase tracking-wider ml-1">Título del Comunicado</label>
                            <Input
                                placeholder="Ej: Nuevas Políticas de Teletrabajo 2026"
                                className="h-14 px-6 rounded-2xl border-none bg-slate-50 text-lg font-black text-gray-900 focus-visible:ring-2 focus-visible:ring-blue-500/20 shadow-sm"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-black text-gray-700 uppercase tracking-wider ml-1">Categoría</label>
                                <select className="w-full h-14 px-6 rounded-2xl border-none bg-slate-50 text-gray-700 font-bold focus:ring-2 focus:ring-blue-500/20 appearance-none shadow-sm">
                                    <option>Oficial / Institucional</option>
                                    <option>Urgente / Alerta</option>
                                    <option>Cultura / Eventos</option>
                                    <option>Resultados Financieros</option>
                                </select>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-black text-gray-700 uppercase tracking-wider ml-1">Alcance de Difusión</label>
                                <div className="flex gap-2">
                                    <Button type="button" variant="outline" className="flex-1 h-14 rounded-2xl border-2 border-blue-100 bg-blue-50 text-blue-700 font-black flex items-center gap-2">
                                        <Globe size={18} /> Toda la Empresa
                                    </Button>
                                    <Button type="button" variant="outline" className="flex-1 h-14 rounded-2xl border-2 border-transparent bg-slate-50 text-slate-400 font-black flex items-center gap-2">
                                        <Lock size={18} /> Solo Gerencia
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-black text-gray-700 uppercase tracking-wider ml-1">Contenido del Mensaje</label>
                            <textarea
                                className="w-full p-8 rounded-[2rem] border-none bg-slate-50 text-gray-700 font-medium focus:ring-2 focus:ring-blue-500/20 shadow-sm min-h-[200px] resize-none"
                                placeholder="Escriba aquí el cuerpo del comunicado con detalle y claridad..."
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                        <Button type="button" variant="ghost" className="px-6 h-14 font-black text-blue-600 hover:bg-blue-50 rounded-2xl flex items-center gap-2">
                            <Eye size={20} />
                            Vista Previa
                        </Button>
                        <div className="flex items-center gap-4">
                            <Button type="button" variant="ghost" onClick={onClose} className="px-8 h-14 font-black text-gray-400 hover:text-gray-900 rounded-2xl">
                                Guardar Borrador
                            </Button>
                            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-10 h-14 rounded-2xl shadow-xl shadow-blue-100 transition-all hover:-translate-y-1 font-black flex items-center gap-3">
                                <Send size={20} />
                                Publicar Ahora
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
