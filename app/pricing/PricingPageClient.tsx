"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TrendingUp, Clock } from "lucide-react";

type PlanKey = "starter" | "suite" | "custom";

type Plan = {
  key: PlanKey;
  name: string;
  highlight?: boolean;
  price: string;
  priceNote: string;
  maintenance: string;
  delivery: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

type Row = {
  label: string;
  values: Record<PlanKey, boolean | string>;
};

/* ================= CONSISTENT ROW STYLES (ALIGN FIX) ================= */
const ROW_H = "h-14"; // 56px
const LABEL_ROW = `${ROW_H} border-b border-white/10 text-white/80 text-sm flex items-center overflow-hidden`;
const CELL_ROW = `${ROW_H} border-b border-white/10 flex items-center justify-center`;
const GROUP_TITLE = "h-16 flex items-center text-lg font-semibold text-white";

const PLANS: Plan[] = [
  {
    key: "starter",
    name: "Starter",
    price: "$4,950+",
    priceNote: "starting from (custom panel)",
    maintenance: "$150–$250 / month",
    delivery: "2–4 weeks",
    ctaLabel: "Request Quote",
    ctaHref: "/contact?type=panel-starter",
  },
  {
    key: "suite",
    name: "Suite",
    highlight: true,
    price: "$7,990+",
    priceNote: "starting from (advanced panel)",
    maintenance: "$250–$450 / month",
    delivery: "4–8 weeks",
    ctaLabel: "Request Proposal",
    ctaHref: "/contact?type=panel-suite",
    secondaryHref: "https://panelmanage.com",
  },
  {
    key: "custom",
    name: "Custom",
    price: "Custom",
    priceNote: "scoped per project",
    maintenance: "Ongoing development",
    delivery: "6–12+ weeks",
    ctaLabel: "Start a Conversation",
    ctaHref: "/contact?type=custom",
  },
];

const GROUPS: Array<{ title: string; rows: Row[] }> = [
  {
    title: "Platform",
    rows: [
      {
        label: "Custom modules (tables, forms, actions)",
        values: {
          starter: "Up to 6",
          suite: "12+ (scoped)",
          custom: "Scopable",
        },
      },
      {
        label: "File uploads (docs/images)",
        values: { starter: true, suite: true, custom: true },
      },
      {
        label: "Export (PDF / CSV)",
        values: { starter: "Optional", suite: true, custom: true },
      },
      {
        label: "Import (CSV / XLSX)",
        values: { starter: "Optional", suite: true, custom: true },
      },
      {
        label: "White-label & custom branding",
        values: { starter: "Optional", suite: true, custom: true },
      },
      {
        label: "SSO / OAuth (Google, Microsoft)",
        values: { starter: false, suite: "Optional", custom: true },
      },
      {
        label: "Public API & webhooks",
        values: { starter: false, suite: "Optional", custom: true },
      },
      {
        label: "Reporting dashboard",
        values: { starter: "Basic", suite: true, custom: true },
      },
    ],
  },
  {
    title: "Workflows",
    rows: [
      {
        label: "Workflow states (draft → approved)",
        values: { starter: "Basic", suite: true, custom: true },
      },
      {
        label: "Approval flows (multi-step)",
        values: { starter: false, suite: true, custom: true },
      },
      {
        label: "Notifications (email / in-app)",
        values: { starter: "Optional", suite: true, custom: true },
      },
      {
        label: "Automation-ready hooks",
        values: { starter: "Optional", suite: true, custom: true },
      },
      {
        label: "Multi-language UI",
        values: { starter: false, suite: "Optional", custom: true },
      },
      {
        label: "Embedded AI helpers (summaries, suggestions)",
        values: { starter: false, suite: "Optional", custom: true },
      },
    ],
  },
  {
    title: "Security",
    rows: [
      {
        label: "Roles & permissions (RBAC)",
        values: { starter: "Basic", suite: "Advanced", custom: "Advanced" },
      },
      {
        label: "Secure architecture + rate limiting",
        values: { starter: true, suite: true, custom: true },
      },
      {
        label: "Audit logs",
        values: { starter: false, suite: true, custom: true },
      },
      {
        label: "2FA / OTP-ready auth",
        values: { starter: "Optional", suite: true, custom: true },
      },
      {
        label: "IP allowlist / session controls",
        values: { starter: false, suite: "Optional", custom: true },
      },
    ],
  },
  {
    title: "Infrastructure",
    rows: [
      {
        label: "Deployment-ready setup",
        values: { starter: true, suite: true, custom: true },
      },
      {
        label: "Monitoring + backups",
        values: { starter: "Basic", suite: true, custom: true },
      },
      {
        label: "Performance hardening",
        values: { starter: "Basic", suite: true, custom: true },
      },
      {
        label: "Ongoing maintenance",
        values: { starter: true, suite: true, custom: true },
      },
      {
        label: "Custom domain & subdomain routing",
        values: { starter: "Optional", suite: true, custom: true },
      },
      {
        label: "SLA & priority support",
        values: { starter: false, suite: "Optional", custom: true },
      },
    ],
  },
];

/* ================= ICONS ================= */

function CheckIcon() {
  return (
    <svg viewBox="0 0 256 256" className="size-5 text-white/90 shrink-0">
      <path
        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <span className="inline-flex items-center justify-center size-5 text-white/30">
      —
    </span>
  );
}

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-white/80">{value}</span>;
  }
  return value ? <CheckIcon /> : <MinusIcon />;
}

