import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Phone, Search, Chrome, CreditCard, Users, Target, Globe } from "lucide-react";
import glassOrbBlue from "@/assets/glass-orb-blue.png";
import glassCrystalViolet from "@/assets/glass-crystal-violet.png";
import glassSphereEmerald from "@/assets/glass-sphere-emerald.png";
import glassGeoOrange from "@/assets/glass-geo-orange.png";

const cards = [
  { icon: <Linkedin className="w-7 h-7" />, title: "LinkedIn Enrichment", description: "Extract LinkedIn profiles and enrich them with verified phone numbers, emails, and company data instantly.", image: glassOrbBlue, colorClass: "text-primary", bgClass: "bg-primary/8", hoverClass: "glass-card-hover", tag: "Core", borderGlow: "group-hover:shadow-[0_10px_40px_hsl(221_83%_53%_/_0.12)]" },
  { icon: <Phone className="w-7 h-7" />, title: "Verified Mobiles", description: "Get direct mobile numbers of decision-makers. Real, verified contacts — not switchboards.", image: glassCrystalViolet, colorClass: "text-violet-accent", bgClass: "bg-violet-accent/8", hoverClass: "glass-card-hover glass-card-violet", tag: "Contact", borderGlow: "group-hover:shadow-[var(--shadow-violet)]" },
  { icon: <Mail className="w-7 h-7" />, title: "Email Discovery", description: "Find work and personal email addresses with real-time verification and deliverability scoring.", image: glassSphereEmerald, colorClass: "text-emerald", bgClass: "bg-emerald/8", hoverClass: "glass-card-hover glass-card-emerald", tag: "Email", borderGlow: "group-hover:shadow-[var(--shadow-emerald)]" },
  { icon: <Search className="w-7 h-7" />, title: "Smart Filters", description: "Target prospects by job title, industry, company size, location, and more with precision filters.", image: glassGeoOrange, colorClass: "text-orange-accent", bgClass: "bg-orange-accent/8", hoverClass: "glass-card-hover glass-card-orange", tag: "Search", borderGlow: "group-hover:shadow-[var(--shadow-orange)]" },
  { icon: <Chrome className="w-7 h-7" />, title: "Chrome Extension", description: "One-click enrichment directly from LinkedIn. Enrich profiles without leaving your browser.", image: glassOrbBlue, colorClass: "text-cyan-accent", bgClass: "bg-cyan-accent/8", hoverClass: "glass-card-hover", tag: "Browser", borderGlow: "group-hover:shadow-[0_10px_40px_hsl(190_90%_45%_/_0.12)]" },
  { icon: <CreditCard className="w-7 h-7" />, title: "Credit System", description: "Flexible credit-based pricing that scales with your needs. Pay only for what you use.", image: glassCrystalViolet, colorClass: "text-violet-accent", bgClass: "bg-violet-accent/8", hoverClass: "glass-card-hover glass-card-violet", tag: "Billing", borderGlow: "group-hover:shadow-[var(--shadow-violet)]" },
  { icon: <Users className="w-7 h-7" />, title: "CXO Targeting", description: "Directly reach C-suite executives and decision-makers with verified contact intelligence.", image: glassSphereEmerald, colorClass: "text-emerald", bgClass: "bg-emerald/8", hoverClass: "glass-card-hover glass-card-emerald", tag: "Sales", borderGlow: "group-hover:shadow-[var(--shadow-emerald)]" },
  { icon: <Target className="w-7 h-7" />, title: "Campaign Builder", description: "Build targeted outreach campaigns with enriched data. Export to your CRM in one click.", image: glassGeoOrange, colorClass: "text-orange-accent", bgClass: "bg-orange-accent/8", hoverClass: "glass-card-hover glass-card-orange", tag: "Outreach", borderGlow: "group-hover:shadow-[var(--shadow-orange)]" },
  { icon: <Globe className="w-7 h-7" />, title: "Global Coverage", description: "Access verified B2B contacts across 100+ countries. No geographic limitations on your pipeline.", image: glassOrbBlue, colorClass: "text-primary", bgClass: "bg-primary/8", hoverClass: "glass-card-hover", tag: "Global", borderGlow: "group-hover:shadow-[0_10px_40px_hsl(221_83%_53%_/_0.12)]" },
];

const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-70%"]);
  const bgColor = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [
    "hsl(0 0% 98%)", "hsl(220 30% 97%)", "hsl(250 20% 97%)", "hsl(0 0% 98%)",
  ]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const floatY1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const floatY2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const floatRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section id="features" className="relative">
      <div className="section-padding max-w-7xl mx-auto pt-20 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/80 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-violet-accent" />
          <span className="text-xs font-body text-muted-foreground tracking-wide uppercase">Platform Features</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
        >
          <span className="text-gradient">Built for </span>
          <span className="text-gradient-cobalt">Sales Teams</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-muted-foreground font-body max-w-2xl"
        >
          Nine powerful features to turn LinkedIn into your ultimate lead generation engine. Scroll to explore →
        </motion.p>
      </div>

      <div className="relative">
        {/* Remove extra paddings for seamless loop */}
        <div className="overflow-x-hidden no-scrollbar relative w-full">
          <motion.div
            className="flex gap-6"
            style={{ willChange: 'transform' }}
            animate={{ x: [0, -(cards.length * (220 + 24))] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              duration: cards.length * 2.5
            }}
            onUpdate={latest => {
              // No-op, but required for Framer Motion to keep animating
            }}
          >
            {cards.map((card, i) => (
              <div
                key={card.title}
                className="flex-shrink-0 w-[220px] md:w-[260px]"
                style={{ perspective: 800, marginRight: i === (cards.length - 1) ? 0 : 24 }}
              >
                <div className={`${card.hoverClass} ${card.borderGlow} rounded-2xl p-4 h-full group cursor-pointer relative overflow-hidden transition-shadow duration-500`}>
                  <div className="absolute top-4 right-4 w-16 h-16 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500">
                    <img src={card.image} alt="" className="w-full h-full object-contain animate-float-delayed" />
                  </div>
                  <div className={`inline-flex px-2.5 py-0.5 rounded-full ${card.bgClass} mb-4`}>
                    <span className={`text-[10px] font-body font-medium uppercase tracking-wider ${card.colorClass}`}>{card.tag}</span>
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${card.bgClass} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={card.colorClass}>{card.icon}</div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed text-sm">{card.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
          {/* Add margin below carousel to prevent overlap with next section */}
          <div className="mt-16" />
        <style>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </section>
  );
};

export default HorizontalScrollSection;
