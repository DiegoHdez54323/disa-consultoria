import { motion } from "framer-motion";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageSquare, ArrowRight } from "lucide-react";
import { company } from "../../config/company";
import type { MouseEvent } from "react";
import { GlareCard } from "@/components/ui/glare-card"; // ajusta ruta real

// Definimos los métodos de contacto dinámicamente
const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: company.contact.email,

    gradient: "from-primary to-accent",
    copyValue: company.contact.email,
  },
  {
    icon: Phone,
    title: "Teléfono Principal",
    value: company.contact.phone1,

    gradient: "from-accent to-secondary",
    copyValue: company.contact.phone1,
  },
  {
    icon: Phone,
    title: "Teléfono Secundario",
    value: company.contact.phone2,

    gradient: "from-secondary to-accent",
    copyValue: company.contact.phone2,
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
  const handleCopy = async (
    event: MouseEvent<HTMLAnchorElement>,
    value?: string,
    title?: string
  ) => {
    // Si no hay valor para copiar, no interceptes: deja navegar normal (href)
    if (!value) return;

    event.preventDefault();
    event.stopPropagation();

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "absolute";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      toast.success(`${title ?? "Contenido"} copiado`, {
        description: value,
        className: "!bg-slate-800 text-primary-foreground !border-primary/40",
      });
    } catch {
      toast.error("No se pudo copiar", {
        description: "Intenta de nuevo o copia manualmente.",
      });
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        {/* Usamos Flexbox con wrap para que se acomoden centrados sin importar si son 4 o 5 elementos */}
        <div className="flex flex-wrap justify-center gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              draggable={false}
              onClick={(event) =>
                void handleCopy(event, method.copyValue, method.title)
              }
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="cursor-pointer group relative block w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] min-w-[280px]"
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
