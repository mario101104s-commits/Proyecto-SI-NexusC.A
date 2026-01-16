import { ArrowUpToLine, Truck, Activity, Zap, Clock, Package } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function DispatchPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-sm font-black text-rose-600 uppercase tracking-[0.2em] mb-3">Flujo de Salida</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Despachos y Picking</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">Control de picking lists y despacho de unidades de transporte</p>
                </div>
                <div className="flex gap-4">
                    <Button className="py-7 px-10 bg-rose-600 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-rose-700 transition-all shadow-xl shadow-rose-200 flex items-center gap-3">
                        <ArrowUpToLine size={18} /> Iniciar Nuevo Picking
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Active Orders for Dispatch */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-gray-100 border border-gray-50">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-2xl font-black text-gray-800 tracking-tight flex items-center gap-4">
                                <span className="w-2 h-8 bg-rose-500 rounded-full" /> Órdenes para Picking
                            </h3>
                            <div className="p-4 bg-rose-50 text-rose-600 rounded-2xl animate-pulse">
                                <Activity size={24} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <PickingOrderCard
                                id="ORD-2201"
                                customer="Sucursal Maracaibo"
                                items="12"
                                priority="CRÍTICA"
                                time="Restan 30m"
                                status="Pendiente"
                            />
                            <PickingOrderCard
                                id="ORD-2198"
                                customer="Taller Express C.A"
                                items="5"
                                priority="NORMAL"
                                time="Restan 2h"
                                status="En Proceso"
                            />
                            <PickingOrderCard
                                id="ORD-2195"
                                customer="Inversiones San José"
                                items="28"
                                priority="NORMAL"
                                time="Programado"
                                status="Pendiente"
                            />
                        </div>
                    </div>

                    {/* Dispatch Simulation Area */}
                    <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl shadow-rose-900/10 text-white">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                            <div>
                                <h3 className="text-3xl font-black tracking-tight mb-2">Unidad de Transporte</h3>
                                <p className="text-xs font-bold text-rose-400 uppercase tracking-widest">Validación de Carga y Ruta</p>
                            </div>
                            <div className="w-20 h-20 bg-white/10 rounded-[1.5rem] flex items-center justify-center text-white border border-white/20">
                                <Truck size={36} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 group hover:border-rose-500 transition-all cursor-pointer">
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Placa de Vehículo</p>
                                <p className="text-2xl font-black text-gray-100 group-hover:text-rose-400 transition-colors tracking-widest uppercase">A81 BL9Z</p>
                            </div>
                            <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 group hover:border-emerald-500 transition-all cursor-pointer">
                                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-4">Destino Autorizado</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <p className="text-2xl font-black text-gray-100 group-hover:text-emerald-400 transition-colors tracking-tight uppercase">MARACAIBO</p>
                                </div>
                            </div>
                        </div>

                        <Button className="w-full py-8 bg-rose-600 text-white rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-rose-700 transition-all shadow-xl shadow-rose-900/40 flex items-center justify-center gap-3">
                            Autorizar Despacho y Salida
                        </Button>
                    </div>
                </div>

                {/* Picking Stats & Alerts */}
                <div className="space-y-10">
                    <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-gray-100 border border-gray-50">
                        <h3 className="text-xl font-black text-gray-800 tracking-tight mb-8">Picking Efficiency</h3>
                        <div className="space-y-8">
                            <StatCircle label="Meta de Hoy" value="40" total="50" color="text-rose-600" />
                            <div className="pt-6 border-t border-slate-50">
                                <div className="flex items-center gap-4 mb-3">
                                    <Zap size={18} className="text-amber-500" />
                                    <span className="text-xs font-black text-slate-800 uppercase tracking-tight">Retraso en Pasillo B</span>
                                </div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">Personal en rotación de turno</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-rose-600 p-10 rounded-[3rem] shadow-2xl shadow-rose-200 text-white group cursor-pointer hover:-translate-y-2 transition-all duration-500">
                        <div className="flex items-center justify-between mb-8">
                            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                                <Package size={24} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest bg-black/20 px-3 py-1 rounded-full">Alert</span>
                        </div>
                        <h4 className="text-2xl font-black mb-2 tracking-tight">Stock Quiebre</h4>
                        <p className="text-xs font-bold text-rose-100 opacity-80 uppercase tracking-widest">Correas Toyota 4Runner (VAL)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCircle({ label, value, total, color }: any) {
    return (
        <div className="flex items-center justify-between">
            <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                <p className={`text-3xl font-black tracking-tight ${color}`}>{value} <span className="text-sm text-slate-300">/ {total}</span></p>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-slate-50 flex items-center justify-center relative">
                <div className={`absolute inset-0 border-4 ${color.replace('text', 'border')} rounded-full opacity-20`} />
                <span className={`text-sm font-black ${color}`}>{Math.round((parseInt(value) / parseInt(total)) * 100)}%</span>
            </div>
        </div>
    );
}

function PickingOrderCard({ id, customer, items, priority, time, status }: any) {
    return (
        <div className="group bg-slate-50 p-6 rounded-[2rem] border border-transparent hover:bg-white hover:border-rose-200 hover:shadow-2xl hover:shadow-gray-100 transition-all cursor-pointer">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${priority === 'CRÍTICA' ? 'bg-rose-500 animate-pulse transition-all' : 'bg-blue-500'}`} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{priority}</span>
                </div>
                <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-full">{status}</span>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <h4 className="text-lg font-black text-slate-800 tracking-tight group-hover:text-rose-600 transition-colors uppercase">{customer}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">ID: {id} • {items} Unidades</p>
                </div>
                <div className="text-right">
                    <div className="flex items-center justify-end gap-2 text-rose-600 mb-1">
                        <Clock size={14} />
                        <span className="text-[11px] font-black uppercase tracking-widest">{time}</span>
                    </div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest italic">Req. Supervisor</p>
                </div>
            </div>
        </div>
    );
}
