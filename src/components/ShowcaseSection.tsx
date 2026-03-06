import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import glassOrbBlue from "@/assets/glass-orb-blue.png";
import glassCrystalViolet from "@/assets/glass-crystal-violet.png";
import glassSphereEmerald from "@/assets/glass-sphere-emerald.png";
import glassGeoOrange from "@/assets/glass-geo-orange.png";

const showcaseCards = [
  { title: "LinkedIn Data Enrichment", subtitle: "Extract and enrich LinkedIn profiles with verified mobile numbers, emails, and company intelligence", image: glassOrbBlue, gradient: "from-primary/5 to-cyan-accent/5", borderColor: "hover:border-primary/30", accent: "bg-primary", shadow: "group-hover:shadow-[0_20px_60px_hsl(221_83%_53%_/_0.12)]" },
  { title: "Smart Prospect Filters", subtitle: "Find your ideal customers by job title, industry, company size, and location with precision targeting", image: glassCrystalViolet, gradient: "from-violet-accent/5 to-rose-accent/5", borderColor: "hover:border-violet-accent/30", accent: "bg-violet-accent", shadow: "group-hover:shadow-[var(--shadow-violet)]" },
  { title: "Verified Contact Data", subtitle: "Real phone numbers and emails of decision-makers — not generic info@ addresses or switchboards", image: glassSphereEmerald, gradient: "from-emerald/5 to-cyan-accent/5", borderColor: "hover:border-emerald/30", accent: "bg-emerald", shadow: "group-hover:shadow-[var(--shadow-emerald)]" },
  { title: "CRM Integration", subtitle: "Export enriched leads directly to Salesforce, HubSpot, or any CRM with one-click sync", image: glassGeoOrange, gradient: "from-orange-accent/5 to-rose-accent/5", borderColor: "hover:border-orange-accent/30", accent: "bg-orange-accent", shadow: "group-hover:shadow-[var(--shadow-orange)]" },
];

const ShowcaseSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"], layoutEffect: false });

  const y1 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-8, 8]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [5, -5]);
  const scaleVideo = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.03, 0.96]);
  const videoRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-3, 0, 3]);

  const bgShape1 = useTransform(scrollYProgress, [0, 1], [100, -200]);
  const bgShape2 = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const bgShapeRotate = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section ref={ref} className="pt-0 mt-0 pb-0 relative overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      <div className="colored-blob w-[400px] h-[400px] bg-violet-accent/6 top-[10%] right-[-100px]" />
      <div className="colored-blob w-[500px] h-[500px] bg-primary/6 bottom-[10%] left-[-150px]" />
      <div className="colored-blob w-[300px] h-[300px] bg-emerald/4 top-[50%] left-[30%]" />

      <motion.div style={{ y: bgShape1, rotate: bgShapeRotate }} className="absolute top-20 right-20 w-24 h-24 rounded-3xl border border-primary/10 bg-primary/3 backdrop-blur-sm hidden lg:block" />
      <motion.div style={{ y: bgShape2, rotate: useTransform(scrollYProgress, [0, 1], [45, -90]) }} className="absolute bottom-32 left-16 w-16 h-16 rounded-2xl border border-orange-accent/10 bg-orange-accent/3 backdrop-blur-sm hidden lg:block" />
      <motion.img src={glassOrbBlue} alt="" className="absolute top-[15%] left-[8%] w-20 h-20 opacity-8 hidden lg:block" style={{ y: y1, rotate: rotate1 }} />
      <motion.img src={glassCrystalViolet} alt="" className="absolute bottom-[20%] right-[6%] w-16 h-16 opacity-8 hidden lg:block" style={{ y: y2, rotate: rotate2 }} />

      <div className="section-padding max-w-7xl mx-auto mt-0 pt-0 pb-0">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/80"
          >
            <span className="w-2 h-2 rounded-full bg-orange-accent" />
            <span className="text-xs font-body text-muted-foreground tracking-wide uppercase">Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            <span className="text-gradient">Powerful </span>
            <span className="text-gradient-violet">Lead Intelligence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground font-body max-w-lg mx-auto"
          >
            Every feature designed to give your sales team superhuman prospecting abilities
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 60, rotateY: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ scale: scaleVideo, rotateY: videoRotateY, transformPerspective: 1200 }}
            className="lg:row-span-2 glass-card-hover rounded-2xl overflow-hidden group cursor-pointer"
          >
            <div className="relative h-full min-h-[400px]">
              <video src={heroVideo} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
              <div className="absolute top-6 right-6">
                <motion.div whileHover={{ scale: 1.1 }} className="w-12 h-12 rounded-full bg-primary-foreground/20 backdrop-blur-md flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                </motion.div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/30 text-primary-foreground text-xs font-body mb-3 backdrop-blur-sm border border-primary-foreground/10">Live Demo</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">See DataGen In Action</h3>
                <p className="text-primary-foreground/70 font-body text-sm">Watch how ObserveNow transforms LinkedIn profiles into verified sales leads</p>
              </div>
            </div>
          </motion.div>

          {showcaseCards.slice(0, 2).map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60, rotateY: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (i + 1) * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`glass-card-hover ${card.borderColor} ${card.shadow} rounded-2xl p-8 group cursor-pointer relative overflow-hidden bg-gradient-to-br ${card.gradient} transition-shadow duration-500`}
              style={{ perspective: 600 }}
            >
              <motion.img src={card.image} alt="" className="absolute top-4 right-4 w-28 h-28 opacity-12 group-hover:opacity-25 transition-all duration-700" style={{ y: y1, rotate: rotate1 }} />
              <div className={`w-2 h-8 rounded-full ${card.accent} mb-5 opacity-60`} />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 relative z-10">{card.title}</h3>
              <p className="text-muted-foreground font-body text-sm relative z-10 mb-6 leading-relaxed">{card.subtitle}</p>
              <div className="flex items-center gap-2 text-sm font-body font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcaseCards.slice(2).map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60, rotateY: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`glass-card-hover ${card.borderColor} ${card.shadow} rounded-2xl p-8 group cursor-pointer relative overflow-hidden bg-gradient-to-br ${card.gradient} transition-shadow duration-500`}
              style={{ perspective: 600 }}
            >
              <motion.img src={card.image} alt="" className="absolute top-4 right-4 w-28 h-28 opacity-12 group-hover:opacity-25 transition-all duration-700" style={{ rotate: rotate2 }} />
              <div className={`w-2 h-8 rounded-full ${card.accent} mb-5 opacity-60`} />
              <h3 className="font-display text-xl font-semibold text-foreground mb-2 relative z-10">{card.title}</h3>
              <p className="text-muted-foreground font-body text-sm relative z-10 mb-6 leading-relaxed">{card.subtitle}</p>
              <div className="flex items-center gap-2 text-sm font-body font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                <span>Learn more</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
