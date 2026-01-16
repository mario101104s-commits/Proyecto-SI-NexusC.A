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

    // Prompt 3: Director
    if (email === 'director@nexus.com') {
        return ['home', 'executive_reports', 'budget_control', 'corporate_announcements', 'settings'];
    }

    // Prompt 4: Gerente General
    if (email === 'gerentegeneral@nexus.com') {
        return ['home', 'area_reports', 'key_indicators', 'meetings', 'corporate_announcements', 'settings', 'sales', 'inventory', 'purchases', 'finance', 'hr'];
    }

    // Prompt 5: Gerente de Operaciones
    if (email === 'gerente.operaciones@nexus.com') {
        return ['home', 'inventory', 'warehouses', 'purchases', 'logistics', 'ops_reports', 'settings'];
    }

    // Prompt 6: Supervisor de Almacén
    if (email === 'supervisor.almacen@nexus.com') {
        return ['home', 'my_warehouse', 'movements', 'reception', 'dispatch', 'adjustments', 'settings'];
    }

    // Prompt 7: Gerente de Ventas
    if (email === 'gerente.ventas@nexus.com') {
        return ['home', 'customers', 'quotes', 'orders', 'catalog', 'sales_reports', 'sales_team', 'inventory_query', 'settings'];
    }

    // Prompt 8: Gerente de Finanzas
    if (email === 'gerente.finanzas@nexus.com') {
        return ['home', 'billing', 'cxc_cxp', 'budget', 'fin_reports', 'reconciliations', 'settings'];
    }

    // Prompt 9: Gerente de RRHH
    if (email === 'gerente.rrhh@nexus.com') {
        return ['home', 'employees', 'recruitment', 'attendance', 'payroll', 'evaluations', 'training', 'knowledge_base', 'settings'];
    }

    // Prompt 10: Vendedor
    if (email === 'vendedor@nexus.com') {
        return ['home', 'my_customers', 'my_quotes', 'my_orders', 'catalog', 'my_performance', 'inventory_query', 'settings'];
    }

    // Prompt 11: Asistente
    if (email === 'asistente@nexus.com') {
        return ['home', 'calendar', 'documents', 'communication', 'tasks', 'settings'];
    }

    // Prompt 12: Trabajador
    if (email === 'trabajador@nexus.com') {
        return ['home', 'my_tasks', 'attendance', 'corporate_announcements', 'personal_docs', 'settings'];
    }

    return ['home', 'settings'];
};

export const getUserData = (email: string): UserAuth | null => {
    return USERS_REGISTRY[email] || null;
};
