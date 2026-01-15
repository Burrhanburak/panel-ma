import { Calendar, TrendingUp, School, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PanelUseCase = {
  title: string;
  slug: string;
  icon: React.ReactNode;
  description: string;
  items: string[];
};

const USE_CASES: PanelUseCase[] = [
  {
    title: "Clinic & Doctor Management System",
    icon: <User className="size-4" />,
    slug: "clinic-management-system",
    description:
      "Manage appointments, patient records, prescriptions, billing, and staff roles in a single clinic management system.",
    items: [
      "Appointment calendar",
      "Patient profiles",
      "Visit notes",
      "Invoices & receipts",
      "Role-based access",
      "Analytics overview",
    ],
  },
  {
    title: "Appointment Management System",
    icon: <Calendar className="size-4" />,
    slug: "appointment-management-system",
    description:
      "A complete appointment management system with bookings, confirmations, reminders, cancellations, and multi-location support.",
    items: [
      "Availability rules",
      "Online booking page",
      "SMS / Email reminders",
      "Waitlist logic",
      "Multi-branch support",
      "No-show tracking",
    ],
  },
  {
    title: "Employee Management System",
    slug: "employee-management-system",
    icon: <User className="size-4" />,
    description:
      "Track shifts, attendance, tasks, performance, and payroll-ready exports with a centralized employee management system.",
    items: [
      "Shift schedules",
      "Check-in/out",
      "Task tracking",
      "Team reports",
      "Leave requests",
      "Export to CSV",
    ],
  },
  {
    title: "Scholarship & School Management System",
    slug: "scholarship-management-system",
    icon: <School className="size-4" />,
    description:
      "Manage student applications, eligibility checks, approvals, and funding workflows in a scholarship and school management system.",
    items: [
      "Application forms",
      "Document uploads",
      "Eligibility scoring",
      "Committee approvals",
      "Payment status",
      "Audit history",
    ],
  },
];

export function PanelsSection() {
  return (
    <section
      id="panels"
      aria-label="Custom Panels"
      className="w-full flex justify-center px-4 py-20 md:py-28"
    >
      <div className="flex w-full max-w-[1520px] flex-col items-center gap-10 md:gap-12">
        {/* Section title */}
        <div className="flex w-full max-w-[860px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Custom management systems for real businesses
          </h2>
          <p className="text-sm md:text-base text-zinc-300">
            Appointment, clinic, employee, scholarship, and practice management
            systems — built as modern admin panels tailored to your process.
          </p>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1">
              <div className="h-5 w-6 rounded-md bg-[#10b981] text-black text-xs font-semibold grid place-items-center">
                12+
              </div>
              <span className="text-sm text-white">custom modules</span>
              <span className="text-sm text-zinc-400">
                roles, reports, workflow
              </span>
            </div>
          </div>
        </div>

        {/* Main columns */}
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:gap-6">
          {/* Left big visual card */}
          <div className="flex flex-1 min-w-[320px]">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-1 rounded-[15px] bg-[#000000]" />
              <div className="absolute inset-1 rounded-[15px] bg-[radial-gradient(100%_80%_at_50%_100%,rgba(16,185,129,0.35)_0%,transparent_70%)]" />
              <div className="absolute inset-1 bg-[url('/blur2.svg')] opacity-30 mix-blend-screen" />

              <div className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-8 py-10">
                <div className=" w-20 rounded-3xl bg-black shadow-lg shadow-emerald-500/30 grid ">
                  <Image
                    src="/section-logo.png"
                    alt="PanelManage"
                    width={120}
                    height={100}
                  />
                </div>

                <p className="text-lg md:text-xl font-semibold text-white">
                  We build panels your team actually uses.
                </p>

                <p className="text-sm text-zinc-300 text-center max-w-md leading-relaxed">
                  From doctor dashboards to employee tracking and bursary
                  workflows—PanelManage delivers custom admin panels with the
                  exact modules your business needs.
                </p>

                <div className="mt-2 grid grid-cols-2 gap-2 w-full max-w-md">
                  {[
                    "Secure login",
                    "Role permissions",
                    "Audit logs",
                    "Modern UI",
                  ].map((x) => (
                    <div
                      key={x}
                      className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#111111] px-3 py-2 text-sm text-white"
                    >
                      <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                      <span>{x}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right columns grid */}
          <div className="flex flex-1 min-w-[320px] flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {USE_CASES.map((panel) => (
                <Link
                  key={panel.slug}
                  href={`/solutions/${panel.slug}`}
                  className="block h-full"
                  aria-label={`${panel.title} solution`}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#1a1a1a_0%,#0f0f0f_100%)] p-[1px] transition hover:brightness-110">
                    <div className="absolute inset-[1px] rounded-[15px] bg-[#0f0f0f]" />
                    <div className="relative z-10 flex h-full flex-col gap-4 p-5">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-[#10b981]">
                          {panel.icon}
                          <h5 className="text-lg font-semibold text-white">
                            {panel.title}
                          </h5>
                        </div>
                        <p className="text-sm text-zinc-400 leading-relaxed">
                          {panel.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {panel.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-[#111111] px-3 py-2 text-sm text-white"
                          >
                            <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* küçük internal-link label (opsiyonel) */}
                      <div className="mt-2 text-sm text-emerald-500 flex items-center gap-2">
                        View solution{" "}
                        <TrendingUp className="size-4 text-[#10b981]" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Optional: small note */}
            <div className="rounded-2xl border border-zinc-800 bg-[#0f0f0f] p-5">
              <p className="text-sm text-zinc-300 flex items-center gap-2">
                Need a different panel (partner portal, reseller dashboard,
                inventory, finance, approvals)? We can build it—module by
                module.
              </p>
              <Link
                href="/contact"
                className="text-emerald-500 flex items-center gap-2"
              >
                Contact us <TrendingUp className="size-4 text-[#10b981]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
