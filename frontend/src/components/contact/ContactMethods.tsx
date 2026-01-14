import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { company } from "../../config/company";
import { GlareCard } from "@/components/ui/glare-card"; // ajusta ruta real
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
// Definimos los métodos de contacto dinámicamente
const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: company.contact.email,
    href: `mailto:${company.contact.email}`,
    gradient: "from-primary to-accent",
  },
  {
    icon: Phone,
    title: "Teléfono Principal",
    value: company.contact.phone1,
    href: `tel:${company.contact.phone1.replace(/\s/g, "")}`,
    gradient: "from-accent to-secondary",
  },
  {
    icon: Phone,
    title: "Teléfono Secundario",
    value: company.contact.phone2,
    href: `tel:${company.contact.phone2.replace(/\s/g, "")}`,
    gradient: "from-secondary to-accent", // Gradiente invertido para variedad
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: company.contact.address,
    gradient: "from-secondary to-primary",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "Enviar Mensaje",
    href: company.contact.whatsapp,
    gradient: "from-primary via-accent to-secondary",
  },
];

export const ContactMethods = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        {/* Usamos Flexbox con wrap para que se acomoden centrados sin importar si son 4 o 5 elementos */}
        <div className="flex flex-wrap justify-center gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative block w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-[280px]"
            >
              <GlareCard className="relative select-text p-6  bg-gradient-card border border-border/50 group-hover:border-primary/30 transition-all duration-300 overflow-hidden h-full">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10  blur-2xl translate-x-8 -translate-y-8" />
                </div>

                {/* Number Badge */}
                <div className="absolute top-3 right-3 w-8 h-8  bg-muted/50 flex items-center justify-center">
                  <span className="text-xs font-sora font-bold text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} p-[1px] mb-4`}
                >
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <method.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="font-sora text-sm font-medium text-muted-foreground mb-1">
                  {method.title}
                </h3>
                <p className="font-inter text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {method.value}
                </p>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </GlareCard>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
