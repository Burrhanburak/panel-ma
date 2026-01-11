"use client";

import React from "react";

export function Features() {
  return (
    <section
      id="features"
      aria-label="Panel Features"
      className="w-full flex justify-center px-4 py-20 md:py-28"
    >
      <div className="w-full max-w-[1520px] grid gap-12 md:gap-14  lg:gap-16 lg:grid-cols-[320px_1fr] xl:grid-cols-[360px_1fr] items-start">
        {/* Section title */}
        <div className="flex flex-col gap-4 text-center lg:text-left max-w-2xl lg:max-w-none lg:sticky lg:top-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white">
            Everything your custom panel needs
          </h2>
          <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
            We don’t ship generic software. We design admin panels, dashboards,
            and workflows tailored to how your business actually operates.
          </p>
        </div>

        {/* USP minis */}
        <section
          aria-label="Panel capabilities"
          className="w-full grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4"
        >
          {USP_ITEMS.map((usp) => (
            <div
              key={usp.title}
              className="flex flex-col gap-3 rounded-2xl border border-white/5  bg-[#0f0f0f] p-4"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 p-[2px]">
                <div className="w-full h-full rounded-[15px] bg-neutral-900 relative overflow-hidden">
                  <div className="absolute inset-x-0 bottom-[-30%] h-16 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.7),_transparent_70%)] opacity-60" />
                  <div className="relative flex h-full items-center justify-center">
                    <span className="text-white text-lg">{usp.icon}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-white">
                  {usp.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {usp.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

const USP_ITEMS = [
  {
    title: "Custom-built modules",
    description:
      "Appointments, staff tracking, bursary systems, approvals, reports—only what your business needs.",
    icon: "▦",
  },
  {
    title: "Role-based access",
    description:
      "Different views and permissions for admins, staff, doctors, partners, or students.",
    icon: "⛉",
  },
  {
    title: "Workflow-driven logic",
    description:
      "From application → approval → payment or booking → visit → invoice—fully structured flows.",
    icon: "⇄",
  },
  {
    title: "Scales with your business",
    description:
      "Start simple, add new modules, users, and panels as your operations grow.",
    icon: "∞",
  },
] as const;
