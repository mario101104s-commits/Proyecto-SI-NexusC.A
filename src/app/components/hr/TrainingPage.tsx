import { GraduationCap, PlayCircle, CheckCircle2, Trophy, Clock, ChevronRight, BookOpen } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function TrainingPage() {
    const courses = [
        { id: 1, title: "Liderazgo en Tiempos de Cambio", category: "Soft Skills", progress: 85, instructor: "Elena García", participants: 28 },
        { id: 2, title: "Seguridad Industrial 2024", category: "Compliance", progress: 100, instructor: "Ricardo Silva", participants: 124 },
        { id: 3, title: "Venta Consultiva B2B", category: "Comercial", progress: 42, instructor: "Carlos Mendoza", participants: 15 },
        { id: 4, title: "Excel Avanzado para Finanzas", category: "Herramientas", progress: 12, instructor: "Ana Luna", participants: 10 },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-5xl font-black text-gray-900 tracking-tight">Nexus <span className="text-rose-600">Academy</span></h1>
                    <p className="text-gray-500 font-bold mt-2 flex items-center gap-2">
                        <GraduationCap size={18} className="text-rose-500" />
                        Capacitación continua y desarrollo de carrera organizacional
                    </p>
                </div>
                <div className="flex gap-3">
                    <Button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-6 rounded-2xl font-black transition-all shadow-xl shadow-rose-100 flex items-center gap-2">
                        <BookOpen size={20} />
                        Nuevo Curso
                    </Button>
                </div>
            </div>

            {/* Featured Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatBox label="Horas Formación" value="1,240" icon={<Clock size={20} />} color="indigo" />
                <StatBox label="Cursos Completos" value="45" icon={<CheckCircle2 size={20} />} color="emerald" />
                <StatBox label="Puntuación Promedio" value="4.9" icon={<Trophy size={20} />} color="amber" />
                <StatBox label="Activos en Planta" value="86%" icon={<PlayCircle size={20} />} color="rose" />
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {courses.map((course) => (
                    <div key={course.id} className="bg-white p-10 rounded-[3.5rem] shadow-xl shadow-gray-100/50 border border-gray-100 flex flex-col justify-between group hover:border-rose-200 transition-all">
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-4 py-1.5 bg-gray-50 text-gray-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-gray-100 group-hover:bg-rose-50 group-hover:text-rose-600 group-hover:border-rose-100 transition-all">
                                    {course.category}
                                </span>
                                {course.progress === 100 && <CheckCircle2 size={20} className="text-emerald-500" />}
                            </div>
                            <h3 className="text-3xl font-black text-gray-900 group-hover:text-rose-600 transition-colors tracking-tight leading-tight">
                                {course.title}
                            </h3>
                            <p className="text-gray-400 font-bold text-sm mt-3">Instructor: {course.instructor} · {course.participants} inscritos</p>
                        </div>

                        <div className="mt-10 space-y-4">
                            <div className="flex justify-between text-xs font-black">
                                <p className="text-gray-400 uppercase tracking-widest">Progreso del Grupo</p>
                                <p className="text-gray-900">{course.progress}%</p>
                            </div>
                            <div className="w-full bg-gray-100 h-4 rounded-full overflow-hidden border border-gray-50">
                                <div
                                    className={`h-full rounded-full transition-all duration-1000 ${course.progress === 100 ? 'bg-emerald-500' : 'bg-rose-600'}`}
                                    style={{ width: `${course.progress}%` }}
                                />
                            </div>
                            <div className="flex justify-end pt-4">
                                <button className="flex items-center gap-2 text-sm font-black text-rose-600 hover:gap-3 transition-all">
                                    Ver Detalle del Curso
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function StatBox({ label, value, icon, color }: any) {
    const colors: any = {
        indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
        emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
        amber: "bg-amber-50 text-amber-600 border-amber-100",
        rose: "bg-rose-50 text-rose-600 border-rose-100",
    };

    return (
        <div className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-gray-100">
            <div className={`w-12 h-12 rounded-2xl ${colors[color]} flex items-center justify-center mb-4`}>
                {icon}
            </div>
            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">{label}</p>
            <h4 className="text-2xl font-black text-gray-900">{value}</h4>
        </div>
    );
}
