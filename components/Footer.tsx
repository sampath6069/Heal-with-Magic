import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { contactDetails, consultationOptions, marketCoverage, siteData } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,#18130f_0%,#0f0c0a_100%)]">
      <section className="section-shell pb-8 pt-10">
        <div className="grid gap-6 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(196,154,95,0.16),rgba(255,255,255,0.03))] p-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="space-y-3">
            <p className="eyebrow">Start Your Project</p>
            <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
              Tell us about the space you want to design.
            </h2>
            <p className="max-w-2xl text-base leading-8 text-[var(--color-copy)]">
              Contact us for home interiors, commercial interiors, renovations, furniture,
              or a first discussion about your requirement.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={contactDetails.whatsappLink} className="button-whatsapp" target="_blank" rel="noreferrer">
              WhatsApp us
            </Link>
            <Link href="/book-free-session" className="button-secondary">
              Book a free consultation
            </Link>
          </div>
        </div>
      </section>

      <div className="section-shell flex flex-col gap-10 pt-0 lg:flex-row lg:justify-between">
        <div className="max-w-xl space-y-4">
          <LogoMark />
          <p className="text-sm leading-7 text-[var(--color-copy)]">
            {siteData.companyName} plans and executes home and commercial interiors with
            focus on practical layouts, suitable materials, furniture, and site coordination.
          </p>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold-bright)]">
            Home Interiors | Commercial Interiors | Custom Furniture
          </p>
        </div>

        <div className="grid gap-10 text-sm text-[var(--color-copy)] sm:grid-cols-3">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-gold-bright)]">
              Contact
            </p>
            <div className="space-y-1">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">Email</p>
              <Link href={`mailto:${contactDetails.email}`} className="block break-all">
                {contactDetails.email}
              </Link>
            </div>
            <div className="space-y-1">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">{contactDetails.phoneLabel}</p>
              <Link href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`} className="block">
                {contactDetails.phone}
              </Link>
            </div>
            <div className="space-y-1">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">{contactDetails.whatsappLabel}</p>
              <Link href={contactDetails.whatsappLink} target="_blank" rel="noreferrer" className="block">
                {contactDetails.whatsapp}
              </Link>
            </div>
            <div className="space-y-1">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-muted)]">Address</p>
              <Link href={contactDetails.mapsLink} target="_blank" rel="noreferrer" className="block">
                {contactDetails.address}
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-gold-bright)]">
              Markets
            </p>
            {marketCoverage.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>

          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-gold-bright)]">
              Enquiry Modes
            </p>
            {consultationOptions.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="mobile-action-bar md:hidden">
        <Link href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`} className="button-secondary">
          Call
        </Link>
        <Link href={contactDetails.whatsappLink} target="_blank" rel="noreferrer" className="button-whatsapp">
          WhatsApp
        </Link>
      </div>
    </footer>
  );
}
