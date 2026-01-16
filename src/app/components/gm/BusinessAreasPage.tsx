import { useState } from 'react';
import { Layers, Users, TrendingUp, ChevronRight, PieChart, MapPin, Search, Plus, Filter, MoreHorizontal } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface BusinessArea {
    id: string;
    name: string;
    manager: string;
    performance: number;
    budget: string;
    status: 'optimal' | 'warning' | 'critical';
    location: string;
}

const AREAS_DATA: BusinessArea[] = [
    { id: '1', name: 'Logística y Distribución', manager: 'Carlos Mendoza', performance: 92, budget: '$450,000', status: 'optimal', location: 'Valencia' },
    { id: '2', name: 'Almacén Central', manager: 'Elena Rodriguez', performance: 85, budget: '$320,000', status: 'optimal', location: 'Maracaibo' },
    { id: '3', name: 'Ventas Regionales', manager: 'Marco Polo', performance: 78, budget: '$510,000', status: 'warning', location: 'Nacional' },
    { id: '4', name: 'Recursos Humanos', manager: 'Ana Garcia', performance: 95, budget: '$80,000', status: 'optimal', location: 'Caracas' },
    { id: '5', name: 'Finanzas y Tesorería', manager: 'Luis Herrera', performance: 88, budget: '$120,000', status: 'optimal', location: 'Caracas' },
    { id: '6', name: 'Mantenimiento de Flota', manager: 'Roberto Gomez', performance: 64, budget: '$150,000', status: 'critical', location: 'Valencia' },
];

export function BusinessAreasPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredAreas = AREAS_DATA.filter(area =>
        area.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        area.manager.toLowerCase().includes(searchTerm.toLowerCase()) ||
        area.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="max-w-2xl">
                    <h2 className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-3">Estructura Organizacional</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight leading-none">Gestión de Áreas de Negocio</h1>
                    <p className="text-gray-500 font-medium mt-4 text-lg">Supervisión integral de unidades operativas, liderazgo y rendimiento financiero.</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-4 bg-white border-2 border-slate-100 rounded-3xl font-black text-sm text-slate-700 hover:shadow-xl hover:border-slate-200 transition-all flex items-center gap-3 active:scale-95 group">
                        <Filter size={18} className="text-emerald-600 transition-transform group-hover:rotate-12" />
                        Filtrar Unidades
                    </button>
                    <button className="px-8 py-4 bg-slate-900 text-white rounded-3xl font-black text-sm hover:bg-black shadow-2xl shadow-slate-200 transition-all active:scale-95 flex items-center gap-3">
                        <Plus size={20} />
                        Nueva Área
                    </button>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AreaStat title="Total Unidades" value="06" sub="Áreas Estratégicas" icon={<Layers className="text-blue-600" />} />
                <AreaStat title="Liderazgo Activo" value="100%" sub="Gerentes Asignados" icon={<Users className="text-emerald-600" />} />
                <AreaStat title="Salud Promedio" value="86%" sub="Índice de Rendimiento" icon={<PieChart className="text-purple-600" />} />
            </div>

            {/* Content Section */}
            <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-gray-100/50 border border-gray-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/30 rounded-full -mr-48 -mt-48 blur-3xl" />

                <div className="relative">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <div className="relative flex-1 max-w-md group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-emerald-500 transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Buscar área, gerente o ubicación..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-14 pr-6 py-4 bg-slate-50 border-2 border-transparent focus:border-emerald-500/20 focus:bg-white rounded-2xl outline-none transition-all font-medium text-slate-700 placeholder:text-slate-300 shadow-inner"
                            />
                        </div>
                        <div className="flex gap-2 p-1.5 bg-slate-50 rounded-2xl">
                            <button className="px-6 py-2 bg-white shadow-sm rounded-xl text-[10px] font-black text-emerald-600 uppercase tracking-widest ring-1 ring-slate-100">Vista Cuadrícula</button>
                            <button className="px-6 py-2 text-[10px] font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors">Vista Listado</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredAreas.map((area) => (
                            <AreaCard key={area.id} area={area} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function AreaStat({ title, value, sub, icon }: any) {
    return (
        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex items-center gap-8 group hover:-translate-y-2 transition-all duration-500">
            <div className="p-5 bg-slate-50 rounded-3xl group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 group-hover:-rotate-6">
                {icon}
            </div>
            <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{title}</p>
                <div className="flex items-baseline gap-3">
                    <h3 className="text-4xl font-black text-slate-900">{value}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{sub}</p>
                </div>
            </div>
        </div>
    );
}

function AreaCard({ area }: { area: BusinessArea }) {
    const statusColors = {
        optimal: 'text-emerald-500 bg-emerald-50 ring-emerald-100',
        warning: 'text-amber-500 bg-amber-50 ring-amber-100',
        critical: 'text-rose-500 bg-rose-50 ring-rose-100',
    };

    return (
        <div className="p-8 bg-slate-50/50 rounded-[2.5rem] border-2 border-transparent hover:border-slate-100 hover:bg-white transition-all duration-500 group cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col items-start gap-6">
            <div className="w-full flex justify-between items-start">
                <div className={`p-4 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 group-hover:-translate-y-1`}>
                    <Layers size={24} />
                </div>
                <button className="p-2 text-slate-300 hover:text-slate-900 transition-colors">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            <div className="space-y-2">
                <h3 className="text-xl font-black text-slate-900 tracking-tight leading-tight group-hover:text-emerald-600 transition-colors">{area.name}</h3>
                <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-wider">
                    <MapPin size={12} /> {area.location}
                </div>
            </div>

            <div className="w-full space-y-4 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Gerente Área</p>
                        <p className="text-sm font-black text-slate-700">{area.manager}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Presupuesto</p>
                        <p className="text-sm font-black text-slate-900">{area.budget}</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                        <span className="text-slate-400 flex items-center gap-1.5">
                            <TrendingUp size={12} /> Desempeño
                        </span>
                        <span className={statusColors[area.status].split(' ')[0]}>{area.performance}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full transition-all duration-1000 ${area.status === 'optimal' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]' : area.status === 'warning' ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]' : 'bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.4)]'}`}
                            style={{ width: `${area.performance}%` }}
                        />
                    </div>
                </div>
            </div>

            <Button variant="ghost" className="w-full h-14 bg-white hover:bg-slate-900 hover:text-white rounded-2xl text-[10px] font-black uppercase tracking-widest border border-slate-100 group-hover:border-transparent transition-all flex items-center justify-center gap-3">
                Ver Detalles Unidad
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-all" />
            </Button>
        </div>
    );
}
