"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { TrendingUp } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
] as const;

const solutionLinks = [
  {
    label: "Appointment management system",
    href: "/solutions/appointment-management-system",
  },
  {
    label: "Clinic management system",
    href: "/solutions/clinic-management-system",
  },
  {
    label: "Employee management system",
    href: "/solutions/employee-management-system",
  },
  {
    label: "Scholarship management system",
    href: "/solutions/scholarship-management-system",
  },
] as const;

const socialLinks = [
  { label: "Twitter", href: "https://x.com/kreativnik_" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Responsible Disclosure", href: "/responsible-disclosure" },
  { label: "Terms Of Service", href: "/terms-of-service" },
  { label: "Security", href: "/security" },
] as const;

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black text-white/10 relative">
      <div className="mx-auto flex w-full max-w-[1520px] flex-col gap-10 px-4 py-12 md:px-16 md:py-16">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-5 md:gap-x-8 md:gap-y-12">
          {/* Navigation */}
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Navigation
            </p>
            <nav className="flex flex-col gap-2 text-sm">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-zinc-100 transition-colors hover:text-white/90"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Solutions
            </p>
            <nav className="flex flex-col gap-2 text-sm">
              {solutionLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-zinc-100 transition-colors hover:text-white/90"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Social
            </p>
            <div className="flex flex-col gap-2 text-sm">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-100 transition-colors hover:text-white/90"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Legal
            </p>
            <nav className="flex flex-col gap-2 text-sm">
              {legalLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-zinc-100 transition-colors hover:text-white/90"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter form */}
          <div className="space-y-4 md:col-span-1">
            <p className="text-sm font-medium text-zinc-100">
              Product updates & system insights{" "}
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="w-full">
                <input
                  type="email"
                  required
                  placeholder="your@company.com"
                  className="w-full rounded-xl border border-zinc-700/70 bg-zinc-900/60 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-[#10b981] focus:ring-2 focus:ring-[#10b981]/40"
                />
              </div>
              <Button className="w-full rounded-lg">
                Subscribe
                <TrendingUp className="size-4 text-white ml-2" />
              </Button>
              {/* <button
                type="submit"
                className="inline-flex h-9 w-full items-center justify-center rounded-lg bg-gradient-to-b from-zinc-700 to-zinc-900 text-sm font-medium text-white shadow-md shadow-black/40 transition hover:brightness-110"
              >
                Subscribe
              </button> */}
            </form>
            <p className="text-xs leading-relaxed text-zinc-500">
              By subscribing, you agree to our{" "}
              <Link
                href="/privacy-policy"
                className="text-zinc-100 hover:text-white/90"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 text-xs text-zinc-500 md:flex-row">
          <p>© 2025 Panel Management Systems. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Created by</span>
            <Link
              href="https://moydus.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-200 hover:text-white"
            >
              Moydus
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
