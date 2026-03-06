import HeroSection from "@/components/HeroSection";
import ParallaxText from "@/components/ParallaxText";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import PinnedDashboardSection from "@/components/PinnedDashboardSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import MetricsSection from "@/components/MetricsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroSection />
      <ParallaxText />
      <HorizontalScrollSection />
      <PinnedDashboardSection />
      <ShowcaseSection />
      <MetricsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
