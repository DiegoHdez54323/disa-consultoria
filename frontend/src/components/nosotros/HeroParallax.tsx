import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

import DisaFullLogo from "@/assets/DisaFullLogo.svg";
import { TechCircle } from "./TechCircle";

const HeroParallax = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const logoY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const circleLeftY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const circleLeftX = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const circleLeftOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0]);
  const circleLeftScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  const circleRightY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const circleRightX = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const circleRightOpacity = useTransform(
    scrollYProgress,
    [0, 0.5],
    [0.6, 0],
  );
  const circleRightScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  const circleMobileY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const circleMobileOpacity = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0.4, 0],
  );

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-grid opacity-30" />

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
        style={{
          y: circleLeftY,
          x: circleLeftX,
          opacity: circleLeftOpacity,
          scale: circleLeftScale,
        }}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute left-[-5%] md:left-[5%] top-1/2 -translate-y-1/2 w-72 md:w-96 lg:w-[500px] h-72 md:h-96 lg:h-[500px] pointer-events-none hidden md:block"
      >
        <TechCircle speed="slow" />
      </motion.div>

      <motion.div
        style={{
          y: circleRightY,
          x: circleRightX,
          opacity: circleRightOpacity,
          scale: circleRightScale,
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.6, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-[-5%] md:right-[5%] top-1/2 -translate-y-1/2 w-72 md:w-96 lg:w-[450px] h-72 md:h-96 lg:h-[450px] pointer-events-none hidden md:block"
      >
        <TechCircle reverse speed="fast" />
      </motion.div>

      <motion.div
        style={{
          y: circleMobileY,
          opacity: circleMobileOpacity,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none md:hidden"
      >
        <TechCircle speed="normal" />
      </motion.div>

      <motion.div
        style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.img
          src={DisaFullLogo}
          alt="DiSa Software"
          className="h-24 md:h-32 lg:h-40 xl:h-48 w-auto"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </motion.div>

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/60"
          style={{
            left: `${15 + (i % 4) * 25}%`,
            top: `${20 + Math.floor(i / 4) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.line
          x1="20%"
          y1="30%"
          x2="80%"
          y2="70%"
          stroke="hsl(185 100% 50%)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1 }}
        />
        <motion.line
          x1="80%"
          y1="30%"
          x2="20%"
          y2="70%"
          stroke="hsl(270 100% 65%)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </svg>

      <motion.div
        className="absolute top-24 left-8 md:left-16 w-16 h-16 border border-primary/20 rounded-lg"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.5, rotate: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
      />
      <motion.div
        className="absolute top-32 right-8 md:right-20 w-8 h-8 bg-secondary/10 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -70]) }}
      />
      <motion.div
        className="absolute bottom-32 left-12 md:left-24 w-6 h-6 border-2 border-accent/30 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
      />
      <motion.div
        className="absolute bottom-40 right-12 md:right-16 w-12 h-12 border border-dashed border-primary/20 rounded-lg rotate-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1.4 }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -60]) }}
      />

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
