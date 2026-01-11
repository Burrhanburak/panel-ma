import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = createMetadata({
  title: "Contact Us – Get a Custom Panel Quote",
  description:
    "Tell us about the panel you need. Share your workflow, roles, and must-have modules. We'll reply with a clear next step—no spam, no pressure.",
  keywords:
    "contact panelmanage, custom panel quote, management system consultation, appointment system quote, clinic dashboard consultation",
  url: "https://panelmanage.com/contact",
  datePublished: "2025-01-15T00:00:00Z",
  dateModified: new Date().toISOString(),
});

export default function ContactPage() {
  return <ContactPageClient />;
}
