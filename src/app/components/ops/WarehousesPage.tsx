import { MapPin, Activity, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const WAREHOUSES = [
    { id: 'VAL', name: 'Valencia Central', address: 'Zona Ind. Municipal Norte', manager: 'Carlos Pérez', risk: 'Bajo', stock: 12400 },
    { id: 'PLC', name: 'Puerto La Cruz', address: 'Av. Municipal c/c Calle 4', manager: 'Ana Ruiz', risk: 'Medio', stock: 5600 },
    { id: 'MAR', name: 'Maracaibo Norte', address: 'Vía Aeropuerto La Chinita', manager: 'Luis Gómez', risk: 'Alto', stock: 2100 },
];

export function WarehousesPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-20">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-3">Red de Distribución</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Gestión de Almacenes</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">Supervisión regional y control de activos críticos</p>
                </div>
                <div className="flex gap-4">
                    <Button className="py-7 px-8 bg-white text-gray-900 border border-gray-100 rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all shadow-xl shadow-gray-100/50 flex items-center gap-3">
                        <Activity size={18} className="text-blue-600" /> Conciliación Global
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {WAREHOUSES.map((wh) => (
                    <WarehouseCard key={wh.id} {...wh} />
                ))}
            </div>
        </div>
    );
}

function WarehouseCard({ id, name, address, manager, risk, stock }: any) {
    return (
        <div className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-gray-100/50 border border-gray-50 group hover:shadow-blue-900/10 hover:border-blue-200 transition-all duration-500 cursor-pointer p-10">
            <div className="flex items-start justify-between mb-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-900 rounded-[1.5rem] flex items-center justify-center text-white shadow-2xl shadow-blue-200 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                    <MapPin size={32} />
                </div>
                <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-4 py-2 rounded-full uppercase tracking-[0.2em] border border-blue-100">{id}</span>
            </div>

            <h3 className="text-2xl font-black text-gray-800 mb-2 tracking-tight">{name}</h3>
            <p className="text-xs text-gray-400 font-bold mb-8 flex items-center gap-2 uppercase tracking-wider italic"><MapPin size={14} className="text-blue-500" /> {address}</p>

            <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-slate-50 p-6 rounded-[1.5rem] border border-slate-100 group-hover:bg-white transition-colors">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.15em] mb-2">Stock Disponible</p>
                    <p className="text-lg font-black text-gray-800">{stock.toLocaleString()} <span className="text-[10px]">Und.</span></p>
                </div>
                <div className="bg-slate-50 p-6 rounded-[1.5rem] border border-slate-100 group-hover:bg-white transition-colors">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.15em] mb-2">Estado Riesgo</p>
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${risk === 'Alto' ? 'bg-rose-500 animate-pulse' : risk === 'Medio' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                        <p className={`text-sm font-black uppercase ${risk === 'Alto' ? 'text-rose-600' : risk === 'Medio' ? 'text-amber-600' : 'text-emerald-600'}`}>{risk}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between border-t border-slate-50 pt-8 mt-auto">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white overflow-hidden shadow-sm">
                        <div className="w-full h-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-black">{manager.charAt(0)}</div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Supervisor</span>
                        <span className="text-xs font-black text-gray-700">{manager}</span>
                    </div>
                </div>
                <button className="w-12 h-12 bg-slate-900 text-white rounded-2xl hover:bg-blue-600 hover:scale-110 transition-all flex items-center justify-center shadow-lg group-hover:shadow-blue-200">
                    <ArrowRight size={20} />
                </button>
            </div>
        </div>
    );
}
