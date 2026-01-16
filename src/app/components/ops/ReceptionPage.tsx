import { ArrowDownToLine, Package, FileText, CheckCircle2, Camera } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function ReceptionPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-sm font-black text-emerald-600 uppercase tracking-[0.2em] mb-3">Abastecimiento Operativo</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Recepciones de Mercancía</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">Gestión de entradas de stock e inspección de calidad</p>
                </div>
                <div className="flex gap-4">
                    <Button className="py-7 px-10 bg-emerald-600 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center gap-3">
                        <ArrowDownToLine size={18} /> Nueva Recepción (Manual)
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Reception Scan/Input Area */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-gray-100 border border-gray-50">
                        <h3 className="text-2xl font-black text-gray-800 tracking-tight mb-10 flex items-center gap-4">
                            <span className="w-2 h-8 bg-emerald-500 rounded-full" /> Escaneo de Documentos
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="p-10 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] flex flex-col items-center justify-center text-center group hover:bg-white hover:border-emerald-500 transition-all cursor-pointer">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-emerald-500 shadow-sm mb-4">
                                    <Camera size={28} />
                                </div>
                                <h4 className="text-sm font-black text-slate-800 mb-2">Escanear Guía / Factura</h4>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Soportado: PDF, JPG, PNG</p>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Nro de Documento</label>
                                    <input type="text" placeholder="Ejem: G-99281" className="w-full py-5 px-8 bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 font-black text-sm tracking-tight" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Proveedor</label>
                                    <input type="text" placeholder="Ejem: Repuestos TITÁN C.A" className="w-full py-5 px-8 bg-white border border-gray-100 shadow-xl shadow-gray-100/50 rounded-2xl outline-none focus:ring-2 focus:ring-emerald-500/20 font-black text-sm tracking-tight" />
                                </div>
                            </div>
                        </div>

                        <Button className="w-full py-8 bg-slate-900 text-white rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3">
                            Verificar y Cargar Items
                        </Button>
                    </div>

                    {/* Pending Receptions List */}
                    <div className="bg-white p-10 rounded-[3.5rem] shadow-2xl shadow-gray-100 border border-gray-50">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-xl font-black text-gray-800 tracking-tight">Recepciones Pendientes</h3>
                            <div className="p-3 bg-slate-50 rounded-xl">
                                <FileText className="text-slate-400" size={20} />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <PendingItem provider="MACK de Venezuela" items="15 Und." eta="Llegada: 14:00 PM" />
                            <PendingItem provider="Filtros VAL" items="250 Und." eta="Llegada: 15:30 PM" />
                        </div>
                    </div>
                </div>

                {/* Checklist / Quality Section */}
                <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl shadow-emerald-900/10 text-white flex flex-col h-fit sticky top-10">
                    <h3 className="text-2xl font-black flex items-center gap-4 mb-10 text-emerald-400">
                        <CheckCircle2 size={28} /> Protocolo de Calidad
                    </h3>
                    <div className="space-y-6 flex-1">
                        <ProtocolItem label="Verificar Sellos de Seguridad" />
                        <ProtocolItem label="Conteo Físico vs Guía" />
                        <ProtocolItem label="Inspección Visual Daños" />
                        <ProtocolItem label="Registro Fotográfico Soportes" />
                        <ProtocolItem label="Validación en Sistema NEXUS" />
                    </div>

                    <div className="mt-12 p-8 bg-white/5 border border-white/10 rounded-[2rem] text-center">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Estado de Compliance</p>
                        <p className="text-2xl font-black text-emerald-400 tracking-tight">CALIFICADO</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PendingItem({ provider, items, eta }: any) {
    return (
        <div className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 border border-transparent hover:bg-white hover:border-emerald-200 hover:shadow-xl hover:shadow-gray-100 transition-all group cursor-pointer">
            <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition-transform">
                    <Package size={24} />
                </div>
                <div>
                    <h4 className="text-sm font-black text-slate-800 mb-1">{provider}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{items} • {eta}</p>
                </div>
            </div>
            <button className="w-10 h-10 bg-white text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                <ArrowDownToLine size={18} />
            </button>
        </div>
    );
}

function ProtocolItem({ label }: { label: string }) {
    return (
        <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-6 h-6 rounded-lg border-2 border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-sm opacity-0 group-hover:opacity-100 transition-all shadow-lg shadow-emerald-500/50" />
            </div>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{label}</span>
        </div>
    );
}
