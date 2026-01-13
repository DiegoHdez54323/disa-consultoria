import React from "react";
import {
  ArrowRight,
  RefreshCw,
  Smartphone,
  TrendingUp,
  MonitorPlay,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraText } from "@/components/ui/aurora-text";

export const RedesignModalContent = () => {
  return (
    <div className="relative w-full overflow-hidden rounded-[2.5rem] bg-slate-950/10 border border-white/10 p-1  group">
      {/* --- Fondo Envolvente (Glows animados) --- */}
      <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -top-[50%] -left-[20%] w-[80%] h-[80%] bg-blue-600/5 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] bg-purple-600/5 blur-[90px] rounded-full mix-blend-screen pointer-events-none" />
        {/* Borde sutil brillante al hacer hover */}
        <div className="absolute inset-0 rounded-[2.5rem] border border-white/5 group-hover:border-white/10 transition-colors pointer-events-none" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 px-6 py-8 sm:p-8 md:p-10">
        {/* --- Lado Izquierdo: Copy de Venta (Pain points del cliente) --- */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* Badge: Llamada de atención */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <RefreshCw className="w-3 h-3 text-blue-400 animate-spin-slow" />
            <span className="text-[10px] font-bold tracking-[0.2em] text-blue-300 uppercase font-orbitron">
              ¿Tu web actual no convierte?
            </span>
          </div>

          {/* Título Persuasivo */}
          <h2 className="text-4xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] font-orbitron">
            <span className="block sm:block">Moderniza tu</span>{" "}
            <AuroraText className="text-4xl md:text-4xl lg:text-5xl block sm:inline">
              Presencia Digital
            </AuroraText>
          </h2>

          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-medium">
            Un sitio web obsoleto te hace perder clientes. Transformamos tu
            página actual en una plataforma moderna, rápida y optimizada para
            vender más.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="/contacto" className="w-full sm:w-auto">
              <Button className="w-full h-auto py-4 px-8 bg-white text-slate-950 hover:bg-blue-50 hover:text-blue-900 font-bold font-orbitron rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all hover:scale-105 border-2 border-transparent hover:border-blue-200">
                Auditoría Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* --- Lado Derecho: Beneficios del Rediseño (Grid Bento) --- */}
        <div className="flex-1 w-full max-w-lg">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {/* Beneficio 1: Estética Visual */}
            <div className="p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-blue-500/30 transition-all duration-300 group/card">
              <div className="mb-3 p-3 w-fit rounded-2xl bg-blue-500/10 text-blue-400 group-hover/card:scale-110 transition-transform">
                <MonitorPlay className="w-6 h-6" />
              </div>
              <h4 className="font-orbitron font-bold text-white text-sm md:text-base mb-1">
                Impacto Visual
              </h4>
              <p className="text-[11px] md:text-xs text-slate-400 leading-snug">
                Diseño UI/UX de vanguardia que genera confianza inmediata.
              </p>
            </div>

            {/* Beneficio 2: Conversión */}
            <div className="p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-green-500/30 transition-all duration-300 group/card">
              <div className="mb-3 p-3 w-fit rounded-2xl bg-green-500/10 text-green-400 group-hover/card:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="font-orbitron font-bold text-white text-sm md:text-base mb-1">
                Más Ventas
              </h4>
              <p className="text-[11px] md:text-xs text-slate-400 leading-snug">
                Estructuras optimizadas para convertir visitantes en leads.
              </p>
            </div>

            {/* Beneficio 3: Full Mobile (Ancho completo) */}
            <div className="col-span-2 p-5 rounded-3xl bg-linear-to-r from-white/5 to-transparent border border-white/10 hover:border-purple-500/30 transition-all duration-300 group/card flex items-center gap-4">
              <div className="shrink-0 p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover/card:rotate-12 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-orbitron font-bold text-white text-sm md:text-base mb-1">
                  100% Adaptable
                </h4>
                <p className="text-[11px] md:text-xs text-slate-400">
                  Tu web se verá perfecta en cualquier dispositivo móvil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
