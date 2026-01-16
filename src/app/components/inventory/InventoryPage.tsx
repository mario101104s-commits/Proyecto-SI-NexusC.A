import { useState } from 'react';
import { Search, Plus, Download, AlertTriangle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { MOCK_INVENTORY, CATEGORIES, LOCATIONS, Category, Location } from './types';
import { InventoryList } from './InventoryList';
import { InventoryStats } from './InventoryStats';

export function InventoryPage({ readOnly = false }: { readOnly?: boolean }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
    const [selectedLocation, setSelectedLocation] = useState<Location | 'All'>('All');
    const [showLowStockOnly, setShowLowStockOnly] = useState(false);

    const filteredProducts = MOCK_INVENTORY.filter((product) => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.code.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesLocation = selectedLocation === 'All' || product.location === selectedLocation;
        const matchesLowStock = !showLowStockOnly || product.stock <= product.minStock;

        return matchesSearch && matchesCategory && matchesLocation && matchesLowStock;
    });

    return (
        <div className="space-y-10 animate-in fade-in duration-500">
            {/* Header section with executive style */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h2 className="text-sm font-black text-amber-600 uppercase tracking-widest mb-2">Cadena de Suministro</h2>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight">Gestión de Inventario</h1>
                    <p className="text-gray-500 font-medium mt-2">Control avanzado de existencias, ubicaciones y métricas de almacén.</p>
                </div>

                <div className="flex gap-3">
                    <Button
                        variant="outline"
                        className="bg-white border-gray-200 text-gray-700 px-6 py-6 rounded-2xl shadow-sm font-bold flex items-center gap-2"
                        onClick={() => alert('Exportar Inventario')}
                    >
                        <Download size={20} />
                        Exportar
                    </Button>
                    {!readOnly && (
                        <Button
                            className="bg-slate-900 hover:bg-black text-white px-8 py-6 rounded-2xl shadow-xl shadow-gray-200 transition-all hover:-translate-y-1 font-bold"
                            onClick={() => alert('Agregar Producto - En desarrollo')}
                        >
                            <Plus size={20} className="mr-2" />
                            Añadir Producto
                        </Button>
                    )}
                </div>
            </div>

            {/* Stats Section with Premium Cards */}
            <InventoryStats products={MOCK_INVENTORY} />

            {/* Premium Filters Bar */}
            <div className="bg-white rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-50 p-8 flex flex-col lg:flex-row items-center gap-6">
                {/* Search */}
                <div className="w-full lg:flex-1 relative">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-300" size={24} />
                    <Input
                        type="text"
                        placeholder="Buscar producto por nombre o código técnico..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-14 h-16 bg-gray-50/50 border-none rounded-2xl text-lg font-medium focus-visible:ring-2 focus-visible:ring-blue-500/20"
                    />
                </div>

                {/* Filters Group */}
                <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto">
                    <select
                        className="flex-1 h-14 px-6 rounded-2xl border-none bg-gray-100 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-blue-500/20 appearance-none"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value as Category | 'All')}
                    >
                        <option value="All">Categorías (Todas)</option>
                        {CATEGORIES.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    <select
                        className="flex-1 h-14 px-6 rounded-2xl border-none bg-gray-100 text-sm font-bold text-gray-700 focus:ring-2 focus:ring-blue-500/20 appearance-none"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value as Location | 'All')}
                    >
                        <option value="All">Almacén (Todos)</option>
                        {LOCATIONS.map(loc => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>

                    <Button
                        variant={showLowStockOnly ? "default" : "outline"}
                        onClick={() => setShowLowStockOnly(!showLowStockOnly)}
                        className={`h-14 px-8 rounded-2xl font-black transition-all ${showLowStockOnly ? 'bg-rose-500 text-white shadow-lg shadow-rose-200' : 'bg-white border-gray-200 text-gray-500'}`}
                    >
                        <AlertTriangle size={20} className="mr-2" />
                        Stock Bajo
                    </Button>
                </div>
            </div>

            {/* Product List Section */}
            <div className="bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                    <div>
                        <h2 className="text-xl font-black text-gray-800 tracking-tight">Existencias Disponibles</h2>
                        <p className="text-xs text-gray-400 font-bold uppercase mt-1">Sincronizado en tiempo real</p>
                    </div>
                    <span className="px-4 py-2 bg-white rounded-xl text-sm font-black text-gray-600 shadow-sm border border-gray-100">{filteredProducts.length} registros</span>
                </div>
                <InventoryList products={filteredProducts} />
            </div>
        </div>
    );
}
