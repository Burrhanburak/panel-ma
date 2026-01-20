import { BRAND } from "@/data/solutions";

interface SoftwareApplicationJsonLdProps {
  name?: string;
  description?: string;
  url?: string;
  price?: string;
  priceCurrency?: string;
}

export function SoftwareApplicationJsonLd({
  name = "PanelManage",
  description = "Custom panel management systems for clinics, HR teams, and schools—appointments, patient portal, inventory & roles. Full ownership, no subscriptions.",
  url = "https://panelmanage.com",
  price = "0",
  priceCurrency = "USD",
}: SoftwareApplicationJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    url,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency,
      description: price === "0" ? "Request pricing / demo" : "Custom management system pricing",
      url: `${url}/pricing`,
    },
    provider: {
      "@type": "Organization",
      name: BRAND.name,
      url: BRAND.url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

