import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

import DisaFullLogo from "@/assets/DisaFullLogo.svg?react";
import { SparklesCore } from "../ui/sparkles";

const HeroParallax = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={20}
        className="absolute inset-0 pointer-events-none"
        particleColor="#165573"
      />
      <div className="absolute inset-0 bg-grid opacity-70" />

      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -80]) }}
        animate={{
          x: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
        animate={{
          x: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          className="h-24 md:h-32 lg:h-40 xl:h-48 w-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <DisaFullLogo className="h-full w-auto" aria-label="DiSa Software" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
      >
        <span className="text-muted-foreground text-sm">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroParallax;
