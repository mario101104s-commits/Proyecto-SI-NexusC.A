import { Search, Filter, Plus, User, MapPin, Phone, Mail, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function ClientsPage() {
    const clients = [
        { id: 1, name: "Corporación Textil", category: "PLATINUM", location: "Lima Este", lastOrder: "Hoy", contact: "Ricardo Pérez", growth: "+12%" },
        { id: 2, name: "Ferretería Central", category: "GOLD", location: "Callao", lastOrder: "Ayer", contact: "María García", growth: "+5%" },
        { id: 3, name: "AgroIndustrias SAC", category: "PLATINUM", location: "Piura", lastOrder: "14 Ene", contact: "José Luna", growth: "+45%" },
        { id: 4, name: "Mecánica Lima", category: "SILVER", location: "Lima Sur", lastOrder: "13 Ene", contact: "Andrés Soto", growth: "-2%" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight italic">Mis <span className="text-purple-600">Clientes</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <User size={18} className="text-purple-500" />
                        Gestión de cartera personal y fidelización estratégica
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-purple-100 flex items-center gap-2 border-none">
                        <Plus size={20} />
                        Nuevo Prospecto
                    </Button>
                </div>
            </div>

            {/* CRM Search */}
            <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-gray-100/50 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                            placeholder="Buscar en mi cartera por nombre, contacto o zona..."
                            className="pl-14 py-8 bg-gray-50/50 border-none rounded-3xl font-bold text-lg focus-visible:ring-purple-500"
                        />
                    </div>
                    <Button className="bg-gray-50 hover:bg-gray-100 text-gray-600 px-8 py-8 rounded-3xl font-black transition-all border border-gray-100 flex items-center gap-2">
                        <Filter size={20} /> Filtros
                    </Button>
                </div>
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {clients.map((client) => (
                    <div key={client.id} className="bg-white p-10 rounded-[4rem] shadow-xl shadow-gray-50 border border-gray-100 group hover:border-purple-200 transition-all relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-50 rounded-bl-[6rem] -mr-16 -mt-16 group-hover:scale-110 transition-transform duration-700" />

                        <div className="relative">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border
                                        ${client.category === 'PLATINUM' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                                            client.category === 'GOLD' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                'bg-slate-50 text-slate-600 border-slate-100'}`}>
                                        <Star size={10} className="inline mr-1 fill-current" /> {client.category}
                                    </span>
                                    <h3 className="text-3xl font-black text-gray-900 mt-4 tracking-tight group-hover:text-purple-600 transition-colors uppercase leading-none">
                                        {client.name}
                                    </h3>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Crecimiento</p>
                                    <p className={`text-xl font-black ${client.growth.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                                        {client.growth}
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <MapPin size={16} />
                                        <span className="text-xs font-bold text-gray-600">{client.location}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-400">
                                        <User size={16} />
                                        <span className="text-xs font-bold text-gray-600">{client.contact}</span>
                                    </div>
                                </div>
                                <div className="bg-gray-50/50 p-6 rounded-[2rem] border border-gray-50 text-center">
                                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-1">Última Compra</p>
                                    <p className="text-sm font-black text-gray-800">{client.lastOrder}</p>
                                </div>
                            </div>

                            <div className="mt-10 pt-8 border-t border-gray-50 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <button className="p-4 bg-gray-50 hover:bg-purple-50 text-gray-400 hover:text-purple-600 rounded-2xl transition-all"><Phone size={20} /></button>
                                    <button className="p-4 bg-gray-50 hover:bg-purple-50 text-gray-400 hover:text-purple-600 rounded-2xl transition-all"><Mail size={20} /></button>
                                </div>
                                <button className="flex items-center gap-2 text-sm font-black text-gray-900 hover:text-purple-600 transition-colors group/btn">
                                    Ver Perfil 360°
                                    <ChevronRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
