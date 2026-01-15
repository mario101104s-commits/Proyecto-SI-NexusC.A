export type EmployeeStatus = 'active' | 'vacation' | 'sick_leave';
export type Department = 'Ventas' | 'Logística' | 'Administración' | 'RRHH' | 'IT';

export interface Employee {
    id: string;
    name: string;
    role: string;
    department: Department;
    status: EmployeeStatus;
    email: string;
    phone: string;
    avatar: string; // URL
    startDate: string;
}

export const MOCK_EMPLOYEES: Employee[] = [
    {
        id: '1',
        name: 'Ana García',
        role: 'Gerente de Ventas',
        department: 'Ventas',
        status: 'active',
        email: 'ana.garcia@nexus.com',
        phone: '+58 414-1234567',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
        startDate: '2023-03-15'
    },
    {
        id: '2',
        name: 'Carlos Pérez',
        role: 'Coordinador Logístico',
        department: 'Logística',
        status: 'active',
        email: 'carlos.perez@nexus.com',
        phone: '+58 412-9876543',
        avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150',
        startDate: '2022-11-01'
    },
    {
        id: '3',
        name: 'María Rodríguez',
        role: 'Contadora',
        department: 'Administración',
        status: 'vacation',
        email: 'maria.rodriguez@nexus.com',
        phone: '+58 424-5551122',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
        startDate: '2024-01-10'
    },
    {
        id: '4',
        name: 'Luis González',
        role: 'Desarrollador Full Stack',
        department: 'IT',
        status: 'active',
        email: 'luis.gonzalez@nexus.com',
        phone: '+58 416-3334455',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
        startDate: '2023-06-20'
    },
    {
        id: '5',
        name: 'Elena Torres',
        role: 'Especialista RRHH',
        department: 'RRHH',
        status: 'sick_leave',
        email: 'elena.torres@nexus.com',
        phone: '+58 414-7778899',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
        startDate: '2023-09-01'
    },
    {
        id: '6',
        name: 'Roberto Díaz',
        role: 'Vendedor Senior',
        department: 'Ventas',
        status: 'active',
        email: 'roberto.diaz@nexus.com',
        phone: '+58 412-1112233',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
        startDate: '2021-05-12'
    }
];

export const DEPARTMENTS: Department[] = ['Ventas', 'Logística', 'Administración', 'RRHH', 'IT'];
