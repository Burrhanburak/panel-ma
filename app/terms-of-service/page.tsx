import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for PanelManage. Read the terms under which our custom management system and admin panel services are provided.",
  keywords: "terms of service, terms and conditions, service agreement",
  url: "https://panelmanage.com/terms-of-service",
  datePublished: "2025-01-15T00:00:00Z",
  dateModified: new Date().toISOString(),
});

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto w-full max-w-[900px] px-5 py-20 text-white">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Terms of Service
      </h1>
      <p className="text-sm text-zinc-300">
        This page will describe the terms under which PanelManage services are
        provided. Content to be finalized.
      </p>
    </main>
  );
}


