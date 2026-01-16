import { Settings2, AlertTriangle, ArrowRight, ShieldAlert, History, Trash2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

const PENDING_ADJUSTMENTS = [
    { id: 'ADJ-101', item: 'Filtro Aire Premium VAL', qty: -5, cause: 'Dañado en Picking', status: 'Pendiente', user: 'Carlos R.' },
    { id: 'ADJ-102', item: 'Batería 800AMP Titán', qty: -1, cause: 'Defecto de Fábrica', status: 'Pendiente', user: 'Ana M.' },
];

export function InventoryAdjustmentsPage() {
    return (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.2em] mb-3">Integridad de Valor</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Ajustes de Inventario</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">Corrección de existencias físicas vs. sistema y reporte de incidencias</p>
                </div>
                <div className="flex gap-4">
                    <Button className="py-7 px-10 bg-slate-900 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-black transition-all shadow-xl shadow-slate-200 flex items-center gap-3">
                        <AlertTriangle size={18} className="text-amber-500" /> Nuevo Reporte de Daño
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Adjustment Form Area */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-gray-100 border border-gray-50">
                        <h3 className="text-2xl font-black text-gray-800 tracking-tight mb-10 flex items-center gap-4">
                            <span className="w-2 h-8 bg-blue-500 rounded-full" /> Formulario de Ajuste Técnico
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Código de Producto</label>
                                    <input type="text" placeholder="Ejem: P-8821" className="w-full py-5 px-8 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 font-black text-sm tracking-tight" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Cantidad (+/-)</label>
                                    <input type="number" placeholder="Ejem: -2" className="w-full py-5 px-8 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 font-black text-sm tracking-tight" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Motivo del Ajuste</label>
                                    <select className="w-full py-5 px-8 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 font-black text-sm tracking-tight appearance-none">
                                        <option>Dañado / Roto</option>
                                        <option>Extravío</option>
                                        <option>Caducado</option>
                                        <option>Error Administrativo</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Referencia de Auditoría</label>
                                    <input type="text" placeholder="Ejem: AUD-2026-01" className="w-full py-5 px-8 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/20 font-black text-sm tracking-tight" />
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-amber-50 rounded-3xl border border-amber-100 mb-10">
                            <div className="flex items-start gap-4">
                                <ShieldAlert className="text-amber-500 shrink-0" size={24} />
                                <p className="text-xs font-bold text-amber-800 leading-relaxed italic">
                                    "Todo ajuste negativo mayor a 5 unidades requiere autorización inmediata del Gerente de Operaciones y registro fotográfico obligatorio."
                                </p>
                            </div>
                        </div>

                        <Button className="w-full py-8 bg-blue-600 text-white rounded-[1.5rem] font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-3">
                            Procesar Ajuste en Sistema
                        </Button>
                    </div>

                    <div className="bg-white p-10 rounded-[3.5rem] shadow-2xl shadow-gray-100 border border-gray-50">
                        <div className="flex items-center justify-between mb-10">
                            <h3 className="text-xl font-black text-gray-800 tracking-tight">Autorizaciones Pendientes</h3>
                            <div className="p-3 bg-slate-50 rounded-xl">
                                <History className="text-slate-400" size={20} />
                            </div>
                        </div>
                        <div className="space-y-4">
                            {PENDING_ADJUSTMENTS.map((adj) => (
                                <AdjustmentItem key={adj.id} {...adj} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Adjustment Statistics & Protocol */}
                <div className="space-y-10 h-fit sticky top-10">
                    <div className="bg-slate-900 p-12 rounded-[3.5rem] shadow-2xl shadow-gray-200 text-white">
                        <h3 className="text-2xl font-black flex items-center gap-4 mb-10">
                            <span className="w-2 h-10 bg-rose-500 rounded-full" /> Incidencia Semanal
                        </h3>
                        <div className="space-y-10">
                            <StatBar label="Mermas" value="1.2%" color="bg-emerald-500" />
                            <StatBar label="Diferencias Físicas" value="0.4%" color="bg-blue-500" />
                            <StatBar label="Daños Internos" value="2.8%" color="bg-rose-500" />
                        </div>
                        <div className="mt-12 p-8 bg-white/5 rounded-3xl border border-white/10">
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Pérdida Estimada (VAL)</p>
                            <p className="text-3xl font-black text-rose-400 tracking-tight">$ 1,240.50</p>
                        </div>
                    </div>

                    <div className="bg-blue-600 p-10 rounded-[3rem] shadow-2xl shadow-blue-200 text-white group cursor-pointer hover:bg-blue-700 transition-all">
                        <div className="flex items-center justify-between mb-8">
                            <CheckCircle2 size={32} />
                            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                        </div>
                        <h4 className="text-2xl font-black tracking-tight mb-2 uppercase">Auditoría Ciega</h4>
                        <p className="text-xs font-bold text-blue-100 uppercase tracking-widest italic opacity-80">Iniciar validación aleatoria por sistema</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatBar({ label, value, color }: { label: string, value: string, color: string }) {
    return (
        <div className="space-y-2">
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
                <span>{label}</span>
                <span className="text-gray-300">{value}</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full ${color} rounded-full`} style={{ width: value }} />
            </div>
        </div>
    );
}

function AdjustmentItem({ item, qty, cause, user }: any) {
    return (
        <div className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 border border-transparent hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-gray-100 transition-all group">
            <div className="flex items-center gap-5 flex-1">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner transition-all duration-500 bg-white text-slate-400 group-hover:bg-blue-600 group-hover:text-white`}>
                    <Settings2 size={24} />
                </div>
                <div>
                    <h4 className="text-sm font-black text-slate-800 mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{item}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest italic">{cause} • Resp: {user}</p>
                </div>
            </div>
            <div className="flex items-center gap-10">
                <span className="text-sm font-black text-rose-500">{qty} Unid.</span>
                <div className="flex items-center gap-2">
                    <button className="p-3 text-slate-300 hover:text-emerald-500 transition-colors"><CheckCircle2 size={20} /></button>
                    <button className="p-3 text-slate-300 hover:text-rose-500 transition-colors"><Trash2 size={20} /></button>
                </div>
            </div>
        </div>
    );
}
