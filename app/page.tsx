import type { Metadata } from "next";
import Intro from "@/components/Intro";
import BentoGrid from "@/components/BentoGrid";
import { Features } from "@/components/FramerFeatures";
import { Faqs } from "@/components/Faqs";
import { GetStartedSection } from "@/components/GetStartedSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PanelsSection } from "@/components/IntegrationsSection";
import Hero from "@/components/Hero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Custom Management Systems Built for Real Operations",
  description:
    "We build appointment, clinic, employee, scholarship, and practice management systems — delivered as custom admin panel software with roles, modules, and workflow automation tailored to how your team operates.",
  keywords:
    "custom admin panel, management system, appointment system, clinic management, employee tracking, scholarship management, practice management, custom dashboard, Laravel admin panel, workflow automation",
  url: "https://panelmanage.com",
  datePublished: "2025-01-15T00:00:00Z",
  dateModified: new Date().toISOString(),
});

export default function Home() {
  return (
    <>
      <Hero
        title="Custom Management Systems Built for Real Operations"
        description="We build appointment, clinic, employee, scholarship, and practice management systems — delivered as custom admin panel software with roles, modules, and workflow automation tailored to how your team operates."
        badgeText="PanelManage"
        badgeLabel="Management System Software"
        ctaButtons={[
          {
            text: "Explore Management Systems",
            href: "/solutions",
            primary: true,
          },
          { text: "Request a Demo", href: "#contact" },
        ]}
        microDetails={[
          "Appointment, clinic, employee & scholarship management systems",
          "Custom admin panel software with roles, modules & workflows",
          "Built for clinics, schools, teams, and growing organizations",
        ]}
      />
      <Intro />
      <BentoGrid />
      <Features />
      <PanelsSection />

      <PricingSection />
      <TestimonialsSection />
      <Faqs />
      <GetStartedSection />
    </>
  );
}
