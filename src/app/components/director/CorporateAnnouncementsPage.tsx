import { useState } from 'react';
import { Megaphone, Plus, Search, Calendar, Eye, Trash2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function CorporateAnnouncementsPage() {
    const [activeTab, setActiveTab] = useState('published');

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Anuncios Corporativos</h2>
                    <p className="text-gray-500">Comunicación oficial desde la Dirección hacia toda la organización</p>
                </div>
                <Button className="gap-2 bg-blue-800 hover:bg-blue-900 shadow-md">
                    <Plus size={18} /> Redactar Comunicado
                </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex border-b border-gray-100">
                    <button
                        onClick={() => setActiveTab('published')}
                        className={`px-8 py-4 text-sm font-bold transition-colors ${activeTab === 'published' ? 'border-b-2 border-blue-800 text-blue-800' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        Publicados
                    </button>
                    <button
                        onClick={() => setActiveTab('drafts')}
                        className={`px-8 py-4 text-sm font-bold transition-colors ${activeTab === 'drafts' ? 'border-b-2 border-blue-800 text-blue-800' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        Borradores
                    </button>
                    <button
                        onClick={() => setActiveTab('scheduled')}
                        className={`px-8 py-4 text-sm font-bold transition-colors ${activeTab === 'scheduled' ? 'border-b-2 border-blue-800 text-blue-800' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                        Programados
                    </button>
                </div>

                <div className="p-6">
                    <div className="space-y-6">
                        <AnnouncementRow
                            title="Nuevas Políticas de Teletrabajo 2026"
                            date="Publicado hoy, 09:30 AM"
                            views="1,240"
                            status="Oficial"
                        />
                        <AnnouncementRow
                            title="Integración exitosa de Sucursal Maracaibo"
                            date="Hace 3 días"
                            views="4,500"
                            status="Corporativo"
                        />
                        <AnnouncementRow
                            title="Inicio de Auditoría Financiera Anual"
                            date="Hace 1 semana"
                            views="850"
                            status="Importante"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function AnnouncementRow({ title, date, views, status }: any) {
    return (
        <div className="flex items-center justify-between p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-white transition-all group">
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-blue-800 shadow-sm group-hover:bg-blue-800 group-hover:text-white transition-colors">
                    <Megaphone size={20} />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-base font-bold text-gray-800">{title}</h4>
                        <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                            {status}
                        </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                        <span className="flex items-center gap-1"><Calendar size={14} /> {date}</span>
                        <span className="flex items-center gap-1"><Eye size={14} /> {views} lecturas</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-blue-600 bg-white">
                    <Search size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-600 bg-white">
                    <Trash2 size={18} />
                </Button>
            </div>
        </div>
    );
}
