import { FileText, Star, Clock, ArrowRight } from 'lucide-react';
import { SavedReport } from './types';

interface SavedReportsProps {
    reports: SavedReport[];
}

export function SavedReports({ reports }: SavedReportsProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                    <FileText size={18} className="text-blue-800" />
                    Reportes Guardados
                </h3>
                <button className="text-xs font-medium text-blue-600 hover:text-blue-800">Ver biblioteca</button>
            </div>

            <div className="divide-y divide-gray-100">
                {reports.map((report) => (
                    <div key={report.id} className="p-4 hover:bg-gray-50 transition-colors group cursor-pointer group">
                        <div className="flex justify-between items-start">
                            <div className="flex-1">
                                <div className="flex items-center gap-2">
                                    <h4 className="font-medium text-gray-900 group-hover:text-blue-700 transition-colors">{report.name}</h4>
                                    {report.isFavorite && <Star size={14} className="text-yellow-400 fill-yellow-400" />}
                                </div>
                                <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                                    <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600 font-medium">{report.type}</span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={12} /> {report.lastGenerated}
                                    </span>
                                </div>
                            </div>
                            <div className="text-gray-300 group-hover:text-blue-600 transition-colors">
                                <ArrowRight size={18} />
                            </div>
                        </div>
                    </div>
                ))}

                {reports.length === 0 && (
                    <div className="p-8 text-center text-gray-400 text-sm">
                        No tienes reportes guardados
                    </div>
                )}
            </div>

            <div className="p-3 bg-gray-50 border-t border-gray-200 text-center">
                <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
                    + Crear Nuevo Reporte Personalizado
                </button>
            </div>
        </div>
    );
}