/* ================= FAQ (PANEL) ================= */

function PricingFAQ() {
  const items = [
    {
      value: "what",
      trigger: "What kind of panels do you build?",
      content: (
        <div className="space-y-3">
          <p>
            We build <b>custom admin panels</b> like appointment systems, doctor
            dashboards, employee tracking, bursary/school panels, psychologist
            panels, partner portals, and other workflow-driven systems.
          </p>
          <p>
            Every project is tailored: modules, roles, approval steps,
            reporting, and automations are scoped based on your needs.
          </p>
        </div>
      ),
    },
    {
      value: "choose",
      trigger: "Starter vs Suite vs Custom — which one?",
      content: (
        <div className="space-y-3">
          <p>
            <b>Starter</b>: focused panel, one core workflow, fast delivery.
          </p>
          <p>
            <b>Suite</b>: advanced roles, approvals, reporting, more modules.
          </p>
          <p>
            <b>Custom</b>: complex systems (multi-tenant, heavy integrations,
            custom automations) — scoped per project.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <Button asChild size="sm" className="text-white rounded-lg">
              <Link href="/contact?type=panel">Get a recommendation</Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="outline"
              className="text-black rounded-lg"
            >
              <Link href="/contact?type=custom">Talk to sales</Link>
            </Button>
          </div>
        </div>
      ),
    },
    {
      value: "delivery",
      trigger: "When does the timeline start?",
      content: (
        <div className="space-y-3">
          <p>
            Timeline starts after scope is confirmed (modules + roles) and we
            have required access/assets. Delivery moves in milestones:{" "}
            <b>spec → UI → build → QA → launch</b>.
          </p>
        </div>
      ),
    },
    {
      value: "maintenance",
      trigger: "What does monthly maintenance include?",
      content: (
        <div className="space-y-3">
          <p>
            Maintenance covers updates, monitoring, backups, security hardening,
            performance checks, and small iterative improvements.
          </p>
        </div>
      ),
    },
  ];

  return (
    <Card className="w-full border-white/10 bg-white/5 text-white">
      <CardHeader>
        <CardTitle className="text-white">FAQ</CardTitle>
        <CardDescription className="text-white/60">
          Quick answers about custom panels, delivery, and maintenance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible defaultValue="what">
          {items.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="border-white/20"
            >
              <AccordionTrigger className="text-white">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-white/75">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}

/* ================= MAIN ================= */

export default function PricingPageClient() {
  const [open, setOpen] = useState<PlanKey>("suite");
  const activePlan = PLANS.find((plan) => plan.key === open);

  return (
    <section className="py-32">
      <div className="container mx-auto px-5 font-medium">
        {/* MOBILE */}
        <div className="md:hidden">
          <div className="flex flex-wrap gap-2 mb-6">
            {PLANS.map((p) => (
              <button
                key={p.key}
                onClick={() => setOpen(p.key)}
                className={`px-3 py-2 rounded-full text-sm border transition ${
                  open === p.key
                    ? "bg-white text-black border-white"
                    : "text-white/80 border-white/15"
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Clock className="size-4 text-white/80" />
              <span className="text-sm text-white/80">
                Delivery for <b className="text-white">{open.toUpperCase()}</b>:{" "}
                {activePlan?.delivery}
              </span>
            </div>
          </div>

          {GROUPS.map((g) => (
            <div key={g.title} className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-2">
                {g.title}
              </h3>
              <div className="border border-white/10 rounded-xl overflow-hidden">
                {g.rows.map((r, idx) => (
                  <div
                    key={r.label}
                    className={`grid grid-cols-2 px-4 ${
                      idx !== g.rows.length - 1
                        ? "border-b border-white/10"
                        : ""
                    } py-3`}
                  >
                    <span className="text-white/80 text-sm">{r.label}</span>
                    <div className="flex justify-end">
                      <Cell value={r.values[open]} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-10">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white text-xl font-semibold">
                Request pricing
              </h3>
              <p className="text-white/60 text-sm mt-2">
                Tell us which panel you need — we'll scope it and send a clear
                quote.
              </p>
              <div className="mt-4 flex gap-2">
                <Button asChild className="w-full rounded-lg">
                  <Link href="/contact?type=panel">
                    Contact
                    <TrendingUp className="size-4 text-white ml-2" />
                  </Link>
                </Button>
              </div>
              <p className="text-white/50 text-xs mt-4">
                Response within 24 hours • Clear scope • No hidden fees
              </p>
            </div>

            <div className="mt-8">
              <PricingFAQ />
            </div>
          </div>
        </div>

        {/* TABLET (md) */}
        <div className="hidden md:block lg:hidden">
          <div className="overflow-x-auto -mx-5 px-5 pb-2">
            <div className="inline-grid grid-cols-[90px_repeat(3,minmax(190px,200px))] gap-4 min-w-max">
              {/* Left labels */}
              <div className="sticky left-0 z-10 bg-[#070204] pr-4">
                <div className="h-[160px]" />
                {GROUPS.map((g) => (
                  <div key={g.title} className="mt-10">
                    <h3 className="h-16 flex items-center text-sm font-semibold text-white">
                      {g.title}
                    </h3>
                    <div className="h-16" />
                    {g.rows.map((r) => (
                      <div key={r.label} className={LABEL_ROW}>
                        <span className="truncate">{r.label}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Plan columns */}
              {PLANS.map((p) => (
                <div
                  key={p.key}
                  className={`px-4 py-6 rounded-2xl border w-[200px] ${
                    p.highlight
                      ? "bg-white/5 border-white/25"
                      : "border-white/10"
                  }`}
                >
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {p.name}
                    </h3>

                    <div className="mb-3 space-y-1.5">
                      {p.price !== "Custom" ? (
                        <p className="text-2xl font-semibold text-white leading-tight">
                          {p.price}
                        </p>
                      ) : (
                        <p className="text-2xl font-semibold text-white leading-tight">
                          {p.price}
                        </p>
                      )}
                      <p className="text-white/60 text-xs">{p.priceNote}</p>
                      <p className="text-white/60 text-xs">{p.maintenance}</p>
                      <p className="text-white/60 text-xs">
                        Delivery: {p.delivery}
                      </p>
                    </div>

                    <Link
                      href={p.ctaHref}
                      className="mt-4 inline-flex justify-center w-full rounded-md bg-white text-black px-3 py-2 text-xs font-medium transition whitespace-nowrap"
                    >
                      {p.ctaLabel}
                    </Link>

                    {p.secondaryHref && (
                      <Link
                        href={p.secondaryHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center text-xs text-white/70 mt-2 underline decoration-white/20 underline-offset-4 hover:text-white leading-relaxed"
                      >
                        {p.secondaryLabel}
                      </Link>
                    )}
                  </div>

                  {GROUPS.map((g) => (
                    <div key={g.title}>
                      <div className="h-16" />
                      {g.rows.map((r) => (
                        <div key={r.label} className={CELL_ROW}>
                          <Cell value={r.values[p.key]} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white text-xl font-semibold">
                Request pricing
              </h3>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                Appointment, doctor, employee tracking, bursary, psychologist
                panels — tell us what you need and we'll scope it clearly.
              </p>

              <div className="mt-4 flex flex-col gap-2">
                <Button asChild className="w-full rounded-lg">
                  <Link href="/contact?type=panel">
                    Contact
                    <TrendingUp className="size-4 text-white ml-2" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-lg border-white/10"
                >
                  <Link href="/contact?type=custom">Talk to sales</Link>
                </Button>
              </div>

              <p className="text-white/50 text-xs mt-4">
                Response within 24 hours • Clear scope • No hidden fees
              </p>
            </div>

            <PricingFAQ />
          </div>
        </div>

        {/* DESKTOP (lg+) */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-4">
          {/* Left labels */}
          <div>
            <div className="h-[160px]" />
            {GROUPS.map((g) => (
              <div key={g.title} className="mt-10">
                <h3 className={GROUP_TITLE}>{g.title}</h3>
                <div className="h-16" />
                {g.rows.map((r) => (
                  <div key={r.label} className={LABEL_ROW}>
                    <span className="truncate">{r.label}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Plan columns */}
          {PLANS.map((p) => (
            <div
              key={p.key}
              className={`px-6 rounded-2xl border ${
                p.highlight ? "bg-white/5 border-white/25" : "border-white/10"
              }`}
            >
              <div className="py-8">
                <h3 className="text-2xl font-semibold text-white">{p.name}</h3>

                {p.price !== "Custom" ? (
                  <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-semibold text-white">
                      {p.price}
                    </p>
                    <span className="text-white/60 text-sm">{p.priceNote}</span>
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="text-3xl font-semibold text-white">
                      {p.price}
                    </p>
                    <p className="text-white/60 text-sm">{p.priceNote}</p>
                    <p className="text-white/60 text-sm">{p.maintenance}</p>
                  </div>
                )}

                {p.price !== "Custom" && (
                  <p className="text-white/60 text-sm mt-1">{p.maintenance}</p>
                )}

                <p className="text-white/60 text-sm mt-1">
                  Delivery: {p.delivery}
                </p>

                <Link
                  href={p.ctaHref}
                  className="mt-4 inline-flex justify-center w-full rounded-md bg-white text-black px-4 py-2 text-sm font-medium transition"
                >
                  {p.ctaLabel}
                </Link>

                {p.secondaryHref && (
                  <Link
                    href={p.secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-sm text-white/70 mt-2 underline decoration-white/20 underline-offset-4 hover:text-white"
                  >
                    {p.secondaryLabel}
                  </Link>
                )}
              </div>

              {GROUPS.map((g) => (
                <div key={g.title}>
                  <div className="h-16" />
                  {g.rows.map((r) => (
                    <div key={r.label} className={CELL_ROW}>
                      <Cell value={r.values[p.key]} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* DESKTOP Bottom CTA + FAQ */}
        <div className="hidden lg:block mt-16">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h3 className="text-white text-2xl font-semibold">
                  Request pricing
                </h3>
                <p className="text-white/60 text-sm mt-2 leading-relaxed">
                  We build custom panels: appointment systems, doctor panels,
                  employee tracking, bursary workflows, psychologist panels, and
                  more.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <Button asChild className="w-full rounded-lg">
                    <Link href="/contact?type=panel">
                      Contact
                      <TrendingUp className="size-4 text-white ml-2" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-lg border-white/10"
                  >
                    <Link href="/contact?type=custom">Talk to sales</Link>
                  </Button>
                </div>

                <p className="text-white/50 text-xs mt-4">
                  Response within 24 hours • Clear scope • No hidden fees
                </p>
              </div>
            </div>

            <div className="col-span-7">
              <PricingFAQ />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
