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

      <div className="relative w-full max-w-5xl flex flex-col lg:flex-row gap-8 items-start justify-center">
        {/* Sección Login */}
        <div className="w-full lg:max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100">
            <div className="flex justify-center mb-6">
              <img src={nexusLogo} alt="NEXUS C.A." className="h-20 w-auto object-contain" />
            </div>

            <div className="text-center mb-8">
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">Acceso al Sistema</h1>
              <p className="text-sm text-gray-500">Ingrese sus credenciales corporativas</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="username">Correo Electrónico</Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <User size={18} />
                  </div>
                  <Input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="correo@nexus.com"
                    className="pl-10 h-11"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Lock size={18} />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10 h-11"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 animate-in fade-in slide-in-from-top-1">
                  <AlertCircle size={16} />
                  <span>{error}</span>
                </div>
              )}

              <Button type="submit" className="w-full h-11 bg-blue-800 hover:bg-blue-900 text-white font-medium shadow-md" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" size={18} /> : 'Ingresar'}
              </Button>

              <div className="text-center text-xs text-gray-400 pt-2">
                © 2026 NEXUS C.A. Todos los derechos reservados
              </div>
            </form>
          </div>
        </div>

        {/* Sección Panel Demo */}
        <div className="w-full lg:flex-1">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col overflow-hidden max-h-[640px]">
            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
              <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                Acceso rápido para demostración
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Haz clic en un usuario para autocompletar el formulario
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DEMO_USERS.map((user) => (
                  <button
                    key={user.email}
                    onClick={() => handleQuickAccess(user.email, user.pass)}
                    className="flex flex-col text-left p-4 rounded-xl border border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all group relative overflow-hidden active:scale-[0.98]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                        user.level === 'Estratégico' ? 'bg-purple-100 text-purple-700' :
                        user.level === 'Táctico' ? 'bg-blue-100 text-blue-700' :
                        'bg-emerald-100 text-emerald-700'
                      }`}>
                        {user.level}
                      </span>
                      <span className="text-[10px] text-gray-400 group-hover:text-blue-500 font-mono">
                        {user.pass}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-800 truncate">
                      {user.label}
                    </span>
                    <span className="text-xs text-gray-500 truncate">{user.email}</span>
                    
                    <div className="absolute bottom-1 right-2 text-[10px] font-medium text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Usar usuario →
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-blue-800 text-white text-xs text-center">
              <p className="font-medium">
                🛡️ Modo demostración: estos usuarios tienen permisos diferentes según su rol.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}