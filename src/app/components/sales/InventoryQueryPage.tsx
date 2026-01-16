import { Search, Package, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function InventoryQueryPage() {
    const stockItems = [
        { id: "SKU-1001", name: "Bombilla LED 12W", cat: "Iluminación", total: 450, warehouses: [{ name: "Valencia", qty: 300 }, { name: "Caracas", qty: 150 }] },
        { id: "SKU-5542", name: "Filtro Aire Mack", cat: "Repuestos", total: 12, warehouses: [{ name: "Valencia", qty: 12 }] },
        { id: "SKU-2210", name: "Aceite 20W50 QT", cat: "Lubricantes", total: 120, warehouses: [{ name: "Maracay", qty: 80 }, { name: "Valencia", qty: 40 }] },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight italic">Consulta de <span className="text-blue-600">Stock</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <Package size={18} className="text-blue-500" />
                        Disponibilidad multi-sede y tiempos de reposición
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-blue-100 flex items-center gap-2 border-none">
                        <MapPin size={20} />
                        Distribución Nacional
                    </Button>
                </div>
            </div>

            {/* Dynamic Search */}
            <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-gray-100/50 border border-gray-100">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <Input
                            placeholder="Introduce nombre del producto o referencia SKU..."
                            className="pl-14 py-8 bg-gray-50/50 border-none rounded-3xl font-bold text-lg focus-visible:ring-blue-500"
                        />
                    </div>
                </div>
            </div>

            {/* Query Results */}
            <div className="space-y-6">
                {stockItems.map((item) => (
                    <div key={item.id} className="bg-white p-10 rounded-[3.5rem] shadow-xl shadow-gray-50 border border-gray-100 group">
                        <div className="flex flex-col lg:flex-row justify-between gap-10">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-widest">{item.id}</span>
                                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.cat}</span>
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors uppercase leading-none mb-6">
                                    {item.name}
                                </h3>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                    {item.warehouses.map((wh, idx) => (
                                        <div key={idx} className="p-6 bg-gray-50/50 rounded-3xl border border-gray-100">
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{wh.name}</p>
                                            <p className="text-xl font-black text-gray-900">{wh.qty} <span className="text-[10px] text-gray-400 font-bold uppercase">Un</span></p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:w-80 bg-slate-900 rounded-[2.5rem] p-8 text-white flex flex-col justify-between">
                                <div>
                                    <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">Total Disponible</p>
                                    <p className="text-5xl font-black tracking-tighter">{item.total}</p>
                                </div>
                                <Button className="w-full mt-8 py-5 bg-blue-600 hover:bg-blue-700 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 group/btn">
                                    Verificar Entrega <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
