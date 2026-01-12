"use client";

import Script from "next/script";
import { BRAND } from "@/data/solutions";

interface PageJsonLdProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ItemPage";
  breadcrumbs?: Array<{ name: string; item: string }>;
}

export function PageJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  type = "WebPage",
  breadcrumbs,
}: PageJsonLdProps) {
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
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        ...(datePublished && { datePublished }),
        ...(dateModified && { dateModified }),
        isPartOf: { "@id": `${BRAND.url}#org` },
        publisher: { "@id": `${BRAND.url}#org` },
      },
      ...(breadcrumbs && breadcrumbs.length > 0
        ? [
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
          ]
        : []),
    ],
  };

  return (
    <Script
      id={`${url.replace(/[^a-zA-Z0-9]/g, "-")}-jsonld`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

