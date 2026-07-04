import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { contactDetails } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[rgba(95,86,152,0.12)] bg-[rgba(247,244,251,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1120px,calc(100%-2rem))] flex-col gap-4 py-4 sm:w-[min(1120px,calc(100%-3rem))] lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="self-start">
          <LogoMark />
        </Link>
        <div className="flex flex-col gap-3 lg:items-end">
          <div className="flex flex-wrap gap-2">
            <Link
              href={contactDetails.whatsappLink}
              className="inline-flex min-w-[124px] items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
              target="_blank"
              rel="noreferrer"
              aria-label="Open WhatsApp chat"
              style={{
                backgroundColor: "#5f5698",
                color: "#ffffff",
                boxShadow: "0 10px 24px rgba(95,86,152,0.24)",
                letterSpacing: "0.04em",
              }}
            >
              WhatsApp
            </Link>
            <Link
              href={contactDetails.instagramLink}
              className="rounded-full border border-[rgba(95,86,152,0.18)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-plum)] transition-opacity hover:opacity-80"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </Link>
            <Link
              href={`mailto:${contactDetails.email}`}
              className="rounded-full border border-[rgba(95,86,152,0.18)] bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-plum)] transition-opacity hover:opacity-80"
            >
              Email
            </Link>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm uppercase tracking-[0.18em] text-[var(--color-plum)]">
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
        </div>
      </div>
    </header>
  );
}
