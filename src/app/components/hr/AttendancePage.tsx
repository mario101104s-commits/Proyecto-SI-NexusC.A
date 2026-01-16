import { Calendar, Clock, CheckCircle2, XCircle, AlertCircle, Filter, ChevronRight, MapPin } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function AttendancePage() {
    const logs = [
        { id: 1, employee: "Carlos Mendoza", time: "08:02 AM", status: "Puntual", shift: "Turno A", location: "Entrada Principal" },
        { id: 2, employee: "Ana Rivas", time: "08:15 AM", status: "Retraso", shift: "Turno A", location: "Entrada Principal" },
        { id: 3, employee: "Mario Sánchez", time: "07:55 AM", status: "Puntual", shift: "Turno B", location: "Almacén Valencia" },
        { id: 4, employee: "Lucía Torres", time: "--:--", status: "Ausente", shift: "Turno A", location: "N/A" },
        { id: 5, employee: "Roberto Gómez", time: "08:05 AM", status: "Puntual", shift: "Turno C", location: "Planta Industrial" },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight italic">Control de <span className="text-orange-600">Asistencia</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <Clock size={18} className="text-orange-500" />
                        Monitoreo biométrico y gestión de turnos en tiempo real
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-orange-100 flex items-center gap-2 border-none">
                        <Calendar size={20} />
                        Reporte Diario
                    </Button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <AttendanceStat label="Presentes" value="142" color="emerald" sub="92% de la plantilla" />
                <AttendanceStat label="Retrasos" value="08" color="orange" sub="Crítico: Turno A" />
                <AttendanceStat label="Ausentes" value="04" color="rose" sub="2 justificados" />
                <AttendanceStat label="Vacaciones" value="12" color="blue" sub="Próx. retorno: Lunes" />
            </div>

            {/* Attendance Log Table */}
            <div className="bg-white rounded-[3.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 overflow-hidden">
                <div className="p-10 border-b border-gray-50 flex justify-between items-center">
                    <h4 className="text-xl font-black text-gray-800 tracking-tight">Registro General del Día</h4>
                    <div className="flex gap-2">
                        <Button variant="ghost" className="text-gray-400 font-black text-xs uppercase tracking-widest hover:bg-gray-50 rounded-xl">
                            Filtrar <Filter size={14} className="ml-2" />
                        </Button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50/50">
                            <tr>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Colaborador</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Hora Ingreso</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Estado</th>
                                <th className="text-left px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Ubicación</th>
                                <th className="text-right px-10 py-6 text-[10px] font-black text-gray-400 uppercase tracking-widest">Acción</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {logs.map((log) => (
                                <tr key={log.id} className="hover:bg-orange-50/30 transition-colors group">
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold">
                                                {log.employee.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-base font-black text-gray-900">{log.employee}</p>
                                                <p className="text-[10px] font-bold text-gray-400 uppercase">{log.shift}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-10 py-8">
                                        <p className="text-sm font-black text-gray-800">{log.time}</p>
                                    </td>
                                    <td className="px-10 py-8">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border flex items-center gap-2 w-fit
                                            ${log.status === 'Puntual' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                                                log.status === 'Retraso' ? 'bg-amber-50 text-amber-600 border-amber-100' :
                                                    'bg-rose-50 text-rose-600 border-rose-100'}`}>
                                            {log.status === 'Puntual' ? <CheckCircle2 size={12} /> : log.status === 'Retraso' ? <AlertCircle size={12} /> : <XCircle size={12} />}
                                            {log.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-8">
                                        <div className="flex items-center gap-2 text-gray-500 font-bold text-xs">
                                            <MapPin size={14} className="text-gray-300" />
                                            {log.location}
                                        </div>
                                    </td>
                                    <td className="px-10 py-8 text-right">
                                        <button className="p-3 bg-gray-50 text-gray-400 hover:bg-orange-600 hover:text-white rounded-2xl transition-all shadow-sm">
                                            <ChevronRight size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function AttendanceStat({ label, value, color, sub }: any) {
    const accents: any = {
        emerald: 'text-emerald-600 bg-emerald-50 border-emerald-100',
        orange: 'text-orange-600 bg-orange-50 border-orange-100',
        rose: 'text-rose-600 bg-rose-50 border-rose-100',
        blue: 'text-blue-600 bg-blue-50 border-blue-100',
    };

    return (
        <div className={`bg-white p-8 rounded-[3rem] border shadow-xl shadow-gray-100/50 ${accents[color].split(' ')[2]}`}>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2">{label}</p>
            <h3 className={`text-4xl font-black tracking-tighter ${accents[color].split(' ')[0]}`}>{value}</h3>
            <p className="text-[10px] font-bold text-gray-400 mt-2">{sub}</p>
        </div>
    );
}
