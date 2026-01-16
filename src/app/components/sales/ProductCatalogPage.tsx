import { Search, Filter, ShoppingBag, ChevronRight, Package, Info } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function ProductCatalogPage() {
    const products = [
        { id: 1, name: "Bombilla LED 12W - Pack 10", category: "Iluminación", stock: 450, price: "$25.00", status: "In Stock" },
        { id: 2, name: "Filtro Aire Mack Trucks", category: "Repuestos Heavy", stock: 12, price: "$45.00", status: "Low Stock" },
        { id: 3, name: "Aceite 20W50 QT - Caja 12", category: "Lubricantes", stock: 120, price: "$106.80", status: "In Stock" },
        { id: 4, name: "Bujías Titán X - Platinum", category: "Eléctrico", stock: 0, price: "$5.50", status: "Out of Stock" },
        { id: 5, name: "Batería 12V 800CC", category: "Eléctrico", stock: 45, price: "$120.00", status: "In Stock" },
        { id: 6, name: "Juego Pastillas Frenos", category: "Frenos", stock: 8, price: "$35.00", status: "Low Stock" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight italic">Catálogo <span className="text-blue-600">Corporativo</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <ShoppingBag size={18} className="text-blue-500" />
                        Consulta de stock en tiempo real y precios sugeridos
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-slate-900 hover:bg-black text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl flex items-center gap-2 border-none">
                        <Filter size={20} />
                        Filtros Avanzados
                    </Button>
                </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white p-8 rounded-[3rem] shadow-xl shadow-gray-100/50 border border-gray-100">
                <div className="relative">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                        placeholder="Buscar por código, nombre o categoría de producto..."
                        className="pl-14 py-8 bg-gray-50/50 border-none rounded-3xl font-bold text-lg focus-visible:ring-blue-500"
                    />
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-8 rounded-[3.5rem] shadow-xl shadow-gray-50 border border-gray-100 flex flex-col group transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-100/30">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                <Package size={24} />
                            </div>
                            <div className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest border
                                ${product.status === 'In Stock' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                    product.status === 'Low Stock' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                        'bg-rose-50 text-rose-600 border-rose-100'}`}>
                                {product.status}
                            </div>
                        </div>

                        <div className="flex-1">
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">{product.category}</p>
                            <h3 className="text-xl font-black text-gray-800 leading-tight mb-4 group-hover:text-blue-600 transition-colors">{product.name}</h3>

                            <div className="flex items-center justify-between py-4 border-t border-gray-50">
                                <div>
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Precio Unit.</p>
                                    <p className="text-2xl font-black text-gray-900">{product.price}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase">Stock Disp.</p>
                                    <p className={`text-lg font-black ${product.stock > 20 ? 'text-gray-900' : product.stock > 0 ? 'text-amber-500' : 'text-rose-500'}`}>
                                        {product.stock} un
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-50 flex gap-3">
                            <button className="flex-1 py-4 bg-gray-50 hover:bg-gray-100 text-gray-400 rounded-2xl transition-all flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest">
                                <Info size={16} /> Detalles
                            </button>
                            <button className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2 font-black text-[10px] uppercase tracking-widest group/btn">
                                Cotizar <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
