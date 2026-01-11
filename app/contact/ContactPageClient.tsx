"use client";

import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPageClient() {
  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-gradient-to-b from-[#006241]/60 via-[#020b06] to-black py-32 lg:mx-4">
      <div className="mx-auto w-full max-w-[1100px] px-3 text-white">
        <header className="space-y-3 max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Tell us about the panel you need
          </h1>
          <p className="text-sm md:text-base text-zinc-300">
            Share a bit about your workflow, roles, and must-have modules. We'll
            reply with a clear next step—no spam, no pressure.
          </p>
        </header>

        <section className="mt-10 grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)]">
          {/* Form */}
          <ContactForm />

          {/* Side copy */}
          <aside className="space-y-5 rounded-2xl border border-white/10 bg-black/60 p-6">
            <h2 className="text-xl font-semibold text-white">
              What happens after you reach out?
            </h2>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-zinc-300">
              <li>We review your message and examples (if any).</li>
              <li>
                We reply with 2–3 clarifying questions or a suggested time for a
                short call.
              </li>
              <li>
                You get a clear scope and pricing range before any commit to
                build.
              </li>
            </ol>
            <div className="space-y-2 text-sm text-zinc-300">
              <p>Prefer email? You can also write us at:</p>
              <p className="font-mono text-white">hello@panelmanage.com</p>
            </div>
            <div className="pt-2 text-xs text-zinc-500">
              Looking for pricing first?{" "}
              <Link href="/pricing" className="text-[#10b981] underline">
                View pricing
              </Link>
              .
            </div>
          </aside>
        </section>
      </div>
    </section>
  );
}

