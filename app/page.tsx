import type { Metadata } from "next";
import Intro from "@/components/Intro";
import Hero from "@/components/Hero";
import { createMetadata } from "@/lib/metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import { SoftwareApplicationJsonLd } from "@/components/SoftwareApplicationJsonLd";
import { FAQ_ITEMS } from "@/data/faqs";

// SEO-critical components - SSR enabled for better indexing
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Faqs } from "@/components/Faqs";
import { PanelsSection } from "@/components/IntegrationsSection";

// Heavy/interactive components - lazy loaded with ssr: false (via client wrappers)
import BentoGridLoader from "@/components/BentoGridLoader";
import FeaturesLoader from "@/components/FeaturesLoader";
import GetStartedSectionLoader from "@/components/GetStartedSectionLoader";

export const metadata: Metadata = createMetadata({
  title: "Custom Panel Management System",
  description:
    "Custom panel management systems for clinics, HR teams, and schools—appointments, patient portal, inventory & roles. One-time build, full ownership, no subscription.",
  keywords:
    "panel management system, custom admin panel, clinic management software, HR management system, school management system, appointment scheduling, role based access admin panel, Laravel admin panel, inventory management, patient portal, employee tracking system",
  url: "https://panelmanage.com",
  datePublished: "2025-01-15T00:00:00Z",
  dateModified: "2025-01-20T00:00:00Z",
});

export default function Home() {
  return (
    <>
      <PageJsonLd
        title="Custom Panel Management System"
        description="Custom panel management systems for clinics, HR teams, and schools—appointments, patient portal, inventory & roles. One-time build, full ownership, no subscription."
        url="https://panelmanage.com"
        datePublished="2025-01-15T00:00:00Z"
        dateModified="2025-01-20T00:00:00Z"
        type="WebPage"
      />
      <SoftwareApplicationJsonLd />
      <FaqJsonLd
        pageUrl="https://panelmanage.com/"
        items={FAQ_ITEMS.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />
      <Hero
        title="Custom Panel Management Systems Built Around Your Workflow"
        description="PanelManage builds custom panel management systems for clinics, HR teams, schools, and internal operations — scheduling, approvals, uploads, exports, roles, and reporting."
        badgeText="60+ Management Systems"
        badgeLabel="Management System Software"
        ctaButtons={[
          {
            text: "Explore Management Systems",
            href: "/solutions",
            primary: true,
          },
          {
            text: "Request a Demo",
            href: "https://app.panelmanage.com/register",
          },
        ]}
        microDetails={[
          "Appointment, clinic, employee & scholarship management systems",
          "Custom admin panel software with roles, modules & workflows",
          "Built for clinics, schools, teams, and growing organizations",
        ]}
      />
      <Intro />
      <BentoGridLoader />
      <FeaturesLoader />
      <PanelsSection />

      <PricingSection />
      <TestimonialsSection />
      <Faqs />
      <GetStartedSectionLoader />
    </>
  );
}
