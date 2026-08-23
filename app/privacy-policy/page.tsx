import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Read how ${siteData.companyName} handles website enquiry information.`,
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      title="Your enquiry details are used only to respond and support your project discussion."
      description="This simple privacy policy explains how Design Space and Infra may use the information shared through the website."
    >
      <section className="section-shell pt-6">
        <div className="grid gap-6">
          <article className="glass-panel rounded-[2rem] p-8">
            <h2 className="font-display text-3xl text-[var(--color-charcoal)]">
              Information collected
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              When you use the contact form, you may share your name, email address,
              phone number, property details, and any information you choose to
              include about your interior project.
            </p>
          </article>

          <article className="glass-panel rounded-[2rem] p-8">
            <h2 className="font-display text-3xl text-[var(--color-charcoal)]">
              How the information is used
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Your information is used only to respond to your enquiry, discuss
              project scope, and continue communication if you choose to move
              forward with Design Space and Infra.
            </p>
          </article>

          <article className="glass-panel rounded-[2rem] p-8">
            <h2 className="font-display text-3xl text-[var(--color-charcoal)]">
              Respect for your privacy
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
              Your details are not sold to third parties. They are used only for
              direct communication related to your interior design enquiry.
            </p>
          </article>
        </div>
      </section>
    </PageShell>
  );
}
