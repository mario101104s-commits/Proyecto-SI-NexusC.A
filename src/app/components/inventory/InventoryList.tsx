import { Edit, History, Plus, AlertTriangle, MapPin } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Product } from './types';

interface InventoryListProps {
    products: Product[];
}

export function InventoryList({ products }: InventoryListProps) {
    const getStockStatusColor = (product: Product) => {
        if (product.stock <= product.minStock) {
            return 'bg-red-50 text-red-700 border-red-200';
        }
        if (product.stock <= product.minStock * 1.5) {
            return 'bg-orange-50 text-orange-700 border-orange-200';
        }
        return 'bg-green-50 text-green-700 border-green-200';
    };

    const getStockLabel = (product: Product) => {
        if (product.stock <= product.minStock) return 'Crítico';
        if (product.stock <= product.minStock * 1.5) return 'Bajo';
        return 'Normal';
    };

    if (products.length === 0) {
        return (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <p className="text-gray-500">No se encontraron productos con los filtros actuales</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Producto
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ubicación
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Categoría
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Stock
                            </th>
                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0">
                                            <img
                                                className="h-10 w-10 rounded-lg object-cover"
                                                src={product.image}
                                                alt={product.name}
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                            <div className="text-sm text-gray-500">{product.code}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <MapPin size={14} className="mr-1 text-gray-400" />
                                        {product.location}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        {product.category}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center space-x-2">
                                        <span className="text-sm font-bold text-gray-900">{product.stock}</span>
                                        <span
                                            className={`px-2 py-0.5 rounded text-xs font-medium border ${getStockStatusColor(
                                                product
                                            )}`}
                                        >
                                            {getStockLabel(product)}
                                        </span>
                                        {product.stock <= product.minStock && (
                                            <AlertTriangle size={16} className="text-red-500 animate-pulse" />
                                        )}
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">Min: {product.minStock}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                    <div className="flex justify-center space-x-2">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => alert('Ajustar Stock - En desarrollo')}
                                            className="text-blue-600 hover:text-blue-900 hover:bg-blue-50"
                                            title="Ajustar Stock"
                                        >
                                            <Edit size={16} />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => alert('Ver Historial - En desarrollo')}
                                            className="text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                                            title="Ver Historial"
                                        >
                                            <History size={16} />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
