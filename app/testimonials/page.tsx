import type { Metadata } from "next";
import Link from "next/link";
import { contactDetails } from "@/lib/site-data";
import { PageShell } from "@/components/PageShell";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Testimonials",
  description: `Client feedback for ${siteData.companyName} will be published with approval.`,
};

export default function TestimonialsPage() {
  return (
    <PageShell
      eyebrow="Client Feedback"
      title="We publish client feedback only with permission."
      description="For now, please explore our completed projects and speak with the team directly about your requirement."
    >
      <section className="section-shell pt-6">
        <div className="glass-panel mx-auto max-w-3xl rounded-[2rem] p-8 text-center sm:p-12">
          <h2 className="font-display text-4xl text-[var(--color-ink)]">See our selected work or start a conversation.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/projects" className="button-secondary">View Projects</Link>
            <Link href={contactDetails.whatsappLink} className="button-whatsapp" target="_blank" rel="noreferrer">WhatsApp Us</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
