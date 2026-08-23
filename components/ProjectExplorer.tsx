"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useEffectEvent, useState } from "react";
import { contactDetails, projectCaseStudies } from "@/lib/site-data";

type ProjectExplorerProps = {
  expanded?: boolean;
};

export function ProjectExplorer({ expanded = false }: ProjectExplorerProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isTourPlaying, setIsTourPlaying] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const activeProject = projectCaseStudies[activeProjectIndex];
  const activeImage = activeProject.images[activeImageIndex];

  const advanceProject = useEffectEvent(() => {
    setActiveProjectIndex((index) => (index + 1) % projectCaseStudies.length);
    setActiveImageIndex(0);
  });

  useEffect(() => {
    if (!isTourPlaying) {
      return;
    }

    const timer = window.setInterval(advanceProject, 6500);
    return () => window.clearInterval(timer);
  }, [isTourPlaying]);

  function selectProject(index: number) {
    setActiveProjectIndex(index);
    setActiveImageIndex(0);
    setIsTourPlaying(false);
  }

  function selectImage(index: number) {
    setActiveImageIndex(index);
    setIsTourPlaying(false);
  }

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
              ? "Explore our completed hospitality projects."
              : "See selected hotel and restaurant interiors by our team."}
          </h2>
        </div>
        {!expanded && (
          <Link href="/projects" className="button-tertiary">
            View All Projects
          </Link>
        )}
      </div>

      <div className="project-showcase overflow-hidden rounded-[2.5rem] border border-white/10 bg-[rgba(255,255,255,0.035)]">
        <div className="grid lg:grid-cols-[0.3fr_0.7fr]">
          <aside className="border-b border-white/10 p-5 lg:border-b-0 lg:border-r lg:p-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold-bright)]">
                Selected work
              </p>
              <button
                type="button"
                onClick={() => setIsTourPlaying((playing) => !playing)}
                className="rounded-full border border-white/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-copy)] transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold-bright)]"
              >
                {isTourPlaying ? "Pause Tour" : "Start Tour"}
              </button>
            </div>

            <div className="mt-6 flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
              {projectCaseStudies.map((project, index) => (
                <button
                  key={project.name}
                  type="button"
                  onClick={() => selectProject(index)}
                  aria-pressed={activeProjectIndex === index}
                  className={`project-nav-item min-w-[13rem] rounded-[1.25rem] border p-4 text-left transition duration-300 lg:min-w-0 ${
                    activeProjectIndex === index
                      ? "border-[var(--color-gold)] bg-[rgba(196,154,95,0.14)]"
                      : "border-white/8 bg-black/10 hover:-translate-y-1 hover:border-white/25"
                  }`}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block font-display text-2xl text-[var(--color-ink)]">
                    {project.name}
                  </span>
                  <span className="mt-2 block text-xs uppercase tracking-[0.16em] text-[var(--color-muted)]">
                    {project.city}
                  </span>
                </button>
              ))}
            </div>
          </aside>

          <div className="min-w-0">
            <div
              className="relative min-h-[31rem] overflow-hidden sm:min-h-[39rem]"
              onMouseMove={(event) => {
                const bounds = event.currentTarget.getBoundingClientRect();
                setPointer({
                  x: ((event.clientX - bounds.left) / bounds.width) * 100,
                  y: ((event.clientY - bounds.top) / bounds.height) * 100,
                });
              }}
            >
              <Image
                key={`${activeProject.name}-${activeImage.src}`}
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                priority={activeProjectIndex === 0 && activeImageIndex === 0}
                sizes="(min-width: 1024px) 72vw, 100vw"
                className="project-hero-image object-cover"
                style={{
                  transform: `scale(1.06) translate(${(pointer.x - 50) * -0.025}%, ${(pointer.y - 50) * -0.025}%)`,
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,8,0.08),rgba(14,11,8,0.15)_42%,rgba(14,11,8,0.86))]" />

              <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-7 sm:top-7">
                <div className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
                  {String(activeProjectIndex + 1).padStart(2, "0")} / {String(projectCaseStudies.length).padStart(2, "0")}
                </div>
                <span
                  key={`${activeProjectIndex}-${isTourPlaying}`}
                  className={`project-tour-progress ${isTourPlaying ? "is-playing" : ""}`}
                  aria-hidden="true"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold-bright)]">
                  {activeProject.type}
                </p>
                <h3 className="mt-3 max-w-3xl font-display text-4xl text-white sm:text-6xl">
                  {activeProject.name}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
                  {activeProject.summary}
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 bg-[rgba(14,11,8,0.44)] p-5 sm:p-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Select a project image
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeProject.images.map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => selectImage(index)}
                      aria-label={`View image ${index + 1} for ${activeProject.name}`}
                      aria-pressed={activeImageIndex === index}
                      className={`project-thumbnail relative h-16 w-24 overflow-hidden rounded-xl border transition sm:h-20 sm:w-32 ${
                        activeImageIndex === index
                          ? "border-[var(--color-gold-bright)]"
                          : "border-white/10 opacity-65 hover:opacity-100"
                      }`}
                    >
                      <Image src={image.src} alt="" fill sizes="128px" className="object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {expanded && (
                <div className="mt-7 grid gap-5 border-t border-white/10 pt-7 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold-bright)]">
                      Work Included
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {activeProject.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[var(--color-copy)]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Link href={activeProject.mapsLink} target="_blank" rel="noreferrer" className="button-secondary">
                      View Location
                    </Link>
                    <Link href={contactDetails.whatsappLink} target="_blank" rel="noreferrer" className="button-primary">
                      WhatsApp Us
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
