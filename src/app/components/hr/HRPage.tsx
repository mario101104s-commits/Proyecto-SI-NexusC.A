import { useState } from 'react';
import { UserPlus, CalendarCheck, FileText, ClipboardList } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { MOCK_EMPLOYEES } from './types';
import { HRStats } from './HRStats';
import { EmployeeList } from './EmployeeList';
import { NewEmployeeModal } from './NewEmployeeModal';

export function HRPage() {
    const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false);

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">Recursos Humanos</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Gestión de talento, asistencia y evaluaciones
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    {/* Quick Actions */}
                    <Button variant="outline" size="sm" className="hidden md:flex gap-2 text-gray-600 bg-white" onClick={() => alert('Asistencia - En desarrollo')}>
                        <CalendarCheck size={16} />
                        Asistencia
                    </Button>
                    <Button variant="outline" size="sm" className="hidden md:flex gap-2 text-gray-600 bg-white" onClick={() => alert('Evaluaciones - En desarrollo')}>
                        <ClipboardList size={16} />
                        Evaluaciones
                    </Button>

                    <Button
                        className="bg-blue-800 hover:bg-blue-900 text-white shadow-md"
                        onClick={() => setIsNewEmployeeModalOpen(true)}
                    >
                        <UserPlus size={18} className="mr-2" />
                        Nuevo Empleado
                    </Button>
                </div>
            </div>

            {/* Stats Section */}
            <HRStats employees={MOCK_EMPLOYEES} />

            {/* Components with Title */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">Directorio de Personal</h2>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800">
                        Ver Organigrama
                    </Button>
                </div>
                <EmployeeList employees={MOCK_EMPLOYEES} />
            </div>

            {/* Modals */}
            <NewEmployeeModal
                isOpen={isNewEmployeeModalOpen}
                onClose={() => setIsNewEmployeeModalOpen(false)}
            />
        </div>
    );
}
