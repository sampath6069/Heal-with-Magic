import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Message Sent",
  description: `Your enquiry has been submitted to ${siteData.companyName}.`,
};

export default function ContactSuccessPage() {
  return (
    <PageShell
      eyebrow="Thank You"
      title="Your message has been sent."
      description="Thanks for reaching out to Design Space and Infra. We will connect with you soon using the details you shared."
    >
      <section className="section-shell pt-6">
        <div className="glass-panel mx-auto max-w-2xl rounded-[2rem] p-8 text-center">
          <p className="text-lg leading-8 text-[var(--color-muted)]">
            Your enquiry was submitted successfully. You can return to the contact
            page or continue exploring the website.
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
