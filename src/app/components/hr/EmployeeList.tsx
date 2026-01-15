import { MoreHorizontal, Mail, Phone, Calendar } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Employee } from './types';

interface EmployeeListProps {
    employees: Employee[];
}

export function EmployeeList({ employees }: EmployeeListProps) {
    const getStatusColor = (status: Employee['status']) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-700 border-green-200';
            case 'vacation':
                return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'sick_leave':
                return 'bg-orange-100 text-orange-700 border-orange-200';
        }
    };

    const getStatusLabel = (status: Employee['status']) => {
        switch (status) {
            case 'active': return 'Activo';
            case 'vacation': return 'Vacaciones';
            case 'sick_leave': return 'Reposo';
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {employees.map((employee) => (
                <div key={employee.id} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all group">
                    <div className="flex justify-between items-start mb-4">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(employee.status)}`}>
                            {getStatusLabel(employee.status)}
                        </span>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-gray-400 hover:text-gray-600">
                            <MoreHorizontal size={16} />
                        </Button>
                    </div>

                    <div className="flex flex-col items-center text-center mb-6">
                        <div className="relative mb-3">
                            <img
                                src={employee.avatar}
                                alt={employee.name}
                                className="w-20 h-20 rounded-full object-cover border-4 border-gray-50 group-hover:border-blue-50 transition-colors"
                            />
                            <div className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white ${employee.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">{employee.name}</h3>
                        <p className="text-sm text-gray-500 font-medium">{employee.role}</p>
                        <p className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded mt-2">{employee.department}</p>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Mail size={14} className="text-gray-400" />
                            <span className="truncate">{employee.email}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Phone size={14} className="text-gray-400" />
                            <span>{employee.phone}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                            <Calendar size={14} className="text-gray-400" />
                            <span>Ingreso: {new Date(employee.startDate).getFullYear()}</span>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Button variant="outline" className="w-full text-sm text-gray-600 hover:text-blue-700 hover:border-blue-200">
                            Ver Perfil
                        </Button>
                    </div>
                </div>
            ))}
        </div>
    );
}
