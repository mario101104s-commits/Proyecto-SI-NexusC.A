import { Handshake, FileText, ShoppingBag, Phone, Calendar, PlusCircle, Search, ChevronRight, Clock, Target, Star } from 'lucide-react';

export function SellerDashboard({ onNavigate }: { onNavigate?: (menu: string) => void }) {
    const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Seller Performance Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-emerald-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Star size={14} className="fill-emerald-500" /> Mi Centro de Ventas
                    </h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight italic">¡Vamos Mario!</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">
                        <Calendar size={18} className="text-gray-400" />
                        {today.charAt(0).toUpperCase() + today.slice(1)}
                    </p>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-4 bg-emerald-600 text-white rounded-[1.25rem] font-black text-xs tracking-wider uppercase shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-all flex items-center gap-3 active:scale-95">
                        <PlusCircle size={20} /> Nueva Venta
                    </button>
                    <button className="px-6 py-4 bg-slate-900 text-white rounded-[1.25rem] font-black text-xs tracking-wider uppercase shadow-xl shadow-gray-200 hover:bg-slate-800 transition-all flex items-center gap-3 active:scale-95">
                        <Search size={20} /> Consultar Stock
                    </button>
                </div>
            </div>

            {/* Daily Objectives and Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SellerStatCard
                    title="Meta del Mes"
                    value="85"
                    unit="%"
                    sub="$22,400 acumulados"
                    icon={<Target size={24} />}
                    color="emerald"
                    progress={85}
                />
                <SellerStatCard
                    title="Cotiz. Abiertas"
                    value="12"
                    unit="Act."
                    sub="$18k en prospección"
                    icon={<FileText size={24} />}
                    color="blue"
                    progress={60}
                />
                <SellerStatCard
                    title="Cartera Cliente"
                    value="48"
                    unit="Reg."
                    sub="+2 nuevos esta semana"
                    icon={<Handshake size={24} />}
                    color="purple"
                    progress={40}
                />
                <SellerStatCard
                    title="Seguimientos"
                    value="05"
                    unit="Hoy"
                    sub="Prioridad Crítica"
                    icon={<Phone size={24} />}
                    color="amber"
                    progress={100}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Personal Sales Agenda */}
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-black text-gray-800 tracking-tight">Mi Agenda de Seguimiento</h3>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Llamadas y Visitas Programadas</p>
                        </div>
                        <button className="p-3 bg-gray-50 text-gray-400 rounded-2xl hover:bg-blue-600 hover:text-white transition-all">
                            <Calendar size={20} />
                        </button>
                    </div>

                    <div className="space-y-4 flex-1">
                        <PremiumScheduleItem time="09:00 AM" customer="Corporación Textil" action="Llamada de Cierre" priority="ALTA" />
                        <PremiumScheduleItem time="10:30 AM" customer="Panadería El Sol" action="Visita Entrega" priority="MEDIA" />
                        <PremiumScheduleItem time="02:00 PM" customer="Logística San José" action="Presentación" priority="ALTA" />
                        <PremiumScheduleItem time="04:30 PM" customer="Taller Los Andes" action="Cobranza" priority="URGENTE" />
                    </div>
                </div>

                {/* Quick Catalog / High Rotation Stock */}
                <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-black text-gray-800 flex items-center gap-3 tracking-tight">
                            <ShoppingBag className="text-emerald-600" size={24} /> Stock Rápido
                        </h3>
                    </div>

                    <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-1">
                        <SimpleStockItem name="Bombilla LED 12W" stock="450" price="$2.50" />
                        <SimpleStockItem name="Filtro Aire Mack" stock="12" price="$45.00" />
                        <SimpleStockItem name="Aceite 20W50 QT" stock="120" price="$8.90" />
                        <SimpleStockItem name="Bujías Titán X" stock="50" price="$5.50" />
                    </div>

                    <button className="w-full mt-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs tracking-wider uppercase shadow-xl hover:bg-black transition-all group flex items-center justify-center gap-2">
                        Ver Catálogo Completo <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function SellerStatCard({ title, value, unit, sub, icon, color, progress }: any) {
    const accents: any = {
        emerald: 'text-emerald-600 bg-emerald-50 shadow-emerald-100',
        blue: 'text-blue-600 bg-blue-50 shadow-blue-100',
        purple: 'text-purple-600 bg-purple-50 shadow-purple-100',
        amber: 'text-amber-600 bg-amber-50 shadow-amber-100',
    };

    return (
        <div className="bg-white p-8 rounded-[2.25rem] shadow-xl shadow-gray-100 border border-gray-50 group hover:-translate-y-1 transition-all">
            <div className={`w-14 h-14 rounded-2xl ${accents[color]} flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:rotate-12`}>
                {icon}
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{title}</p>
            <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-black text-gray-800 tracking-tighter">{value}</h3>
                <span className="text-xs font-bold text-gray-400">{unit}</span>
            </div>
            <div className="mt-6">
                <div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${accents[color].split(' ')[1]}`} style={{ width: `${progress}%` }} />
                </div>
                <p className="text-[10px] font-bold text-gray-400 mt-2">{sub}</p>
            </div>
        </div>
    );
}

function PremiumScheduleItem({ time, customer, action, priority }: any) {
    const priorities: any = {
        ALTA: 'bg-rose-50 text-rose-600 border-rose-100',
        URGENTE: 'bg-rose-600 text-white border-rose-600 shadow-lg shadow-rose-100',
        MEDIA: 'bg-blue-50 text-blue-600 border-blue-100',
    };

    return (
        <div className="flex items-center gap-6 p-5 rounded-3xl bg-gray-50/50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:shadow-gray-50 transition-all group">
            <div className="flex flex-col items-center justify-center min-w-[70px]">
                <Clock size={16} className="text-gray-400 mb-1" />
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-tighter">{time}</span>
            </div>
            <div className="flex-1">
                <h4 className="text-base font-black text-gray-800 tracking-tight">{customer}</h4>
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1">
                    {action}
                </p>
            </div>
            <span className={`text-[9px] font-black px-3 py-1.5 rounded-xl border uppercase tracking-widest ${priorities[priority]}`}>
                {priority}
            </span>
        </div>
    );
}

function SimpleStockItem({ name, stock, price }: any) {
    return (
        <div className="flex items-center justify-between p-4 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-colors group cursor-default">
            <div>
                <p className="text-sm font-black text-gray-800 group-hover:text-emerald-600 transition-colors tracking-tight line-clamp-1">{name}</p>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] font-bold text-gray-400">PVP:</span>
                    <span className="text-xs font-black text-emerald-600 tracking-tight">{price}</span>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm font-black text-gray-900">{stock}</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase">Dispon.</p>
            </div>
        </div>
    );
}

