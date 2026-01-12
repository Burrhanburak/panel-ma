import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageJsonLd } from "@/components/PageJsonLd";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for PanelManage. Learn how we collect, use, and protect your data when using our custom management system services.",
  keywords: "privacy policy, data protection, GDPR, privacy",
  url: "https://panelmanage.com/privacy-policy",
  datePublished: "2025-01-15T00:00:00Z",
  dateModified: new Date().toISOString(),
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageJsonLd
        title="Privacy Policy"
        description="Privacy Policy for PanelManage. Learn how we collect, use, and protect your data when using our custom management system services."
        url="https://panelmanage.com/privacy-policy"
        datePublished="2025-01-15T00:00:00Z"
        dateModified={new Date().toISOString()}
        type="WebPage"
        breadcrumbs={[
          { name: "Home", item: "https://panelmanage.com" },
          { name: "Privacy Policy", item: "https://panelmanage.com/privacy-policy" },
        ]}
      />
      <main className="mx-auto w-full max-w-[900px] px-5 py-20 text-white">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">
        Privacy Policy
      </h1>
      <p className="text-sm text-zinc-300">
        This page will outline how PanelManage collects, uses, and protects
        data. Content to be finalized.
      </p>
    </main>
    </>
  );
}


