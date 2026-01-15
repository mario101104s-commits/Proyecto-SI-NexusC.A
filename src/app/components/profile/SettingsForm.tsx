import { useState } from 'react';
import { Lock, Bell, Globe, Save } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function SettingsForm() {
    const [activeTab, setActiveTab] = useState<'security' | 'notifications'>('security');

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden h-full flex flex-col">
            <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6" aria-label="Tabs">
                    <button
                        onClick={() => setActiveTab('security')}
                        className={`py-4 px-1 inline-flex items-center gap-2 border-b-2 font-medium text-sm transition-colors ${activeTab === 'security'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                    >
                        <Lock size={16} />
                        Seguridad
                    </button>
                    <button
                        onClick={() => setActiveTab('notifications')}
                        className={`py-4 px-1 inline-flex items-center gap-2 border-b-2 font-medium text-sm transition-colors ${activeTab === 'notifications'
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                    >
                        <Bell size={16} />
                        Preferencias
                    </button>
                </nav>
            </div>

            <div className="p-6 flex-1 overflow-y-auto">
                {activeTab === 'security' && (
                    <div className="space-y-6 animate-in fade-in duration-300">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900">Cambiar Contraseña</h3>
                            <p className="text-sm text-gray-500 mb-4">Asegúrate de usar una contraseña segura y no la compartas.</p>

                            <div className="space-y-4 max-w-md">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Contraseña Actual</label>
                                    <Input type="password" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Nueva Contraseña</label>
                                    <Input type="password" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Confirmar Nueva Contraseña</label>
                                    <Input type="password" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <Button className="bg-blue-800 hover:bg-blue-900 text-white">
                                <Save size={16} className="mr-2" />
                                Actualizar Contraseña
                            </Button>
                        </div>
                    </div>
                )}

                {activeTab === 'notifications' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Notificaciones</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="font-medium text-gray-700">Notificaciones por Email</label>
                                        <p className="text-gray-500">Recibe resúmenes diarios y alertas importantes.</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input type="checkbox" defaultChecked className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label className="font-medium text-gray-700">Alertas de Navegador</label>
                                        <p className="text-gray-500">Notificaciones push cuando el navegador está abierto.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
                                <Globe size={18} className="text-gray-400" />
                                Idioma y Región
                            </h3>
                            <div className="max-w-xs space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700">Idioma de la Interfaz</label>
                                    <select className="w-full h-10 px-3 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                        <option value="es">Español (Latinoamérica)</option>
                                        <option value="en">English (US)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <Button className="bg-blue-800 hover:bg-blue-900 text-white">
                                <Save size={16} className="mr-2" />
                                Guardar Preferencias
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
