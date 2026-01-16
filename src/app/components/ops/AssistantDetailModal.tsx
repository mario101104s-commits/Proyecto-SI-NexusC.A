import { X, Calendar, Clock, FileText, CheckCircle2, User, AlertCircle, MapPin, Download } from 'lucide-react';

interface AssistantDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
}

export function AssistantDetailModal({ isOpen, onClose, data }: AssistantDetailModalProps) {
    if (!isOpen || !data) return null;

    const renderContent = () => {
        switch (data.type) {
            case 'task':
                return (
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-[2rem]">
                            <div className="p-4 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-100">
                                <CheckCircle2 size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Detalles de Tarea</p>
                                <h3 className="text-2xl font-black text-gray-900 tracking-tight">{data.title}</h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <InfoCard label="Prioridad" value={data.priority || "Media"} icon={<AlertCircle size={16} />} />
                            <InfoCard label="Vencimiento" value={data.time || "17:00 PM"} icon={<Clock size={16} />} />
                        </div>

                        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 italic text-gray-500 text-sm">
                            "Asegurar que todos los documentos adjuntos estén validados antes de proceder con el envío."
                        </div>
                    </div>
                );
            case 'document':
                return (
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-[2rem]">
                            <div className="p-4 bg-slate-900 text-white rounded-2xl">
                                <FileText size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Previsualización de Archivo</p>
                                <h3 className="text-2xl font-black text-gray-900 tracking-tight">{data.name}</h3>
                            </div>
                        </div>

                        <div className="aspect-[4/3] bg-gray-100 rounded-[2.5rem] flex items-center justify-center border-2 border-dashed border-gray-200">
                            <div className="text-center">
                                <FileText size={48} className="text-gray-300 mx-auto mb-4" />
                                <p className="text-xs font-bold text-gray-400">PDF Viewer no disponible en modo offline</p>
                            </div>
                        </div>

                        <button className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-2">
                            <Download size={18} /> Descargar {data.size}
                        </button>
                    </div>
                );
            case 'event':
                return (
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 p-6 bg-indigo-600 text-white rounded-[2rem] shadow-xl shadow-indigo-100">
                            <Calendar size={32} />
                            <div>
                                <h3 className="text-2xl font-black tracking-tight">{data.title}</h3>
                                <p className="text-xs font-bold text-indigo-100 opacity-80 uppercase tracking-widest">Evento de Calendario</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <EventRow icon={<Clock size={18} />} label="Horario" value="10:00 AM - 11:30 AM" />
                            <EventRow icon={<MapPin size={18} />} label="Ubicación" value="Sala de Conferencias B" />
                            <EventRow icon={<User size={18} />} label="Organizador" value="Dirección General" />
                        </div>
                    </div>
                );
            default:
                return <p className="text-gray-500 font-bold text-center py-10">Seleccione un elemento para ver detalles.</p>;
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-end bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-500">
            <div className="h-[95vh] w-full max-w-xl bg-white m-4 rounded-[3.5rem] shadow-2xl flex flex-col animate-in slide-in-from-right-8 duration-500 border border-white/50">
                <div className="p-8 pb-4 flex justify-between items-center shrink-0">
                    <div className="flex items-center gap-2 text-indigo-600">
                        <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-widest">Panel de Información</span>
                    </div>
                    <button onClick={onClose} className="p-3 bg-slate-50 text-gray-400 hover:bg-rose-50 hover:text-rose-500 rounded-2xl transition-all">
                        <X size={20} />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-10 py-6 custom-scrollbar">
                    {renderContent()}
                </div>

                <div className="p-8 border-t border-gray-50 bg-slate-50/50 flex gap-4 shrink-0 rounded-b-[3.5rem]">
                    <button onClick={onClose} className="flex-1 py-4 bg-white border border-gray-200 text-gray-400 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-all">
                        Cerrar Vista
                    </button>
                    <button className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-black transition-all">
                        Confirmar Acción
                    </button>
                </div>
            </div>
        </div>
    );
}

function InfoCard({ label, value, icon }: any) {
    return (
        <div className="p-5 bg-white border border-gray-100 rounded-[1.5rem] shadow-sm">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                {icon} {label}
            </p>
            <p className="text-lg font-black text-gray-800">{value}</p>
        </div>
    );
}

function EventRow({ icon, label, value }: any) {
    return (
        <div className="flex items-center gap-4 p-5 bg-white border border-gray-100 rounded-[1.5rem] group hover:border-indigo-200 transition-all shadow-sm">
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {icon}
            </div>
            <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{label}</p>
                <p className="text-sm font-black text-gray-900">{value}</p>
            </div>
        </div>
    );
}
