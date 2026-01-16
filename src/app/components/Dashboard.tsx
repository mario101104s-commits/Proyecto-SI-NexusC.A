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
  MessageSquare
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { InventoryPage } from '@/app/components/inventory/InventoryPage';
import { PurchasesPage } from '@/app/components/purchases/PurchasesPage';
import { FinancePage } from '@/app/components/finance/FinancePage';
import { HRPage } from '@/app/components/hr/HRPage';
import { CommunicationPage } from '@/app/components/communication/CommunicationPage';
import { ReportsPage } from '@/app/components/reports/ReportsPage';
import { ProfilePage } from '@/app/components/profile/ProfilePage';
import { DashboardWidgets } from '@/app/components/DashboardWidgets';
import { SalesChart, AnnouncementsSection } from '@/app/components/DashboardCharts';
import { AnnouncementsBoard } from '@/app/components/communication/AnnouncementsBoard';
import { SalesPage } from '@/app/components/sales/SalesPage';
import nexusLogo from '@/assets/nexus_logo.png';
import marioProfile from '@/assets/mario_profile.png';
import { getPermissions, getUserData } from '@/app/lib/auth';

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
    { id: 'home', label: 'Inicio', icon: <Home size={20} /> },
    { id: 'sales', label: 'Ventas', icon: <ShoppingCart size={20} /> },
    { id: 'inventory', label: 'Inventario', icon: <Package size={20} /> },
    { id: 'purchases', label: 'Compras', icon: <Truck size={20} /> },
    { id: 'finance', label: 'Finanzas', icon: <BarChart3 size={20} /> },
    { id: 'hr', label: 'RRHH', icon: <Users size={20} /> },
    { id: 'communication', label: 'Comunicación', icon: <MessageSquare size={20} /> },
    { id: 'reports', label: 'Reportes', icon: <BarChart3 size={20} /> },
    { id: 'settings', label: 'Mi Perfil', icon: <User size={20} /> },
  ].filter(item => permissions.includes(item.id));

  const getPageTitle = () => {
    switch (activeMenu) {
      case 'home': return 'Panel de Control Principal';
      case 'sales': return 'Ventas y CRM';
      case 'inventory': return 'Inventario';
      case 'purchases': return 'Compras y Proveedores';
      case 'finance': return 'Finanzas y Facturación';
      case 'hr': return 'Recursos Humanos';
      case 'communication': return 'Comunicación y Colaboración';
      case 'reports': return 'Reportes y Analítica';
      case 'settings': return 'Mi Perfil y Configuración';
      default: return 'NEXUS';
    }
  };

  const renderContent = () => {
    switch (activeMenu) {
      case 'home':
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
      case 'sales': return <SalesPage />;
      case 'inventory': return <InventoryPage />;
      case 'purchases': return <PurchasesPage />;
      case 'finance': return <FinancePage />;
      case 'hr': return <HRPage />;
      case 'communication': return <CommunicationPage />;
      case 'reports': return <ReportsPage />;
      case 'settings': return <ProfilePage />;
      default: return <div className="p-8 text-center text-gray-500 italic">Módulo restringido.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar */}
      <aside className={`${isSidebarCollapsed ? 'w-20' : 'w-64'} bg-blue-900 transition-all duration-300 flex flex-col fixed h-full z-30`}>
        <div className="p-4 flex items-center justify-between border-b border-blue-800">
          {!isSidebarCollapsed && <img src={nexusLogo} alt="NEXUS" className="h-10 w-auto invert brightness-0" />}
          <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="p-1.5 rounded-lg bg-blue-800 text-blue-100 hover:bg-blue-700 transition-colors">
            {isSidebarCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 group ${activeMenu === item.id ? 'bg-blue-500/20 text-white shadow-lg' : 'text-blue-100/70 hover:bg-blue-800 hover:text-white'}`}
            >
              <span className={activeMenu === item.id ? 'text-white' : 'group-hover:text-white'}>{item.icon}</span>
              {!isSidebarCollapsed && <span className="ml-3 font-medium tracking-wide">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-blue-800">
          <button onClick={onLogout} className="w-full flex items-center p-3 rounded-lg text-red-200 hover:bg-red-500/10 hover:text-red-300 transition-colors">
            <LogOut size={20} />
            {!isSidebarCollapsed && <span className="ml-3 font-medium">Cerrar Sesión</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`${isSidebarCollapsed ? 'ml-20' : 'ml-64'} flex-1 flex flex-col transition-all duration-300`}>
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-20">
          <h2 className="text-xl font-bold text-gray-800">{getPageTitle()}</h2>

          <div className="flex items-center gap-6">
            <button className="relative p-2 text-gray-400 hover:text-blue-600 rounded-full transition-all">
              <Bell size={22} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200" />
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-gray-800">{userData?.name || username}</p>
                <div className="flex items-center gap-1 justify-end">
                  <div className={`w-1.5 h-1.5 rounded-full ${userData?.role === 'strategic' ? 'bg-purple-500' : 'bg-blue-500'}`} />
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">
                    {userData?.role === 'strategic' ? 'Acceso Total' : userData?.role === 'tactical' ? 'Nivel Táctico' : 'Nivel Operativo'}
                  </p>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 border-2 border-white shadow-sm flex items-center justify-center text-blue-700 font-bold overflow-hidden ring-1 ring-gray-100">
                <img src={marioProfile} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}