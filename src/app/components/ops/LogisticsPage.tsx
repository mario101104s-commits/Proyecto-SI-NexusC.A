import { Truck, Navigation, Box, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const LOGISTICS_DATA = [
    { id: 'T-101', route: 'Valencia → Maracaibo', vehicle: 'Mack Granite [A1B-22C]', status: 'En Ruta', eta: '02h 15m', progress: 65 },
    { id: 'T-105', route: 'Puerto La Cruz → Caracas', vehicle: 'Kenworth T680 [X9Z-44D]', status: 'Cargando', eta: '04h 00m', progress: 10 },
    { id: 'T-109', route: 'Valencia → PLC', vehicle: 'ISUZU NPR [M5R-11F]', status: 'Despachado', eta: 'En Destino', progress: 100 },
];

export function LogisticsPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-20">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-sm font-black text-emerald-600 uppercase tracking-[0.2em] mb-3">Flota y Distribución</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Control de Logística</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">Monitoreo de unidades y optimización de rutas en tiempo real</p>
                </div>
                <div className="flex gap-4">
                    <Button variant="outline" className="py-7 px-8 bg-white text-gray-900 border border-gray-100 rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all shadow-xl shadow-gray-100/50 flex items-center gap-3">
                        <Box size={18} className="text-blue-500" /> Nueva Remisión
                    </Button>
                    <Button className="py-7 px-10 bg-emerald-600 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center gap-3">
                        <Navigation size={18} /> GPS Flota Live
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8">
                {LOGISTICS_DATA.map((shipment) => (
                    <ShipmentCard key={shipment.id} {...shipment} />
                ))}
            </div>
        </div>
    );
}

function ShipmentCard({ id, route, vehicle, status, eta, progress }: any) {
    return (
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-gray-100/50 border border-gray-50 flex flex-col lg:flex-row lg:items-center gap-10 group hover:border-emerald-200 transition-all duration-500">
            <div className="flex items-center gap-8 flex-1">
                <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-500 ${status === 'En Ruta' ? 'bg-blue-50 text-blue-600 shadow-xl shadow-blue-100' :
                    status === 'Cargando' ? 'bg-amber-50 text-amber-600 shadow-xl shadow-amber-100' :
                        'bg-emerald-50 text-emerald-600 shadow-xl shadow-emerald-100'
                    }`}>
                    <Truck size={36} className={status === 'En Ruta' ? 'animate-bounce' : ''} />
                </div>
                <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                        <h3 className="text-xl font-black text-gray-800 tracking-tight">{route}</h3>
                        <span className="text-[10px] font-black text-gray-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100 uppercase tracking-widest">{id}</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <p className="text-xs font-bold text-gray-400 flex items-center gap-2 uppercase tracking-wider"><Navigation size={14} className="text-emerald-500" /> {vehicle}</p>
                        <p className="text-xs font-bold text-gray-400 flex items-center gap-2 uppercase tracking-wider"><ShieldCheck size={14} className="text-blue-500" /> Seguro Activo</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 lg:px-12 lg:border-x border-gray-100">
                <div className="w-full md:w-48">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Progreso Ruta</span>
                        <span className="text-[10px] font-black text-emerald-600">{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }} />
                    </div>
                </div>
                <div className="text-center min-w-[120px]">
                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Estimado (ETA)</p>
                    <div className="flex items-center justify-center gap-2">
                        <Clock size={14} className="text-amber-500" />
                        <span className="text-sm font-black text-gray-800">{eta}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-6 ml-auto lg:ml-0">
                <div className={`px-5 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest border ${status === 'En Ruta' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                    status === 'Cargando' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                        'bg-emerald-50 text-emerald-600 border-emerald-100'
                    }`}>
                    {status}
                </div>
                <button className="w-14 h-14 bg-slate-900 text-white rounded-[1.25rem] hover:bg-emerald-600 hover:scale-110 transition-all flex items-center justify-center shadow-xl group-hover:shadow-emerald-100">
                    <ArrowRight size={24} />
                </button>
            </div>
        </div>
    );
}
