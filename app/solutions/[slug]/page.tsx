import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BRAND,
  SOLUTIONS_ALL,
  getSolutionBySlug,
  pickRelated,
  type ContentBlock,
} from "@/data/solutions";
import {
  getComparisonsBySolutionSlug,
  getComparisonBySlug,
} from "@/data/comparisons";
import { getFeaturesBySolutionSlug } from "@/data/features";
import { getIntegrationsBySolutionSlug } from "@/data/integrations";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { PageJsonLd } from "@/components/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { ContactForm } from "@/components/ContactForm";
import { SafeImage } from "@/components/SafeImage";
import { getSolutionImage, getComparisonImage } from "@/lib/images";

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

  // Check if it's a comparison page (contains -vs-)
  if (resolved.slug.includes("-vs-")) {
    const comparison = getComparisonBySlug(resolved.slug);
    const solution = comparison
      ? getSolutionBySlug(comparison.solutionSlug)
      : undefined;

    if (!comparison || !solution) {
      return createMetadata({
        title: "Comparison Not Found",
        description: "The requested comparison page could not be found.",
        url: `${BRAND.url}/solutions/${resolved.slug}`,
        noindex: true,
      });
    }

    const url = `${BRAND.url}/solutions/${resolved.slug}`;
    const keywords = [
      ...comparison.keywords,
      solution.keyword,
      "custom admin panel",
      "management system",
      "vs",
      comparison.competitorName.toLowerCase(),
    ].join(", ");

    return createMetadata({
      title: comparison.title,
      description: comparison.description,
      keywords,
      url,
      datePublished: "2025-01-15T00:00:00Z",
      dateModified: new Date().toISOString(),
      ogType: "article",
    });
  }

  // Regular solution page
  const solution = getSolutionBySlug(resolved.slug);
  if (!solution) {
    return createMetadata({
      title: "Solution Not Found",
      description: "The requested solution page could not be found.",
      url: `${BRAND.url}/solutions/${resolved.slug}`,
      noindex: true,
    });
  }

  const url = `${BRAND.url}/solutions/${solution.slug}`;
  const keywords = solution.seoKeywords
    ? [
        ...solution.seoKeywords,
        solution.keyword,
        "custom admin panel",
        "management system",
        "Laravel admin panel",
      ].join(", ")
    : [
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

  // Check if it's a comparison page (contains -vs-)
  if (resolved.slug.includes("-vs-")) {
    const comparison = getComparisonBySlug(resolved.slug);
    const solution = comparison
      ? getSolutionBySlug(comparison.solutionSlug)
      : undefined;

    if (!comparison || !solution) {
      return notFound();
    }

    const url = `${BRAND.url}/solutions/${resolved.slug}`;
    const solutionUrl = `${BRAND.url}/solutions/${solution.slug}`;
    const dateModified = new Date().toISOString();
    const comparisonImage = getComparisonImage(
      comparison.solutionSlug,
      comparison.competitorSlug
    );

    return (
      <>
        <PageJsonLd
          title={comparison.title}
          description={comparison.description}
          url={url}
          datePublished="2025-01-15T00:00:00Z"
          dateModified={dateModified}
          type="WebPage"
          breadcrumbs={[
            { name: "Home", item: BRAND.url },
            { name: "Solutions", item: `${BRAND.url}/solutions` },
            { name: solution.pageName, item: solutionUrl },
            { name: `vs ${comparison.competitorTrademark}`, item: url },
          ]}
        />

        <main className="mx-auto w-full max-w-[1100px] px-5 py-20 text-white">
          <header className="space-y-3">
            <div className="flex flex-wrap gap-2 text-sm">
              <Link className="underline text-zinc-300" href="/solutions">
                Solutions
              </Link>
              <span className="text-zinc-500">/</span>
              <Link className="underline text-zinc-300" href={solutionUrl}>
                {solution.pageName}
              </Link>
              <span className="text-zinc-500">/</span>
              <span className="text-zinc-200">
                vs {comparison.competitorTrademark}
              </span>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1 space-y-3">
                <h1 className="text-3xl md:text-4xl font-semibold">
                  Custom {solution.pageName} vs {comparison.competitorTrademark}{" "}
                  (2026)
                </h1>
                <p className="text-zinc-300 text-lg">
                  {comparison.description}
                </p>
              </div>
              <div className="w-full md:w-80 flex-shrink-0">
                <div className="relative rounded-xl border border-white/10 bg-white/5 overflow-hidden aspect-video">
                  <SafeImage
                    src={comparisonImage.url}
                    alt={comparisonImage.alt}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </header>

          <section className="mt-10 space-y-10">
            <article className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">
                Why Choose Custom Over {comparison.competitorTrademark}
              </h2>
              <ul className="space-y-3 list-disc pl-5 text-zinc-300">
                {comparison.advantages.map((advantage, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {advantage}
                  </li>
                ))}
              </ul>
            </article>

            <article className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">
                Feature Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-white/10 rounded-lg">
                  <thead>
                    <tr className="bg-white/5">
                      <th className="border border-white/10 px-4 py-3 text-left font-semibold text-white">
                        Feature
                      </th>
                      <th className="border border-white/10 px-4 py-3 text-left font-semibold text-white">
                        PanelManage Custom
                      </th>
                      <th className="border border-white/10 px-4 py-3 text-left font-semibold text-white">
                        {comparison.competitorTrademark}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.comparisonPoints.map((point, idx) => (
                      <tr key={idx} className="hover:bg-white/5">
                        <td className="border border-white/10 px-4 py-3 text-zinc-300 font-medium">
                          {point.feature}
                        </td>
                        <td className="border border-white/10 px-4 py-3 text-zinc-200">
                          {typeof point.panelmanage === "boolean" ? (
                            point.panelmanage ? (
                              <span className="text-[#10b981]">✓</span>
                            ) : (
                              <span className="text-red-400">✗</span>
                            )
                          ) : (
                            point.panelmanage
                          )}
                        </td>
                        <td className="border border-white/10 px-4 py-3 text-zinc-400">
                          {typeof point.competitor === "boolean" ? (
                            point.competitor ? (
                              <span className="text-[#10b981]">✓</span>
                            ) : (
                              <span className="text-red-400">✗</span>
                            )
                          ) : (
                            point.competitor
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Custom vs SaaS: The Key Difference
              </h2>
              <div className="space-y-3 text-zinc-300 leading-relaxed">
                <p>
                  {comparison.competitorTrademark} is a SaaS platform that
                  requires you to adapt your workflow to their structure. With
                  PanelManage, we build a custom management system that adapts
                  to <strong className="text-white">your</strong> workflow.
                </p>
                <p>
                  Instead of paying monthly subscription fees per user or per
                  feature, you invest once in a custom-built system that you
                  fully own. No vendor lock-in, no pricing increases, complete
                  control over your data and processes.
                </p>
              </div>
            </article>

            <section className="pt-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Ready to Build Your Custom {solution.pageName}?
                </h2>
                <p className="text-sm text-zinc-300 mb-6">
                  Get a custom quote tailored to your workflow. No spam, no
                  pressure — just a clear next step.
                </p>
                <ContactForm />
              </div>
            </section>

            <section className="pt-4">
              <div className="flex flex-wrap gap-4 text-sm">
                <Link
                  href={solutionUrl}
                  className="text-[#10b981] underline hover:text-[#10b981]/80"
                >
                  ← Back to {solution.pageName}
                </Link>
                <Link
                  href="/pricing"
                  className="text-[#10b981] underline hover:text-[#10b981]/80"
                >
                  View Pricing →
                </Link>
              </div>
            </section>
          </section>
        </main>
      </>
    );
  }

  // Regular solution page
  const solution = getSolutionBySlug(resolved.slug);
  if (!solution) return notFound();

  const dateModified = new Date().toISOString();
  const url = `${BRAND.url}/solutions/${solution.slug}`;
  const solutionImage = getSolutionImage(solution.slug);
  const breadcrumbs = [
    { name: "Home", item: BRAND.url },
    { name: "Solutions", item: `${BRAND.url}/solutions` },
    { name: solution.pageName, item: url },
  ];
  const related = pickRelated(solution.slug, 5);
  const comparisons = getComparisonsBySolutionSlug(solution.slug);
  const features = getFeaturesBySolutionSlug(solution.slug);
  const integrations = getIntegrationsBySolutionSlug(solution.slug);

  return (
    <>
      <SeoJsonLd
        solution={solution}
        dateModified={dateModified}
        breadcrumbs={breadcrumbs}
      />

      <main className="mx-auto w-full max-w-[1100px] px-5 py-25 text-white">
        <header className="space-y-3">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 space-y-3">
              <h1 className="text-3xl md:text-4xl font-semibold">
                {solution.h1}
              </h1>
              <p className="text-lg text-zinc-400 font-medium">
                Designed for teams that need flexible workflows—not rigid SaaS limits.
              </p>
              <p className="text-zinc-300">{solution.intro}</p>
              <div className="flex flex-wrap gap-2 pt-2 text-sm">
                <Link className="underline text-zinc-300" href="/solutions">
                  Solutions
                </Link>
                <span className="text-zinc-500">/</span>
                <span className="text-zinc-200">{solution.pageName}</span>
              </div>
            </div>
            <div className="w-full md:w-80 flex-shrink-0">
              <div className="relative rounded-xl border border-white/10 bg-white/5 overflow-hidden aspect-video">
                <SafeImage
                  src={solutionImage.url}
                  alt={solutionImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
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
              Related Custom Management Systems
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

          {comparisons.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">
                Compare with Popular Alternatives
              </h2>
              <p className="text-sm text-zinc-300">
                See how custom {solution.pageName.toLowerCase()} compares to
                leading SaaS platforms.
              </p>
              <div className="flex flex-wrap gap-2">
                {comparisons.map((comp) => (
                  <Link
                    key={comp.competitorSlug}
                    href={`/solutions/${comp.solutionSlug}-vs-${comp.competitorSlug}`}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10 transition"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                    <span>vs {comp.competitorTrademark}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {features.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">
                Key Features
              </h2>
              <p className="text-sm text-zinc-300">
                Explore detailed features available in custom{" "}
                {solution.pageName.toLowerCase()}.
              </p>
              <div className="flex flex-wrap gap-2">
                {features.map((feat) => (
                  <Link
                    key={feat.featureSlug}
                    href={`/solutions/${feat.solutionSlug}/${feat.featureSlug}`}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10 transition"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                    <span>{feat.h1}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {integrations.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-white">
                Integrations
              </h2>
              <p className="text-sm text-zinc-300">
                Connect your custom {solution.pageName.toLowerCase()} with
                popular tools and services.
              </p>
              <div className="flex flex-wrap gap-2">
                {integrations.map((integ) => (
                  <Link
                    key={integ.integrationSlug}
                    href={`/solutions/${integ.solutionSlug}/integrations/${integ.integrationSlug}`}
                    className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10 transition"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#10b981]" />
                    <span>{integ.h1}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="pt-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-white">
                  Get a Custom {solution.pageName} Quote
                </p>
                <p className="text-sm text-zinc-300">
                  We&apos;ll map your workflow and modules before pricing. No spam, no pressure.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  className="rounded-lg bg-white text-black px-4 py-2 text-sm font-medium shadow-sm hover:brightness-95 transition"
                  href="/pricing"
                >
                  Get Custom Quote
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
  const { COMPARISONS } = await import("@/data/comparisons");
  const solutionParams = SOLUTIONS_ALL.map((s) => ({ slug: s.slug }));
  const comparisonParams = COMPARISONS.map((c) => ({
    slug: `${c.solutionSlug}-vs-${c.competitorSlug}`,
  }));
  return [...solutionParams, ...comparisonParams];
}
