import { useState } from 'react';
import { User, Lock, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import nexusLogo from '@/assets/nexus_logo.png';

// Mock users - En producción estos vendrían de la base de datos
const MOCK_USERS = [
  { username: 'director@nexus.com', password: 'director123' },
  { username: 'gerentegeneral@nexus.com', password: 'gerente123' },
  { username: 'gerente.operaciones@nexus.com', password: 'gerente123' },
  { username: 'supervisor.almacen@nexus.com', password: 'supervisor123' },
  { username: 'gerente.ventas@nexus.com', password: 'gerente123' },
  { username: 'gerente.finanzas@nexus.com', password: 'gerente123' },
  { username: 'gerente.rrhh@nexus.com', password: 'gerente123' },
  { username: 'vendedor@nexus.com', password: 'vendedor123' },
  { username: 'asistente@nexus.com', password: 'asistente123' },
  { username: 'trabajador@nexus.com', password: 'trabajador123' },
];

const DEMO_USERS = [
  { email: 'director@nexus.com', pass: 'director123', label: 'Director', level: 'Estratégico' },
  { email: 'gerentegeneral@nexus.com', pass: 'gerente123', label: 'Gerente General', level: 'Estratégico' },
  { email: 'gerente.operaciones@nexus.com', pass: 'gerente123', label: 'Gerente Operaciones', level: 'Táctico' },
  { email: 'supervisor.almacen@nexus.com', pass: 'supervisor123', label: 'Supervisor Almacén', level: 'Táctico' },
  { email: 'gerente.ventas@nexus.com', pass: 'gerente123', label: 'Gerente Ventas', level: 'Táctico' },
  { email: 'gerente.finanzas@nexus.com', pass: 'gerente123', label: 'Gerente Finanzas', level: 'Táctico' },
  { email: 'gerente.rrhh@nexus.com', pass: 'gerente123', label: 'Gerente RRHH', level: 'Táctico' },
  { email: 'vendedor@nexus.com', pass: 'vendedor123', label: 'Vendedor', level: 'Operativo' },
  { email: 'asistente@nexus.com', pass: 'asistente123', label: 'Asistente', level: 'Operativo' },
  { email: 'trabajador@nexus.com', pass: 'trabajador123', label: 'Trabajador', level: 'Operativo' },
];

const SIA_SYSTEMS = [
  { name: 'LMS', fullName: 'Learning Management System', role: 'Gerente RRHH', email: 'gerente.rrhh@nexus.com', pass: 'gerente123', color: 'rose' },
  { name: 'CRM', fullName: 'Customer Relationship Management', role: 'Gerente Ventas', email: 'gerente.ventas@nexus.com', pass: 'gerente123', color: 'indigo' },
  { name: 'ERP', fullName: 'Enterprise Resource Planning', role: 'Gerente Finanzas', email: 'gerente.finanzas@nexus.com', pass: 'gerente123', color: 'emerald' },
  { name: 'SCM/WMS', fullName: 'Supply Chain Management', role: 'Gerente Operaciones', email: 'gerente.operaciones@nexus.com', pass: 'gerente123', color: 'blue' },
  { name: 'BI', fullName: 'Business Intelligence', role: 'Gerente General', email: 'gerentegeneral@nexus.com', pass: 'gerente123', color: 'purple' },
  { name: 'BSC', fullName: 'Balanced Scorecard', role: 'Director', email: 'director@nexus.com', pass: 'director123', color: 'slate' },
  { name: 'WMS', fullName: 'Inventory Control', role: 'Supervisor Almacén', email: 'supervisor.almacen@nexus.com', pass: 'supervisor123', color: 'amber' },
  { name: 'SFA', fullName: 'Sales Force Automation', role: 'Vendedor', email: 'vendedor@nexus.com', pass: 'vendedor123', color: 'sky' },
  { name: 'ECM/OA', fullName: 'Office Automation', role: 'Asistente', email: 'asistente@nexus.com', pass: 'asistente123', color: 'violet' },
  { name: 'Portal', fullName: 'Employee Self-Service', role: 'Trabajador', email: 'trabajador@nexus.com', pass: 'trabajador123', color: 'teal' },
];

interface LoginPageProps {
  onLoginSuccess: (username: string) => void;
}

export function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleQuickAccess = (email: string, pass: string) => {
    setUsername(email);
    setPassword(pass);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim()) {
      setError('Por favor ingrese su usuario');
      return;
    }

    if (!password.trim()) {
      setError('Por favor ingrese su contraseña');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const user = MOCK_USERS.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        onLoginSuccess(username);
      } else {
        setError('Usuario o contraseña incorrectos');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-slate-50 p-4 font-sans">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      </div>

      <div className="relative w-full max-w-[95rem] grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch justify-center">
        {/* Sección SI (Izquierda) */}
        <div className="hidden lg:col-span-3 lg:block h-full">
          <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] shadow-2xl p-8 h-full flex flex-col border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-700" />

            <div className="relative z-10 space-y-6">
              <div>
                <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.25em] mb-3 px-1">Sistemas de Información</h2>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight italic px-1">SI <span className="text-blue-600">Nexus</span></h3>
              </div>

              <div className="space-y-3 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                {SIA_SYSTEMS.map((sia) => (
                  <button
                    key={sia.name}
                    onClick={() => handleQuickAccess(sia.email, sia.pass)}
                    className="w-full text-left p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all group/item active:scale-[0.98]"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{sia.name}</span>
                      <div className={`w-1.5 h-1.5 rounded-full bg-${sia.color}-500 shadow-sm`} />
                    </div>
                    <p className="text-sm font-black text-slate-800 group-hover/item:text-blue-700 transition-colors uppercase italic">{sia.role}</p>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tight truncate">{sia.fullName}</p>
                  </button>
                ))}
              </div>

              <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50 mt-auto">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-relaxed italic">
                  Núcleo ERP Integrado • Visualización de Sistemas Aplicados por Proceso Organizacional.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección Login (Centro) */}
        <div className="w-full lg:col-span-4 flex items-center">
          <div className="w-full bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-12 border border-gray-100 relative overflow-hidden h-full flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600" />

            <div className="flex justify-center mb-10">
              <img src={nexusLogo} alt="NEXUS C.A." className="h-24 w-auto object-contain" />
            </div>

            <div className="text-center mb-10">
              <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase italic mb-3">Acceso al <span className="text-blue-700">Sistema</span></h1>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Autenticación Segura ERP</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Credencial de Usuario</Label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                    <User size={20} />
                  </div>
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="usuario.erp@nexus.com"
                    className="pl-14 h-16 bg-slate-50/50 border-slate-100 rounded-2xl font-black text-slate-900 focus:ring-blue-600 transition-all placeholder:text-slate-300"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Clave de Seguridad</Label>
                <div className="relative">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Lock size={20} />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-14 h-16 bg-slate-50/50 border-slate-100 rounded-2xl font-black text-slate-900 focus:ring-blue-600 transition-all placeholder:text-slate-300"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-rose-600 bg-rose-50 p-5 rounded-2xl border border-rose-100 animate-in fade-in slide-in-from-top-1">
                  <AlertCircle size={18} />
                  <span>{error}</span>
                </div>
              )}

              <Button type="submit" className="w-full h-16 bg-blue-700 hover:bg-slate-900 text-white font-black text-xs uppercase tracking-[0.3em] rounded-2xl shadow-2xl shadow-blue-100 transition-all active:scale-95 group" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" size={20} /> : <span className="flex items-center justify-center gap-2">Iniciar Sesión <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping" /></span>}
              </Button>

              <div className="text-center text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] pt-6">
                Nexus Portal • Integrated Security
              </div>
            </form>
          </div>
        </div>

        {/* Sección Panel Demo (Derecha) */}
        <div className="w-full lg:col-span-5">
          <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] shadow-2xl border border-white/50 h-full flex flex-col overflow-hidden max-h-[680px]">
            <div className="p-8 border-b border-gray-100 bg-gray-50/30">
              <h2 className="text-xl font-black text-gray-900 flex items-center gap-3 tracking-tight italic uppercase">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
                Acceso Dirigido
              </h2>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-2 px-1">
                Estructura organizacional por jerarquía táctica
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-8 scrollbar-thin scrollbar-thumb-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DEMO_USERS.map((user) => (
                  <button
                    key={user.email}
                    onClick={() => handleQuickAccess(user.email, user.pass)}
                    className="flex flex-col text-left p-5 rounded-[1.5rem] border border-gray-50 bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all group relative overflow-hidden active:scale-[0.98]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[8px] font-black px-3 py-1.5 rounded-xl uppercase tracking-widest ${user.level === 'Estratégico' ? 'bg-purple-100 text-purple-700' :
                        user.level === 'Táctico' ? 'bg-blue-100 text-blue-700' :
                          'bg-emerald-100 text-emerald-700'
                        }`}>
                        {user.level}
                      </span>
                      <span className="text-[9px] text-gray-300 group-hover:text-blue-500 font-black">
                        {user.pass}
                      </span>
                    </div>
                    <span className="text-base font-black text-gray-900 group-hover:text-blue-800 truncate uppercase tracking-tight line-clamp-1 italic">
                      {user.label}
                    </span>
                    <span className="text-[10px] font-black text-gray-400 truncate mt-1">{user.email}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 bg-slate-900 text-white text-[9px] font-black text-center uppercase tracking-widest">
              🛡️ Entorno seguro de alto rendimiento • v2.4.0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}