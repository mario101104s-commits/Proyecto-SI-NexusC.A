import { ShieldCheck } from 'lucide-react';
import { MOCK_PROFILE, MOCK_ACTIVITY } from './types';
import { ProfileHeader } from './ProfileHeader';
import { ActivityLog } from './ActivityLog';
import { SettingsForm } from './SettingsForm';

export function ProfilePage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-2xl font-semibold text-gray-800">Mi Perfil</h1>
                <div className="flex items-center gap-2 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                    <ShieldCheck size={16} />
                    <span className="font-medium">Cuenta Verificada</span>
                </div>
            </div>

            {/* Header Info */}
            <ProfileHeader profile={MOCK_PROFILE} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Settings (2/3 width) */}
                <div className="lg:col-span-2">
                    <SettingsForm />
                </div>

                {/* Right Column: Activity (1/3 width) */}
                <div>
                    <ActivityLog items={MOCK_ACTIVITY} />
                </div>
            </div>
        </div>
    );
}
