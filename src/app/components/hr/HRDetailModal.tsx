import { X, User, Briefcase, GraduationCap, Calendar, Phone, Mail, MapPin, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface HRDetailModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any | null;
}

export function HRDetailModal({ isOpen, onClose, data }: HRDetailModalProps) {
    if (!isOpen || !data) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-300">
            <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />

            <div className="relative bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
                {/* Header Section */}
                <div className={`p-8 text-white ${data.type === 'employee' ? 'bg-indigo-600' : data.type === 'job' ? 'bg-emerald-600' : 'bg-amber-500'}`}>
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-white/10 rounded-2xl">
                            {data.type === 'employee' ? <User size={24} /> : data.type === 'job' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-white/10 rounded-full transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <h2 className="text-3xl font-black tracking-tight">{data.name || data.title || data.label}</h2>
                    <p className="text-white/80 font-bold uppercase tracking-widest text-xs mt-2">
                        {data.role || data.department || (data.type === 'training' ? 'Programa de Capacitación' : 'Aspirante Seleccionado')}
                    </p>
                </div>

                {/* Content Section */}
                <div className="p-10 space-y-8">
                    {data.type === 'employee' ? (
                        <>
                            <div className="grid grid-cols-2 gap-4">
                                <InfoTile icon={<Phone size={14} />} label="Teléfono" value="+51 987 654 321" />
                                <InfoTile icon={<Mail size={14} />} label="Email" value="c.mendoza@nexus.com" />
                                <InfoTile icon={<MapPin size={14} />} label="Ubicación" value="Sede Central - Lima" />
                                <InfoTile icon={<Calendar size={14} />} label="Antigüedad" value="4 años, 2 meses" />
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest px-1">Última Evaluación de Desempeño</h4>
                                <div className="p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center gap-2">
                                            <Star className="text-amber-400 fill-amber-400" size={16} />
                                            <span className="text-2xl font-black text-gray-900">4.8 / 5.0</span>
                                        </div>
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase">Excepcional</span>
                                    </div>
                                    <p className="text-sm text-gray-500 font-medium italic">"Liderazgo natural y cumplimiento consistente de objetivos estratégicos."</p>
                                </div>
                            </div>
                        </>
                    ) : data.type === 'job' ? (
                        <>
                            <div className="space-y-6">
                                <div className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100">
                                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-1">Estatus del Pipeline</p>
                                    <p className="text-2xl font-black text-emerald-900">Entrevista Final</p>
                                    <div className="flex gap-2 mt-4">
                                        {[1, 2, 3, 4].map(s => (
                                            <div key={s} className={`h-2 flex-1 rounded-full ${s <= 3 ? 'bg-emerald-500' : 'bg-gray-200'}`} />
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest px-1">Documentación Recibida</h4>
                                    <div className="space-y-3">
                                        <DocItem label="Currículum Vitae (CV)" checked />
                                        <DocItem label="Pruebas Psicométricas" checked />
                                        <DocItem label="Verificación de Referencias" checked />
                                        <DocItem label="Certificados de Grado" />
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100">
                                    <div>
                                        <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">Avance del Curso</p>
                                        <p className="text-3xl font-black text-amber-900">{data.progress || '85%'}</p>
                                    </div>
                                    <div className="w-20 h-20 rounded-full border-8 border-amber-200 border-t-amber-500 flex items-center justify-center font-black text-amber-700">
                                        {data.progress || '85%'}
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="text-sm font-black text-gray-800 uppercase tracking-widest px-1">Próximos Módulos</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                                            <span className="text-sm font-bold text-gray-700">Módulo 4: Liderazgo Situacional</span>
                                            <span className="text-[10px] font-black text-gray-400">12 Feb</span>
                                        </div>
                                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                                            <span className="text-sm font-bold text-gray-700">Módulo 5: Evaluación Final</span>
                                            <span className="text-[10px] font-black text-gray-400">20 Feb</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    <div className="flex gap-4 pt-4">
                        <Button className="flex-1 py-6 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-2xl font-black text-sm transition-all">
                            {data.type === 'employee' ? 'Editar Expediente' : 'Cerrar'}
                        </Button>
                        <Button className={`flex-1 py-6 text-white rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 group shadow-xl ${data.type === 'employee' ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100' : data.type === 'job' ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-100' : 'bg-amber-600 hover:bg-amber-700 shadow-amber-100'}`}>
                            {data.type === 'employee' ? 'Evaluar' : data.type === 'job' ? 'Agendar Entrevista' : 'Ver Recursos'}
                            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function InfoTile({ icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-2 text-indigo-500 mb-1">
                {icon}
                <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
            </div>
            <p className="text-sm font-bold text-gray-800 truncate">{value}</p>
        </div>
    );
}

function DocItem({ label, checked = false }: { label: string, checked?: boolean }) {
    return (
        <div className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${checked ? 'bg-emerald-600 text-white' : 'bg-white border-2 border-gray-200'}`}>
                {checked && <Star size={12} fill="currentColor" />}
            </div>
            <span className={`text-xs font-bold ${checked ? 'text-gray-900' : 'text-gray-400'}`}>{label}</span>
        </div>
    );
}
