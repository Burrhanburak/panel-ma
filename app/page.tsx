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
import { PageJsonLd } from "@/components/PageJsonLd";
import FaqJsonLd from "@/components/FaqJsonLd";
import { FAQ_ITEMS } from "@/data/faqs";

export const metadata: Metadata = createMetadata({
  title: "Management Systems | Practice Clinic HR Inventory School",
  description:
    "Custom practice management system, clinic management software, HR employee systems, school management. Admin panels with appointment scheduling, patient portal, inventory tracking, full ownership.",
  keywords:
    "management system, practice management system, clinic management system, hr management system, employee management system, inventory management system, school management system, appointment management system, patient management system, custom admin panel, clinic management software, medical practice management, content management system, project management system, custom management system, crm management system, maintenance management system, document management system, vendor management system, property management system, workflow management system, case management system, admin panel software, internal management system, mental health practice management system, psychologist practice management software, teacher management system, law firm case management system, insurance claims management system, ERP system, LMS learning management system, QMS quality management system, custom dashboard, Laravel admin panel",
  url: "https://panelmanage.com",
  datePublished: "2025-01-15T00:00:00Z",
  dateModified: new Date().toISOString(),
});

export default function Home() {
  return (
    <>
      <PageJsonLd
        title="Management Systems | Practice Clinic HR Inventory School"
        description="Custom practice management system, clinic management software, HR employee systems, school management. Admin panels with appointment scheduling, patient portal, inventory tracking, full ownership."
        url="https://panelmanage.com"
        datePublished="2025-01-15T00:00:00Z"
        dateModified={new Date().toISOString()}
        type="WebPage"
      />
      <FaqJsonLd
        pageUrl="https://panelmanage.com/"
        items={FAQ_ITEMS.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />
      <Hero
        title="Management Systems for Practice, Clinic, HR & School"
        description="Custom admin panels with appointment scheduling, patient management, employee tracking, inventory control. Complete ownership - no subscriptions."
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
