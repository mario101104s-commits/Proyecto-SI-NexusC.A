import { useState } from 'react';
import {
  Home,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  User,
  Truck,
  MessageSquare,
  FileText,
  DollarSign,
  Megaphone,
  MapPin,
  Activity,
  ClipboardList,
  Layers,
  ArrowDownToLine,
  ArrowUpToLine,
  Settings2,
  Briefcase,
  Target,
  Users2,
  Receipt,
  Wallet,
  CreditCard,
  PieChart as PieChartIcon,
  Scale,
  GraduationCap,
  BookOpen,
  Calendar as CalendarIcon,
  FolderOpen,
  CheckSquare,
  Menu,
  X,
  Bell,
  LogOut
} from 'lucide-react';
import { InventoryPage } from '@/app/components/inventory/InventoryPage';
import { PurchasesPage } from '@/app/components/purchases/PurchasesPage';
import { FinancePage } from '@/app/components/finance/FinancePage';
import { HRPage } from '@/app/components/hr/HRPage';
import { CommunicationPage } from '@/app/components/communication/CommunicationPage';
import { ReportsPage } from '@/app/components/reports/ReportsPage';
import { ProfilePage } from '@/app/components/profile/ProfilePage';
import { DashboardWidgets } from '@/app/components/DashboardWidgets';
import { SalesChart, AnnouncementsSection } from '@/app/components/DashboardCharts';
import { SalesPage } from '@/app/components/sales/SalesPage';
import nexusLogo from '@/assets/nexus_logo.png';
import marioProfile from '@/assets/mario_profile.png';
import { getPermissions, getUserData } from '@/app/lib/auth';

import { StrategicDashboard } from '@/app/components/director/StrategicDashboard';
import { ExecutiveReportsPage } from '@/app/components/director/ExecutiveReportsPage';
import { BudgetControlPage } from '@/app/components/director/BudgetControlPage';
import { CorporateAnnouncementsPage } from '@/app/components/director/CorporateAnnouncementsPage';

import { GeneralManagerDashboard } from '@/app/components/gm/GeneralManagerDashboard';
import { BusinessAreasPage } from '@/app/components/gm/BusinessAreasPage';
import { KeyIndicatorsPage } from '@/app/components/gm/KeyIndicatorsPage';
import { MeetingsManagementPage } from '@/app/components/gm/MeetingsManagementPage';

import { OperationsDashboard } from '@/app/components/ops/OperationsDashboard';
import { WarehousesPage } from '@/app/components/ops/WarehousesPage';
import { LogisticsPage } from '@/app/components/ops/LogisticsPage';
import { OpsReportsPage } from '@/app/components/ops/OpsReportsPage';

import { WarehouseSupervisorDashboard } from '@/app/components/ops/WarehouseSupervisorDashboard';
import { MyWarehousePage } from '@/app/components/ops/MyWarehousePage';
import { MovementHistoryPage } from '@/app/components/ops/MovementHistoryPage';
import { ReceptionPage } from '@/app/components/ops/ReceptionPage';
import { DispatchPage } from '@/app/components/ops/DispatchPage';
import { InventoryAdjustmentsPage } from '@/app/components/ops/InventoryAdjustmentsPage';
import { SalesManagerDashboard } from '@/app/components/sales/SalesManagerDashboard';
import { FinanceManagerDashboard } from '@/app/components/finance/FinanceManagerDashboard';
import { HRManagerDashboard } from '@/app/components/hr/HRManagerDashboard';
import { SellerDashboard } from '@/app/components/sales/SellerDashboard';
import { AssistantDashboard } from '@/app/components/ops/AssistantDashboard';
import { WorkerDashboard } from '@/app/components/ops/WorkerDashboard';

interface DashboardProps {
  username: string;
  onLogout: () => void;
}

