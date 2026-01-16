import { Search, Filter, UserPlus, Download, Mail, Phone, ChevronRight, MapPin, Briefcase, Calendar } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function EmployeesPage() {
    const employees = [
        { id: 1, name: "Carlos Mendoza", role: "Gerente de Ventas", dept: "Comercial", status: "Activo", joined: "Ene 2020", avatar: "CM" },
        { id: 2, name: "Ana Isabel Luna", role: "Analista Senior", dept: "Finanzas", status: "Activo", joined: "Mar 2021", avatar: "AL" },
        { id: 3, name: "Ricardo Silva", role: "Sup. Almacén", dept: "Operaciones", status: "En Vacaciones", joined: "Jun 2019", avatar: "RS" },
        { id: 4, name: "Laura Torres", role: "Especialista TI", dept: "Tecnología", status: "Activo", joined: "Oct 2022", avatar: "LT" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight">Gestión de <span className="text-rose-600">Talento</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <MapPin size={18} className="text-rose-500" />
                        Visualización global de la plantilla y estructura organizacional
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-white border-2 border-gray-100 hover:border-rose-100 text-gray-900 px-6 py-6 rounded-2xl font-black transition-all flex items-center gap-2 shadow-sm">
                        <Download size={18} />
                        Exportar
                    </Button>
                    <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-rose-100 flex items-center gap-2">
                        <UserPlus size={20} />
                        Añadir Colaborador
                    </Button>
                </div>
            </div>

            {/* Quick Filters / Search */}
            <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-gray-100/50 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                            placeholder="Buscar por nombre, cargo o departamento..."
                            className="pl-14 py-7 bg-gray-50/50 border-none rounded-2xl font-bold text-lg focus-visible:ring-rose-500 transition-all"
                        />
                    </div>
                    <Button className="bg-gray-50 hover:bg-gray-100 text-gray-600 px-8 py-7 rounded-2xl font-black transition-all flex items-center gap-2 border border-gray-100">
                        <Filter size={20} />
                        Más Filtros
                    </Button>
                </div>
            </div>

            {/* Employee Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {employees.map((emp) => (
                    <div key={emp.id} className="bg-white p-8 rounded-[3rem] shadow-xl shadow-gray-50 border border-gray-100 group hover:border-rose-200 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-[5rem] -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />

                        <div className="relative flex items-center gap-6">
                            <div className="w-20 h-20 bg-gray-900 rounded-[2rem] flex items-center justify-center text-white text-2xl font-black">
                                {emp.avatar}
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-black text-gray-900 group-hover:text-rose-600 transition-colors uppercase tracking-tight">{emp.name}</h3>
                                        <p className="text-sm font-bold text-gray-400 mt-1">{emp.role} · {emp.dept}</p>
                                    </div>
                                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border
                                        ${emp.status === 'Activo' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-amber-50 text-amber-600 border-amber-100'}`}>
                                        {emp.status}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-3">
                                <Calendar size={16} className="text-gray-400" />
                                <div>
                                    <p className="text-[9px] font-black text-gray-400 uppercase">Ingreso</p>
                                    <p className="text-xs font-bold text-gray-800">{emp.joined}</p>
                                </div>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-2xl flex items-center gap-3">
                                <Briefcase size={16} className="text-gray-400" />
                                <div>
                                    <p className="text-[9px] font-black text-gray-400 uppercase">Contrato</p>
                                    <p className="text-xs font-bold text-gray-800">Indefinido</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center justify-between pt-8 border-t border-gray-50">
                            <div className="flex gap-2">
                                <button className="p-3 bg-gray-50 hover:bg-rose-50 text-gray-400 hover:text-rose-600 rounded-xl transition-all"><Mail size={18} /></button>
                                <button className="p-3 bg-gray-50 hover:bg-rose-50 text-gray-400 hover:text-rose-600 rounded-xl transition-all"><Phone size={18} /></button>
                            </div>
                            <button className="flex items-center gap-2 text-sm font-black text-gray-900 hover:text-rose-600 transition-colors">
                                Ver Expediente Completo
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
