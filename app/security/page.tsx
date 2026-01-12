import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageJsonLd } from "@/components/PageJsonLd";

export const metadata: Metadata = createMetadata({
  title: "Security Panel management systems",
  description:
    "Security practices and measures at PanelManage. Learn how we protect application and data security in our custom management systems and admin panels.",
  keywords:
    "security, data security, application security, secure admin panel, secure management system",
  url: "https://panelmanage.com/security",
  datePublished: "2025-01-15T00:00:00Z",
  dateModified: new Date().toISOString(),
});

export default function SecurityPage() {
  return (
    <>
      <PageJsonLd
        title="Security"
        description="Security practices and measures at PanelManage. Learn how we protect application and data security in our custom management systems and admin panels."
        url="https://panelmanage.com/security"
        datePublished="2025-01-15T00:00:00Z"
        dateModified={new Date().toISOString()}
        type="WebPage"
        breadcrumbs={[
          { name: "Home", item: "https://panelmanage.com" },
          { name: "Security", item: "https://panelmanage.com/security" },
        ]}
      />
      <main className="mx-auto w-full max-w-[900px] px-5 py-20 text-white">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Security</h1>
        <p className="text-sm text-zinc-300">
          This page will outline how PanelManage approaches application and data
          security. Content to be finalized.
        </p>
      </main>
    </>
  );
}
