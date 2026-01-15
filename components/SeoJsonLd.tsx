import { BRAND, type FAQ, type Solution } from "@/data/solutions";

export function SeoJsonLd({
  solution,
  dateModified,
  breadcrumbs,
  asService = true,
}: {
  solution: Solution;
  dateModified: string;
  breadcrumbs: Array<{ name: string; item: string }>;
  asService?: boolean;
}) {
  const url = `${BRAND.url}/solutions/${solution.slug}`;
  const faqEntities = (solution.faqs || []).map((f: FAQ) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  }));

  const serviceOrApp = asService ? "Service" : "SoftwareApplication";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BRAND.url}#org`,
        name: BRAND.name,
        url: BRAND.url,
        logo: BRAND.logo,
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: solution.seoTitle,
        description: solution.metaDescription,
        datePublished: solution.datePublished,
        dateModified,
        isPartOf: { "@id": `${BRAND.url}#org` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          item: b.item,
        })),
      },
      {
        "@type": serviceOrApp,
        "@id": `${url}#service`,
        name: solution.pageName,
        serviceType: "Custom Management System Development",
        provider: { "@id": `${BRAND.url}#org` },
        areaServed: "Worldwide",
        url,
        description: solution.metaDescription,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqEntities,
      },
    ],
  };

  return (
    <script
      id={`${solution.slug}-jsonld`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
