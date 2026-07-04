import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Heal with Magic collects and uses the information you share through the website contact form.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      title="Your information is treated with care and respect."
      description="This short privacy policy explains how Heal with Magic uses the details you share through the website."
    >
      <section className="section-shell pt-6">
        <div className="grid gap-6">
          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_22px_60px_rgba(95,86,152,0.08)]">
            <h2 className="font-display text-3xl text-[var(--color-plum)]">
              What information may be collected
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              When you contact Heal with Magic, you may share your name, email
              address, phone or WhatsApp number, and the personal details you
              choose to include in your message.
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_22px_60px_rgba(95,86,152,0.08)]">
            <h2 className="font-display text-3xl text-[var(--color-plum)]">
              How your information is used
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Your information is used only to respond to your enquiry, guide
              you toward the right session or program, and continue
              communication if you choose to work with Heal with Magic.
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_22px_60px_rgba(95,86,152,0.08)]">
            <h2 className="font-display text-3xl text-[var(--color-plum)]">
              Respect for your privacy
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Your details are not sold or shared for marketing with outside
              parties. Information is handled with care and only used for
              communication related to your enquiry or healing support.
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_22px_60px_rgba(95,86,152,0.08)]">
            <h2 className="font-display text-3xl text-[var(--color-plum)]">
              Gentle disclaimer
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Healing support shared through Heal with Magic is intended for
              personal well-being and spiritual support. It does not replace
              medical care, psychological treatment, legal advice, or financial
              advice.
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_22px_60px_rgba(95,86,152,0.08)]">
            <h2 className="font-display text-3xl text-[var(--color-plum)]">
              Contact
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              If you have any questions about your information, you can reach
              out directly by email or WhatsApp through the contact page.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
