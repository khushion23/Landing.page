import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Linkedin, Search, UserCheck, Rocket } from "lucide-react";
import glassOrbBlue from "@/assets/glass-orb-blue.png";
import glassSphereEmerald from "@/assets/glass-sphere-emerald.png";
import img1 from "../images/Screenshot 2026-03-06 115153.png";
import img2 from "../images/Screenshot 2026-03-06 115214.png";
import img3 from "../images/Screenshot 2026-03-06 115239.png";
import img4 from "../images/Screenshot 2026-03-06 115357.png";
import img5 from "../images/Screenshot 2026-03-06 115419.png";


const dashboardImages = [img1, img2, img3, img4, img5];

const steps = [
  {
    icon: <Search className="w-5 h-5 text-primary" />,
    title: "Search & Target",
    description: "Use smart filters to find your ideal prospects — filter by job title, industry, company size, and location to build laser-focused lists.",
    color: "border-primary/20",
    accent: "bg-primary",
  },
  {
    icon: <Linkedin className="w-5 h-5 text-cyan-accent" />,
    title: "Extract from LinkedIn",
    description: "Import LinkedIn profiles in bulk or one-by-one using our Chrome extension. No manual copy-pasting required.",
    color: "border-cyan-accent/20",
    accent: "bg-cyan-accent",
  },
  {
    icon: <UserCheck className="w-5 h-5 text-orange-accent" />,
    title: "Enrich & Verify",
    description: "Our AI enriches each profile with verified mobile numbers, work emails, personal emails, and complete company data in seconds.",
    color: "border-orange-accent/20",
    accent: "bg-orange-accent",
  },
  {
    icon: <Rocket className="w-5 h-5 text-emerald" />,
    title: "Outreach & Close",
    description: "Export enriched contacts to your CRM and launch targeted outreach campaigns. Start closing deals with verified decision-maker data.",
    color: "border-emerald/20",
    accent: "bg-emerald",
  },
];

const StepsCarousel = ({ steps }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearTimeout(timeout);
  }, [index, steps.length]);
  return (
    <div className="relative h-[180px]">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: i === index ? 1 : 0,
            x: i === index ? 0 : 40,
            zIndex: i === index ? 2 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`absolute top-0 left-0 w-full flex gap-4 p-5 rounded-xl border ${step.color} bg-card/50 backdrop-blur-sm transition-all duration-500 hover:bg-card/80`}
          style={{ pointerEvents: i === index ? 'auto' : 'none' }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
              {step.icon}
            </div>
            {i < steps.length - 1 && (
              <div className={`w-0.5 h-8 ${step.accent} opacity-20 rounded-full`} />
            )}
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">{step.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed text-sm">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Animated dashboard image carousel
const DashboardImageCarousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % dashboardImages.length);
    }, 2200);
    return () => clearTimeout(timeout);
  }, [index]);
  return (
    <div className="glass-card rounded-2xl p-2 md:p-4 w-full max-w-lg h-[340px] flex items-center justify-center relative overflow-hidden">
      {dashboardImages.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`dashboard-${i}`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 0.98 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute left-0 top-0 w-full h-full object-cover"
          style={{ zIndex: i === index ? 2 : 1 }}
        />
      ))}
    </div>
  );
};

const PinnedDashboardSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const dashboardY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const dashboardRotate = useTransform(scrollYProgress, [0, 0.5, 1], [3, 0, -3]);
  const dashboardScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  const orbY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const orbRotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section id="insights" className="relative pb-0 mb-0">
      <div ref={containerRef} className="relative pb-0 mb-0">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden pt-0 pb-0 mb-0">
          <motion.img src={glassOrbBlue} alt="" className="absolute top-16 right-16 w-20 h-20 opacity-10 hidden lg:block" style={{ y: orbY, rotate: orbRotate }} />
          <motion.img src={glassSphereEmerald} alt="" className="absolute bottom-20 left-20 w-16 h-16 opacity-10 hidden lg:block" style={{ y: useTransform(scrollYProgress, [0, 1], [50, -100]), rotate: useTransform(scrollYProgress, [0, 1], [0, -60]) }} />

          <div className="section-padding max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div className="space-y-2">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/80"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald" />
                  <span className="text-xs font-body text-muted-foreground tracking-wide uppercase">How It Works</span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="font-display text-4xl md:text-5xl font-bold tracking-tight"
                >
                  <span className="text-gradient">From LinkedIn </span>
                  <span className="text-gradient-emerald">to Pipeline</span>
                </motion.h2>
              </div>

              {/* Animated carousel for steps */}
              <StepsCarousel steps={steps} />
            </div>

            <motion.div
              className="hidden lg:flex justify-center"
              style={{ y: dashboardY, scale: dashboardScale, transformPerspective: 1200 }}
            >
              <DashboardImageCarousel />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PinnedDashboardSection;
