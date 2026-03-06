import { motion } from "framer-motion";

const links = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#insights" },
  { label: "Chrome Extension", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 border-t border-border relative overflow-hidden"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent pointer-events-none" />

      <div className="section-padding max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground font-body">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="hover:text-foreground transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </div>
          {/* Copyright removed */}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
