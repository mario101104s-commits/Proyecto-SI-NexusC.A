import { BookOpen, Search, FolderOpen, FileText, ChevronRight, Download, Star, Filter } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function KnowledgeBasePage() {
    const categories = [
        { name: "Políticas Internas", count: 12, icon: BookOpen, color: "blue" },
        { name: "Manuales de Cargo", count: 45, icon: FileText, color: "indigo" },
        { name: "Beneficios y Salud", count: 8, icon: Star, color: "rose" },
        { name: "Cultura Nexus", count: 5, icon: FolderOpen, color: "emerald" },
    ];

    const popularDocs = [
        { name: "Manual del Empleado v2.4", type: "PDF", size: "1.2 MB", date: "Jan 2026" },
        { name: "Protocolo de Seguridad Industrial", type: "PDF", size: "4.5 MB", date: "Dec 2025" },
        { name: "Guía de Beneficios Médicos", type: "PDF", size: "850 KB", date: "Jan 2026" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight italic">Base de <span className="text-indigo-600">Conocimiento</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <BookOpen size={18} className="text-indigo-500" />
                        Repositorio central de documentos, procesos y cultura corporativa
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-slate-900 hover:bg-black text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl flex items-center gap-2 border-none">
                        <FolderOpen size={20} />
                        Gestionar Repositorio
                    </Button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-gray-100/50 border border-gray-100">
                <div className="relative">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                        placeholder="Busca manuales, procedimientos o guías..."
                        className="pl-14 py-8 bg-gray-50/50 border-none rounded-3xl font-bold text-lg focus-visible:ring-indigo-500"
                    />
                </div>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((cat, i) => (
                    <div key={i} className="bg-white p-8 rounded-[3rem] shadow-xl shadow-gray-50 border border-gray-100 group hover:border-indigo-200 transition-all cursor-pointer">
                        <div className={`w-12 h-12 rounded-2xl bg-${cat.color}-50 text-${cat.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                            <cat.icon size={24} />
                        </div>
                        <h4 className="text-lg font-black text-gray-800 tracking-tight leading-none mb-2">{cat.name}</h4>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{cat.count} Documentos</p>
                    </div>
                ))}
            </div>

            {/* Content Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 bg-white p-10 rounded-[4rem] shadow-xl shadow-gray-100 border border-gray-100">
                    <div className="flex items-center justify-between mb-10">
                        <h3 className="text-2xl font-black text-gray-800 tracking-tight">Documentos Destacados</h3>
                        <Button variant="ghost" className="text-indigo-600 font-black text-xs uppercase tracking-widest px-0 hover:bg-transparent">Ver Todos</Button>
                    </div>
                    <div className="space-y-4">
                        {popularDocs.map((doc, i) => (
                            <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-gray-50/50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:shadow-gray-50 transition-all group">
                                <div className="flex items-center gap-6">
                                    <div className="p-4 bg-white rounded-2xl text-gray-400 shadow-sm group-hover:text-indigo-600 transition-colors">
                                        <FileText size={20} />
                                    </div>
                                    <div>
                                        <p className="font-black text-gray-900 tracking-tight">{doc.name}</p>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                                            {doc.type} • {doc.size} • Actualizado {doc.date}
                                        </p>
                                    </div>
                                </div>
                                <button className="p-3 text-gray-300 hover:text-indigo-600 transition-colors">
                                    <Download size={20} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900 p-10 rounded-[4rem] text-white flex flex-col justify-center items-center text-center">
                    <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-6">
                        <Star className="text-amber-400 fill-current" size={32} />
                    </div>
                    <h4 className="text-xl font-black mb-4">Ayúdanos a mejorar</h4>
                    <p className="text-sm font-bold text-gray-400 leading-relaxed mb-8">¿No encontraste lo que buscabas? Notifica al área de comunicaciones.</p>
                    <Button className="w-full py-6 bg-indigo-600 hover:bg-indigo-700 rounded-2xl font-black text-xs uppercase tracking-widest transition-all">
                        Enviar Sugerencia
                    </Button>
                </div>
            </div>
        </div>
    );
}
