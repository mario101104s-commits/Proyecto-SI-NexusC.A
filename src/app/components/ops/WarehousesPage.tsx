import { MapPin, Box, ArrowRight, Activity, ShieldCheck, AlertTriangle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const WAREHOUSES = [
    { id: 'VAL', name: 'Valencia Central', address: 'Zona Ind. Municipal Norte', manager: 'Carlos Pérez', risk: 'Bajo', stock: 12400 },
    { id: 'PLC', name: 'Puerto La Cruz', address: 'Av. Municipal c/c Calle 4', manager: 'Ana Ruiz', risk: 'Medio', stock: 5600 },
    { id: 'MAR', name: 'Maracaibo Norte', address: 'Vía Aeropuerto La Chinita', manager: 'Luis Gómez', risk: 'Alto', stock: 2100 },
];

export function WarehousesPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Centro de Gestión de Almacenes</h2>
                    <p className="text-gray-500">Supervisión regional y control de activos</p>
                </div>
                <Button className="bg-blue-800 hover:bg-blue-900 shadow-md gap-2">
                    <Activity size={18} /> Conciliación Global
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {WAREHOUSES.map((wh) => (
                    <WarehouseCard key={wh.id} {...wh} />
                ))}
            </div>
        </div>
    );
}

function WarehouseCard({ id, name, address, manager, risk, stock }: any) {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl hover:border-blue-200 transition-all duration-300">
            <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                        <MapPin size={28} />
                    </div>
                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">{id}</span>
                </div>

                <h3 className="text-xl font-black text-gray-800 mb-1">{name}</h3>
                <p className="text-xs text-gray-400 font-medium mb-6 flex items-center gap-1.5"><MapPin size={12} /> {address}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-tighter mb-1">Stock Total</p>
                        <p className="text-sm font-black text-gray-800">{stock.toLocaleString()} Und.</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-2xl border border-gray-100">
                        <p className="text-[9px] font-black text-gray-400 uppercase tracking-tighter mb-1">Riesgo Oper.</p>
                        <p className={`text-sm font-black ${risk === 'Alto' ? 'text-red-500' : 'text-emerald-500'}`}>{risk}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400">Responsable</span>
                        <span className="text-xs font-bold text-gray-700">{manager}</span>
                    </div>
                    <button className="p-2 bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all transform hover:rotate-45">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
