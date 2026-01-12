import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ContactPageClient from "./ContactPageClient";
import { PageJsonLd } from "@/components/PageJsonLd";

export const metadata: Metadata = createMetadata({
  title: "Contact Us – Get a Custom Panel Quote",
  description:
    "Tell us about the panel you need. Share your workflow, roles, and must-have modules. We'll reply with a clear next step—no spam, no pressure.",
  keywords:
    "contact panelmanage, custom panel quote, management system consultation, appointment system quote, clinic dashboard consultation, practice management system quote, HR management system consultation, restaurant management system quote",
  url: "https://panelmanage.com/contact",
  datePublished: "2025-01-15T00:00:00Z",
  dateModified: new Date().toISOString(),
});

export default function ContactPage() {
  return (
    <>
      <PageJsonLd
        title="Contact Us – Get a Custom Panel Quote"
        description="Tell us about the panel you need. Share your workflow, roles, and must-have modules. We'll reply with a clear next step—no spam, no pressure."
        url="https://panelmanage.com/contact"
        datePublished="2025-01-15T00:00:00Z"
        dateModified={new Date().toISOString()}
        type="ContactPage"
        breadcrumbs={[
          { name: "Home", item: "https://panelmanage.com" },
          { name: "Contact", item: "https://panelmanage.com/contact" },
        ]}
      />
      <ContactPageClient />
    </>
  );
}
