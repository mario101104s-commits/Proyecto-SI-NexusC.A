import { FileText, Download, FileSpreadsheet, File } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { SharedDocument } from './types';

interface DocumentsSectionProps {
    documents: SharedDocument[];
}

export function DocumentsSection({ documents }: DocumentsSectionProps) {
    const getFileIcon = (type: SharedDocument['type']) => {
        switch (type) {
            case 'pdf': return <FileText size={24} className="text-red-500" />;
            case 'xls': return <FileSpreadsheet size={24} className="text-green-600" />;
            case 'doc': return <FileText size={24} className="text-blue-600" />;
            default: return <File size={24} className="text-gray-400" />;
        }
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                    <FileText size={20} className="text-blue-800" />
                    Documentos Compartidos
                </h3>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 bg-blue-50 hover:bg-blue-100">
                    Subir Nuevo
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all group bg-gray-50/50">
                        <div className="p-2 bg-white rounded-md shadow-sm mr-3">
                            {getFileIcon(doc.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-800 text-sm truncate" title={doc.name}>{doc.name}</h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                                <span>{doc.size}</span>
                                <span>•</span>
                                <span>{doc.uploadedBy}</span>
                            </div>
                        </div>
                        <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-blue-600">
                            <Download size={18} />
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
