import { Phone, Mail, Package, MoreVertical } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Supplier } from './types';

interface SuppliersListProps {
    suppliers: Supplier[];
}

export function SuppliersList({ suppliers }: SuppliersListProps) {
    return (
        <div className="space-y-4">
            {suppliers.map((supplier) => (
                <div
                    key={supplier.id}
                    className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
                >
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h3 className="font-semibold text-gray-800">{supplier.name}</h3>
                            <p className="text-sm text-gray-500">{supplier.contact}</p>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreVertical size={16} className="text-gray-400" />
                        </Button>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                            <Phone size={14} className="text-gray-400" />
                            <span>{supplier.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail size={14} className="text-gray-400" />
                            <span className="truncate">{supplier.email}</span>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-3">
                        <div className="flex items-start gap-2">
                            <Package size={14} className="text-blue-500 mt-1" />
                            <div className="flex flex-wrap gap-1">
                                {supplier.products.map((prod, idx) => (
                                    <span
                                        key={idx}
                                        className="inline-flex px-2 py-0.5 rounded-full text-xs bg-blue-50 text-blue-700 border border-blue-100"
                                    >
                                        {prod}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
