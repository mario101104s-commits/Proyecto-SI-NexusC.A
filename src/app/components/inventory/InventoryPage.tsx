import { useState } from 'react';
import { Search, Plus, Filter, Download, AlertTriangle } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { MOCK_INVENTORY, CATEGORIES, LOCATIONS, Category, Location } from './types';
import { InventoryList } from './InventoryList';
import { InventoryStats } from './InventoryStats';

export function InventoryPage() {
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
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">Gestión de Inventario</h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Control de stock y movimientos de almacén
                    </p>
                </div>

                <Button
                    className="bg-blue-800 hover:bg-blue-900 text-white shadow-md"
                    onClick={() => alert('Agregar Producto - En desarrollo')}
                >
                    <Plus size={18} className="mr-2" />
                    Agregar Producto
                </Button>
            </div>

            {/* Stats Section */}
            <InventoryStats products={MOCK_INVENTORY} />

            {/* Filters Bar */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
                {/* Search */}
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                        type="text"
                        placeholder="Buscar por nombre o código..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 bg-gray-50 border-gray-200"
                    />
                </div>

                {/* Filters Group */}
                <div className="flex flex-wrap items-center gap-3">
                    <select
                        className="h-10 px-3 py-2 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value as Category | 'All')}
                    >
                        <option value="All">Todas las Categorías</option>
                        {CATEGORIES.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    <select
                        className="h-10 px-3 py-2 rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value as Location | 'All')}
                    >
                        <option value="All">Todas las Ubicaciones</option>
                        {LOCATIONS.map(loc => (
                            <option key={loc} value={loc}>{loc}</option>
                        ))}
                    </select>

                    <Button
                        variant={showLowStockOnly ? "default" : "outline"}
                        size="sm"
                        onClick={() => setShowLowStockOnly(!showLowStockOnly)}
                        className={`flex items-center gap-2 ${showLowStockOnly ? 'bg-red-100 text-red-700 hover:bg-red-200 border-red-200' : 'text-gray-600'}`}
                    >
                        <AlertTriangle size={16} />
                        <span className="hidden md:inline">Stock Bajo</span>
                    </Button>

                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-500 hover:bg-gray-100"
                        title="Exportar Reporte"
                        onClick={() => alert('Exportar - En desarrollo')}
                    >
                        <Download size={18} />
                    </Button>
                </div>
            </div>

            {/* Product List */}
            <div className="bg-white rounded-xl border border-gray-200">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-xl">
                    <h2 className="font-semibold text-gray-700">Listado de Productos</h2>
                    <span className="text-sm text-gray-500">{filteredProducts.length} items encontrados</span>
                </div>
                <InventoryList products={filteredProducts} />
            </div>
        </div>
    );
}
