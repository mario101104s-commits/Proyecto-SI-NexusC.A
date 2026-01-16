import { X, Calendar, User, Eye, Download, Share2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface ViewAnnouncementModalProps {
    isOpen: boolean;
    onClose: () => void;
    announcement: any;
}

export function ViewAnnouncementModal({ isOpen, onClose, announcement }: ViewAnnouncementModalProps) {
    if (!isOpen || !announcement) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white rounded-[3rem] shadow-2xl w-full max-w-4xl mx-4 overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
                {/* Header with gradient and meta */}
                <div className="bg-gradient-to-r from-slate-900 to-blue-900 p-10 text-white relative shrink-0">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="relative z-10">
                        <div className="flex justify-between items-start mb-6">
                            <span className="px-4 py-1.5 bg-blue-500/20 backdrop-blur-md text-blue-300 rounded-full text-[10px] font-black uppercase tracking-widest ring-1 ring-blue-400/30">
                                Comunicado Oficial
                            </span>
                            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-2xl transition-colors">
                                <X size={24} />
                            </button>
                        </div>
                        <h2 className="text-4xl font-black tracking-tight leading-tight mb-6">{announcement.title}</h2>
                        <div className="flex flex-wrap gap-6 text-sm text-blue-100/60 font-bold">
                            <div className="flex items-center gap-2">
                                <User size={16} className="text-blue-400" /> Publicado por: Dirección General
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-blue-400" /> {announcement.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <Eye size={16} className="text-blue-400" /> {announcement.views} lecturas totales
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto p-12 custom-scrollbar">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div className="prose prose-slate lg:prose-xl">
                            <p className="text-xl font-medium text-slate-800 leading-relaxed">
                                Estimada organización,
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed mt-6">
                                Por medio de la presente, se establecen las nuevas directrices estratégicas que regirán el próximo trimestre.
                                Estos cambios responden a nuestra visión de optimización continua y búsqueda de la excelencia operativa en todas nuestras sucursales.
                            </p>
                            <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 my-10">
                                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">Puntos Clave del Comunicado:</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                        <p className="text-slate-600 font-medium">Reorientación del gasto operativo a tecnología.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                        <p className="text-slate-600 font-medium">Nuevos protocolos de comunicación inter-sucursal.</p>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                                        <p className="text-slate-600 font-medium">Ajuste en los KPI de rendimiento individual.</p>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Agradecemos su compromiso constante con la misión de la empresa. Para cualquier duda, los canales de soporte administrativo están abiertos.
                            </p>
                            <div className="mt-12 pt-8 border-t border-slate-100">
                                <p className="font-black text-slate-900 uppercase tracking-widest text-sm">Firma:</p>
                                <p className="text-slate-500 font-bold mt-1 italic text-lg">Dirección Ejecutiva NEXUS C.A</p>
                                <div className="mt-4 w-32 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-10 border-t border-slate-50 bg-slate-50/50 shrink-0">
                    <div className="max-w-3xl mx-auto flex items-center justify-between">
                        <div className="flex gap-4">
                            <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-200 font-black text-slate-700 flex items-center gap-3">
                                <Download size={20} />
                                Descargar PDF
                            </Button>
                            <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 border-slate-200 font-black text-slate-700 flex items-center gap-3">
                                <Share2 size={20} />
                                Compartir
                            </Button>
                        </div>
                        <Button onClick={onClose} className="bg-slate-900 hover:bg-black text-white px-10 h-14 rounded-2xl shadow-xl shadow-slate-200 font-black">
                            Entendido
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
