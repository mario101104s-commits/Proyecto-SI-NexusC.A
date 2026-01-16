import { useState } from 'react';
import { UserPlus, CalendarCheck } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { MOCK_EMPLOYEES } from './types';
import { HRStats } from './HRStats';
import { EmployeeList } from './EmployeeList';
import { NewEmployeeModal } from './NewEmployeeModal';

export function HRPage({ readOnly = false }: { readOnly?: boolean }) {
    const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false);

    return (
        <div className="space-y-10 animate-in fade-in duration-500">
            {/* Header section with executive style */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-2">Capital Humano</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Gestión de Personal</h1>
                    <p className="text-gray-500 font-medium mt-2">Administración estratégica de talento, cultura y desempeño organizacional.</p>
                </div>

                <div className="flex items-center gap-3">
                    <Button variant="outline" className="hidden lg:flex gap-2 text-gray-700 bg-white px-6 py-6 rounded-2xl border-gray-100 shadow-sm font-bold" onClick={() => alert('Asistencia - En desarrollo')}>
                        <CalendarCheck size={20} />
                        Control de Asistencia
                    </Button>

                    {!readOnly && (
                        <Button
                            className="bg-slate-900 hover:bg-black text-white px-8 py-6 rounded-2xl shadow-xl shadow-gray-200 transition-all hover:-translate-y-1 font-bold"
                            onClick={() => setIsNewEmployeeModalOpen(true)}
                        >
                            <UserPlus size={20} className="mr-2" />
                            Incorporar Talento
                        </Button>
                    )}
                </div>
            </div>

            {/* Stats Section with Premium Cards */}
            <HRStats employees={MOCK_EMPLOYEES} />

            {/* Components with Title */}
            <div className="space-y-6">
                <div className="flex items-center justify-between px-4">
                    <h2 className="text-2xl font-black text-gray-800 tracking-tight">Estructura Organizacional</h2>
                    <Button variant="ghost" className="text-blue-600 hover:bg-blue-50 px-6 font-bold rounded-xl">
                        Visualizar Organigrama
                    </Button>
                </div>
                <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 overflow-hidden">
                    <EmployeeList employees={MOCK_EMPLOYEES} />
                </div>
            </div>

            {/* Modals */}
            <NewEmployeeModal
                isOpen={isNewEmployeeModalOpen}
                onClose={() => setIsNewEmployeeModalOpen(false)}
            />
        </div>
    );
}
