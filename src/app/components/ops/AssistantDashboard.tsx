import { Calendar, FileText, MessageSquare, ClipboardList, Clock, Bell, CheckCircle2, Download, Plus, Star } from 'lucide-react';

export function AssistantDashboard({ onNavigate }: { onNavigate?: (menu: string) => void }) {
    const today = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Admin Command Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Star size={14} className="fill-indigo-500" /> Administrative Support
                    </h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Centro de Asistencia</h1>
                    <p className="text-gray-500 font-medium mt-2 flex items-center gap-2">
                        <Calendar size={18} className="text-gray-400" />
                        {today.charAt(0).toUpperCase() + today.slice(1)}
                    </p>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-4 bg-indigo-600 text-white rounded-[1.25rem] font-black text-xs tracking-wider uppercase shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center gap-3 active:scale-95">
                        <Plus size={20} /> Nueva Tarea
                    </button>
                    <button className="w-12 h-12 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:text-indigo-600 transition-all relative">
                        <Bell size={20} />
                        <div className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
                    </button>
                </div>
            </div>

            {/* Support Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AdminToolCard
                    title="Calendario"
                    value="3"
                    desc="Eventos para hoy"
                    icon={<Calendar size={24} />}
                    color="indigo"
                />
                <AdminToolCard
                    title="Inbox Nexus"
                    value="12"
                    desc="Mensajes sin leer"
                    icon={<MessageSquare size={24} />}
                    color="emerald"
                />
                <AdminToolCard
                    title="Asignaciones"
                    value="8"
                    desc="Tareas activas"
                    icon={<ClipboardList size={24} />}
                    color="purple"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Priority Mission Control */}
                <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-black text-gray-800 tracking-tight">Misión del Día</h3>
                            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Checklist de Actividades Críticas</p>
                        </div>
                        <CheckCircle2 className="text-indigo-600" size={24} />
                    </div>

                    <div className="space-y-4 flex-1">
                        <AdminTaskRow title="Enviar reportes semanales de ventas" time="09:00 AM" status="A tiempo" />
                        <AdminTaskRow title="Confirmar pedidos de compra pendientes" time="10:30 AM" status="Pendiente" />
                        <AdminTaskRow title="Actualizar base de datos de proveedores" time="02:00 PM" status="En curso" />
                        <AdminTaskRow title="Preparar salón de reuniones principal" time="04:00 PM" status="Completado" />
                    </div>
                </div>

                {/* Secure Document Hub */}
                <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl shadow-indigo-900/10 text-white flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-lg font-black flex items-center gap-3 tracking-tight">
                            <FileText className="text-indigo-400" size={22} /> Document Hub
                        </h3>
                    </div>

                    <div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar pr-1">
                        <PremiumDocItem name="Facturas Enero.pdf" date="Hace 2h" size="1.4 MB" />
                        <PremiumDocItem name="Memorándum Dir.docx" date="Hoy" size="24 KB" />
                        <PremiumDocItem name="Lista Proveedores.xlsx" date="Ayer" size="512 KB" />
                        <PremiumDocItem name="Manual Ops.pdf" date="12 Ene" size="4.2 MB" />
                    </div>

                    <button className="w-full mt-8 py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border border-white/5">
                        Subir Documento
                    </button>
                </div>
            </div>
        </div>
    );
}

function AdminToolCard({ title, value, desc, icon, color }: any) {
    const accents: any = {
        indigo: 'text-indigo-600 bg-indigo-50 shadow-indigo-100',
        emerald: 'text-emerald-600 bg-emerald-50 shadow-emerald-100',
        purple: 'text-purple-600 bg-purple-50 shadow-purple-100',
    };

    return (
        <div className="bg-white p-8 rounded-[2.25rem] shadow-xl shadow-gray-100 border border-gray-50 flex items-center gap-6 group hover:-translate-y-1 transition-all">
            <div className={`w-16 h-16 rounded-[1.5rem] ${accents[color]} flex items-center justify-center shadow-inner transition-transform group-hover:scale-110`}>
                {icon}
            </div>
            <div>
                <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-black text-gray-800 tracking-tighter">{value}</h3>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{title}</p>
                </div>
                <p className="text-xs font-bold text-gray-400 mt-1">{desc}</p>
            </div>
        </div>
    );
}

function AdminTaskRow({ title, time, status }: any) {
    const statusStyles: any = {
        'Completado': 'bg-emerald-50 text-emerald-600',
        'Pendiente': 'bg-rose-50 text-rose-600',
        'En curso': 'bg-indigo-50 text-indigo-600',
        'A tiempo': 'bg-blue-50 text-blue-600',
    };

    return (
        <div className="flex items-center justify-between p-5 rounded-3xl bg-gray-50/50 border border-transparent hover:bg-white hover:border-gray-100 hover:shadow-xl hover:shadow-gray-50 transition-all group">
            <div className="flex items-center gap-6">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-indigo-500 transition-colors" />
                <div>
                    <h4 className="text-sm font-black text-gray-800 tracking-tight">{title}</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1 mt-1">
                        <Clock size={10} /> {time}
                    </p>
                </div>
            </div>
            <span className={`text-[9px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest ${statusStyles[status]}`}>
                {status}
            </span>
        </div>
    );
}

function PremiumDocItem({ name, date, size }: any) {
    return (
        <div className="group cursor-pointer">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-transparent hover:bg-white/10 hover:border-white/10 transition-all">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-xl group-hover:text-indigo-400 transition-colors">
                        <FileText size={18} />
                    </div>
                    <div>
                        <p className="text-sm font-black text-white group-hover:text-indigo-400 transition-colors tracking-tight line-clamp-1">{name}</p>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{date} • {size}</p>
                    </div>
                </div>
                <Download size={16} className="text-gray-600 group-hover:text-white transition-all" />
            </div>
        </div>
    );
}

