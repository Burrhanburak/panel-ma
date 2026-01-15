import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BRAND, getSolutionBySlug } from "@/data/solutions";
import { getFeatureBySlug } from "@/data/features";
import { createMetadata } from "@/lib/metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import { ContactForm } from "@/components/ContactForm";
import { SafeImage } from "@/components/SafeImage";
import { getFeatureImage } from "@/lib/images";

export async function generateMetadata({
  params,
}: {
  params:
    | { slug: string; feature: string }
    | Promise<{ slug: string; feature: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const feature = getFeatureBySlug(resolved.slug, resolved.feature);
  const solution = feature ? getSolutionBySlug(resolved.slug) : undefined;

  if (!feature || !solution) {
    return createMetadata({
      title: "Feature Not Found",
      description: "The requested feature page could not be found.",
      url: `${BRAND.url}/solutions/${resolved.slug}/${resolved.feature}`,
      noindex: true,
    });
  }

  const url = `${BRAND.url}/solutions/${resolved.slug}/${resolved.feature}`;
  const keywords = [
    ...feature.keywords,
    solution.keyword,
    "custom admin panel",
  ].join(", ");

  return createMetadata({
    title: feature.title,
    description: feature.description,
    keywords,
    url,
    datePublished: "2025-01-15T00:00:00Z",
    dateModified: new Date().toISOString(),
    ogType: "article",
  });
}

export default async function FeaturePage({
  params,
}: {
  params:
    | { slug: string; feature: string }
    | Promise<{ slug: string; feature: string }>;
}) {
  const resolved = await params;
  const feature = getFeatureBySlug(resolved.slug, resolved.feature);
  const solution = feature ? getSolutionBySlug(resolved.slug) : undefined;

  if (!feature || !solution) {
    return notFound();
  }

  const url = `${BRAND.url}/solutions/${resolved.slug}/${resolved.feature}`;
  const solutionUrl = `${BRAND.url}/solutions/${solution.slug}`;
  const dateModified = new Date().toISOString();
  const featureImage = getFeatureImage(
    feature.solutionSlug,
    feature.featureSlug
  );

  return (
    <>
      <PageJsonLd
        title={feature.title}
        description={feature.description}
        url={url}
        datePublished="2025-01-15T00:00:00Z"
        dateModified={dateModified}
        type="WebPage"
        breadcrumbs={[
          { name: "Home", item: BRAND.url },
          { name: "Solutions", item: `${BRAND.url}/solutions` },
          { name: solution.pageName, item: solutionUrl },
          { name: feature.h1, item: url },
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
            <span className="text-zinc-200">{feature.h1}</span>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 space-y-3">
              <h1 className="text-3xl md:text-4xl font-semibold">
                {feature.h1}
              </h1>
              <p className="text-zinc-300 text-lg">{feature.description}</p>
            </div>
            <div className="w-full md:w-80 flex-shrink-0">
              <div className="relative rounded-xl border border-white/10 bg-white/5 overflow-hidden aspect-video">
                <SafeImage
                  src={featureImage.url}
                  alt={featureImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        <section className="mt-10 space-y-8">
          {feature.content.map((section, idx) => (
            <article key={idx} className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                {section.h2}
              </h2>
              <p className="text-zinc-300 leading-relaxed">{section.text}</p>
            </article>
          ))}

          <section className="pt-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6">
              <h2 className="text-xl font-semibold text-white mb-4">
                Ready to Build {feature.h1}?
              </h2>
              <p className="text-sm text-zinc-300 mb-6">
                Get a custom quote for {feature.h1.toLowerCase()} tailored to
                your workflow.
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
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  const { FEATURES } = await import("@/data/features");
  return FEATURES.map((f) => ({
    slug: f.solutionSlug,
    feature: f.featureSlug,
  }));
}
