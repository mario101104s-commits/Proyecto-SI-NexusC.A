import { Search, FileText, Download, Trash2, Plus, Filter, FolderOpen, FileCheck, Share2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function DocumentsPage() {
    const categories = [
        { name: "Legal & Contratos", count: 12, color: "blue" },
        { name: "Operaciones", count: 24, color: "indigo" },
        { name: "Recursos Humanos", count: 8, color: "rose" },
        { name: "Finanzas", count: 15, color: "emerald" },
    ];

    const files = [
        { name: "Contrato Proveedor_X.pdf", cat: "Legal", size: "1.2 MB" },
        { name: "Reporte_Trimestral.xlsx", cat: "Finanzas", size: "850 KB" },
        { name: "Manual_Interno_v2.pdf", cat: "Operaciones", size: "4.5 MB" },
        { name: "Logo_Nexus_HighRes.png", cat: "Branding", size: "12 MB" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight italic">Nexus <span className="text-gray-400">Hub</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <FolderOpen size={18} className="text-gray-400" />
                        Repositorio centralizado de documentación corporativa
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-slate-900 hover:bg-black text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl flex items-center gap-2 border-none">
                        <Plus size={20} />
                        Cargar Archivo
                    </Button>
                </div>
            </div>

            {/* Quick Actions Search */}
            <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-gray-100/50 border border-gray-100 flex flex-col md:flex-row gap-6">
                <div className="relative flex-1">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                        placeholder="Busca por nombre, extensión o categoría..."
                        className="pl-14 py-8 bg-gray-50/50 border-none rounded-3xl font-bold text-lg focus-visible:ring-slate-900"
                    />
                </div>
                <Button variant="outline" className="py-8 px-10 rounded-3xl border-gray-100 font-black flex items-center gap-2 text-gray-400 hover:text-slate-900 transition-all">
                    <Filter size={20} /> Filtros
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Categories Sidebar (Tablets/Desktops) */}
                <div className="space-y-4">
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] px-4">Directorios</h3>
                    {categories.map((cat, i) => (
                        <button key={i} className="w-full flex items-center justify-between p-6 bg-white rounded-[1.75rem] border border-gray-100 shadow-sm hover:border-slate-300 hover:shadow-lg transition-all group">
                            <div className="flex items-center gap-4">
                                <div className={`w-2 h-2 rounded-full bg-${cat.color}-500 group-hover:scale-150 transition-transform`} />
                                <span className="font-black text-gray-700 tracking-tight">{cat.name}</span>
                            </div>
                            <span className="text-[10px] font-black text-gray-300 group-hover:text-slate-900">{cat.count}</span>
                        </button>
                    ))}

                    <div className="mt-10 p-8 bg-slate-900 rounded-[2.5rem] text-white">
                        <FileCheck className="text-emerald-400 mb-4" size={32} />
                        <h4 className="font-black mb-2 tracking-tight">Espacio Utilizado</h4>
                        <div className="h-2 bg-white/10 rounded-full mb-2 overflow-hidden">
                            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '45%' }} />
                        </div>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">2.1 GB de 5 GB</p>
                    </div>
                </div>

                {/* Files Grid/List */}
                <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-center justify-between mb-2 px-4">
                        <h3 className="text-xl font-black text-gray-800 tracking-tight italic">Documentos Recientes</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {files.map((file, i) => (
                            <div key={i} className="bg-white p-8 rounded-[3.5rem] shadow-xl shadow-gray-50 border border-transparent hover:border-indigo-100 hover:shadow-2xl transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/30 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-indigo-100/50 transition-all duration-700" />

                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-4 bg-gray-50 text-gray-400 rounded-2xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                                            <FileText size={24} />
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="p-2.5 text-gray-300 hover:text-indigo-600 transition-colors"><Share2 size={18} /></button>
                                            <button className="p-2.5 text-gray-300 hover:text-rose-500 transition-colors"><Trash2 size={18} /></button>
                                        </div>
                                    </div>

                                    <p className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-1">{file.cat}</p>
                                    <h4 className="text-lg font-black text-gray-800 leading-tight mb-6 truncate">{file.name}</h4>

                                    <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{file.size}</span>
                                        <button className="flex items-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-widest group-hover:translate-x-1 transition-all">
                                            Descargar <Download size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
