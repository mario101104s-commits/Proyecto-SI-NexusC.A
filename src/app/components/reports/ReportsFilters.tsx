import { Calendar, Filter, Download } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function ReportsFilters() {
    return (
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                {/* Date Range Filter */}
                <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <select className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer min-w-[180px]">
                        <option value="today">Hoy</option>
                        <option value="week">Esta Semana</option>
                        <option value="month" selected>Este Mes</option>
                        <option value="quarter">Este Trimestre</option>
                        <option value="year">Este Año</option>
                    </select>
                </div>

                {/* Department Filter */}
                <div className="relative">
                    <Filter className="absolute left-3 top-2.5 text-gray-400" size={18} />
                    <select className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer min-w-[180px]">
                        <option value="all">Todos los Departamentos</option>
                        <option value="sales">Ventas</option>
                        <option value="inventory">Inventario</option>
                        <option value="hr">Recursos Humanos</option>
                        <option value="finance">Finanzas</option>
                    </select>
                </div>
            </div>

            <div className="flex gap-3 w-full md:w-auto">
                <Button variant="outline" className="flex-1 md:flex-none border-gray-200 text-gray-600 hover:bg-gray-50">
                    <Download size={18} className="mr-2" />
                    Excel
                </Button>
                <Button className="flex-1 md:flex-none bg-blue-800 hover:bg-blue-900 text-white">
                    <Download size={18} className="mr-2" />
                    PDF
                </Button>
            </div>
        </div>
    );
}
