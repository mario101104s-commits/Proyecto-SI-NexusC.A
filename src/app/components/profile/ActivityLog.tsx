import { Activity, LogIn, Edit2, Download, Settings, Clock } from 'lucide-react';
import { ActivityLogItem } from './types';

interface ActivityLogProps {
    items: ActivityLogItem[];
}

export function ActivityLog({ items }: ActivityLogProps) {
    const getIcon = (iconType: ActivityLogItem['icon']) => {
        switch (iconType) {
            case 'login': return <LogIn size={16} className="text-green-600" />;
            case 'edit': return <Edit2 size={16} className="text-blue-600" />;
            case 'download': return <Download size={16} className="text-orange-600" />;
            case 'settings': return <Settings size={16} className="text-gray-600" />;
            default: return <Activity size={16} className="text-gray-400" />;
        }
    };

    const getIconBg = (iconType: ActivityLogItem['icon']) => {
        switch (iconType) {
            case 'login': return 'bg-green-100';
            case 'edit': return 'bg-blue-100';
            case 'download': return 'bg-orange-100';
            case 'settings': return 'bg-gray-100';
            default: return 'bg-gray-100';
        }
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 h-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <Activity size={20} className="text-blue-800" />
                Actividad Reciente
            </h3>

            <div className="relative pl-4 border-l border-gray-100 space-y-8">
                {items.map((item) => (
                    <div key={item.id} className="relative">
                        {/* Timeline Dot */}
                        <div className={`absolute -left-[25px] top-1 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center shadow-sm ${getIconBg(item.icon)}`}>
                            {getIcon(item.icon)}
                        </div>

                        <div className="ml-2">
                            <h4 className="text-sm font-semibold text-gray-800">{item.action}</h4>
                            <p className="text-sm text-gray-500 mt-0.5">{item.details}</p>
                            <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400">
                                <Clock size={12} />
                                <span>{item.timestamp}</span>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="relative pt-2">
                    <button className="text-sm text-blue-600 hover:text-blue-800 font-medium ml-2">
                        Ver historial completo
                    </button>
                </div>
            </div>
        </div>
    );
}
