import type { Metadata } from "next";
import Link from "next/link";
import {
  Layers,
  CalendarRange,
  HeartPulse,
  Users,
  School,
  ClipboardList,
  Workflow,
  FileSignature,
  Building2,
  BriefcaseBusiness,
  Scan,
  Truck,
  Wrench,
  Handshake,
  UserCog,
  ShieldCheck,
  Dumbbell,
  UtensilsCrossed,
  Scissors,
} from "lucide-react";
import { SOLUTIONS_ALL } from "@/data/solutions";
import { createMetadata } from "@/lib/metadata";
import { PageJsonLd } from "@/components/PageJsonLd";

export const metadata: Metadata = createMetadata({
  title: "Custom Management Systems We Build | Bespoke Admin Panels",
  description:
    "Skip the SaaS limits. Get a custom-built management system designed around how your team actually works—scheduling, approvals, uploads, exports, roles, and reporting.",
  keywords:
    "custom panel management system, bespoke admin panel, custom software development, workflow approvals, role based access, clinic management system, hr management system, school management system, appointment management system",
  url: "https://panelmanage.com/solutions",
  datePublished: "2025-01-15T00:00:00Z",
  dateModified: new Date().toISOString(),
});

const iconBySlug: Record<string, React.ReactNode> = {
  "appointment-management-system": (
    <CalendarRange className="size-4 text-[#10b981]" />
  ),
  "clinic-management-system": <HeartPulse className="size-4 text-[#10b981]" />,
  "employee-management-system": <Users className="size-4 text-[#10b981]" />,
  "scholarship-management-system": <School className="size-4 text-[#10b981]" />,
  "school-management-system": <School className="size-4 text-[#10b981]" />,
  "practice-management-system": (
    <ClipboardList className="size-4 text-[#10b981]" />
  ),
  "workflow-management-system": <Workflow className="size-4 text-[#10b981]" />,
  "case-management-system": <FileSignature className="size-4 text-[#10b981]" />,
  "admin-panel-software": <Layers className="size-4 text-[#10b981]" />,
  "internal-management-system": <Building2 className="size-4 text-[#10b981]" />,
  "mental-health-practice-management-system": (
    <HeartPulse className="size-4 text-[#10b981]" />
  ),
  "psychologist-practice-management-software": (
    <HeartPulse className="size-4 text-[#10b981]" />
  ),
  "teacher-management-system": <School className="size-4 text-[#10b981]" />,
  "law-firm-case-management-system": (
    <BriefcaseBusiness className="size-4 text-[#10b981]" />
  ),
  "inventory-management-system": <Scan className="size-4 text-[#10b981]" />,
  "property-management-system": <Building2 className="size-4 text-[#10b981]" />,
  "project-management-system": (
    <ClipboardList className="size-4 text-[#10b981]" />
  ),
  "restaurant-management-system": (
    <UtensilsCrossed className="size-4 text-[#10b981]" />
  ),
  "salon-management-system": <Scissors className="size-4 text-[#10b981]" />,
  "gym-management-system": <Dumbbell className="size-4 text-[#10b981]" />,
  "fleet-management-system": <Truck className="size-4 text-[#10b981]" />,
  "maintenance-management-system": <Wrench className="size-4 text-[#10b981]" />,
  "vendor-management-system": <Handshake className="size-4 text-[#10b981]" />,
  "hr-management-system": <UserCog className="size-4 text-[#10b981]" />,
  "insurance-claims-management-system": (
    <ShieldCheck className="size-4 text-[#10b981]" />
  ),
};

const defaultIcon = <Layers className="size-4 text-[#10b981]" />;

export default function SolutionsHub() {
  return (
    <>
      <PageJsonLd
        title="Custom Panel Management Systems We Build"
        description="Explore custom panel management systems built around your workflow — scheduling, approvals, uploads, exports, roles, permissions, and reporting. Appointment, clinic, HR, school, case, workflow, inventory, and more."
        url="https://panelmanage.com/solutions"
        datePublished="2025-01-15T00:00:00Z"
        dateModified="2025-01-20T00:00:00Z"
        type="CollectionPage"
        breadcrumbs={[
          { name: "Home", item: "https://panelmanage.com" },
          { name: "Solutions", item: "https://panelmanage.com/solutions" },
        ]}
      />
      {/* ItemList schema for hub page - GEO/AI optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: SOLUTIONS_ALL.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.h1,
              url: `https://panelmanage.com/solutions/${s.slug}`,
            })),
          }),
        }}
      />
      <main className="mx-auto w-full max-w-[1100px] px-5 py-25 text-white">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Custom Management Systems Built for Your Workflow
          </h1>
          <p className="text-zinc-300 text-lg">
            Skip the SaaS limits. Get a custom-built management system designed around how your team actually works—scheduling, approvals, uploads, exports, roles, and reporting.
          </p>
        </header>

        <section className="mt-10 grid gap-3 sm:grid-cols-2">
          {SOLUTIONS_ALL.map((s) => (
            <Link
              key={s.slug}
              href={`/solutions/${s.slug}`}
              className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-4 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-2 text-white">
                <span className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 p-2">
                  {iconBySlug[s.slug] ?? defaultIcon}
                </span>
                <h2 className="text-lg font-semibold">{s.pageName}</h2>
              </div>
              <p className="text-sm text-zinc-300 line-clamp-2">
                {s.metaDescription.length > 120
                  ? `${s.metaDescription.substring(0, 120)}...`
                  : s.metaDescription}
              </p>
              <div className="flex items-center gap-2 text-sm">
                {/* <span className="text-[#94989]  font-bold">{s.keyword}</span> */}
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
