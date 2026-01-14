import { DollarSign, ShoppingBag, AlertTriangle, CheckSquare, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  status?: 'success' | 'warning' | 'error' | 'info';
}

function StatCard({ title, value, icon, trend, status = 'info' }: StatCardProps) {
  const statusColors = {
    success: 'bg-green-50 text-green-700',
    warning: 'bg-yellow-50 text-yellow-700',
    error: 'bg-red-50 text-red-700',
    info: 'bg-blue-50 text-blue-700',
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-gray-500 mb-1">{title}</p>
          <h3 className="text-3xl font-bold text-gray-800 mb-2">{value}</h3>
          
          {trend && (
            <div className="flex items-center gap-1">
              {trend.isPositive ? (
                <TrendingUp size={16} className="text-green-600" />
              ) : (
                <TrendingDown size={16} className="text-red-600" />
              )}
              <span
                className={`text-sm font-medium ${
                  trend.isPositive ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {trend.value}%
              </span>
              <span className="text-sm text-gray-500">vs mes anterior</span>
            </div>
          )}
        </div>
        
        <div className={`p-3 rounded-lg ${statusColors[status]}`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

export function DashboardWidgets() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <StatCard
        title="Ventas del Mes"
        value="$127,450"
        icon={<DollarSign size={24} />}
        status="success"
        trend={{ value: 12.5, isPositive: true }}
      />
      
      <StatCard
        title="Pedidos Pendientes"
        value="24"
        icon={<ShoppingBag size={24} />}
        status="info"
        trend={{ value: 5.2, isPositive: false }}
      />
      
      <StatCard
        title="Stock Crítico"
        value="8"
        icon={<AlertTriangle size={24} />}
        status="warning"
      />
      
      <StatCard
        title="Tareas Asignadas"
        value="15"
        icon={<CheckSquare size={24} />}
        status="info"
      />
    </div>
  );
}
