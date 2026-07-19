"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/LogoMark";
import { contactDetails } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="z-20 border-b border-[rgba(87,69,127,0.12)] bg-[rgba(250,246,252,0.82)] backdrop-blur-2xl">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col gap-4 py-4 sm:w-[min(1120px,calc(100%-3rem))] lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="self-start">
          <LogoMark />
        </Link>
        <div className="flex flex-col gap-3 lg:items-end">
          <div className="flex flex-wrap gap-2 rounded-full border border-white/70 bg-white/60 px-2 py-2 shadow-[0_16px_36px_rgba(96,74,123,0.08)]">
            <Link
              href={contactDetails.bookingLink}
              className="inline-flex min-w-[154px] items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #cda060 0%, #b17a44 100%)",
                color: "#fffaf8",
                boxShadow: "0 10px 24px rgba(177,122,68,0.22)",
                letterSpacing: "0.02em",
              }}
            >
              Book Free Session
            </Link>
            <Link
              href={contactDetails.whatsappLink}
              className="inline-flex min-w-[124px] items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
              target="_blank"
              rel="noreferrer"
              aria-label="Open WhatsApp chat"
              style={{
                backgroundColor: "#57457f",
                color: "#ffffff",
                boxShadow: "0 10px 24px rgba(87,69,127,0.24)",
                letterSpacing: "0.04em",
              }}
            >
              WhatsApp
            </Link>
            <span className="hidden rounded-full border border-[rgba(87,69,127,0.14)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)] sm:inline-flex">
              Instagram Soon
            </span>
            <Link
              href={`mailto:${contactDetails.email}`}
              className="hidden rounded-full border border-[rgba(87,69,127,0.14)] bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-plum-deep)] transition-opacity hover:opacity-80 sm:inline-flex"
            >
              Email
            </Link>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm uppercase tracking-[0.18em] text-[var(--color-plum-deep)]">
            {navItems.map((item) => (
              (() => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-full px-3 py-2 transition-all ${
                      isActive
                        ? "border border-[rgba(87,69,127,0.18)] bg-white text-[var(--color-plum-deep)] shadow-[0_10px_24px_rgba(87,69,127,0.12)]"
                        : "text-[var(--color-plum-deep)] hover:bg-white/70 hover:opacity-80"
                    }`}
                    style={
                      isActive
                        ? {
                            boxShadow: "inset 0 -2px 0 var(--color-gold), 0 10px 24px rgba(87,69,127,0.12)",
                            fontWeight: 700,
                          }
                        : undefined
                    }
                  >
                    {item.label}
                  </Link>
                );
              })()
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
