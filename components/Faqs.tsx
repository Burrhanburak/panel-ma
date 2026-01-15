"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/data/faqs";

export function Faqs() {
  return (
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
  );
}
