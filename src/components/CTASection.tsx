import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import glassOrbBlue from "@/assets/glass-orb-blue.png";
import glassCrystalViolet from "@/assets/glass-crystal-violet.png";

const CTASection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.05, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -4]);
  const bgY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  // Floating shapes
  const floatY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const floatRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/20 via-background to-secondary/30" style={{ perspective: 1000 }}>
      {/* Animated blobs */}
      <motion.div className="colored-blob w-[600px] h-[600px] bg-primary/8 top-[-200px] left-[50%] -translate-x-1/2" style={{ y: bgY }} />
      <motion.div className="colored-blob w-[400px] h-[400px] bg-violet-accent/6 bottom-[-100px] right-[-50px]" style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }} />
      <motion.div className="colored-blob w-[300px] h-[300px] bg-emerald/5 top-[20%] left-[-50px]" style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }} />

      {/* Floating 3D shapes */}
      <motion.img src={glassOrbBlue} alt="" className="absolute top-24 right-24 w-24 h-24 opacity-8 hidden lg:block" style={{ y: floatY1, rotate: floatRotate }} />
      <motion.img src={glassCrystalViolet} alt="" className="absolute bottom-24 left-20 w-20 h-20 opacity-8 hidden lg:block" style={{ y: floatY2, rotate: useTransform(scrollYProgress, [0, 1], [30, -90]) }} />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]), rotate: useTransform(scrollYProgress, [0, 1], [0, 45]) }} className="absolute top-[40%] left-[10%] w-14 h-14 rounded-2xl border border-primary/10 bg-primary/3 backdrop-blur-sm hidden lg:block" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }} className="absolute top-[30%] right-[8%] w-8 h-8 rounded-full border border-emerald/15 bg-emerald/5 hidden lg:block" />

      <motion.div style={{ scale, rotateX }} className="section-padding max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2 }}
          className="glow-line-rainbow max-w-md mx-auto mb-10"
        />

        <motion.h2
          initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient">            Start Enriching </span>
          <span className="text-gradient-cobalt">     Leads Now</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-lg text-muted-foreground font-body max-w-xl mx-auto mb-10"
        >
          Join thousands of sales teams who trust ObserveNow.ai to generate verified B2B leads and close deals faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 80px -10px hsl(221 83% 53% / 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 rounded-xl bg-primary text-primary-foreground font-display font-medium text-lg hover:bg-cobalt-glow transition-all duration-300 shadow-[var(--shadow-glow)]"
          >
            Start Free Trial →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 rounded-xl border border-border text-foreground font-display font-medium text-lg hover:border-violet-accent/50 hover:bg-secondary transition-all duration-300"
          >
            Talk to Sales
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-sm text-muted-foreground font-body mt-8"
        >
          No credit card required · Free credits included · GDPR compliant
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CTASection;
