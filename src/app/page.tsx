import type { Metadata } from "next";
import { HeroSection }       from "@/components/sections/HeroSection";
import { AboutSection }      from "@/components/sections/AboutSection";
import { ServicesSection }   from "@/components/sections/ServicesSection";
import { WhoWeServeSection } from "@/components/sections/WhoWeServeSection";
import { ProcessSection }    from "@/components/sections/ProcessSection";
import { InsightsSection }   from "@/components/sections/InsightsSection";
import { ContactSection }    from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Raynard Land Advisory — Land Development Consulting",
};

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhoWeServeSection />
      <ProcessSection />
      <InsightsSection />
      <ContactSection />
    </main>
  );
}
