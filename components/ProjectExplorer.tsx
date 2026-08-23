import Image from "next/image";
import Link from "next/link";
import { contactDetails, projectCaseStudies } from "@/lib/site-data";

type ProjectExplorerProps = {
  expanded?: boolean;
};

export function ProjectExplorer({ expanded = false }: ProjectExplorerProps) {
  return (
    <section
      className={`section-shell reveal-on-scroll ${expanded ? "pt-6" : ""}`}
      aria-labelledby="project-explorer-title"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div className="max-w-3xl">
          <p className="eyebrow">Project Tour</p>
          <h2 id="project-explorer-title" className="mt-3 font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
            {expanded
              ? "Selected commercial and hospitality projects."
              : "Selected projects from our team."}
          </h2>
        </div>
        {!expanded && (
          <Link href="/projects" className="button-tertiary">
            View All Projects
          </Link>
        )}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {projectCaseStudies.map((project, index) => (
          <article
            key={project.name}
            className={`project-grid-card overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.04)] ${
              expanded ? "" : index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div className={expanded || index !== 0 ? "relative min-h-[21rem]" : "relative min-h-[28rem]"}>
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                fill
                priority={index === 0}
                sizes={expanded || index !== 0 ? "(min-width: 1024px) 50vw, 100vw" : "100vw"}
                className="object-cover transition duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,8,0.05),rgba(14,11,8,0.78))]" />
              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/34 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white backdrop-blur">
                {project.city}
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">{project.type}</p>
                <h3 className="mt-3 font-display text-4xl text-white">{project.name}</h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/78">{project.summary}</p>
              </div>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              <div className="grid grid-cols-3 gap-2">
                {project.images.slice(0, 3).map((image) => (
                  <div key={image.src} className="relative h-20 overflow-hidden rounded-xl border border-white/10">
                    <Image src={image.src} alt={image.alt} fill sizes="160px" className="object-cover" />
                  </div>
                ))}
              </div>

              {expanded && (
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight) => (
                    <span key={highlight} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[var(--color-copy)]">
                      {highlight}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <Link href={contactDetails.whatsappLink} target="_blank" rel="noreferrer" className="button-whatsapp">
                  Discuss Similar Project
                </Link>
                {expanded && (
                  <Link href={project.mapsLink} target="_blank" rel="noreferrer" className="button-secondary">
                    View Location
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
