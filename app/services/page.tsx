import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { ServiceExplorer } from "@/components/ServiceExplorer";
import { siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description: `Interior design services for homes, offices, restaurants, hotels, and commercial spaces by ${siteData.companyName}.`,
};

export default function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title="Interior design services for your home or business."
      description="Select a service to see the type of work we handle."
    >
      <ServiceExplorer showAllLink={false} />

      <section className="section-shell pt-0">
        <div className="glass-panel rounded-[2rem] p-8 text-center">
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
            Need help with your project?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
            We can help with planning, materials, furniture, and site coordination based
            on your property, requirement, and budget.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/book-free-session" className="button-primary">
              {siteData.ctaPrimary}
            </Link>
            <Link href="/projects" className="button-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
