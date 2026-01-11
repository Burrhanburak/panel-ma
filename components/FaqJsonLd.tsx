// components/FaqJsonLd.tsx
import React from "react";

type FaqItem = {
  question: string;
  answer: string;
};

function stripHtml(input: string) {
  // güvenli tarafta kal: accordion answer'ları ileride JSX/HTML olursa temizle
  return input
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function FaqJsonLd({
  items,
  pageUrl,
}: {
  items: FaqItem[];
  pageUrl?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(pageUrl ? { mainEntityOfPage: pageUrl } : {}),
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: stripHtml(it.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(it.answer),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD düz string olmalı
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
