// src/components/services/ServiceCard3D.tsx
import React, { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
// Importamos TODOS los iconos para poder buscarlos por su nombre (string)
import * as LucideIcons from "lucide-react"; 

// Actualizamos la interfaz: el icono ahora es un string (texto)
interface ServiceProps {
  icon: string; // Cambio de LucideIcon a string
  title: string;
  subtitle?: string; // Opcional para coincidir con el tipo de Sanity
  description: string;
  features: string[];
  gradientIndex?: string; // Nombre del campo en Sanity
  gradientServicePage?: string; // Nombre del campo en Sanity
  number: number; // Cambio de string a number para coincidir con Sanity
}

export const ServiceCard3D = ({ service, index }: { service: ServiceProps; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // ... (mantenemos los hooks de movimiento existentes: x, y, rotateX, rotateY) ...
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-100, 100], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-10, 10]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  // RESOLVEMOS EL ICONO AQUÍ
  // Buscamos el componente dentro de LucideIcons usando el nombre que viene de Sanity
  // Si no encuentra el icono, usamos HelpCircle por defecto para evitar errores
  const IconComponent = (LucideIcons as any)[service.icon] || LucideIcons.HelpCircle;
  
  // Usamos el gradiente de Sanity o uno por defecto
  const gradientClass = service.gradientServicePage || service.gradientIndex || "from-primary to-secondary";

  return (
    <motion.div
      // ... (mantenemos refs y handlers existentes) ...
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative perspective-1000 h-full"
    >
      {/* Efecto de resplandor (Glow) */}
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${gradientClass} rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
      />
      
      {/* Tarjeta */}
      <div className="relative h-full bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl overflow-hidden">
        {/* Borde degradado animado */}
        <div className={`absolute inset-0 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
          <div className="absolute inset-[1px] bg-card rounded-3xl" />
        </div>
        
        {/* Contenido */}
        <div className="relative p-8 h-full flex flex-col" style={{ transform: "translateZ(50px)" }}>
          {/* Badge de número */}
          <div className="absolute top-6 right-6 font-orbitron text-6xl font-bold text-foreground/5 group-hover:text-primary/10 transition-colors duration-500 select-none">
            {/* Convertimos el número a string y agregamos un 0 al inicio si es necesario */}
            {service.number.toString().padStart(2, '0')}
          </div>
          
          {/* Contenedor del Icono */}
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientClass} p-[2px] mb-6`}
          >
            <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>
          </motion.div>
          
          {/* Sección de Título */}
          {service.subtitle && (
            <span className="font-inter text-xs uppercase tracking-widest text-primary/70 mb-2">
              {service.subtitle}
            </span>
          )}
          <h3 className="font-orbitron text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>
          <p className="font-inter text-muted-foreground mb-6 flex-grow">
            {service.description}
          </p>
          
          {/* Características (Features) */}
          {service.features && (
            <ul className="space-y-2 mb-6">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span className="font-inter text-foreground/70">{feature}</span>
                </li>
              ))}
            </ul>
          )}
          
          {/* CTA (Botón) */}
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 text-primary font-inter font-medium text-sm group/link"
          >
            <span className="relative">
              Más información
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover/link:w-full transition-all duration-300" />
            </span>
            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
        
        {/* Efecto de brillo al hacer hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)",
          }}
        />
      </div>
    </motion.div>
  );
};