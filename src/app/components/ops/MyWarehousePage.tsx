import { MapPin, Box, Activity, ShieldCheck, Thermometer, Droplets, Zap, Package } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const CAPACITY_DATA = [
    { zone: 'Pasillo A', load: 85, color: '#3b82f6' },
    { zone: 'Pasillo B', load: 92, color: '#f59e0b' },
    { zone: 'Pasillo C', load: 45, color: '#10b981' },
    { zone: 'Carga Pesada', load: 78, color: '#8b5cf6' },
];

export function MyWarehousePage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-20">
            {/* Warehouse Visual Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-gray-100/50 gap-8">
                <div className="flex items-center gap-8">
                    <div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-blue-200">
                        <MapPin size={48} />
                    </div>
                    <div>
                        <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-3">Sede Principal</h2>
                        <h1 className="text-4xl font-black text-gray-900 tracking-tight">Almacén Valencia (VAL-01)</h1>
                        <p className="text-gray-500 font-medium mt-2">Zona Industrial Municipal Norte, Edif. NEXUS</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                            <Thermometer size={12} className="text-rose-500" /> Temp.
                        </p>
                        <p className="text-lg font-black text-slate-800 tracking-tight">24°C</p>
                    </div>
                    <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-2">
                            <Droplets size={12} className="text-blue-500" /> Humed.
                        </p>
                        <p className="text-lg font-black text-slate-800 tracking-tight">45%</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Capacity Heatmap (Simulation) */}
                <div className="lg:col-span-2 bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-gray-100 border border-gray-50">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h3 className="text-2xl font-black text-gray-800 tracking-tight">Carga por Sectores</h3>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Mapa de calor de ocupación física</p>
                        </div>
                        <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl">
                            <Box size={24} />
                        </div>
                    </div>

                    <div className="h-[350px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={CAPACITY_DATA} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                                <XAxis type="number" domain={[0, 100]} hide />
                                <YAxis
                                    dataKey="zone"
                                    type="category"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#475569', fontSize: 13, fontWeight: 800 }}
                                    width={120}
                                />
                                <Tooltip
                                    cursor={{ fill: '#f8fafc' }}
                                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.1)', padding: '20px' }}
                                />
                                <Bar dataKey="load" radius={[0, 15, 15, 0]} barSize={32}>
                                    {CAPACITY_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Warehouse Stats Card */}
                <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl shadow-blue-900/10 text-white flex flex-col justify-between">
                    <div>
                        <h3 className="text-2xl font-black flex items-center gap-4 mb-10">
                            <span className="w-2 h-10 bg-blue-500 rounded-full" /> Auditoría
                        </h3>
                        <div className="space-y-8">
                            <StatItem icon={<Package className="text-blue-400" size={20} />} label="Items Totales" value="12,400" />
                            <StatItem icon={<Activity className="text-emerald-400" size={20} />} label="Movimientos Hoy" value="85" />
                            <StatItem icon={<Zap className="text-amber-400" size={20} />} label="Prioridad Despacho" value="ALTA" />
                            <StatItem icon={<ShieldCheck className="text-purple-400" size={20} />} label="Seguridad Industrial" value="ÓPTIMA" />
                        </div>
                    </div>

                    <Button className="mt-12 py-8 bg-blue-600 text-white rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/30 flex items-center justify-center gap-3">
                        <Activity size={18} /> Iniciar Auditoría de Stock
                    </Button>
                </div>
            </div>
        </div>
    );
}

function StatItem({ icon, label, value }: any) {
    return (
        <div className="flex items-center justify-between group cursor-default">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    {icon}
                </div>
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</span>
            </div>
            <span className="text-lg font-black tracking-tight">{value}</span>
        </div>
    );
}
