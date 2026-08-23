import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/PageShell";
import { aboutContent, founders, projectSectors, siteData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: `Learn more about ${siteData.companyName}, its leadership, and the design approach behind its residential and commercial interiors.`,
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About"
      title="Interior design with clear planning and practical execution."
      description="Design Space and Infra is based in Guntur and works on homes and commercial spaces across Andhra Pradesh and Hyderabad."
    >
      <section className="section-shell pt-6">
        <div className="grid gap-8">
          <div className="light-panel rounded-[2rem] p-8 sm:p-10">
            <p className="eyebrow">Studio Story</p>
            <h2 className="mt-3 font-display text-4xl text-[var(--color-card-ink)]">
              {aboutContent.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-[rgba(33,27,22,0.78)]">
              {aboutContent.intro}
            </p>
            {aboutContent.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base leading-8 text-[rgba(33,27,22,0.78)]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {founders.map((founder) => (
              <article key={founder.name} className="overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)]">
                <div className="relative h-[30rem]">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: founder.imagePosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,13,11,0.04),rgba(16,13,11,0.78))]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-display text-4xl text-white">{founder.name}</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[var(--color-gold-bright)]">
                      {founder.role}
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-sm uppercase tracking-[0.18em] text-[var(--color-muted)]">
                    {founder.experience}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {founder.focus.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-[var(--color-gold-bright)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-8 text-[var(--color-copy)]">
                    {founder.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pt-0">
        <div className="rounded-[2.25rem] bg-[linear-gradient(145deg,rgba(27,22,18,0.97),rgba(53,43,32,0.95))] p-8 text-white shadow-[0_28px_80px_rgba(53,43,32,0.2)]">
          <p className="eyebrow text-[var(--color-gold)]">Project Types</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
              We work on homes, restaurants, bars, and function halls with suitable layouts, materials, lighting, and furniture.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projectSectors.map((sector, index) => (
              <article
                key={sector.name}
                className="group relative min-h-[25rem] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20"
              >
                <Image
                  src={sector.image}
                  alt={`${sector.name} interior design reference`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,9,0.04)_28%,rgba(14,11,9,0.88)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-semibold tracking-[0.2em] text-[var(--color-gold-bright)]">
                    0{index + 1}
                  </p>
                  <p className="mt-2 font-display text-3xl text-white">{sector.name}</p>
                  <p className="mt-2 text-sm text-white/75">{sector.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
