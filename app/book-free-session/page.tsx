import type { Metadata } from "next";
import Link from "next/link";
import { BookingForm } from "@/components/BookingForm";
import { PageShell } from "@/components/PageShell";
import { contactDetails, siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Book a free consultation",
  description: `Book a free consultation with ${siteData.companyName} and continue your enquiry on WhatsApp with your details prefilled.`,
};

export default function BookFreeSessionPage() {
  return (
    <PageShell
      eyebrow="Free Consultation"
      title="Tell us about your space."
      description="Share a few details and continue directly on WhatsApp. Our team will guide you on the right next step."
    >
      <section className="section-shell pt-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-6">
            <div className="light-panel rounded-[2rem] p-8 sm:p-10">
              <p className="eyebrow text-[var(--color-gold)]">How it works</p>
              <h2 className="mt-3 font-display text-4xl text-[var(--color-card-ink)]">A quick first conversation.</h2>
              <p className="mt-5 text-base leading-8 text-[rgba(33,27,22,0.76)]">Your details are added to a WhatsApp message so we can understand your property, requirement, and approximate budget before the first call.</p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/4 p-8">
              <p className="eyebrow">Need direct contact?</p>
              <div className="mt-5 space-y-3 text-base text-[var(--color-copy)]">
                <p>
                  WhatsApp:{" "}
                  <Link href={contactDetails.whatsappLink} target="_blank" rel="noreferrer">
                    {contactDetails.whatsapp}
                  </Link>
                </p>
                <p>
                  Email: <Link href={`mailto:${contactDetails.email}`}>{contactDetails.email}</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-8 shadow-[0_28px_80px_rgba(0,0,0,0.18)]">
            <h2 className="font-display text-4xl text-[var(--color-ink)]">
              Tell us about your requirement
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-copy)]">
              Complete the short form below. Your WhatsApp message will be ready to send immediately.
            </p>
            <BookingForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
