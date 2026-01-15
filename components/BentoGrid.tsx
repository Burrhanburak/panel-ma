"use client";

import { motion } from "motion/react";
import Image from "next/image";
import {
  ShieldCheck,
  LockKeyhole,
  MailCheck,
  Fingerprint,
  ServerCog,
  CalendarClock,
  FileText,
  BadgeCheck,
  Zap,
  BriefcaseBusiness,
  GraduationCap,
  Building2,
  Users,
  ClipboardCheck,
  FileSpreadsheet,
  Receipt,
  CreditCardIcon,
} from "lucide-react";
import { Logo } from "./Logo";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/**
 * Activity feed (workflow events) — keep it realistic + diverse
 * Covers appointment / clinic / employee / scholarship + security
 */
const activityEvents = [
  {
    icon: CalendarClock,
    title: "Appointment confirmed",
    meta: "Today • 14:30",
  },
  {
    icon: FileText,
    title: "Document uploaded",
    meta: "Today • 15:05",
  },
  {
    icon: ClipboardCheck,
    title: "Record approved",
    meta: "Today • 15:20",
  },
  {
    icon: Users,
    title: "Staff assignment updated",
    meta: "Today • 16:10",
  },
  {
    icon: ShieldCheck,
    title: "IP allowlist applied",
    meta: "Today • 16:00",
  },
];

/**
 * Outcomes (ops outputs) — what the system produces
 */
const outcomeEvents = [
  { icon: Receipt, label: "Invoice generated" },
  { icon: CreditCardIcon, label: "Payment captured" },
  { icon: FileSpreadsheet, label: "Weekly report exported" },
  { icon: ServerCog, label: "Audit log recorded" },
];

