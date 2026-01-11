"use client";

import Image from "next/image";

type StatCard = {
  label: string;
  value: string;
  accent?: boolean;
  sublabel?: string;
};

type Testimonial = {
  quote: string;
  name: string;
  company: string;
  avatar: string;
};
const STATS: StatCard[] = [
  {
    label: "Workflow clarity",
    value: "One place",
    sublabel: "all roles & steps in one place",
    accent: false,
  },
  {
    label: "Faster shipping",
    value: "Weeks",
    sublabel: "planning - design - build - testing - launch",
    accent: true,
  },
  {
    label: "Less manual ops",
    value: "Automated",
    sublabel: "approvals, reminders, exports",
    accent: false,
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We replaced spreadsheets with a real workflow panel. Booking, approvals, and reporting are now in one place — our team finally moves fast without chaos.",
    name: "Clinic Ops Lead",
    company: "Healthcare Panel",
    avatar: "/testi/test-1.png",
  },
  {
    quote:
      "The employee tracking panel saved us hours every week. Shifts, tasks, and exports are simple — and permissions are exactly how our business runs.",
    name: "Operations Manager",
    company: "Workforce Panel",
    avatar: "/testi/2.png",
  },
  {
    quote:
      "Our scholarship workflow used to be email-based and messy. Now applications, document uploads, scoring, and approvals run cleanly with full visibility.",
    name: "Program Coordinator",
    company: "Scholarship Management System",
    avatar: "/testi/4.png",
  },
];

const AVATAR_GRID = [
  "/testi/1.png",
  "/testi/2.png",
  "/testi/test-1.png",
  "/testi/4.png",
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="w-full flex justify-center px-4 py-20 md:py-28"
    >
      <div className="flex w-full max-w-[1520px] flex-col items-center gap-12 md:gap-20">
        {/* Section title */}
        <div className="flex w-full max-w-[803px] flex-col items-center gap-4 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Teams ship custom panels faster with PanelManage{" "}
          </h2>
          <p className="text-sm md:text-base text-zinc-400">
            Appointment management systems, clinic dashboards, employee tracking
            systems, scholarship management systems, and psychologist workflows
            — built to match your exact process.
          </p>
        </div>

        {/* Main testimonial row */}
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:gap-8">
          {/* Left column: rating + avatar grid */}
          <div className="flex flex-1 min-w-[260px] flex-col gap-4">
            <div className="relative h-full min-h-[260px] rounded-2xl  p-[1px]">
              <div className="absolute inset-[1px] rounded-[15px] bg-[#0f0f0f]" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-6 p-5">
                {/* Rating + stars */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-semibold text-white">
                      Trusted
                    </span>
                    <span className="text-base text-zinc-500">
                      Built for workflow-heavy teams (ops, clinics, schools,
                      internal tools)
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className="inline-block h-3.5 w-3.5 rounded-[4px] bg-gradient-to-b from-[#10b981] to-[#059669]"
                      />
                    ))}
                  </div>
                </div>

                {/* Avatar grid + label */}
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-5 gap-2">
                    {AVATAR_GRID.map((src) => (
                      <div
                        key={src}
                        className="relative aspect-square overflow-hidden rounded-xl border border-zinc-900/80"
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          sizes="42px"
                          className="object-cover"
                        />
                      </div>
                    ))}
                    <div className="flex aspect-square flex-col items-center justify-center gap-1 rounded-xl border border-zinc-900/80 bg-zinc-900">
                      <span className="text-xs font-medium text-white">+</span>
                      <span className="text-xs font-medium text-white">
                        More
                      </span>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-white">
                      Custom panel teams
                    </p>
                    <p className="text-xs text-zinc-500">
                      launching workflow-ready dashboards
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leave a review button */}
            <div>
              <button
                type="button"
                className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-[linear-gradient(180deg,#262626_0%,#0f0f0f_100%)] text-sm font-medium text-white shadow-md shadow-black/40 transition hover:brightness-110"
              >
                Request a demo
              </button>
            </div>
          </div>

          {/* Middle column: featured testimonial */}
          <div className="flex flex-1 min-w-[260px] flex-col gap-4">
            <TestimonialCard testimonial={TESTIMONIALS[0]} />
            <TestimonialCard testimonial={TESTIMONIALS[1]} />
          </div>

          {/* Right column: one more testimonial */}
          <div className="flex flex-1 min-w-[260px] flex-col gap-4">
            <TestimonialCard testimonial={TESTIMONIALS[2]} />
          </div>
        </div>

        {/* Bottom mini stat cards */}
        <div className="flex w-full flex-wrap items-stretch gap-4 md:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex min-w-[160px] flex-1 basis-[160px]"
            >
              <div
                className={
                  stat.accent
                    ? "relative flex h-full w-full flex-col justify-between rounded-2xl  p-[1px]"
                    : "relative flex h-full w-full flex-col justify-between rounded-2xl  p-[1px]"
                }
              >
                <div
                  className={
                    stat.accent
                      ? "absolute inset-[1px] rounded-[15px] bg-[#022c22]"
                      : "absolute inset-[1px] rounded-[15px] bg-[#171717]"
                  }
                />
                {stat.accent && (
                  <div className="absolute inset-[1px] rounded-[15px] bg-[radial-gradient(100%_100%_at_0%_50%,rgba(16,185,129,1)_0%,rgba(16,185,129,0)_100%)] opacity-10" />
                )}
                <div className="relative z-10 flex h-full flex-col justify-between gap-3 p-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-semibold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <p
                      className={
                        stat.accent
                          ? "text-sm font-medium text-[#ffead2]"
                          : "text-sm font-medium text-zinc-100"
                      }
                    >
                      {stat.label}
                    </p>
                    {stat.sublabel && (
                      <p className="text-xs text-zinc-300">{stat.sublabel}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-between rounded-2xl bg-[linear-gradient(180deg,#262626_0%,#0f0f0f_25%)] p-[1px]">
      <div className="absolute inset-[1px] rounded-[15px] bg-[#0f0f0f]" />
      <div className="relative z-10 flex h-full flex-col gap-6 p-5">
        <p className="text-sm leading-relaxed text-zinc-200">
          {testimonial.quote}
        </p>
        <div className="mt-auto flex items-center justify-between gap-3">
          <div className="space-y-1">
            <p className="text-sm font-medium text-white">{testimonial.name}</p>
            <p className="text-xs text-zinc-400">{testimonial.company}</p>
          </div>
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
