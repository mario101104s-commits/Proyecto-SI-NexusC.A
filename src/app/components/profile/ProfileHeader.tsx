import { MapPin, Calendar, Mail, Building2, Camera } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { UserProfile } from './types';

interface ProfileHeaderProps {
    profile: UserProfile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
            {/* Cover Image Placeholder */}
            <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-800"></div>

            <div className="px-8 pb-8">
                <div className="relative flex items-end -mt-12 mb-6">
                    <div className="relative">
                        <img
                            src={profile.avatar}
                            alt={profile.name}
                            className="w-24 h-24 rounded-xl object-cover border-4 border-white shadow-md relative z-10"
                        />
                        <button className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow border border-gray-200 text-gray-600 hover:text-blue-600 z-20">
                            <Camera size={16} />
                        </button>
                    </div>

                    <div className="ml-6 mb-3 flex-1">
                        <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
                        <p className="text-gray-500 font-medium">{profile.role}</p>
                    </div>

                    <div className="mb-2">
                        <Button className="bg-blue-800 hover:bg-blue-900 text-white shadow-sm">
                            Editar Perfil
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                        <Building2 size={18} className="text-blue-600" />
                        <div>
                            <p className="text-xs text-gray-400">Departamento</p>
                            <p className="font-medium">{profile.department}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                        <Mail size={18} className="text-blue-600" />
                        <div className="overflow-hidden">
                            <p className="text-xs text-gray-400">Email</p>
                            <p className="font-medium truncate" title={profile.email}>{profile.email}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                        <MapPin size={18} className="text-blue-600" />
                        <div>
                            <p className="text-xs text-gray-400">Ubicación</p>
                            <p className="font-medium">{profile.location}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-gray-600 p-3 bg-gray-50 rounded-lg">
                        <Calendar size={18} className="text-blue-600" />
                        <div>
                            <p className="text-xs text-gray-400">Te uniste</p>
                            <p className="font-medium">Enero 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
