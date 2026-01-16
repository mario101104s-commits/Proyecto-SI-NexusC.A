export type UserRole = 'strategic' | 'tactical' | 'operational';
export type Department = 'sales' | 'inventory' | 'finance' | 'hr' | 'operations' | 'general';

export interface UserAuth {
    email: string;
    role: UserRole;
    department: Department;
    name: string;
}

export const USERS_REGISTRY: Record<string, UserAuth> = {
    'director@nexus.com': { email: 'director@nexus.com', role: 'strategic', department: 'general', name: 'Director' },
    'gerentegeneral@nexus.com': { email: 'gerentegeneral@nexus.com', role: 'strategic', department: 'general', name: 'Gerente General' },
    'gerente.operaciones@nexus.com': { email: 'gerente.operaciones@nexus.com', role: 'tactical', department: 'operations', name: 'Gerente de Operaciones' },
    'supervisor.almacen@nexus.com': { email: 'supervisor.almacen@nexus.com', role: 'tactical', department: 'inventory', name: 'Supervisor de Almacén' },
    'gerente.ventas@nexus.com': { email: 'gerente.ventas@nexus.com', role: 'tactical', department: 'sales', name: 'Gerente de Ventas' },
    'gerente.finanzas@nexus.com': { email: 'gerente.finanzas@nexus.com', role: 'tactical', department: 'finance', name: 'Gerente de Finanzas' },
    'gerente.rrhh@nexus.com': { email: 'gerente.rrhh@nexus.com', role: 'tactical', department: 'hr', name: 'Gerente de RRHH' },
    'vendedor@nexus.com': { email: 'vendedor@nexus.com', role: 'operational', department: 'sales', name: 'Vendedor Senior' },
    'asistente@nexus.com': { email: 'asistente@nexus.com', role: 'operational', department: 'general', name: 'Asistente Administrativo' },
    'trabajador@nexus.com': { email: 'trabajador@nexus.com', role: 'operational', department: 'operations', name: 'Operador Logístico' },
};

export const getPermissions = (email: string) => {
    const user = USERS_REGISTRY[email];
    if (!user) return [];

    // Estratégico (Director) tiene vista ejecutiva delegada
    if (user.role === 'strategic') {
        return ['home', 'executive_reports', 'budget_control', 'corporate_announcements', 'settings'];
    }

    // Táctico ve su área + comunicación + perfil
    const perms = ['home', 'communication', 'settings'];

    if (user.department === 'sales') perms.push('sales', 'reports');
    if (user.department === 'inventory') perms.push('inventory', 'purchases');
    if (user.department === 'finance') perms.push('finance', 'reports');
    if (user.department === 'hr') perms.push('hr');
    if (user.department === 'operations') perms.push('inventory', 'purchases', 'reports');

    return perms;
};

export const getUserData = (email: string): UserAuth | null => {
    return USERS_REGISTRY[email] || null;
};
