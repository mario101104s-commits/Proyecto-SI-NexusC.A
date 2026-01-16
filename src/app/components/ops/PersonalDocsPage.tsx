import { FileText, Download, CheckCircle2, ShieldCheck, Search, Clock, Plus, Share2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function PersonalDocsPage() {
    const documents = [
        { id: 1, title: "Recibo de Pago - Enero 2026", date: "Hace 2d", category: "Nómina", size: "244 KB" },
        { id: 2, title: "Actualización de Contrato", date: "15 Dic", category: "Legal", size: "1.2 MB" },
        { id: 3, title: "Certificado Seguridad Industrial", date: "10 Dic", category: "Certificación", size: "3.1 MB" },
        { id: 4, title: "Beneficios Corporativos 2026", date: "01 Dic", category: "RRHH", size: "512 KB" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Document Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tighter">Mis Documentos</h1>
                    <p className="text-slate-400 font-bold mt-2 flex items-center gap-2">
                        <ShieldCheck size={18} className="text-emerald-500" />
                        Acceso seguro a tu historial laboral y archivos personales
                    </p>
                </div>
                <Button className="bg-white border-2 border-slate-100 text-slate-600 hover:bg-slate-50 px-8 py-6 rounded-2xl font-black transition-all flex items-center gap-2">
                    <Plus size={20} /> Solicitar Documento
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Security Verification Status */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-emerald-600 p-10 rounded-[3rem] text-white shadow-2xl shadow-emerald-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/20 transition-all" />
                        <CheckCircle2 size={40} className="mb-6 opacity-80" />
                        <h3 className="text-2xl font-black mb-2 tracking-tight">Expediente Validado</h3>
                        <p className="text-emerald-100/70 text-sm font-medium mb-8 italic">Todos tus documentos están actualizados y firmados digitalmente.</p>

                        <div className="p-5 bg-white/10 rounded-2xl border border-white/10 backdrop-blur-md">
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-60">Última Actualización</p>
                            <p className="text-lg font-black tracking-tight tracking-widest font-mono">16.01.2026</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-50 border border-slate-100">
                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6">Categorías</h4>
                        <div className="space-y-3">
                            {['Nómina', 'Contratos', 'Seguridad', 'Políticas'].map(cat => (
                                <button key={cat} className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-2xl hover:bg-emerald-50 hover:text-emerald-600 transition-all group">
                                    <span className="font-black text-slate-700 group-hover:text-emerald-600 text-sm">{cat}</span>
                                    <div className="w-6 h-6 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-[10px] font-black group-hover:border-emerald-200">
                                        +
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Documents List */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between px-4 mb-2">
                        <div className="flex items-center gap-3">
                            <FileText size={20} className="text-slate-300" />
                            <h3 className="text-xl font-black text-slate-800 tracking-tight">Archivo Personal</h3>
                        </div>
                        <Search size={18} className="text-slate-300" />
                    </div>

                    <div className="space-y-4">
                        {documents.map((doc) => (
                            <div key={doc.id} className="bg-white p-7 rounded-[2.5rem] shadow-xl shadow-slate-50 border border-transparent hover:border-emerald-100 hover:shadow-2xl transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer transform hover:-translate-y-1">
                                <div className="flex items-center gap-6">
                                    <div className="p-5 bg-slate-50 text-slate-400 rounded-3xl group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-inner">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mb-1">{doc.category}</p>
                                        <h4 className="text-xl font-black text-slate-900 tracking-tight leading-none mb-2 truncate group-hover:text-emerald-600 transition-colors">{doc.title}</h4>
                                        <div className="flex items-center gap-4 text-slate-400 font-bold text-[10px] uppercase tracking-tight">
                                            <span className="flex items-center gap-1"><Clock size={12} /> {doc.date}</span>
                                            <span className="flex items-center gap-1">#{doc.size}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="p-3 bg-slate-50 text-slate-300 hover:bg-emerald-50 hover:text-emerald-600 rounded-xl transition-all"><Share2 size={18} /></button>
                                    <button className="px-6 py-4 bg-slate-900 hover:bg-emerald-700 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl shadow-slate-200 flex items-center gap-3">
                                        <Download size={16} /> Descargar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 p-8 bg-slate-50 rounded-[2.5rem] border-2 border-dashed border-slate-200 text-center">
                        <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Fin del Archivo • Nexus NexusC.A</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
