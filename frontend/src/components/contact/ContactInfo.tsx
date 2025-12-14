import { motion } from "framer-motion";
import { Linkedin, Twitter, Github } from "lucide-react";

export const ContactInfo = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const features = [
    {
      title: "Equipo Joven e Innovador",
      description: "Pensamos diferente y aportamos ideas frescas.",
      gradient: "from-primary to-accent",
    },
    {
      title: "Metodologías Ágiles",
      description: "Entregas incrementales y comunicación constante.",
      gradient: "from-accent to-secondary",
    },
    {
      title: "Tecnología de Vanguardia",
      description: "Usamos las herramientas más modernas del mercado.",
      gradient: "from-secondary to-primary",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-10"
    >
      <div>
        <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-4">
          ¿Por qué elegir <span className="text-gradient-primary">DiSa</span>?
        </h2>
        <p className="font-inter text-muted-foreground">
          Somos más que una agencia digital. Somos tu socio estratégico en la transformación digital.
        </p>
      </div>
      
      <div className="space-y-4">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative p-5 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
          >
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${feature.gradient} rounded-l-xl`} />
            <h3 className="font-sora font-semibold text-foreground mb-1 pl-3">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground pl-3">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      <div>
        <h3 className="font-sora text-sm font-semibold text-foreground mb-4">
          Síguenos en redes sociales
        </h3>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="group w-12 h-12 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
            >
              <social.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};