import { useState } from 'react';
import { Megaphone, Plus, Search, Calendar, Eye, Trash2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { NewAnnouncementModal } from './NewAnnouncementModal';
import { ViewAnnouncementModal } from './ViewAnnouncementModal';

export function CorporateAnnouncementsPage() {
    const [activeTab, setActiveTab] = useState('published');
    const [isNewModalOpen, setIsNewModalOpen] = useState(false);
    const [viewingAnnouncement, setViewingAnnouncement] = useState<any>(null);

    const ANNOUNCEMENTS = [
        {
            title: "Nuevas Políticas de Teletrabajo 2026",
            date: "Publicado hoy, 09:30 AM",
            views: "1,240",
            status: "Oficial"
        },
        {
            title: "Integración exitosa de Sucursal Maracaibo",
            date: "Hace 3 días",
            views: "4,500",
            status: "Corporativo"
        },
        {
            title: "Inicio de Auditoría Financiera Anual",
            date: "Hace 1 semana",
            views: "850",
            status: "Importante"
        }
    ];

    return (
        <div className="space-y-10 animate-in fade-in duration-500">
            {/* Header section with executive style */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">Comunicación Institucional</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Anuncios Corporativos</h1>
                    <p className="text-gray-500 font-medium mt-2">Difusión estratégica de mensajes y directrices hacia toda la organización.</p>
                </div>
                <Button
                    className="bg-slate-900 hover:bg-black text-white px-8 py-6 rounded-2xl shadow-xl shadow-gray-200 transition-all hover:-translate-y-1 font-black flex items-center gap-3"
                    onClick={() => setIsNewModalOpen(true)}
                >
                    <Plus size={20} />
                    Redactar Comunicado
                </Button>
            </div>

            {/* Tab Navigation and Content */}
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 overflow-hidden">
                <div className="flex bg-slate-50 border-b border-gray-100 p-2 gap-2">
                    {['published', 'drafts', 'scheduled'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab
                                ? 'bg-white text-blue-600 shadow-sm ring-1 ring-slate-200'
                                : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            {tab === 'published' ? 'Publicados' : tab === 'drafts' ? 'Borradores' : 'Programados'}
                        </button>
                    ))}
                </div>

                <div className="p-10">
                    <div className="space-y-6">
                        {ANNOUNCEMENTS.map((ann, idx) => (
                            <AnnouncementRow
                                key={idx}
                                announcement={ann}
                                onView={() => setViewingAnnouncement(ann)}
                                onDelete={() => alert('Eliminar comunicado - Simulación')}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Modals */}
            <NewAnnouncementModal
                isOpen={isNewModalOpen}
                onClose={() => setIsNewModalOpen(false)}
            />

            <ViewAnnouncementModal
                isOpen={!!viewingAnnouncement}
                onClose={() => setViewingAnnouncement(null)}
                announcement={viewingAnnouncement}
            />
        </div>
    );
}

function AnnouncementRow({ announcement, onView, onDelete }: any) {
    return (
        <div className="flex items-center justify-between p-8 rounded-[2rem] bg-slate-50 border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all group">
            <div className="flex items-center gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Megaphone size={24} />
                </div>
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-xl font-black text-gray-800 tracking-tight">{announcement.title}</h4>
                        <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-blue-100 text-blue-700 ring-1 ring-blue-200">
                            {announcement.status}
                        </span>
                    </div>
                    <div className="flex items-center gap-6 text-xs text-gray-400 font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-2"><Calendar size={14} className="text-blue-400" /> {announcement.date}</span>
                        <span className="flex items-center gap-2"><Eye size={14} className="text-blue-400" /> {announcement.views} lecturas</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onView}
                    className="w-12 h-12 rounded-2xl bg-white text-gray-400 hover:text-blue-600 hover:shadow-md transition-all"
                >
                    <Search size={20} />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onDelete}
                    className="w-12 h-12 rounded-2xl bg-white text-gray-400 hover:text-red-600 hover:shadow-md transition-all"
                >
                    <Trash2 size={20} />
                </Button>
            </div>
        </div>
    );
}
