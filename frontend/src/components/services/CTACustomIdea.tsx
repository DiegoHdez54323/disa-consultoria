import { ArrowRight, Lightbulb, Puzzle } from "lucide-react";
import { motion } from "framer-motion";
import { AuroraText } from "../ui/aurora-text";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export const CustomIdeaCtaReact = () => {
  return (
    <div className="relative mb-6 mx-0 overflow-hidden rounded-3xl sm:rounded-4xl border backdrop-blur-md">
      {/* --- Fondos Ambientales --- */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 via-transparent to-fuchsia-500/5 transition-opacity duration-700" />

      <div className="relative z-10 p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8 lg:gap-10 justify-between">
        {/* --- IZQUIERDA: Copywriting Persuasivo --- */}
        <div className="flex-1 text-center lg:text-left w-full">
          <h4 className="font-orbitron text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
            ¿Tu idea se sale del{" "}
            <span className="block lg:inline">
              <span className="text-transparent bg-clip-text ">
                <AuroraText>Molde Estándar?</AuroraText>
              </span>
            </span>
          </h4>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-none lg:max-w-md mx-auto lg:mx-0">
            No te preocupes si no encajas en una "caja". Somos expertos en
            traducir ideas complejas en software funcional. Si puedes
            imaginarlo, podemos construirlo.
          </p>

          <a href="/contacto" className="inline-block w-full sm:w-auto">
            <InteractiveHoverButton className="font-orbitron inline-flex  sm:w-auto justify-center items-center gap-2 py-4 px-8 md:px-12 rounded-xl text-white text-base font-bold bg-linear-to-r from-violet-600 to-fuchsia-600">
              Solicitar Cotización
            </InteractiveHoverButton>
          </a>
        </div>

        {/* --- DERECHA: Animación Visual (Brainstorming) --- */}
        <div className="hidden lg:flex relative w-40 h-40 xl:w-48 xl:h-48 shrink-0 items-center justify-center">
          {/* Círculo Giratorio */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-32 h-32 xl:w-40 xl:h-40 border border-white/5 rounded-full border-dashed"
          />

          {/* Icono Central Brillante */}
          <div className="relative w-16 h-16 xl:w-20 xl:h-20 bg-card border border-violet-500/30 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-xl z-20">
            <Lightbulb className="w-8 h-8 xl:w-10 xl:h-10 text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />

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
            className="absolute top-1 right-1 xl:top-0 xl:right-2 bg-black/40 p-2 rounded-lg border border-white/10 backdrop-blur-sm"
          >
            <Puzzle className="w-5 h-5 text-fuchsia-400" />
          </motion.div>

          <motion.div
            animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-3 left-1 xl:bottom-4 xl:left-0 bg-black/40 p-2 rounded-lg border border-white/10 backdrop-blur-sm"
          >
            <ArrowRight className="w-5 h-5 text-violet-400 -rotate-45" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
