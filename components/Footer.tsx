import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { contactDetails } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-white/20 bg-[linear-gradient(180deg,#5d4c7f_0%,#392d56_42%,#251d39_100%)]">
      <div className="section-shell flex flex-col gap-8 py-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <LogoMark mode="dark" />
          <p className="max-w-md text-sm leading-7 text-[rgba(255,255,255,0.78)]">
            Heart-led healing, manifestation support, and gentle energetic
            guidance for people ready to create lasting transformation.
          </p>
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold)]">
            Heal - Align - Transform
          </p>
          <p className="max-w-md text-xs leading-6 text-white/65">
            Healing support is offered for personal well-being and is not a
            replacement for medical, legal, financial, or mental health advice.
          </p>
        </div>
        <div className="rounded-[1.8rem] border border-white/10 bg-white/6 p-6 text-sm uppercase tracking-[0.16em] text-white/90 shadow-[0_20px_45px_rgba(0,0,0,0.16)]">
          <div className="flex flex-col gap-3">
          <Link href={contactDetails.whatsappLink} target="_blank" rel="noreferrer">
            WhatsApp
          </Link>
          <Link href={`mailto:${contactDetails.email}`}>{contactDetails.email}</Link>
          <span>{contactDetails.instagram}</span>
          <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
