import { useState } from 'react';
import { Package, Clock, RefreshCw, Truck, MapPin, Calendar, ChevronRight, BarChart3, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { OpsDetailModal } from './OpsDetailModal';

const WAREHOUSE_STATUS_DATA = [
    { id: 1, name: 'Valencia (Principal)', status: 'Operativo', capacity: 85, orders: 12, code: 'VAL-01' },
    { id: 2, name: 'Puerto La Cruz', status: 'Operativo', capacity: 92, orders: 5, code: 'PLC-02' },
    { id: 3, name: 'Maracaibo', status: 'Mantenimiento', capacity: 45, orders: 0, code: 'MAR-03' },
];

const OPS_KPI_DATA = [
    { name: 'Stock Valencia', value: 850, color: '#3b82f6' },
    { name: 'Stock PLC', value: 420, color: '#f59e0b' },
    { name: 'Stock Maracaibo', value: 310, color: '#ef4444' },
];

export function OperationsDashboard({ onNavigate }: { onNavigate?: (menu: string) => void }) {
    const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    const [selectedDetail, setSelectedDetail] = useState<any>(null);

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-10">
            {/* Ops Detail Modal */}
            <OpsDetailModal
                isOpen={!!selectedDetail}
                onClose={() => setSelectedDetail(null)}
                data={selectedDetail}
            />

            {/* Logistics Command Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">Panel de Control Operativo</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Gestión de Operaciones</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">
                        <Calendar size={18} className="text-gray-400" />
                        {today.charAt(0).toUpperCase() + today.slice(1)}
                    </p>
                </div>
                <div className="flex bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
                    <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold text-xs tracking-wider uppercase shadow-lg shadow-blue-100 hover:-translate-y-1 transition-all">Regional</button>
                    <button
                        onClick={() => alert('Visualización Nacional en proceso de carga...')}
                        className="px-8 py-3 text-gray-400 font-bold text-xs tracking-wider uppercase hover:text-gray-600 transition-all"
                    >
                        Nacional
                    </button>
                </div>
            </div>

            {/* Ops KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <OpsCard
                    title="Inventario Global"
                    value="1,580"
                    unit="Und."
                    trend="-2.5%"
                    icon={<Package size={24} />}
                    color="blue"
                    onClick={() => onNavigate?.('ops_reports')}
                />
                <OpsCard
                    title="Entregas a Tiempo"
                    value="98.2"
                    unit="%"
                    trend="+1.2%"
                    icon={<Clock size={24} />}
                    color="emerald"
                    onClick={() => onNavigate?.('logistics')}
                />
                <OpsCard
                    title="Rotación Stock"
                    value="12.5"
                    unit="x"
                    trend="+0.8"
                    icon={<RefreshCw size={24} />}
                    color="purple"
                    onClick={() => onNavigate?.('ops_reports')}
                />
                <OpsCard
                    title="Pedidos en Ruta"
                    value="08"
                    unit="Activos"
                    trend="Estable"
                    icon={<Truck size={24} />}
                    color="amber"
                    onClick={() => onNavigate?.('logistics')}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Warehouse Status Table */}
                <div className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 overflow-hidden">
                    <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-black text-gray-800 tracking-tight">Estado de Almacenes</h3>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Monitoreo de Capacidad en Tiempo Real</p>
                        </div>
                        <button
                            onClick={() => onNavigate?.('warehouses')}
                            className="px-5 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs hover:bg-blue-600 hover:text-white transition-all"
                        >
                            Ver Todos
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50">
                                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest">Almacén / Código</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Estado</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Capacidad</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">Despachos</th>
                                    <th className="px-8 py-5 text-[10px] font-black text-gray-400 uppercase tracking-widest text-right">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {WAREHOUSE_STATUS_DATA.map((wh) => (
                                    <tr key={wh.id} className="hover:bg-gray-50/50 transition-colors group cursor-pointer" onClick={() => setSelectedDetail({
                                        title: wh.name,
                                        type: 'warehouse',
                                        status: wh.status,
                                        details: `El almacén ${wh.name} (${wh.code}) registra una carga operativa del ${wh.capacity}%. Actualmente gestiona ${wh.orders} despachos simultáneos.`
                                    })}>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-4">
                                                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:scale-110 transition-transform">
                                                    <MapPin size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black text-gray-800">{wh.name}</p>
                                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{wh.code}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-center">
                                            <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${wh.status === 'Operativo' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                                                }`}>
                                                <div className={`w-1.5 h-1.5 rounded-full ${wh.status === 'Operativo' ? 'bg-emerald-500' : 'bg-rose-500'} animate-pulse`} />
                                                {wh.status}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex flex-col items-center gap-2">
                                                <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full transition-all duration-1000 ${wh.capacity > 90 ? 'bg-rose-500' : 'bg-blue-600'}`}
                                                        style={{ width: `${wh.capacity}%` }}
                                                    />
                                                </div>
                                                <span className="text-[10px] font-black text-gray-400">{wh.capacity}% Utilizado</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-center font-black text-gray-800 text-sm">{wh.orders}</td>
                                        <td className="px-8 py-6 text-right">
                                            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors"><ChevronRight size={20} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Logistics & Inventory Chart side-section */}
                <div className="space-y-10">
                    <div
                        className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 h-fit cursor-pointer group hover:shadow-2xl transition-all"
                        onClick={() => onNavigate?.('ops_reports')}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-black text-gray-800 tracking-tight group-hover:text-blue-600 transition-colors">Stock Regional</h3>
                            <BarChart3 className="text-gray-400" size={20} />
                        </div>
                        <div className="h-[200px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={OPS_KPI_DATA}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis dataKey="name" hide />
                                    <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '15px' }}
                                        cursor={{ fill: '#f8fafc' }}
                                    />
                                    <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={45}>
                                        {OPS_KPI_DATA.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/20 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                        <h3 className="text-lg font-black mb-6 flex items-center gap-3">
                            <span className="w-2 h-6 bg-blue-500 rounded-full" /> Rutas Críticas
                        </h3>
                        <div className="space-y-4">
                            <RouteItem
                                from="VAL" to="CCS" status="Retraso" bg="bg-rose-500"
                                onClick={() => setSelectedDetail({
                                    title: "Ruta VAL -> CCS",
                                    type: 'route',
                                    status: 'Retraso Crítico',
                                    details: "Se reporta obstrucción en la ARC. La unidad de transporte registra un retraso estimado de 45 minutos para la entrega en el centro de distribución Caracas."
                                })}
                            />
                            <RouteItem
                                from="MAR" to="VAL" status="En Ruta" bg="bg-emerald-500"
                                onClick={() => setSelectedDetail({
                                    title: "Ruta MAR -> VAL",
                                    type: 'route',
                                    status: 'En Ruta',
                                    details: "Unidad transportando carga pesada de filtros. Tiempo estimado de arribo: 3 horas."
                                })}
                            />
                            <RouteItem
                                from="VAL" to="PLC" status="En Ruta" bg="bg-emerald-500"
                                onClick={() => setSelectedDetail({
                                    title: "Ruta VAL -> PLC",
                                    type: 'route',
                                    status: 'En Ruta',
                                    details: "Transbordo de mercancía completado. Unidad en autopista Gran Mariscal de Ayacucho."
                                })}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OpsCard({ title, value, unit, trend, icon, color, onClick }: any) {
    const colors: any = {
        blue: 'text-blue-600 bg-blue-50 shadow-blue-100',
        emerald: 'text-emerald-600 bg-emerald-50 shadow-emerald-100',
        purple: 'text-purple-600 bg-purple-50 shadow-purple-100',
        amber: 'text-amber-600 bg-amber-50 shadow-amber-100',
    };

    return (
        <div
            onClick={onClick}
            className="bg-white p-8 rounded-[2.25rem] shadow-xl shadow-gray-100 border border-gray-50 group hover:-translate-y-2 transition-all duration-500 cursor-pointer"
        >
            <div className={`w-14 h-14 rounded-2xl ${colors[color]} flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:scale-110 duration-500`}>
                {icon}
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{title}</p>
            <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-black text-gray-800 tracking-tight">{value}</h3>
                <span className="text-xs font-bold text-gray-400">{unit}</span>
            </div>
            <div className={`mt-4 inline-flex items-center gap-1.5 text-[10px] font-black uppercase ${trend.includes('+') ? 'text-emerald-500' : 'text-blue-500'}`}>
                {trend} <ArrowRight size={10} className={trend.includes('+') ? '-rotate-45' : 'rotate-45'} />
            </div>
        </div>
    );
}

function RouteItem({ from, to, status, bg, onClick }: any) {
    return (
        <div
            onClick={onClick}
            className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group cursor-pointer"
        >
            <div className="flex items-center gap-4">
                <span className="text-xs font-black tracking-widest text-blue-400">{from}</span>
                <ArrowRight size={14} className="text-gray-600" />
                <span className="text-xs font-black tracking-widest text-blue-400">{to}</span>
            </div>
            <span className={`px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest ${bg} text-white`}>{status}</span>
        </div>
    );
}

