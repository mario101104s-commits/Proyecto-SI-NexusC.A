import { useState } from 'react';
import {
  Home,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  User,
  Menu,
  X,
  Bell,
  LogOut,
  Truck,
  MessageSquare,
  FileText,
  DollarSign,
  Megaphone
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

    // Director Specific
    { id: 'executive_reports', label: 'Reportes Ejecutivos', icon: <FileText size={20} /> },
    { id: 'budget_control', label: 'Control Presupuestario', icon: <DollarSign size={20} /> },
    { id: 'corporate_announcements', label: 'Anuncios Corporativos', icon: <Megaphone size={20} /> },

    { id: 'reports', label: 'Reportes', icon: <BarChart3 size={20} /> },
    { id: 'settings', label: userData?.role === 'strategic' ? 'Configuración' : 'Mi Perfil', icon: <User size={20} /> },
  ].filter(item => permissions.includes(item.id));

  const getPageTitle = () => {
    switch (activeMenu) {
      case 'home': return userData?.email === 'gerentegeneral@nexus.com' ? 'Dashboard Gerencial' : userData?.role === 'strategic' ? 'Dashboard Estratégico' : 'Panel de Control Principal';
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

      case 'reports': return 'Reportes y Analítica';
      case 'settings': return 'Mi Perfil y Configuración';
      default: return 'NEXUS';
    }
  };

  const renderContent = () => {
    // Si es estratégico y está en home, mostrar el Dashboard correspondiente
    if (activeMenu === 'home') {
      if (userData?.email === 'director@nexus.com') return <StrategicDashboard />;
      if (userData?.email === 'gerentegeneral@nexus.com') return <GeneralManagerDashboard />;
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

    switch (activeMenu) {
      case 'sales': return <SalesPage />;
      case 'inventory': return <InventoryPage />;
      case 'purchases': return <PurchasesPage />;
      case 'finance': return <FinancePage />;
      case 'hr': return <HRPage />;
      case 'communication': return <CommunicationPage />;
      case 'reports': return <ReportsPage />;
      case 'settings': return <ProfilePage />;

      // Suite Ejecutiva
      case 'executive_reports': return <ExecutiveReportsPage />;
      case 'budget_control': return <BudgetControlPage />;
      case 'corporate_announcements': return <CorporateAnnouncementsPage />;

      default: return <div className="p-8 text-center text-gray-500 italic">Módulo restringido.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside className={`${isSidebarCollapsed ? 'w-20' : 'w-64'} bg-blue-900 transition-all duration-300 flex flex-col fixed h-full z-30 shadow-2xl`}>
        <div className="p-4 flex items-center justify-between border-b border-blue-800">
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
                : 'text-blue-100/70 hover:bg-blue-800/50 hover:text-white'}`}
            >
              <span className={`transition-colors flex-shrink-0 ${activeMenu === item.id ? 'text-white' : 'group-hover:text-blue-100'}`}>
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

        <div className="p-4 border-t border-blue-800 bg-blue-950/20">
          <button onClick={onLogout} className="w-full flex items-center p-3 rounded-xl text-red-100/70 hover:bg-red-500/10 hover:text-red-300 transition-all group">
            <LogOut size={20} />
            {!isSidebarCollapsed && <span className="ml-3 font-bold text-sm">Salir del Sistema</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`${isSidebarCollapsed ? 'ml-20' : 'ml-64'} flex-1 flex flex-col transition-all duration-300`}>
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-gray-100 flex items-center justify-between px-10 sticky top-0 z-20">
          <div className="flex flex-col">
            <h2 className="text-xl font-black text-gray-800 tracking-tight">{getPageTitle()}</h2>
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
        </header>

        <main className="flex-1 overflow-y-auto p-10 bg-slate-50/50">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}