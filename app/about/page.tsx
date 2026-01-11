import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "About PanelManage",
  description:
    "Learn about PanelManage and how we build custom management systems and admin panels for appointments, clinics, employees, scholarships, and practices.",
  keywords:
    "about panelmanage, custom admin panel developer, management system builder, Laravel admin panel development",
  url: "https://panelmanage.com/about",
  datePublished: "2025-01-15T00:00:00Z",
  dateModified: new Date().toISOString(),
});

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-[900px] px-5 py-20 text-white">
      <h1 className="text-3xl md:text-4xl font-semibold mb-4">About</h1>
      <p className="text-sm text-zinc-300">
        Content to be finalized.
      </p>
    </main>
  );
}
