import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import glassOrbBlue from "@/assets/glass-orb-blue.png";
import glassCrystalViolet from "@/assets/glass-crystal-violet.png";

const ParallaxText = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Restore parallax transforms for moving background text
  const x1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -6]);
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const shapeY1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const shapeY2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const shapeRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section ref={ref} className="py-12 overflow-hidden relative bg-gradient-to-b from-background via-secondary/40 to-background" style={{ perspective: 800 }}>
      {/* Colored blobs for visual richness */}
      <div className="colored-blob w-[400px] h-[400px] bg-primary/6 top-[-100px] left-[20%]" />
      <div className="colored-blob w-[300px] h-[300px] bg-violet-accent/5 bottom-[-50px] right-[15%]" />

      {/* Floating 3D shapes */}
      <motion.div
        style={{ y: shapeY1, rotate: shapeRotate }}
        className="absolute top-8 left-[15%] w-16 h-16 rounded-2xl border border-primary/15 bg-primary/5 backdrop-blur-sm"
      />
      <motion.div
        style={{ y: shapeY2, rotate: useTransform(scrollYProgress, [0, 1], [45, -135]) }}
        className="absolute bottom-8 right-[20%] w-12 h-12 rounded-xl border border-violet-accent/15 bg-violet-accent/5 backdrop-blur-sm"
      />
      <motion.img src={glassOrbBlue} alt="" className="absolute top-[20%] right-[8%] w-16 h-16 opacity-15 hidden md:block" style={{ y: shapeY1, rotate: shapeRotate }} />
      <motion.img src={glassCrystalViolet} alt="" className="absolute bottom-[20%] left-[5%] w-14 h-14 opacity-15 hidden md:block" style={{ y: shapeY2 }} />

      <motion.div style={{ scale, rotateX }} className="space-y-2">
        <motion.div style={{ x: x1, y: y1 }} className="whitespace-nowrap mx-auto flex justify-center">
          <span className="font-display text-[5rem] md:text-[8rem] lg:text-[11rem] font-bold text-foreground/[0.13] leading-none select-none">
            ENRICH LEADS
          </span>
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap mx-auto flex justify-center">
          <span
            className="font-display text-[5rem] md:text-[8rem] lg:text-[11rem] font-bold leading-none select-none"
            style={{ WebkitTextStroke: "2px hsl(221 83% 53% / 0.22)", WebkitTextFillColor: "transparent" }}
          >
            CLOSE DEALS
          </span>
        </motion.div>
        <motion.div style={{ x: x3, y: y3 }} className="whitespace-nowrap mx-auto flex justify-center">
          <span className="font-display text-[5rem] md:text-[8rem] lg:text-[11rem] font-bold text-violet-accent/[0.13] leading-none select-none">
            AI POWERED
          </span>
        </motion.div>
      </motion.div>

      {/* Centered overlay content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">Trusted by <span className="text-gradient-cobalt">5,000+</span> Sales Teams</p>
          <p className="text-muted-foreground font-body text-sm">Generating millions of verified leads worldwide</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ParallaxText;
