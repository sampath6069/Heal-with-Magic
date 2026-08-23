import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { careersContent, contactDetails, siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Careers",
  description: `Explore internship opportunities with ${siteData.companyName}.`,
};

export default function CareersPage() {
  return (
    <PageShell
      eyebrow="Careers"
      title="Six-month internship programme in interior design."
      description="Apply if you want to learn the practical side of interior design, including drawings, materials, site work, and client coordination."
    >
      <section className="section-shell pt-6">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="light-panel rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow text-[var(--color-gold)]">Internship Program</p>
            <h2 className="mt-3 font-display text-4xl text-[var(--color-card-ink)] sm:text-5xl">
              {careersContent.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-[rgba(33,27,22,0.78)]">
              {careersContent.description}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {careersContent.highlights.map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-black/6 bg-white/55 px-5 py-5">
                  <p className="font-display text-2xl text-[var(--color-card-ink)]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] p-8">
            <p className="eyebrow">Who Can Apply</p>
            <h2 className="mt-3 font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
              Who can apply
            </h2>
            <div className="mt-8 space-y-4 text-base leading-8 text-[var(--color-copy)]">
              <p>Students or freshers interested in interior design support and studio workflows.</p>
              <p>Candidates who want to learn about planning, coordination, site understanding, and client-facing project preparation.</p>
              <p>People who are interested in learning how residential and commercial interior projects are handled.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`mailto:${contactDetails.email}?subject=Internship%20Application`} className="button-primary">
                Apply by Email
              </Link>
              <Link href={contactDetails.whatsappLink} className="button-secondary" target="_blank" rel="noreferrer">
                Ask on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
