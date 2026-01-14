import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Calendar, Megaphone } from 'lucide-react';

// Mock data para ventas mensuales
const salesData = [
  { month: 'Ene', ventas: 85000 },
  { month: 'Feb', ventas: 92000 },
  { month: 'Mar', ventas: 78000 },
  { month: 'Abr', ventas: 105000 },
  { month: 'May', ventas: 98000 },
  { month: 'Jun', ventas: 115000 },
  { month: 'Jul', ventas: 127450 },
];

interface Announcement {
  id: number;
  title: string;
  description: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: 'Actualización del Sistema',
    description: 'Mantenimiento programado para el próximo domingo de 2:00 AM a 6:00 AM',
    date: '12 Ene 2026',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Nuevos Productos Disponibles',
    description: 'Se han agregado 45 nuevos productos al catálogo de suministros industriales',
    date: '10 Ene 2026',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Reunión Mensual',
    description: 'Reunión general de equipo el viernes 17 de enero a las 3:00 PM',
    date: '9 Ene 2026',
    priority: 'medium',
  },
  {
    id: 4,
    title: 'Política de Inventario',
    description: 'Nueva política de control de inventario implementada desde el 1 de enero',
    date: '5 Ene 2026',
    priority: 'low',
  },
];

export function SalesChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Ventas Mensuales</h3>
          <p className="text-sm text-gray-500">Últimos 7 meses</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Calendar size={16} />
          <span>2026</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="month" 
            tick={{ fill: '#6b7280', fontSize: 12 }}
            axisLine={{ stroke: '#e5e7eb' }}
          />
          <YAxis 
            tick={{ fill: '#6b7280', fontSize: 12 }}
            axisLine={{ stroke: '#e5e7eb' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Ventas']}
          />
          <Bar dataKey="ventas" fill="#1e3a8a" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Promedio Mensual</p>
            <p className="text-xl font-semibold text-gray-800">$100,064</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Período</p>
            <p className="text-xl font-semibold text-gray-800">$700,450</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AnnouncementsSection() {
  const priorityColors = {
    high: 'bg-red-100 text-red-700 border-red-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    low: 'bg-blue-100 text-blue-700 border-blue-200',
  };

  const priorityLabels = {
    high: 'Alta',
    medium: 'Media',
    low: 'Baja',
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Megaphone size={20} className="text-blue-800" />
        <h3 className="text-lg font-semibold text-gray-800">Anuncios Corporativos</h3>
      </div>

      <div className="space-y-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-gray-800 text-sm">
                {announcement.title}
              </h4>
              <span
                className={`text-xs px-2 py-1 rounded-full border ${
                  priorityColors[announcement.priority]
                }`}
              >
                {priorityLabels[announcement.priority]}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{announcement.description}</p>
            <p className="text-xs text-gray-400">{announcement.date}</p>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-sm text-blue-800 font-medium hover:bg-blue-50 rounded-lg transition-colors">
        Ver todos los anuncios
      </button>
    </div>
  );
}
