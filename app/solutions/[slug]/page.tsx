import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BRAND,
  SOLUTION_BY_SLUG,
  SOLUTIONS_ALL,
  pickRelated,
  type ContentBlock,
} from "@/data/solutions";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { createMetadata } from "@/lib/metadata";

function Block({ b }: { b: ContentBlock }) {
  if (b.type === "p")
    return <p className="text-zinc-300 leading-relaxed">{b.text}</p>;
  if (b.type === "h3")
    return <h3 className="text-xl font-semibold text-white">{b.text}</h3>;
  if (b.type === "h4")
    return <h4 className="text-lg font-semibold text-zinc-100">{b.text}</h4>;
  if (b.type === "ul")
    return (
      <ul className="list-disc pl-5 text-zinc-300 space-y-1">
        {b.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ul>
    );
  if (b.type === "steps")
    return (
      <ol className="list-decimal pl-5 text-zinc-300 space-y-1">
        {b.items.map((it) => (
          <li key={it}>{it}</li>
        ))}
      </ol>
    );
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const solution = SOLUTION_BY_SLUG.get(resolved.slug);
  if (!solution) {
    return createMetadata({
      title: "Solution Not Found",
      description: "The requested solution page could not be found.",
      url: `${BRAND.url}/solutions/${resolved.slug}`,
      noindex: true,
    });
  }

  const url = `${BRAND.url}/solutions/${solution.slug}`;
  const keywords = [
    solution.keyword,
    solution.pageName,
    "custom admin panel",
    "management system",
    "Laravel admin panel",
  ].join(", ");

  return createMetadata({
    title: solution.seoTitle,
    description: solution.metaDescription,
    keywords,
    url,
    datePublished: solution.datePublished,
    dateModified: new Date().toISOString(),
    ogType: "article",
  });
}

export default async function SolutionPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolved = await params;
  const solution = SOLUTION_BY_SLUG.get(resolved.slug);
  if (!solution) return notFound();

  const dateModified = new Date().toISOString();
  const url = `${BRAND.url}/solutions/${solution.slug}`;
  const breadcrumbs = [
    { name: "Home", item: BRAND.url },
    { name: "Solutions", item: `${BRAND.url}/solutions` },
    { name: solution.pageName, item: url },
  ];
  const related = pickRelated(solution.slug, 5);

  return (
    <>
      <SeoJsonLd
        solution={solution}
        dateModified={dateModified}
        breadcrumbs={breadcrumbs}
      />

      <main className="mx-auto w-full max-w-[1100px] px-5 py-25 text-white">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-semibold">{solution.h1}</h1>
          <p className="text-zinc-300">{solution.intro}</p>
          <div className="flex flex-wrap gap-2 pt-2 text-sm">
            <Link className="underline text-zinc-300" href="/solutions">
              Solutions
            </Link>
            <span className="text-zinc-500">/</span>
            <span className="text-zinc-200">{solution.pageName}</span>
          </div>
        </header>

        <section className="mt-10 space-y-10">
          {solution.sections.map((sec) => (
            <article key={sec.h2} className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">{sec.h2}</h2>
              <div className="space-y-3">
                {sec.blocks.map((b, idx) => (
                  <Block key={idx} b={b} />
                ))}
              </div>
            </article>
          ))}

          <section className="space-y-3">
            <h2 className="text-2xl font-semibold text-white">
              Related management systems
            </h2>
            <div className="flex flex-wrap gap-2">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10"
                >
                  <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                  <span>{r.label}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">FAQ</h2>
            <div className="flex flex-col gap-3">
              {solution.faqs.map((f, idx) => (
                <details
                  key={`${solution.slug}-faq-${idx}`}
                  className="group rounded-2xl bg-[linear-gradient(180deg,#262626_0%,#0f0f0f_100%)] p-[1px]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between rounded-[15px] bg-[#0d0c0c] px-5 py-4 text-base font-medium text-white">
                    <span>{f.q}</span>
                    <span className="text-zinc-400 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="rounded-b-[15px] bg-[#0d0c0c] px-5 pb-5 pt-1 text-sm leading-relaxed text-zinc-300">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="pt-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-white">
                  Ready to scope your panel?
                </p>
                <p className="text-sm text-zinc-300">
                  See pricing options or book a quick demo to align on modules
                  and timeline.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  className="rounded-lg bg-white text-black px-4 py-2 text-sm font-medium shadow-sm hover:brightness-95 transition"
                  href="/pricing"
                >
                  View pricing
                </Link>
                <Link
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10 transition"
                  href="/contact"
                >
                  Request a demo
                </Link>
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return SOLUTIONS_ALL.map((s) => ({ slug: s.slug }));
}
