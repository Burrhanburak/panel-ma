import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = createMetadata({
  title: "Pricing – Custom Management Systems",
  description:
    "Pricing for custom management systems: One-time build + monthly maintenance. Appointment systems, doctor management systems, employee tracking management systems, bursary workflows, psychologist management systems, and more.",
  keywords:
    "custom management system pricing, management system pricing, appointment system cost, clinic dashboard pricing, employee tracking pricing, Laravel admin panel pricing",
  url: "https://panelmanage.com/pricing",
  datePublished: new Date().toISOString(),
  dateModified: new Date().toISOString(),
});

export default function PricingPage() {
  return <PricingPageClient />;
}
