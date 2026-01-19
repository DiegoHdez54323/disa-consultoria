import {
  ArrowRight,
  Terminal,
  CheckCircle2,
  Server,
  Database,
  Activity,
  Lock,
  Globe,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const EnterpriseCtaReact = () => {
  // Simulación de escritura de código
  const [codeLine, setCodeLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeLine((prev) => (prev < 4 ? prev + 1 : 0));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const benefits = [
    "Arquitectura Microservicios (Kubernetes)",
    "Auditoría y Logs en Tiempo Real",
    "Integración con Legacy (SAP/Oracle)",
  ];

  const specs = [
    { icon: Lock, label: "Seguridad", value: "AES-256 & SSO" },
    { icon: Globe, label: "Infraestructura", value: "Multi-Cloud Ready" },
    { icon: Layers, label: "Escalabilidad", value: "Auto-Scaling" },
  ];

  return (
    <div className="relative mb-6 mx-4 md:mx-0 overflow-hidden rounded-4xl border border-emerald-500/20 bg-card/40 backdrop-blur-md group">
      {/* Fondo Animado Sutil */}
      <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-cyan-500/5 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 animate-pulse" />

      <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        {/* --- IZQUIERDA: Contenido Principal --- */}
        <div className="flex-1 text-left">
          {/* Badge Superior */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-5">
            <Server size={12} />
            <span>Enterprise Grade Solutions</span>
          </div>

          <h4 className="font-orbitron text-2xl sm:text-[28px] md:text-3xl font-bold text-white mb-4 leading-tight">
            <span className="block">Ingeniería de Software para</span>{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400 block sm:inline">
              Operaciones Críticas
            </span>
          </h4>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-lg">
            Desarrollamos el núcleo digital de tu empresa. Desde{" "}
            <strong>ERPs modulares</strong> hasta{" "}
            <strong>CRMs predictivos</strong>, creamos software que se adapta a
            tus reglas de negocio, y no al revés.
          </p>

          {/* Feature 1: Lista de Beneficios Técnicos */}
          <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 border-l-2 border-white/5 pl-4">
            {benefits.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-sm text-gray-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          {/* Feature 2: Grid de Specs (Nueva Información) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
            {specs.map((spec, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/5 rounded-lg p-3 text-center hover:bg-white/10 transition-colors"
              >
                <spec.icon className="w-5 h-5 text-emerald-400 mx-auto mb-2" />
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">
                  {spec.label}
                </div>
                <div className="text-xs font-bold text-white">{spec.value}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contacto"
              className="font-orbitron inline-flex w-full sm:w-auto justify-center items-center gap-2 py-4 px-6 rounded-xl bg-linear-to-r from-emerald-600 to-emerald-500 text-white text-base font-bold hover:shadow-lg hover:shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
            >
              Solicitar Consultoría Técnica
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* --- DERECHA: Terminal & Métricas --- */}
        <div className="hidden lg:block relative w-full max-w-[320px] shrink-0 pt-4">
          {/* Marco del Terminal */}
          <div className="bg-[#0f172a] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative z-10">
            {/* Header del Terminal */}
            <div className="bg-white/5 px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <div className="ml-auto text-[10px] text-white/30 font-mono flex items-center gap-1">
                <Terminal size={10} />
                root@server:~
              </div>
            </div>

            {/* Cuerpo del Terminal (Código Animado) */}
            <div className="p-4 font-mono text-[11px] h-40 flex flex-col space-y-2.5 bg-black/40">
              <div
                className={`transition-opacity duration-300 ${codeLine >= 0 ? "opacity-100" : "opacity-30"}`}
              >
                <span className="text-emerald-500">➜</span>{" "}
                <span className="text-cyan-300">docker-compose</span>{" "}
                <span className="text-white">up -d --build</span>
              </div>
              <div
                className={`transition-opacity duration-300 ${codeLine >= 1 ? "opacity-100" : "opacity-0"} text-gray-400 pl-4`}
              >
                Building module:{" "}
                <span className="text-yellow-200">ERP_Core</span>...{" "}
                <span className="text-green-400">Done (0.4s)</span>
              </div>
              <div
                className={`transition-opacity duration-300 ${codeLine >= 2 ? "opacity-100" : "opacity-0"} text-gray-400 pl-4`}
              >
                Building module:{" "}
                <span className="text-yellow-200">CRM_Sync</span>...{" "}
                <span className="text-green-400">Done (0.2s)</span>
              </div>
              <div
                className={`transition-opacity duration-300 ${codeLine >= 3 ? "opacity-100" : "opacity-0"} text-gray-400 pl-4`}
              >
                Connecting to <span className="text-blue-300">AWS_RDS</span>...{" "}
                <span className="text-green-400">Connected</span>
              </div>
              <div
                className={`transition-opacity duration-300 ${codeLine >= 4 ? "opacity-100" : "opacity-0"}`}
              >
                <span className="text-emerald-500 animate-pulse">_</span>
              </div>
            </div>
          </div>

          {/* Badge Flotante 1: Uptime */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-2 bg-card/90 backdrop-blur border border-emerald-500/30 p-3 rounded-lg shadow-xl flex items-center gap-3 z-20"
          >
            <div className="p-1.5 bg-emerald-500/20 rounded-md">
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground uppercase font-bold">
                SLA Uptime
              </div>
              <div className="text-xs font-black text-white">99.99%</div>
            </div>
          </motion.div>

          {/* Badge Flotante 2: Database (Nuevo) */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -top-4 -left-4 bg-card/90 backdrop-blur border border-cyan-500/30 p-3 rounded-lg shadow-xl flex items-center gap-3 z-20"
          >
            <div className="p-1.5 bg-cyan-500/20 rounded-md">
              <Database className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <div className="text-[10px] text-muted-foreground uppercase font-bold">
                Data Processed
              </div>
              <div className="text-xs font-black text-white">1M+ Req/s</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
