"use client";

import Link from "next/link";
import { useState } from "react";
import { LogoMark } from "@/components/LogoMark";
import { contactDetails, siteData } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--color-line)] bg-[rgba(14,11,9,0.76)] backdrop-blur-xl">
      <div className="border-b border-white/6">
        <div className="mx-auto flex w-[min(1220px,calc(100%-2rem))] flex-wrap items-center justify-between gap-3 py-3 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[rgba(255,248,236,0.9)] sm:w-[min(1220px,calc(100%-3rem))]">
          <p>{siteData.baseLocation}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
              className="transition-colors hover:text-[var(--color-gold-bright)]"
            >
              {contactDetails.phoneLabel}: {contactDetails.phone}
            </Link>
            <Link
              href={`mailto:${contactDetails.email}`}
              className="transition-colors hover:text-[var(--color-gold-bright)]"
            >
              {contactDetails.email}
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto w-[min(1220px,calc(100%-2rem))] py-4 sm:w-[min(1220px,calc(100%-3rem))]">
        <div className="flex items-center justify-between gap-4 xl:hidden">
          <Link href="/">
            <LogoMark />
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className="rounded-full border border-white/20 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-ink)]"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div className="hidden xl:flex xl:items-center xl:justify-between">
          <Link href="/">
            <LogoMark />
          </Link>
          <div className="flex flex-col gap-4 items-end">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm uppercase tracking-[0.18em] text-[var(--color-ink)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-wrap gap-2">
            <Link
              href={contactDetails.whatsappLink}
              className="button-whatsapp min-w-[162px]"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp us
            </Link>
            <Link href="/book-free-session" className="button-primary cta-booking min-w-[162px]">
              {siteData.ctaPrimary}
            </Link>
          </div>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="mt-4 rounded-[1.5rem] border border-white/10 bg-[rgba(14,11,9,0.96)] p-5 xl:hidden">
            <nav className="grid gap-3 text-sm uppercase tracking-[0.16em] text-[var(--color-ink)]">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-xl px-3 py-2 transition hover:bg-white/8">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 grid gap-3">
              <Link href={contactDetails.whatsappLink} className="button-whatsapp" target="_blank" rel="noreferrer">
                WhatsApp us
              </Link>
              <Link href="/book-free-session" onClick={() => setIsMenuOpen(false)} className="button-secondary">
                {siteData.ctaPrimary}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
