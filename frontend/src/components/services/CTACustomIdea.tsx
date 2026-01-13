import { ArrowRight, Sparkles, Lightbulb, MessageSquarePlus, Puzzle } from "lucide-react";
import { motion } from "framer-motion";

export const CustomIdeaCtaReact = () => {
  return (
    <div className="relative mb-6 mx-4 md:mx-0 overflow-hidden rounded-4xl border border-violet-500/20 bg-card/40 backdrop-blur-md group">

      {/* --- Fondos Ambientales --- */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 via-transparent to-fuchsia-500/5 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative z-10 p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 justify-between">

        {/* --- IZQUIERDA: Copywriting Persuasivo --- */}
        <div className="flex-1 text-left">

          <h4 className="font-orbitron text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
            ¿Tu idea se sale del <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-fuchsia-400">Molde Estándar?</span>
          </h4>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-md">
            No te preocupes si no encajas en una "caja". Somos expertos en traducir ideas complejas en software funcional. Si puedes imaginarlo, podemos construirlo.
          </p>

          <a href="/contacto?servicio=Custom-Idea" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold hover:shadow-lg hover:shadow-violet-500/25 transition-all transform hover:-translate-y-0.5 group-hover:scale-105">
            Cuéntanos tu Visión
            <MessageSquarePlus size={14} />
          </a>
        </div>

        {/* --- DERECHA: Animación Visual (Brainstorming) --- */}
        <div className="hidden md:flex relative w-48 h-48 shrink-0 items-center justify-center">

          {/* Círculo Giratorio */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-40 h-40 border border-white/5 rounded-full border-dashed"
          />

          {/* Icono Central Brillante */}
          <div className="relative w-20 h-20 bg-card border border-violet-500/30 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-xl z-20">
            <Lightbulb className="w-10 h-10 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />

            {/* Destello animado sobre el foco */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-yellow-400/20 rounded-2xl blur-xl -z-10"
            />
          </div>

          {/* Elementos Flotantes (Satélites) */}
          <motion.div
            animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-2 bg-black/40 p-2 rounded-lg border border-white/10 backdrop-blur-sm"
          >
            <Puzzle className="w-5 h-5 text-fuchsia-400" />
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-4 left-0 bg-black/40 p-2 rounded-lg border border-white/10 backdrop-blur-sm"
          >
            <ArrowRight className="w-5 h-5 text-violet-400 -rotate-45" />
          </motion.div>

        </div>

      </div>
    </div>
  );
};