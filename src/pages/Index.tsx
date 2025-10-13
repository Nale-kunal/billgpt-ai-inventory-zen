import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Features } from "@/components/Features";
import { Integrations } from "@/components/Integrations";
import { UseCases } from "@/components/UseCases";
import { ROICalculator } from "@/components/ROICalculator";
import { Comparison } from "@/components/Comparison";
import { Pricing } from "@/components/Pricing";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <TrustBadges />
      <Features />
      <Integrations />
      <UseCases />
      <ROICalculator />
      <Comparison />
      <Pricing />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
