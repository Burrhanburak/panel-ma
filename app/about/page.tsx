import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import { PageJsonLd } from "@/components/PageJsonLd";
import Link from "next/link";

export const metadata: Metadata = createMetadata({
  title: "About PanelManage - Custom Management Systems",
  description:
    "Learn about PanelManage and how we build custom management systems and admin panels for appointments, clinics, employees, scholarships, and practices.",
  keywords:
    "about panelmanage, custom admin panel developer, management system builder, Laravel admin panel development",
  url: "https://panelmanage.com/about",
  datePublished: "2025-01-15T00:00:00Z",
  dateModified: new Date().toISOString(),
});

export default function AboutPage() {
  return (
    <>
      <PageJsonLd
        title="About PanelManage - Custom Management Systems"
        description="Learn about PanelManage and how we build custom management systems and admin panels for appointments, clinics, employees, scholarships, and practices."
        url="https://panelmanage.com/about"
        datePublished="2025-01-15T00:00:00Z"
        dateModified={new Date().toISOString()}
        type="AboutPage"
        breadcrumbs={[
          { name: "Home", item: "https://panelmanage.com" },
          { name: "About", item: "https://panelmanage.com/about" },
        ]}
      />
      <main className="mx-auto w-full max-w-[900px] px-5 py-20 text-white">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              About PanelManage - Custom Management Systems
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-3xl">
              Learn about PanelManage and how we build custom management systems and admin panels for appointments, clinics, employees, scholarships, and practices.
            </p>
          </div>

          {/* What We Do */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold scroll-m-20 border-b pb-2 border-zinc-800">
              What We Do
            </h2>
            <div className="space-y-4 text-zinc-300 leading-7">
              <p>
                PanelManage specializes in building <strong className="text-white">custom management systems </strong> tailored to 
                your exact workflow. We don&apos;t sell generic SaaS—instead, we deliver one-time builds 
                with full ownership, no subscriptions, and complete control over your management system.
              </p>
              <p>
                Our panels include appointment scheduling for clinics, employee tracking for HR teams, 
                scholarship management for schools, and workflow automation for internal operations. 
                Every panel is designed around your roles, permissions, approval steps, and business rules.
              </p>
            </div>
          </section>

          {/* Our Approach */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold scroll-m-20 border-b pb-2 border-zinc-800">
              How We Work
            </h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Planning & Discovery</h3>
                <p className="text-zinc-300 leading-7">
                  We start by understanding your workflow—who needs access, what steps are involved, 
                  which approvals are required, and what data needs to be tracked. This discovery phase 
                  ensures we build exactly what your team needs.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Design & Build</h3>
                <p className="text-zinc-300 leading-7">
                  After scoping, we design custom tables, forms, and dashboards that match your process. 
                  Then we build your panel with role-based access, automated workflows, and all the modules 
                  your operations require. Most panels ship in 2-8 weeks.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Launch & Support</h3>
                <p className="text-zinc-300 leading-7">
                  We handle QA, deployment, and launch support. After launch, you own the system completely. 
                  Optional maintenance packages are available for updates, monitoring, and ongoing improvements.
                </p>
              </div>
            </div>
          </section>

          {/* What Makes Us Different */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold scroll-m-20 border-b pb-2 border-zinc-800">
              What Makes Us Different
            </h2>
            <ul className="space-y-3 text-zinc-300 leading-7 list-disc list-inside marker:text-zinc-500">
              <li>
                <strong className="text-white">One-time build fee:</strong> No monthly subscriptions or vendor lock-in. 
                Pay once, own your system forever.
              </li>
              <li>
                <strong className="text-white">Custom-built for your workflow:</strong> We don&apos;t force you into 
                predefined templates. Every panel is built around your exact process.
              </li>
              <li>
                <strong className="text-white">Full ownership:</strong> You own the code, the data, and the system. 
                No dependencies on our infrastructure.
              </li>
              <li>
                <strong className="text-white">Fast delivery:</strong> Most panels ship in weeks, not months. 
                Clear timelines and structured process from planning to launch.
              </li>
              <li>
                <strong className="text-white">Built to scale:</strong> Start simple, add modules and users 
                as your operations grow.
              </li>
            </ul>
          </section>

          {/* Who We Work With */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold scroll-m-20 border-b pb-2 border-zinc-800">
              Who We Work With
            </h2>
            <div className="space-y-4 text-zinc-300 leading-7">
              <p>
                We partner with clinics, HR teams, schools, scholarship programs, practice management teams, 
                and internal operations groups. If you manage appointments, track employees, process applications, 
                handle approvals, or run structured workflows—we can build a panel that fits.
              </p>
              <p>
                Our panels are ideal for teams moving from spreadsheets and email-based processes to structured, 
                scalable management systems. We help growing organizations replace manual work with automated 
                workflows and centralized data.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="pt-8 border-t border-zinc-800">
            <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 p-8 space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Ready to Build Your Management System?
              </h2>
              <p className="text-zinc-300 leading-7">
                Discuss your workflow, requirements, and timeline. We&apos;ll provide a quote and scope 
                for your custom management system.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[linear-gradient(180deg,#10b981_0%,#059669_100%)] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-black/25 transition hover:brightness-110"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
