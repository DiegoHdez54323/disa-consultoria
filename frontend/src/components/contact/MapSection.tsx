import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export const MapSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-border/50"
        >
          <div className="relative h-[400px] bg-gradient-card">
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-sora text-2xl font-bold text-foreground mb-2">
                  Ciudad de México, México
                </h3>
                <p className="text-muted-foreground">
                  Trabajamos de forma remota con clientes en todo el mundo
                </p>
              </div>
            </div>
            
            {/* Elementos decorativos animados */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-primary/50"
            />
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-accent/50"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};