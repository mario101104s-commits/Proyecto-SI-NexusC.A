import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Users, Briefcase, UserCheck } from 'lucide-react';
import { Employee, DEPARTMENTS } from './types';

interface HRStatsProps {
    employees: Employee[];
}

export function HRStats({ employees }: HRStatsProps) {
    // Data for chart
    const data = DEPARTMENTS.map(dept => ({
        name: dept,
        count: employees.filter(e => e.department === dept).length
    }));

    const COLORS = ['#1e3a8a', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'];

    const totalEmployees = employees.length;
    const activeEmployees = employees.filter(e => e.status === 'active').length;
    const vacationEmployees = employees.filter(e => e.status === 'vacation').length;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Distribución por Departamento</h3>
                <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                            <XAxis type="number" hide />
                            <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12 }} />
                            <Tooltip
                                cursor={{ fill: 'transparent' }}
                                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            />
                            <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={32}>
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
                <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Total Empleados</p>
                        <p className="text-3xl font-bold text-gray-800">{totalEmployees}</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full text-blue-700">
                        <Users size={24} />
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">Activos Hoy</p>
                        <p className="text-3xl font-bold text-gray-800">{activeEmployees}</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full text-green-700">
                        <UserCheck size={24} />
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500 mb-1">En Vacaciones</p>
                        <p className="text-3xl font-bold text-gray-800">{vacationEmployees}</p>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-full text-orange-700">
                        <Briefcase size={24} />
                    </div>
                </div>
            </div>
        </div>
    );
}
