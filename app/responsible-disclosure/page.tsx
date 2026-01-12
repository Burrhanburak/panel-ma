import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageJsonLd } from "@/components/PageJsonLd";

export const metadata: Metadata = createMetadata({
  title: "Responsible Disclosure",
  description:
    "Responsible Disclosure Policy for PanelManage. Learn how to report security vulnerabilities responsibly and help us keep our systems secure.",
  keywords: "responsible disclosure, security policy, bug bounty, vulnerability reporting",
  url: "https://panelmanage.com/responsible-disclosure",
  datePublished: "2025-01-15T00:00:00Z",
  dateModified: new Date().toISOString(),
});

export default function ResponsibleDisclosurePage() {
  return (
    <>
      <PageJsonLd
        title="Responsible Disclosure"
        description="Responsible Disclosure Policy for PanelManage. Learn how to report security vulnerabilities responsibly and help us keep our systems secure."
        url="https://panelmanage.com/responsible-disclosure"
        datePublished="2025-01-15T00:00:00Z"
        dateModified={new Date().toISOString()}
        type="WebPage"
        breadcrumbs={[
          { name: "Home", item: "https://panelmanage.com" },
          { name: "Responsible Disclosure", item: "https://panelmanage.com/responsible-disclosure" },
        ]}
      />
      <main className="mx-auto w-full max-w-[900px] px-5 py-20 text-white">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Responsible Disclosure
      </h1>
      <p className="text-sm text-zinc-300">
        This page will explain how to report security issues responsibly to
        PanelManage. Content to be finalized.
      </p>
    </main>
    </>
  );
}


