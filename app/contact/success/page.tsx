import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Message Sent",
  description:
    "Your Heal with Magic enquiry has been submitted successfully.",
};

export default function ContactSuccessPage() {
  return (
    <PageShell
      eyebrow="Thank You"
      title="Your message has been sent."
      description="Thank you for reaching out to Heal with Magic. Shamitha will connect with you soon."
    >
      <section className="section-shell pt-6">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-white/70 bg-white/85 p-8 text-center shadow-[0_24px_60px_rgba(122,79,106,0.1)]">
          <p className="text-lg leading-8 text-[var(--color-muted)]">
            Your enquiry has been submitted successfully. You can return to the
            contact page or go back to the homepage.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="button-secondary">
              Back to Contact
            </Link>
            <Link href="/" className="button-primary">
              Go to Home
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
