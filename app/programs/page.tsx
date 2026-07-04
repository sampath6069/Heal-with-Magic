import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { programs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore Heal with Magic healing programs, including 21-day group journeys and 1:1 healing support.",
};

export default function ProgramsPage() {
  return (
    <PageShell
      eyebrow="Programs"
      title="Healing programs designed for focused support and steady transformation."
      description="Each program takes place over 21 days and offers a supportive space for deeper healing in money, career, health, relationships, and personal transformation."
    >
      <section className="section-shell pt-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <article
              key={program.name}
              className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_22px_60px_rgba(95,86,152,0.09)]"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-gold)]">
                  {program.duration}
                </p>
                <p className="rounded-full bg-[var(--color-coral)] px-4 py-2 text-base font-semibold text-white shadow-[0_12px_30px_rgba(241,138,105,0.28)]">
                  {program.price}
                </p>
              </div>
              <h2 className="mt-4 font-display text-4xl text-[var(--color-plum)]">
                {program.name}
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                {program.description}
              </p>
              <Link href="/contact" className="button-secondary mt-6 w-full sm:w-auto">
                Enquire for This Program
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