export default function BentoGrid() {
  return (
    <section className="bg-black py-8 sm:py-16 lg:py-24 px-2">
      <motion.div
        className="mx-auto grid w-full max-w-[1500px] grid-cols-1 gap-6 sm:grid-cols-1 sm:px-6 md:grid-cols-2 md:gap-7 lg:grid-cols-2 lg:gap-8 lg:px-10 xl:grid-cols-2 2xl:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* 1) HERO CARD (gif/video) */}
        <motion.div
          variants={cardVariants}
          className="bg-card border border-white/5 flex flex-col overflow-hidden rounded-xl pb-6 text-white sm:col-span-2"
        >
          <div className="group relative flex items-center justify-center overflow-hidden" />
          {/* <Video
            src="/m.gif"
            alt="PanelManage demo"
            width={1000}
            height={1000}
          /> */}
          <div className="flex justify-center items-center w-full ">
            <video
              className="w-full max-w-4xl rounded-xl shadow-lg"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              <source src="/sec-mo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="space-y-4 px-6 text-white">
            <h3 className="text-2xl font-semibold">
              Launch workflow-ready management systems in weeks
            </h3>
            <p className="text-white/80 text-lg">
              We build <b>appointment</b>, <b>clinic</b>, <b>employee</b>,{" "}
              <b>scholarship</b>, and <b>practice management systems</b> as{" "}
              <b>custom admin panel software</b>—with the exact modules, roles,
              and approval steps your operation needs.
            </p>
          </div>
        </motion.div>

        {/* 2) ROLE-BASED WORKSPACE + APPROVALS */}
        <motion.div
          variants={cardVariants}
          className="bg-card border border-white/5 flex flex-col gap-6 overflow-hidden rounded-xl py-6 text-white"
        >
          <div className="flex h-61.5 flex-1 items-center justify-center">
            <div className="relative w-full max-w-72 space-y-4">
              <div className="flex items-center justify-between px-4">
                <span className="text-white/70 text-xs font-medium uppercase tracking-wide">
                  Role-based workspace
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
                  Live
                  <span className="inline-flex size-1.5 rounded-full bg-green-500" />
                </span>
              </div>

              <div className="relative mx-4 overflow-hidden rounded-xl border bg-card/60 p-3">
                <div className="flex flex-wrap items-center gap-2">
                  {["SUPER ADMIN", "ADMIN", "STAFF", "REVIEWER"].map((role) => (
                    <div
                      key={role}
                      className="bg-card/90 flex h-7 px-2.5 items-center justify-center rounded-full text-[10px] font-semibold shadow-sm"
                    >
                      {role}
                    </div>
                  ))}
                </div>

                <div className="mt-4 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Approvals workflow</span>
                    <span className="h-1.5 w-16 overflow-hidden rounded-full bg-border">
                      <span className="block h-full w-4/5 rounded-full bg-primary" />
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70">Permissions (RBAC)</span>
                    <span className="h-1.5 w-16 overflow-hidden rounded-full bg-border">
                      <span className="block h-full w-3/4 rounded-full bg-primary/80" />
                    </span>
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-card/70 to-transparent" />
              </div>
            </div>
          </div>

          <div className="space-y-4 px-6 text-white">
            <h3 className="text-2xl font-semibold">Teams work in one system</h3>
            <p className="text-white/80 text-lg">
              Doctors, admins, HR, coordinators, and partners each get a secure
              view. Approvals, assignments, and handoffs stay inside the
              system—not scattered across messages and spreadsheets.
            </p>
          </div>
        </motion.div>

        {/* 3) SECURITY / COMPLIANCE */}
        <motion.div
          variants={cardVariants}
          className="bg-card border border-white/5 flex flex-col gap-6 overflow-hidden rounded-xl py-6 text-white"
        >
          <div className="flex h-61.5 flex-1 items-center justify-center">
            <div className="relative w-full max-w-72 space-y-4 px-4">
              <div className="flex items-center justify-between">
                <span className="text-white/70 text-xs font-medium uppercase tracking-wide">
                  Security controls
                </span>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-white">
                  Enforced
                </span>
              </div>

              <div className="relative overflow-hidden rounded-xl border bg-card/60 p-4 space-y-2">
                {[
                  { icon: LockKeyhole, text: "2FA / SSO ready" },
                  { icon: Fingerprint, text: "Role-based access (RBAC)" },
                  { icon: ShieldCheck, text: "IP allowlist / blocklist" },
                  {
                    icon: MailCheck,
                    text: "Email verification + bot protection",
                  },
                ].map((x) => {
                  const Icon = x.icon;
                  return (
                    <div
                      key={x.text}
                      className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs"
                    >
                      <Icon className="size-4 text-white/80" />
                      <span className="text-white/80">{x.text}</span>
                    </div>
                  );
                })}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-card/70 to-transparent" />
              </div>
            </div>
          </div>

          <div className="space-y-4 px-6 text-white">
            <h3 className="text-2xl font-semibold">
              Security built for operations
            </h3>
            <p className="text-white/80 text-lg">
              Protect your management system with IP rules, verified accounts,
              bot protection, and permissioned actions. Keep every change
              traceable with audit logs and approval states.
            </p>
          </div>
        </motion.div>

        {/* 4) MODULES / INDUSTRIES (badges) */}
        <motion.div
          variants={cardVariants}
          className="bg-card border border-white/5 flex flex-col gap-6 overflow-hidden rounded-xl py-6 text-white"
        >
          <div className="relative flex h-64 items-center justify-center px-6">
            {/* Concentric rings */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="size-44 rounded-full border border-white/25" />
                <div className="absolute inset-0 size-36 rounded-full border border-white/40" />
                <div className="absolute inset-0 size-26 rounded-full border border-white/60" />
              </div>
            </div>

            {/* Center logo */}
            <div className="relative">
              <span className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-card shadow-lg backdrop-blur">
                <span className="flex size-full items-center justify-center">
                  <span className="flex size-12 items-center justify-center rounded-full border border-black/50 bg-white/15 text-base font-semibold text-white">
                    {/* <Image
                      src="/un.svg"
                      alt="PanelManage"
                      width={20}
                      height={20}
                    /> */}
                    <Logo className="text-center p-1" />
                  </span>
                </span>
              </span>
            </div>

            {/* Badges (use-cases that match your SEO pages) */}
            <div className="absolute top-6 left-10 -rotate-6">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-black/30 bg-white/10 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur">
                <Building2 className="size-3.5 text-white" />
                Clinic
              </span>
            </div>
            <div className="absolute bottom-8 left-10 rotate-4">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-black/30 bg-white/10 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur">
                <CalendarClock className="size-3.5 text-white" />
                Appointment
              </span>
            </div>
            <div className="absolute top-6 right-8 -rotate-8">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-black/30 bg-white/10 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur">
                <Users className="size-3.5 text-white" />
                Employee
              </span>
            </div>
            <div className="absolute right-10 bottom-8 rotate-8">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-black/30 bg-white/10 px-3 py-1.5 text-xs font-medium text-white shadow-sm backdrop-blur">
                <GraduationCap className="size-3.5 text-white" />
                Scholarship
              </span>
            </div>
          </div>

          <div className="px-6 flex flex-col gap-2">
            <h5 className="text-2xl font-semibold">
              Modules built to match your workflow
            </h5>
            <p className="text-white/80 text-lg">
              Tables, forms, approvals, document uploads, exports, permissions,
              audit logs, and reporting—assembled module by module to fit your
              process.
            </p>
          </div>
        </motion.div>

        {/* 5) WORKFLOW -> OUTCOMES (marquee) */}
        <motion.div
          variants={cardVariants}
          className="bg-card border border-white/5 flex flex-col gap-6 overflow-hidden rounded-xl pb-6 text-white"
        >
          <div className="relative isolate flex min-h-97 flex-1 items-end">
            {/* Top activity marquee */}
            <div
              className="group absolute top-0 left-1/2 z-0 flex h-1/2 w-full max-w-72 -translate-x-1/2 flex-col gap-[var(--marquee-gap)] overflow-hidden"
              style={
                {
                  "--marquee-duration": "22s",
                  "--marquee-delay": "0s",
                  "--marquee-gap": "1rem",
                } as React.CSSProperties
              }
            >
              {Array.from({ length: 3 }).map((_, groupIdx) => (
                <div
                  key={`activity-group-${groupIdx}`}
                  className="z-0 flex shrink-0 flex-col justify-around gap-[var(--marquee-gap)] animate-marquee-vertical [animation-direction:reverse]"
                  style={
                    {
                      animationDelay: "var(--marquee-delay)",
                    } as React.CSSProperties
                  }
                >
                  {activityEvents.map((event) => {
                    const Icon = event.icon;
                    return (
                      <div
                        key={`${groupIdx}-${event.title}-${event.meta}`}
                        className="bg-card flex items-start gap-3 rounded-md border px-4 py-1.5"
                      >
                        <span className="relative flex size-8 shrink-0 overflow-hidden rounded-full border border-emerald-500/20 bg-emerald-500/10">
                          <span className="flex size-full items-center justify-center text-emerald-400">
                            <Icon className="size-4.5" aria-hidden="true" />
                          </span>
                        </span>
                        <div className="flex flex-col text-white">
                          <span className="font-medium">{event.title}</span>
                          <span className="text-white/70 text-sm">
                            {event.meta}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Bottom outcomes marquee */}
            <div
              className="group absolute bottom-0 left-1/2 z-0 flex h-1/2 w-full max-w-72 -translate-x-1/2 flex-col gap-[var(--marquee-gap)] overflow-hidden p-3"
              style={
                {
                  "--marquee-duration": "22s",
                  "--marquee-delay": "0s",
                  "--marquee-gap": "1rem",
                } as React.CSSProperties
              }
            >
              {Array.from({ length: 3 }).map((_, groupIdx) => (
                <div
                  key={`outcome-group-${groupIdx}`}
                  className="z-0 flex shrink-0 flex-col justify-around gap-[var(--marquee-gap)] animate-marquee-vertical [animation-direction:reverse]"
                  style={
                    {
                      animationDelay: "var(--marquee-delay)",
                    } as React.CSSProperties
                  }
                >
                  {outcomeEvents.map((event) => {
                    const Icon = event.icon;
                    return (
                      <div
                        key={`${groupIdx}-${event.label}`}
                        className="bg-card flex items-start gap-3 rounded-md border px-4 py-1.5"
                      >
                        <span className="relative flex size-7 shrink-0 overflow-hidden rounded-lg">
                          <span className="flex size-full items-center justify-center rounded-lg bg-green-600/10 text-xs dark:bg-green-400/10">
                            <Icon className="size-4 text-green-600 dark:text-green-400" />
                          </span>
                        </span>
                        <div className="flex flex-col text-white">
                          <span className="font-medium">{event.label}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {/* Blur bands */}
            <div className="from-foreground/[0.07] absolute inset-x-0 bottom-1/2 z-10 h-15 w-full -translate-y-10.5 bg-gradient-to-t to-transparent to-60% backdrop-blur-[1.5px]" />
            <div className="from-foreground/[0.07] absolute inset-x-0 top-1/2 z-10 h-15 w-full translate-y-10.5 bg-gradient-to-b to-transparent to-60% backdrop-blur-[1.5px]" />

            {/* Side shapes */}
            <svg
              width={55}
              height={144}
              viewBox="0 0 55 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 left-0 -translate-y-1/2"
            >
              <path
                d="M22.4993 19.52C33.2382 26.5336 54.7912 28.9577 54.7912 28.9577V114.495C54.7912 114.495 33.2382 116.92 22.4993 123.933C10.4369 131.811 0 143.453 0 143.453V0C0 0 10.4369 11.642 22.4993 19.52Z"
                fill="var(--card)"
              />
            </svg>
            <svg
              width={55}
              height={144}
              viewBox="0 0 55 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-1/2 right-0 -translate-y-1/2"
              style={{ transform: "translateY(-50%) rotateY(180deg)" }}
            >
              <path
                d="M22.4993 19.52C33.2382 26.5336 54.7912 28.9577 54.7912 28.9577V114.495C54.7912 114.495 33.2382 116.92 22.4993 123.933C10.4369 131.811 0 143.453 0 143.453V0C0 0 10.4369 11.642 22.4993 19.52Z"
                fill="var(--card)"
              />
            </svg>

            {/* Center band */}
            <div className="bg-card absolute inset-x-0 top-1/2 z-20 flex h-21.5 w-full -translate-y-1/2 items-center justify-center">
              <div className="text-white flex items-center gap-3.5">
                {/* <Image src="/un.svg" alt="PanelManage" width={20} height={20} /> */}
                <Logo className="text-center p-1" />
                <span className="text-xl font-semibold">PanelManage</span>
              </div>
            </div>

            <div className="from-card pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b to-transparent" />
            <div className="from-card pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l to-transparent" />
            <div className="from-card pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t to-transparent" />
            <div className="from-card pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r to-transparent" />
          </div>

          <div className="space-y-2 px-6 text-white">
            <div className="flex items-center gap-2 text-emerald-400">
              <Zap className="size-5" />
              <h3 className="text-2xl font-semibold text-white">
                From workflow to real-time outcomes
              </h3>
            </div>

            <div className="flex items-start gap-2 text-white/80 text-sm">
              <ServerCog className="size-4.5 mt-0.5 text-emerald-400" />
              <p>
                Connect bookings, approvals, documents, and staff operations to
                invoicing, payments, exports, audit logs, and reporting—so your
                management system runs end-to-end operations in one place.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
