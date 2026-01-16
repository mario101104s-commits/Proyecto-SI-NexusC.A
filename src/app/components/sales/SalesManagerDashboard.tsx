import { Users, Target, TrendingUp, Calendar, DollarSign, ChevronRight, ArrowUpRight, Award, Briefcase } from 'lucide-react';

export function SalesManagerDashboard() {
    const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Sales Performance Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">Panel de Control de Ventas</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Gerencia de Ventas</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">
                        <Calendar size={18} className="text-gray-400" />
                        {today.charAt(0).toUpperCase() + today.slice(1)}
                    </p>
                </div>
                <div className="flex bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
                    <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold text-xs tracking-wider uppercase shadow-lg shadow-blue-100 transition-all">Este Mes</button>
                    <button className="px-6 py-2.5 text-gray-400 font-bold text-xs tracking-wider uppercase hover:text-gray-600">Trimestral</button>
                </div>
            </div>

            {/* Strategic Sales Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <SalesMetricCard
                    title="Ventas del Mes"
                    value="$142,500"
                    trend="+12.4%"
                    icon={<DollarSign size={24} />}
                    color="blue"
                />
                <SalesMetricCard
                    title="Tasa de Conversión"
                    value="24.8%"
                    trend="+3.2%"
                    icon={<Target size={24} />}
                    color="emerald"
                />
                <SalesMetricCard
                    title="Leads Generados"
                    value="426"
                    trend="+18%"
                    icon={<Users size={24} />}
                    color="purple"
                />
                <SalesMetricCard
                    title="Meta de Ingresos"
                    value="84%"
                    trend="En Progreso"
                    icon={<TrendingUp size={24} />}
                    color="amber"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Sales Team Leaderboard */}
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col">
                    <div className="flex items-center justify-between mb-10">
                        <div>
                            <h3 className="text-xl font-black text-gray-800 tracking-tight">Rendimiento del Equipo</h3>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Cumplimiento de Cuotas Individuales</p>
                        </div>
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                            <Award size={20} />
                        </div>
                    </div>

                    <div className="space-y-8 flex-1">
                        <PremiumSellerRow name="Mario Sánchez" id="MS" sales="$45,200" quota={92} status="Top Seller" />
                        <PremiumSellerRow name="Elena Rodríguez" id="ER" sales="$38,150" quota={76} status="On Track" />
                        <PremiumSellerRow name="José Pérez" id="JP" sales="$22,400" quota={45} status="Average" />
                        <PremiumSellerRow name="Ana Casillas" id="AC" sales="$12,800" quota={25} status="Training" />
                    </div>
                </div>

                {/* High Value Opportunities */}
                <div className="space-y-8">
                    <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 text-white">
                        <h3 className="text-lg font-black mb-8 flex items-center gap-3">
                            <Briefcase className="text-blue-500" size={22} /> Oportunidades Clave
                        </h3>
                        <div className="space-y-5">
                            <QuoteItem name="Corporación ABC" amount="$12,500" prob={90} color="emerald" />
                            <QuoteItem name="Logística Valencia" amount="$8,200" prob={75} color="blue" />
                            <QuoteItem name="Autopartes PLC" amount="$4,100" prob={50} color="amber" />
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex-1">
                        <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center mb-6">Estado del Pipeline</h4>
                        <div className="flex justify-around items-end h-32 gap-6 px-4">
                            <PipelineBar height="100%" color="bg-blue-600" label="Lead" />
                            <PipelineBar height="75%" color="bg-indigo-600" label="Prop" />
                            <PipelineBar height="60%" color="bg-purple-600" label="Neg" />
                            <PipelineBar height="40%" color="bg-emerald-600" label="Won" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function SalesMetricCard({ title, value, trend, icon, color }: any) {
    const colors: any = {
        blue: 'text-blue-600 bg-blue-50 shadow-blue-100',
        emerald: 'text-emerald-600 bg-emerald-50 shadow-emerald-100',
        purple: 'text-purple-600 bg-purple-50 shadow-purple-100',
        amber: 'text-amber-600 bg-amber-50 shadow-amber-100',
    };

    return (
        <div className="bg-white p-8 rounded-[2.25rem] shadow-xl shadow-gray-100 border border-gray-50 group hover:-translate-y-2 transition-all duration-500">
            <div className={`w-14 h-14 rounded-2xl ${colors[color]} flex items-center justify-center mb-8 shadow-inner transition-transform group-hover:scale-110`}>{icon}</div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{title}</p>
            <h3 className="text-3xl font-black text-gray-800 tracking-tighter">{value}</h3>
            <div className={`mt-4 inline-flex items-center gap-1 text-[10px] font-black uppercase ${trend.includes('+') ? 'text-emerald-500' : 'text-blue-500'}`}>
                {trend} <ArrowUpRight size={10} />
            </div>
        </div>
    );
}

function PremiumSellerRow({ name, id, sales, quota, status }: any) {
    return (
        <div className="group">
            <div className="flex items-center gap-6 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center font-black text-gray-400 text-sm shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    {id}
                </div>
                <div className="flex-1">
                    <div className="flex justify-between items-end mb-1">
                        <div>
                            <p className="text-base font-black text-gray-800 tracking-tight">{name}</p>
                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{status}</p>
                        </div>
                        <p className="text-sm font-black text-blue-600">{sales}</p>
                    </div>
                    <div className="w-full h-2 bg-gray-50 rounded-full overflow-hidden border border-gray-100">
                        <div className="h-full bg-blue-600 rounded-full transition-all duration-1000" style={{ width: `${quota}%` }} />
                    </div>
                </div>
                <button className="p-2 text-gray-300 hover:text-blue-600 transition-colors"><ChevronRight size={20} /></button>
            </div>
        </div>
    );
}

function QuoteItem({ name, amount, prob, color }: any) {
    const dots: any = {
        emerald: 'bg-emerald-500',
        blue: 'bg-blue-500',
        amber: 'bg-amber-500',
    };
    return (
        <div className="p-5 rounded-3xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all cursor-pointer group">
            <div className="flex justify-between items-start mb-3">
                <div>
                    <h4 className="text-sm font-black text-white group-hover:text-blue-400 transition-colors tracking-tight">{name}</h4>
                    <p className="text-xs font-bold text-gray-500">{amount}</p>
                </div>
                <div className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest ${dots[color]} text-white leading-none`}>
                    {prob}% Prob
                </div>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${dots[color]} rounded-full transition-all duration-1000`} style={{ width: `${prob}%` }} />
            </div>
        </div>
    );
}

function PipelineBar({ height, color, label }: any) {
    return (
        <div className="flex flex-col items-center gap-2 flex-1 h-full">
            <div className="flex-1 w-full flex items-end justify-center">
                <div className={`w-full ${color} rounded-t-xl opacity-80 hover:opacity-100 transition-all cursor-help`} style={{ height }} />
            </div>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</span>
        </div>
    );
}