export function Dashboard({ username, onLogout }: DashboardProps) {
  const [activeMenu, setActiveMenu] = useState('home');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const userData = getUserData(username);
  const permissions = getPermissions(username);

  const menuItems = [
    { id: 'home', label: (userData?.role === 'strategic' || userData?.role === 'tactical') ? 'Dashboard' : 'Inicio', icon: <Home size={20} /> },
    { id: 'sales', label: 'Ventas', icon: <ShoppingCart size={20} /> },
    { id: 'inventory', label: 'Inventario', icon: <Package size={20} /> },
    { id: 'purchases', label: 'Compras', icon: <Truck size={20} /> },
    { id: 'finance', label: 'Finanzas', icon: <BarChart3 size={20} /> },
    { id: 'hr', label: 'RRHH', icon: <Users size={20} /> },
    { id: 'communication', label: 'Comunicación', icon: <MessageSquare size={20} /> },

    // Director & General Manager Specific
    { id: 'executive_reports', label: 'Reportes Ejecutivos', icon: <FileText size={20} /> },
    { id: 'budget_control', label: 'Control Presupuestario', icon: <DollarSign size={20} /> },
    { id: 'corporate_announcements', label: 'Anuncios Corporativos', icon: <Megaphone size={20} /> },
    { id: 'area_reports', label: 'Gestión de Áreas', icon: <Layers size={20} /> },
    { id: 'key_indicators', label: 'Indicadores Clave', icon: <Activity size={20} /> },
    { id: 'meetings', label: 'Gestión de Reuniones', icon: <CalendarIcon size={20} /> },

    // Suite Operativa (Tactical)
    { id: 'warehouses', label: 'Almacenes', icon: <MapPin size={20} /> },
    { id: 'logistics', label: 'Logística', icon: <Truck size={20} /> },
    { id: 'ops_reports', label: 'Reportes Operativos', icon: <Activity size={20} /> },

    // Almacén
    { id: 'my_warehouse', label: 'Mi Almacén', icon: <Home size={20} /> },
    { id: 'movements', label: 'Movimientos', icon: <Layers size={20} /> },
    { id: 'reception', label: 'Recepción', icon: <ArrowDownToLine size={20} /> },
    { id: 'dispatch', label: 'Despacho', icon: <ArrowUpToLine size={20} /> },
    { id: 'adjustments', label: 'Ajustes', icon: <Settings2 size={20} /> },

    // Ventas
    { id: 'customers', label: 'Clientes', icon: <Users size={20} /> },
    { id: 'quotes', label: 'Cotizaciones', icon: <FileText size={20} /> },
    { id: 'orders', label: 'Pedidos', icon: <ShoppingCart size={20} /> },
    { id: 'catalog', label: 'Catálogo', icon: <Briefcase size={20} /> },
    { id: 'sales_reports', label: 'Reportes Com.', icon: <BarChart3 size={20} /> },
    { id: 'sales_team', label: 'Equipo Ventas', icon: <Users2 size={20} /> },
    { id: 'inventory_query', label: 'Consulta Stock', icon: <Package size={20} /> },

    // Finanzas
    { id: 'billing', label: 'Facturación', icon: <Receipt size={20} /> },
    { id: 'accounts_receivable', label: 'CxC', icon: <Wallet size={20} /> },
    { id: 'accounts_payable', label: 'CxP', icon: <CreditCard size={20} /> },
    { id: 'budget', label: 'Presupuesto', icon: <PieChartIcon size={20} /> },
    { id: 'fin_reports', label: 'Reportes Fin.', icon: <BarChart3 size={20} /> },
    { id: 'reconciliations', label: 'Conciliaciones', icon: <Scale size={20} /> },

    // RRHH
    { id: 'employees', label: 'Empleados', icon: <Users size={20} /> },
    { id: 'attendance', label: 'Asistencia', icon: <CalendarIcon size={20} /> },
    { id: 'payroll', label: 'Nómina', icon: <DollarSign size={20} /> },
    { id: 'evaluations', label: 'Evaluaciones', icon: <ClipboardList size={20} /> },
    { id: 'training', label: 'Capacitación', icon: <GraduationCap size={20} /> },
    { id: 'knowledge_base', label: 'Base Conoc.', icon: <BookOpen size={20} /> },

    // Operacional
    { id: 'my_customers', label: 'Mis Clientes', icon: <User size={20} /> },
    { id: 'my_quotes', label: 'Mis Cotiz.', icon: <FileText size={20} /> },
    { id: 'my_orders', label: 'Mis Pedidos', icon: <ShoppingCart size={20} /> },
    { id: 'my_performance', label: 'Mi Desempeño', icon: <Target size={20} /> },
    { id: 'calendar', label: 'Calendario', icon: <CalendarIcon size={20} /> },
    { id: 'documents', label: 'Documentos', icon: <FolderOpen size={20} /> },
    { id: 'tasks', label: 'Tareas', icon: <CheckSquare size={20} /> },
    { id: 'my_tasks', label: 'Mis Tareas', icon: <ClipboardList size={20} /> },
    { id: 'personal_docs', label: 'Docs Personales', icon: <FileText size={20} /> },

    { id: 'reports', label: 'Reportes', icon: <BarChart3 size={20} /> },
    { id: 'settings', label: userData?.role === 'strategic' ? 'Configuración' : 'Mi Perfil', icon: <User size={20} /> },
  ].filter(item => permissions.includes(item.id));

  const getPageTitle = () => {
    switch (activeMenu) {
      case 'home':
        if (userData?.email === 'gerente.operaciones@nexus.com') return 'Control de Operaciones';
        return userData?.email === 'gerentegeneral@nexus.com' ? 'Dashboard Gerencial' : userData?.role === 'strategic' ? 'Dashboard Estratégico' : 'Panel de Control Principal';
      case 'sales': return 'Ventas y CRM';
      case 'inventory': return 'Inventario';
      case 'purchases': return 'Compras y Proveedores';
      case 'finance': return 'Finanzas y Facturación';
      case 'hr': return 'Recursos Humanos';
      case 'communication': return 'Comunicación y Colaboración';

      // Suite Ejecutiva (Compartida por Director y GM)
      case 'executive_reports': return 'Reportes Estratégicos Ejecutivos';
      case 'budget_control': return 'Monitoreo Presupuestario';
      case 'corporate_announcements': return 'Anuncios de Dirección';
      case 'area_reports': return 'Gestión de Áreas Estratégicas';
      case 'key_indicators': return 'Indicadores de Desempeño (KPIs)';
      case 'meetings': return 'Agenda y Reuniones Ejecutivas';

      // Suite Operativa
      case 'warehouses': return 'Gestión de Almacenes Regionales';
      case 'logistics': return 'Control de Flota y Logística';
      case 'ops_reports': return 'Reportes de Eficiencia Operativa';

      // Almacén
      case 'my_warehouse': return 'Mi Almacén (Valencia)';
      case 'movements': return 'Historial de Movimientos';
      case 'reception': return 'Recepciones de Mercancía';
      case 'dispatch': return 'Despachos y Picking';
      case 'adjustments': return 'Ajustes de Inventario';

      // Ventas
      case 'customers': return 'Gestión de Clientes (CRM)';
      case 'quotes': return 'Cotizaciones y Propuestas';
      case 'orders': return 'Pedidos de Venta';
      case 'catalog': return 'Catálogo de Productos';
      case 'sales_reports': return 'Reportes de Ventas';
      case 'sales_team': return 'Equipo Comercial';
      case 'inventory_query': return 'Disponibilidad de Stock';

      // Finanzas
      case 'billing': return 'Facturación Electrónica';
      case 'accounts_receivable': return 'Cuentas por Cobrar';
      case 'accounts_payable': return 'Cuentas por Pagar';
      case 'budget': return 'Gestión Presupuestaria';
      case 'fin_reports': return 'Estados Financieros';
      case 'reconciliations': return 'Conciliaciones Bancarias';

      // RRHH
      case 'employees': return 'Gestión de Personal';
      case 'attendance': return 'Control de Asistencia';
      case 'payroll': return 'Nómina y Beneficios';
      case 'evaluations': return 'Evaluación de Desempeño';
      case 'training': return 'Capacitación y Cursos';
      case 'knowledge_base': return 'Base de Conocimientos';

      // Operacional
      case 'my_customers': return 'Mis Clientes Asignados';
      case 'my_quotes': return 'Mis Cotizaciones Activas';
      case 'my_orders': return 'Mis Pedidos';
      case 'my_performance': return 'Mi Seguimiento de Metas';
      case 'calendar': return 'Agenda y Eventos';
      case 'documents': return 'Repositorio de Documentos';
      case 'tasks': return 'Gestión de Tareas';
      case 'my_tasks': return 'Tareas de mi Turno';
      case 'personal_docs': return 'Mis Documentos Laborales';

      case 'reports': return 'Reportes y Analítica';
      case 'settings': return 'Mi Perfil y Configuración';
      default: return 'NEXUS';
    }
  };

  const renderContent = () => {
    // Si está en home, mostrar el Dashboard correspondiente por usuario/rol
    if (activeMenu === 'home') {
      if (userData?.email === 'director@nexus.com') return <StrategicDashboard onNavigate={setActiveMenu} />;
      if (userData?.email === 'gerentegeneral@nexus.com') return <GeneralManagerDashboard onNavigate={setActiveMenu} />;
      if (userData?.email === 'gerente.operaciones@nexus.com') return <OperationsDashboard onNavigate={setActiveMenu} />;
      if (userData?.email === 'supervisor.almacen@nexus.com') return <WarehouseSupervisorDashboard onNavigate={setActiveMenu} />;
      if (userData?.email === 'gerente.ventas@nexus.com') return <SalesManagerDashboard />;
      if (userData?.email === 'gerente.finanzas@nexus.com') return <FinanceManagerDashboard />;
      if (userData?.email === 'gerente.rrhh@nexus.com') return <HRManagerDashboard />;
      if (userData?.email === 'vendedor@nexus.com') return <SellerDashboard />;
      if (userData?.email === 'asistente@nexus.com') return <AssistantDashboard />;
      if (userData?.email === 'trabajador@nexus.com') return <WorkerDashboard />;

      return (
        <div className="space-y-8 animate-in fade-in duration-500">
          <DashboardWidgets />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <SalesChart />
            </div>
            <div className="lg:col-span-1">
              <AnnouncementsSection />
            </div>
          </div>
        </div>
      );
    }

    const isGM = userData?.email === 'gerentegeneral@nexus.com';

    switch (activeMenu) {
      case 'sales': return <SalesPage readOnly={isGM} />;
      case 'inventory': return <InventoryPage readOnly={isGM} />;
      case 'purchases': return <PurchasesPage readOnly={isGM} />;
      case 'finance': return <FinancePage readOnly={isGM} />;
      case 'hr': return <HRPage readOnly={isGM} />;
      case 'communication': return <CommunicationPage />;
      case 'reports': return <ReportsPage />;
      case 'settings': return <ProfilePage />;

      // Suite Ejecutiva
      case 'executive_reports': return <ExecutiveReportsPage />;
      case 'budget_control': return <BudgetControlPage />;
      case 'corporate_announcements': return <CorporateAnnouncementsPage />;
      case 'area_reports': return <BusinessAreasPage />;
      case 'key_indicators': return <KeyIndicatorsPage />;
      case 'meetings': return <MeetingsManagementPage />;

      // Suite Operativa
      case 'warehouses': return <WarehousesPage />;
      case 'logistics': return <LogisticsPage />;
      case 'ops_reports': return <OpsReportsPage />;

      // Almacen Supervisor Suite
      case 'my_warehouse': return <MyWarehousePage />;
      case 'movements': return <MovementHistoryPage />;
      case 'reception': return <ReceptionPage />;
      case 'dispatch': return <DispatchPage />;
      case 'adjustments': return <InventoryAdjustmentsPage />;

      default: return <ModulePlaceholder title={getPageTitle()} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 font-sans">
      {/* Sidebar Area */}
      <aside className={`${isSidebarCollapsed ? 'w-20' : 'w-64'} bg-blue-900 transition-all duration-300 flex flex-col h-full z-30 shadow-2xl shrink-0`}>
        <div className="p-4 flex items-center justify-between border-b border-blue-800 shrink-0">
          {!isSidebarCollapsed && <img src={nexusLogo} alt="NEXUS" className="h-10 w-auto invert brightness-0" />}
          <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="p-1.5 rounded-lg bg-blue-800/50 text-blue-100 hover:bg-blue-700 transition-colors">
            {isSidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1 custom-scrollbar">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center p-3 rounded-xl transition-all duration-200 group relative ${activeMenu === item.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-blue-100/70 hover:bg-blue-800/50 hover:text-white'
                } `}
            >
              <span className={`transition-colors flex-shrink-0 ${activeMenu === item.id ? 'text-white' : 'group-hover:text-blue-100'} `}>
                {item.icon}
              </span>
              {!isSidebarCollapsed && (
                <span className="ml-3 font-semibold text-sm tracking-wide">{item.label}</span>
              )}
              {activeMenu === item.id && (
                <div className="absolute right-2 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-blue-800 bg-blue-950/20 shrink-0">
          <button onClick={onLogout} className="w-full flex items-center p-3 rounded-xl text-red-100/70 hover:bg-red-500/10 hover:text-red-300 transition-all group">
            <LogOut size={20} />
            {!isSidebarCollapsed && <span className="ml-3 font-bold text-sm">Salir del Sistema</span>}
          </button>
        </div>
      </aside>

      {/* Main Viewport */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 shrink-0 flex items-center">
          <div className="w-full px-10 flex items-center justify-between">
            <div className="flex flex-col">
              <h2 className="text-2xl font-black text-gray-800 tracking-tight">{getPageTitle()}</h2>
              <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-full w-fit mt-1">
                {userData?.role === 'strategic' ? 'Mando Estratégico' : userData?.role === 'tactical' ? 'Gestión Táctica' : 'Nivel Operativo'}
                <span className="ml-2 opacity-30 text-[8px]">v1.2.1-executive</span>
              </p>
            </div>

            <div className="flex items-center gap-8">
              <button className="relative p-2.5 text-gray-400 hover:text-blue-800 hover:bg-blue-50 rounded-2xl transition-all">
                <Bell size={22} />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full ring-4 ring-white"></span>
              </button>
              <div className="h-10 w-px bg-gray-100" />
              <div className="flex items-center gap-4">
                <div className="text-right hidden md:block">
                  <p className="text-sm font-black text-gray-900 leading-none">{userData?.name || username}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter mt-1">{userData?.email}</p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-blue-100 border-2 border-white shadow-xl flex items-center justify-center text-blue-700 font-bold overflow-hidden ring-1 ring-gray-100 bg-gradient-to-br from-blue-100 to-blue-200">
                  <img src={marioProfile} alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-slate-50/50 py-10">
          <div className="w-full px-10">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

function ModulePlaceholder({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-20 bg-white rounded-3xl border-2 border-dashed border-slate-100 animate-in fade-in zoom-in duration-500">
      <div className="w-20 h-20 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 mb-6">
        <Home size={40} />
      </div>
      <h3 className="text-2xl font-black text-gray-800 tracking-tight">{title}</h3>
      <p className="text-gray-400 font-medium mt-2 max-w-sm text-center">Este módulo se encuentra en fase de diseño técnico. Pronto estará disponible la interfaz completa.</p>
    </div>
  );
}