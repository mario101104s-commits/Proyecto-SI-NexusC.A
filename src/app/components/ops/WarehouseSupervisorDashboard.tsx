import { Package, Download, Upload, CheckCircle2, AlertTriangle, Truck, History, ChevronRight, ArrowRight } from 'lucide-react';

export function WarehouseSupervisorDashboard() {
    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Action-Oriented Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between bg-white px-8 py-10 rounded-[2.5rem] border border-gray-50 shadow-xl shadow-gray-100 gap-6">
                <div>
                    <h2 className="text-3xl font-black text-gray-900 tracking-tight">Almacén Valencia</h2>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Sede Principal - Control de Inventario</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black text-xs tracking-wider uppercase shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center gap-3 active:scale-95">
                        <Upload size={18} /> Registrar Recepción
                    </button>
                    <button className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs tracking-wider uppercase shadow-xl shadow-gray-200 hover:bg-slate-800 transition-all flex items-center gap-3 active:scale-95">
                        <Download size={18} /> Registrar Despacho
                    </button>
                </div>
            </div>

            {/* Warehouse Vital Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <SuperStatCard
                    title="Capacidad Utilizada"
                    value="72"
                    unit="%"
                    sub="Pasillos 1-4 en carga máxima"
                    icon={<Package size={24} />}
                    color="blue"
                    progress={72}
                />
                <SuperStatCard
                    title="Pendiente Recepción"
                    value="14"
                    unit="Und."
                    sub="Próximo arribo: 14:00 PM"
                    icon={<Truck size={24} />}
                    color="amber"
                    progress={40}
                />
                <SuperStatCard
                    title="Picking en Turno"
                    value="28"
                    unit="Act."
                    sub="Meta: 40 despachos diarios"
                    icon={<CheckCircle2 size={24} />}
                    color="emerald"
                    progress={65}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Movement History Log */}
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-gray-50 shadow-xl shadow-gray-100">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-black text-gray-800 tracking-tight flex items-center gap-3">
                            <History className="text-blue-600" size={24} /> Log de Movimientos
                        </h3>
                        <button className="text-xs font-black text-gray-400 uppercase tracking-widest hover:text-blue-600 transition-all">Ver Historial Completo</button>
                    </div>

                    <div className="space-y-4">
                        <SuperMovementRow type="ENTRADA" item="Amortiguadores 4x4 Off-Road" qty="50" user="Argenis P." time="10:24 AM" />
                        <SuperMovementRow type="SALIDA" item="Filtros Gasoil Mack MP8" qty="12" user="Luis G." time="09:55 AM" />
                        <SuperMovementRow type="ENTRADA" item="Aceite Sintético 20W50 Full" qty="120" user="Supervisor" time="08:30 AM" />
                        <SuperMovementRow type="SALIDA" item="Bujías Iridium Premium" qty="48" user="Elena M." time="07:15 AM" />
                    </div>
                </div>

                {/* Critical Stock Center */}
                <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 text-white flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-black flex items-center gap-3">
                            <AlertTriangle className="text-rose-500" size={22} /> Stock Crítico
                        </h3>
                        <span className="px-3 py-1 bg-rose-500/20 rounded-full text-[9px] font-black uppercase tracking-widest text-rose-400 border border-rose-500/30">Acción</span>
                    </div>

                    <div className="space-y-5 flex-1 overflow-y-auto custom-scrollbar pr-2 mb-8">
                        <CriticalStockItem name="Correas de Alternador Toyota" stock="2" target="15" />
                        <CriticalStockItem name="Baterías 800AMP Titán" stock="1" target="10" />
                        <CriticalStockItem name="Pastillas de Freno Ranger" stock="5" target="25" />
                    </div>

                    <button className="w-full py-4 bg-white text-slate-900 rounded-2xl font-black text-sm hover:bg-slate-100 transition-all flex items-center justify-center gap-2 group active:scale-95 leading-none">
                        Generar Picking List <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function SuperStatCard({ title, value, unit, sub, icon, color, progress }: any) {
    const borders: any = {
        blue: 'border-blue-100',
        amber: 'border-amber-100',
        emerald: 'border-emerald-100'
    };
    const iconBgs: any = {
        blue: 'bg-blue-50 text-blue-600',
        amber: 'bg-amber-50 text-amber-600',
        emerald: 'bg-emerald-50 text-emerald-600'
    };

    return (
        <div className={`bg-white p-8 rounded-[2.25rem] border ${borders[color]} shadow-lg shadow-gray-50 group hover:-translate-y-2 transition-all duration-500`}>
            <div className={`w-14 h-14 rounded-2xl ${iconBgs[color]} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform`}>{icon}</div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{title}</p>
            <div className="flex items-baseline gap-2">
                <h3 className="text-4xl font-black text-gray-800 tracking-tighter">{value}</h3>
                <span className="text-sm font-bold text-gray-400">{unit}</span>
            </div>
            <div className="mt-6 flex flex-col gap-2">
                <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full bg-current opacity-80 ${iconBgs[color].split(' ')[1]}`} style={{ width: `${progress}%` }} />
                </div>
                <p className="text-[10px] font-bold text-gray-400 truncate">{sub}</p>
            </div>
        </div>
    );
}

function SuperMovementRow({ type, item, qty, user, time }: any) {
    return (
        <div className="flex items-center justify-between p-5 rounded-3xl bg-gray-50 border border-transparent hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-gray-100 transition-all group flex-wrap md:flex-nowrap gap-4">
            <div className="flex items-center gap-5 flex-1 min-w-[200px]">
                <div className={`flex flex-col items-center justify-center p-2 rounded-xl text-[10px] font-black uppercase tracking-widest min-w-[70px] ${type === 'ENTRADA' ? 'bg-emerald-50 text-emerald-600' :
                    type === 'SALIDA' ? 'bg-blue-50 text-blue-600' : 'bg-rose-50 text-rose-600'
                    }`}>
                    {type}
                    <div className={`w-4 h-0.5 mt-1 rounded-full ${type === 'ENTRADA' ? 'bg-emerald-400' : type === 'SALIDA' ? 'bg-blue-400' : 'bg-rose-400'}`} />
                </div>
                <div>
                    <h4 className="text-sm font-black text-gray-800 line-clamp-1">{item}</h4>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Cant: <span className="text-gray-900">{qty}</span> • Resp: <span className="text-gray-900">{user}</span></p>
                </div>
            </div>
            <div className="flex items-center gap-6">
                <span className="text-[10px] font-black text-gray-400 group-hover:text-blue-600 transition-colors uppercase tracking-widest">{time}</span>
                <button className="p-2 text-gray-300 hover:text-blue-600 transition-all group-hover:translate-x-1"><ChevronRight size={18} /></button>
            </div>
        </div>
    );
}

function CriticalStockItem({ name, stock, target }: any) {
    return (
        <div className="group cursor-default">
            <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-bold text-gray-300 line-clamp-1 group-hover:text-white transition-colors">{name}</p>
                <span className="text-[10px] font-black text-rose-400">{stock}/{target}</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-rose-500 rounded-full group-hover:animate-pulse" style={{ width: `${(stock / target) * 100}%` }} />
            </div>
        </div>
    );
}

