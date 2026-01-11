"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FaqJsonLd from "@/components/FaqJsonLd";
const FAQ_ITEMS = [
  {
    value: "what-build",
    question: "What kind of management systems do you build?",
    answer:
      "We build management system software delivered as custom admin panels — appointment/booking systems, clinic & doctor dashboards, employee management (shifts/tasks), scholarship and school workflows, psychologist practice management, case/workflow management, and internal operations systems. If you can describe the steps, roles, and rules — we can build it.",
  },
  {
    value: "starter-vs-suite",
    question: "Starter vs Suite vs Custom — how do I choose?",
    answer:
      "Starter is best for a focused panel with one main workflow and faster delivery. Suite is for teams that need more modules, advanced permissions, approvals, exports, and reporting. Custom is for complex systems (multi-tenant, heavy integrations, custom automations) — scoped per project after discovery.",
  },
  {
    value: "timeline",
    question: "How long does a typical panel take to ship?",
    answer:
      "Most projects ship in 2–8 weeks, depending on scope. We follow a clear path: planning → design → build → testing → launch. Timeline starts after scope is confirmed (modules + roles) and required access/content is available.",
  },
  {
    value: "what-included",
    question: "What’s included in the build?",
    answer:
      "A complete, workflow-ready panel: custom tables and forms, actions, roles & permissions (RBAC), file uploads (docs/images), exports (CSV/PDF when needed), approval states, and a reporting view. We also include QA, launch support, and documentation for your team.",
  },
  {
    value: "maintenance",
    question: "Do you offer maintenance after launch?",
    answer:
      "Yes. Maintenance covers updates, monitoring, backups, security hardening, performance checks, and small improvements. It’s ideal when you want the panel to stay fast, secure, and evolving as your process grows.",
  },
  {
    value: "integrations",
    question: "Can you integrate with tools we already use?",
    answer:
      "Yes. We integrate with Google/Microsoft login, calendars, email/SMS notifications, CRMs, spreadsheets, and automation tools (Zapier/Make). For enterprise workflows we can also support APIs and webhooks — scoped up front so delivery stays predictable.",
  },
] as const;

export function Faqs() {
  return (
    <>
      <FaqJsonLd
        pageUrl="https://panelmanage.com/" // pricing ise /pricing, solutions ise ilgili url
        items={FAQ_ITEMS.map((x) => ({
          question: x.question,
          answer: x.answer,
        }))}
      />
      <section
        id="faq"
        aria-label="Frequently Asked Questions"
        className="w-full flex justify-center px-4 py-20 md:py-28"
      >
        <div className="flex w-full max-w-[1520px] flex-col gap-8 md:flex-row md:gap-6">
          {/* Title column */}
          <div className="flex flex-1 min-w-0 flex-col items-start gap-5">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              FAQ about Management System Software
            </h2>
            <p className="text-sm md:text-base text-zinc-400">
              Quick answers about custom panels, scope, timelines, and
              maintenance.
            </p>
          </div>

          {/* Accordion column */}
          <div className="flex-1 min-w-0">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-3"
              defaultValue="what-build"
            >
              {FAQ_ITEMS.map((item) => (
                <AccordionItem
                  key={item.value}
                  value={item.value}
                  className="border-0"
                >
                  <div className="w-full max-w-[750px] rounded-2xl bg-[linear-gradient(180deg,#262626_0%,#0f0f0f_100%)] p-[1px] cursor-pointer">
                    <div className="relative inset-[1px] rounded-[15px] bg-[#0d0c0c]">
                      <AccordionTrigger className="px-5 py-4 text-base font-medium text-white hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-5 text-sm leading-relaxed text-zinc-400">
                        {item.answer}
                      </AccordionContent>
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
