export interface Announcement {
    id: string;
    title: string;
    content: string;
    author: string;
    authorAvatar: string;
    date: string;
    category: 'news' | 'event' | 'alert';
}

export interface CalendarEvent {
    id: string;
    title: string;
    date: string;
    time: string;
    type: 'meeting' | 'holiday' | 'deadline';
}

export interface SharedDocument {
    id: string;
    name: string;
    type: 'pdf' | 'doc' | 'xls';
    size: string;
    uploadedBy: string;
    date: string;
}

export interface ChatMessage {
    id: string;
    text: string;
    sender: 'me' | 'other';
    timestamp: string;
}

export const MOCK_ANNOUNCEMENTS: Announcement[] = [
    {
        id: '1',
        title: 'Nueva Política de Vacaciones',
        content: 'Se ha actualizado la política de solicitud de vacaciones para el año 2026. Por favor revisar el documento adjunto en la sección de RRHH.',
        author: 'Elena Torres',
        authorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
        date: '2026-01-14T09:00:00',
        category: 'news'
    },
    {
        id: '2',
        title: 'Mantenimiento de Servidores',
        content: 'Este fin de semana se realizará un mantenimiento programado de los servidores principales. Podría haber intermitencia en el acceso remoto.',
        author: 'Luis González',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
        date: '2026-01-12T14:30:00',
        category: 'alert'
    },
    {
        id: '3',
        title: 'Bienvenida al equipo',
        content: 'Demos una calurosa bienvenida a María Rodríguez, quien se une hoy al equipo de Administración como Contadora Senior.',
        author: 'Ana García',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
        date: '2026-01-10T10:00:00',
        category: 'event'
    }
];

export const MOCK_EVENTS: CalendarEvent[] = [
    { id: '1', title: 'Reunión de Equipo Semanal', date: '2026-01-15', time: '09:00 AM', type: 'meeting' },
    { id: '2', title: 'Entrega de Reporte Mensual', date: '2026-01-20', time: '05:00 PM', type: 'deadline' },
    { id: '3', title: 'Capacitación de Seguridad', date: '2026-01-22', time: '02:00 PM', type: 'meeting' },
    { id: '4', title: 'Feriado Nacional', date: '2026-02-12', time: 'All Day', type: 'holiday' }
];

export const MOCK_DOCUMENTS: SharedDocument[] = [
    { id: '1', name: 'Manual de Identidad Corporativa.pdf', type: 'pdf', size: '2.5 MB', uploadedBy: 'Marketing', date: '2025-11-15' },
    { id: '2', name: 'Plantilla de Presupuesto 2026.xlsx', type: 'xls', size: '1.2 MB', uploadedBy: 'Finanzas', date: '2025-12-01' },
    { id: '3', name: 'Código de Conducta.pdf', type: 'pdf', size: '850 KB', uploadedBy: 'RRHH', date: '2025-10-20' },
    { id: '4', name: 'Formato de Requisición.docx', type: 'doc', size: '45 KB', uploadedBy: 'Operaciones', date: '2026-01-05' }
];
