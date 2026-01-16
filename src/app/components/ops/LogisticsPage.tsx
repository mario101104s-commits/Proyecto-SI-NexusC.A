import { Truck, Navigation, Box, Calendar, Clock, MapPin, MoreHorizontal } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const LOGISTICS_DATA = [
    { id: 'T-101', route: 'Valencia → Maracaibo', vehicle: 'Mack Granite [A1B-22C]', status: 'En Ruta', eta: '02h 15m' },
    { id: 'T-105', route: 'Puerto La Cruz → Caracas', vehicle: 'Kenworth T680 [X9Z-44D]', status: 'Cargando', eta: '04h 00m' },
    { id: 'T-109', route: 'Valencia → PLC', vehicle: 'ISUZU NPR [M5R-11F]', status: 'Despachado', eta: 'En Destino' },
];

export function LogisticsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">Centro de Control de Logística</h2>
                    <p className="text-gray-500">Monitoreo de flotas y tiempos de entrega en tiempo real</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="gap-2 bg-white shadow-sm font-bold border-gray-200">
                        <Box size={18} /> Nueva Remisión
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-100 gap-2 font-bold">
                        <Truck size={18} /> GPS Flota
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {LOGISTICS_DATA.map((shipment) => (
                    <ShipmentBar key={shipment.id} {...shipment} />
                ))}
            </div>
        </div>
    );
}

function ShipmentBar({ id, route, vehicle, status, eta }: any) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center gap-6 group hover:border-blue-300 transition-all">
            <div className="flex items-center gap-6 flex-1">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${status === 'En Ruta' ? 'bg-blue-50 text-blue-600 animate-pulse' : 'bg-gray-50 text-gray-400'}`}>
                    <Truck size={28} />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-sm font-black text-gray-800">{route}</h3>
                        <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded uppercase">{id}</span>
                    </div>
                    <p className="text-xs font-medium text-gray-400 flex items-center gap-1.5"><Navigation size={12} /> {vehicle}</p>
                </div>
            </div>

            <div className="flex items-center gap-12 px-6 border-x border-gray-50">
                <div className="text-center min-w-[100px]">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">Estado</p>
                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${status === 'En Ruta' ? 'bg-blue-50 text-blue-600' :
                            status === 'Cargando' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'
                        }`}>
                        {status}
                    </span>
                </div>
                <div className="text-center min-w-[80px]">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1.5">ETA</p>
                    <span className="text-xs font-black text-gray-700">{eta}</span>
                </div>
            </div>

            <button className="p-2 text-gray-300 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                <MoreHorizontal size={20} />
            </button>
        </div>
    );
}
