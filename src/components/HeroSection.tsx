import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroVideo from "@/assets/hero-video.mp4";
import HeroScene from "./HeroScene";

const Navbar = () => (
  <motion.nav
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="fixed top-0 left-0 right-0 z-50 section-padding py-5 flex items-center justify-end bg-background/80 backdrop-blur-lg border-b border-border/50"
  >
    {/* Header content removed as requested */}
  </motion.nav>
);

const FloatingShape = ({ className, delay = 0 }: { className: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, delay, type: "spring" }}
    className={className}
  />
);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.02, 0.85]);
  const videoRotateX = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const globeOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const globeScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.3]);

  // Floating shapes parallax
  const shape1Y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const shape2Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const shape3Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const shape1Rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const shape2Rotate = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient blobs */}
      <motion.div style={{ y: shape1Y, rotate: shape1Rotate }} className="colored-blob w-[500px] h-[500px] bg-primary/10 top-[-100px] right-[-100px]" />
      <motion.div style={{ y: shape2Y, rotate: shape2Rotate }} className="colored-blob w-[400px] h-[400px] bg-violet-accent/10 bottom-[0px] left-[-100px]" />
      <motion.div style={{ y: shape3Y }} className="colored-blob w-[300px] h-[300px] bg-emerald/8 top-[30%] left-[50%]" />

      <div className="absolute inset-0 z-0 dot-grid opacity-40" />

      {/* 3D Globe Background */}
      <motion.div style={{ opacity: globeOpacity, scale: globeScale }} className="absolute inset-0 z-[1]">
        <HeroScene />
      </motion.div>

      {/* Floating decorative shapes */}
      <motion.div style={{ y: shape1Y, rotate: shape1Rotate }}>
        <FloatingShape className="absolute top-[15%] right-[10%] w-16 h-16 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm animate-float z-[2]" delay={1.2} />
      </motion.div>
      <motion.div style={{ y: shape2Y, rotate: shape2Rotate }}>
        <FloatingShape className="absolute top-[60%] left-[8%] w-12 h-12 rounded-full border border-violet-accent/20 bg-violet-accent/5 backdrop-blur-sm animate-float-delayed z-[2]" delay={1.5} />
      </motion.div>
      <motion.div style={{ y: shape3Y }}>
        <FloatingShape className="absolute top-[40%] right-[5%] w-8 h-8 rounded-lg border border-emerald/20 bg-emerald/5 backdrop-blur-sm animate-float z-[2] rotate-45" delay={1.8} />
      </motion.div>

      <Navbar />

      <motion.div style={{ y: textY, scale: textScale }} className="relative z-10 text-center max-w-5xl mx-auto section-padding pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs font-body text-muted-foreground tracking-wide uppercase">AI-Powered B2B Lead Enrichment</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-[0.95] mb-6"
        >
          <span className="text-gradient">LinkedIn to Leads.</span>
          <br />
          <span className="text-gradient-rainbow">Instantly.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Turn LinkedIn profiles into verified B2B contacts with mobile numbers, emails, and company data. AI-powered lead enrichment for sales teams that close faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 80px -10px hsl(221 83% 53% / 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-display font-medium text-base hover:bg-cobalt-glow transition-all duration-300 shadow-[var(--shadow-glow)]"
          >
            Start Enriching →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3.5 rounded-xl border border-border text-foreground font-display font-medium text-base hover:border-primary/50 hover:bg-secondary transition-all duration-300"
          >
            Chrome Extension
          </motion.button>
        </motion.div>

        {/* Hero Video with 3D perspective on scroll */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ y: videoY, scale: videoScale, rotateX: videoRotateX, transformPerspective: 1200 }}
          className="relative rounded-2xl overflow-hidden border border-border shadow-2xl max-w-4xl mx-auto"
        >
          <video src={heroVideo} autoPlay loop muted playsInline className="w-full h-auto rounded-2xl" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
