import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import glassSphereEmerald from "@/assets/glass-sphere-emerald.png";
import glassGeoOrange from "@/assets/glass-geo-orange.png";

const metrics = [
  { value: 95, suffix: "%", label: "Email Verification Rate", color: "text-gradient-cobalt", borderGlow: "hover:shadow-[0_10px_40px_hsl(221_83%_53%_/_0.1)]" },
  { value: 78, suffix: "%", label: "Mobile Match Rate", color: "text-gradient-emerald", borderGlow: "hover:shadow-[var(--shadow-emerald)]" },
  { value: 50, suffix: "M+", label: "B2B Contacts", color: "text-gradient-violet", borderGlow: "hover:shadow-[var(--shadow-violet)]" },
  { value: 100, suffix: "+", label: "Countries Covered", color: "text-gradient-orange", borderGlow: "hover:shadow-[var(--shadow-orange)]" },
  { value: 10, suffix: "x", label: "Faster Than Manual", color: "text-gradient-cobalt", borderGlow: "hover:shadow-[0_10px_40px_hsl(221_83%_53%_/_0.1)]" },
  { value: 3, suffix: "sec", label: "Avg. Enrichment Time", color: "text-gradient-emerald", borderGlow: "hover:shadow-[var(--shadow-emerald)]" },
];

const AnimatedNumber = ({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = eased * value;
      setDisplay(value % 1 !== 0 ? current.toFixed(2) : Math.round(current).toString());
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
};

const MetricsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.88, 1, 0.88]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -6]);

  const floatY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const floatRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section ref={ref} className="py-16 relative overflow-hidden bg-gradient-to-b from-background via-primary/[0.02] to-background" style={{ perspective: 1000 }}>
      <motion.img src={glassSphereEmerald} alt="" className="absolute top-20 right-16 w-20 h-20 opacity-10 hidden lg:block" style={{ y: floatY1, rotate: floatRotate }} />
      <motion.img src={glassGeoOrange} alt="" className="absolute bottom-24 left-12 w-16 h-16 opacity-10 hidden lg:block" style={{ y: floatY2, rotate: useTransform(scrollYProgress, [0, 1], [30, -60]) }} />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [40, -40]) }} className="absolute top-[30%] left-[5%] w-12 h-12 rounded-xl border border-primary/10 bg-primary/3 backdrop-blur-sm hidden lg:block" />

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="glow-line-rainbow max-w-xl mx-auto mb-12"
      />

      <motion.div style={{ scale, rotateX }} className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          >
            <span className="text-gradient-rainbow">By the Numbers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground font-body max-w-md mx-auto"
          >
            Lead enrichment at scale that speaks for itself
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 60, scale: 0.85, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, scale: 1.03 }}
              className={`glass-card-hover ${metric.borderGlow} rounded-2xl p-6 md:p-8 text-center group cursor-default transition-shadow duration-500`}
            >
              <div className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold ${metric.color} mb-2`}>
                <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-sm text-muted-foreground font-body">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MetricsSection;
