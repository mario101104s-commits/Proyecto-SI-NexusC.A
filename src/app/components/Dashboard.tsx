import { useState } from 'react';
import {
  Home,
  ShoppingCart,
  Package,
  Users,
  BarChart3,
  Settings,
  Menu,
  X,
  Bell,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Truck
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { InventoryPage } from '@/app/components/inventory/InventoryPage';
import { PurchasesPage } from '@/app/components/purchases/PurchasesPage';


import { DashboardWidgets } from '@/app/components/DashboardWidgets';
import { SalesChart, AnnouncementsSection } from '@/app/components/DashboardCharts';
import { SalesPage } from '@/app/components/sales/SalesPage';
import nexusLogo from '@/assets/nexus_logo.png';

interface DashboardProps {
  username: string;
  onLogout: () => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

export function Dashboard({ username, onLogout }: DashboardProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeMenu, setActiveMenu] = useState('home');
  const [notificationCount] = useState(3);

  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Inicio', icon: <Home size={20} />, active: true },
    { id: 'sales', label: 'Ventas', icon: <ShoppingCart size={20} /> },
    { id: 'inventory', label: 'Inventario', icon: <Package size={20} /> },
    { id: 'purchases', label: 'Compras', icon: <Truck size={20} /> },
    { id: 'clients', label: 'Clientes', icon: <Users size={20} /> },
    { id: 'reports', label: 'Reportes', icon: <BarChart3 size={20} /> },

    { id: 'settings', label: 'Configuración', icon: <Settings size={20} /> },
  ];

  const getPageTitle = () => {
    switch (activeMenu) {
      case 'home':
        return 'Dashboard Principal';
      case 'sales':
        return 'Gestión de Ventas';
      case 'inventory':
        return 'Inventario';
      case 'purchases':
        return 'Compras y Proveedores';
      case 'clients':

        return 'Clientes';
      case 'reports':
        return 'Reportes';
      case 'settings':
        return 'Configuración';
      default:
        return 'Dashboard Principal';
    }
  };

  const renderContent = () => {
    switch (activeMenu) {
      case 'home':
        return (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Bienvenido, {username}
            </h2>

            {/* Widgets */}
            <DashboardWidgets />

            {/* Charts and Announcements */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <SalesChart />
              </div>
              <div>
                <AnnouncementsSection />
              </div>
            </div>
          </>
        );
      case 'sales':
        return <SalesPage />;
      case 'inventory':
        return <InventoryPage />;
      case 'purchases':
        return <PurchasesPage />;
      case 'clients':

        return (
          <div className="text-center py-12">
            <Users size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Módulo de Clientes</h2>
            <p className="text-gray-500">Esta sección está en desarrollo</p>
          </div>
        );
      case 'reports':
        return (
          <div className="text-center py-12">
            <BarChart3 size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Módulo de Reportes</h2>
            <p className="text-gray-500">Esta sección está en desarrollo</p>
          </div>
        );
      case 'settings':
        return (
          <div className="text-center py-12">
            <Settings size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-xl font-semibold text-gray-600 mb-2">Configuración</h2>
            <p className="text-gray-500">Esta sección está en desarrollo</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${sidebarCollapsed ? 'w-20' : 'w-64'
          } bg-white border-r border-gray-200 transition-all duration-300 flex flex-col`}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {!sidebarCollapsed && (
            <img src={nexusLogo} alt="NEXUS" className="h-10 w-auto" />
          )}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-2 hover:bg-gray-100"
          >
            {sidebarCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${activeMenu === item.id
                ? 'bg-blue-50 text-blue-800 border-r-4 border-blue-800'
                : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {!sidebarCollapsed && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        {!sidebarCollapsed && (
          <div className="p-4 border-t border-gray-200">
            <p className="text-xs text-gray-500">© 2026 NEXUS C.A.</p>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-semibold text-gray-800">
              {getPageTitle()}
            </h1>
          </div>

          <div className="flex items-center gap-4">
            {/* User Name */}
            <div className="hidden md:flex items-center gap-2 text-sm text-gray-600">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-800 font-semibold">
                  {username.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="font-medium">{username}</span>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative p-2">
              <Bell size={20} className="text-gray-600" />
              {notificationCount > 0 && (
                <span className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </Button>

            {/* Logout */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onLogout}
              className="flex items-center gap-2 text-gray-600 hover:text-red-600 hover:bg-red-50"
            >
              <LogOut size={18} />
              <span className="hidden md:inline">Cerrar Sesión</span>
            </Button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}