import { X, UserPlus, Upload, Building2, User } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { DEPARTMENTS } from './types';

interface NewEmployeeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function NewEmployeeModal({ isOpen, onClose }: NewEmployeeModalProps) {
    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Registrar Empleado - Funcionalidad en desarrollo');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 overflow-hidden animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800">Nuevo Empleado</h2>
                    <Button variant="ghost" size="sm" onClick={onClose} className="p-2 h-auto text-gray-500 hover:text-red-500">
                        <X size={20} />
                    </Button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                    {/* Avatar Upload Placeholder */}
                    <div className="flex flex-col items-center justify-center mb-6">
                        <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 hover:border-blue-400 hover:text-blue-500 transition-colors cursor-pointer">
                            <Upload size={24} className="mb-1" />
                            <span className="text-xs">Subir foto</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Nombre Completo</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                    <Input className="pl-10 h-10" placeholder="Ej: Juan Pérez" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Cargo / Rol</label>
                                <Input className="h-10" placeholder="Ej: Analista" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Departamento</label>
                            <div className="relative">
                                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                <select className="w-full h-10 pl-10 pr-4 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option value="">Seleccionar área...</option>
                                    {DEPARTMENTS.map(dept => (
                                        <option key={dept} value={dept}>{dept}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Email Corporativo</label>
                                <Input type="email" className="h-10" placeholder="usuario@nexus.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Teléfono</label>
                                <Input type="tel" className="h-10" placeholder="+58 ..." />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">Fecha de Ingreso</label>
                            <Input type="date" className="h-10" />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-2">
                        <Button type="button" variant="outline" onClick={onClose} className="text-gray-600">
                            Cancelar
                        </Button>
                        <Button type="submit" className="bg-blue-800 hover:bg-blue-900 text-white shadow-md">
                            <UserPlus size={18} className="mr-2" />
                            Registrar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
