export interface UserProfile {
    name: string;
    role: string;
    department: string;
    email: string;
    avatar: string;
    location: string;
    joinDate: string;
}

export interface ActivityLogItem {
    id: string;
    action: string;
    details: string;
    timestamp: string;
    icon: 'login' | 'edit' | 'download' | 'settings';
}

export const MOCK_PROFILE: UserProfile = {
    name: 'Mario Sánchez',
    role: 'Administrador del Sistema',
    department: 'Tecnología',
    email: 'mario.sanchez@nexus.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    location: 'Caracas, Venezuela',
    joinDate: '2023-01-15'
};

export const MOCK_ACTIVITY: ActivityLogItem[] = [
    {
        id: '1',
        action: 'Inicio de Sesión',
        details: 'Acceso desde dispositivo MacOS',
        timestamp: 'Hoy, 09:30 AM',
        icon: 'login'
    },
    {
        id: '2',
        action: 'Actualización de Inventario',
        details: 'Se ajustó el stock de "Laptop HP G8"',
        timestamp: 'Ayer, 04:15 PM',
        icon: 'edit'
    },
    {
        id: '3',
        action: 'Descarga de Reporte',
        details: 'Reporte Mensual de Ventas - Enero',
        timestamp: '12 Ene, 11:20 AM',
        icon: 'download'
    },
    {
        id: '4',
        action: 'Cambio de Contraseña',
        details: 'Actualización de seguridad periódica',
        timestamp: '10 Ene, 02:45 PM',
        icon: 'settings'
    }
];
