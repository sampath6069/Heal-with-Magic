"use client";

import Link from "next/link";
import { useEffect, useEffectEvent, useState } from "react";
import { services } from "@/lib/site-data";

const serviceImages = [
  "/indian-living-room.png",
  "/indian-modular-kitchen.png",
  "/indian-bedroom.png",
  "/indian-office.png",
  "/indian-renovation.png",
  "/indian-custom-furniture.png",
  "/indian-luxurious-furniture.png",
  "/indian-commercial-space.png",
  "/indian-home-elevation.png",
] as const;

const featuredServices = services.map((service, index) => ({
  name: service.name,
  image: serviceImages[index],
}));

type ServiceExplorerProps = {
  showAllLink?: boolean;
};

export function ServiceExplorer({ showAllLink = true }: ServiceExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTourPlaying, setIsTourPlaying] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const activeService = featuredServices[activeIndex];

  const advanceService = useEffectEvent(() => {
    setActiveIndex((index) => (index + 1) % featuredServices.length);
  });

  useEffect(() => {
    if (!isTourPlaying) {
      return;
    }

    const timer = window.setInterval(advanceService, 5600);
    return () => window.clearInterval(timer);
  }, [isTourPlaying]);

  function selectService(index: number) {
    setActiveIndex(index);
    setIsTourPlaying(false);
  }

  return (
    <section className="section-shell reveal-on-scroll" aria-labelledby="service-explorer-title">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow">What We Design</p>
          <h2 id="service-explorer-title" className="mt-3 font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
            Explore our services.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setIsTourPlaying((playing) => !playing)}
            className="button-secondary"
          >
            {isTourPlaying ? "Pause Tour" : "Start Tour"}
          </button>
          {showAllLink && (
            <Link href="/services" className="button-tertiary">
              All Services
            </Link>
          )}
        </div>
      </div>

      <div className="service-showcase overflow-hidden rounded-[2.5rem] border border-white/10 bg-[rgba(255,255,255,0.035)]">
        <div className="grid lg:grid-cols-[0.72fr_0.28fr]">
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
            <div
              key={activeService.image}
              className="service-hero-image absolute inset-0"
              style={{
                backgroundImage: `url(${activeService.image})`,
                backgroundPosition: `${50 + (pointer.x - 50) * -0.05}% ${50 + (pointer.y - 50) * -0.05}%`,
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,8,0.08),rgba(14,11,8,0.14)_42%,rgba(14,11,8,0.82))]" />
            <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-7 sm:top-7">
              <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
                {String(activeIndex + 1).padStart(2, "0")} / {String(featuredServices.length).padStart(2, "0")}
              </span>
              <span
                key={`${activeIndex}-${isTourPlaying}`}
                className={`service-tour-progress ${isTourPlaying ? "is-playing" : ""}`}
                aria-hidden="true"
              />
            </div>
            <h3 className="absolute inset-x-0 bottom-0 p-6 font-display text-5xl text-white sm:p-9 sm:text-7xl">
              {activeService.name}
            </h3>
          </div>

          <div className="flex gap-3 overflow-x-auto border-t border-white/10 p-5 lg:flex-col lg:overflow-visible lg:border-l lg:border-t-0 lg:p-7">
            {featuredServices.map((service, index) => (
              <button
                key={service.name}
                type="button"
                onClick={() => selectService(index)}
                aria-pressed={activeIndex === index}
                aria-label={`View ${service.name}`}
                className={`service-thumbnail group relative h-28 min-w-36 overflow-hidden rounded-[1.25rem] border text-left transition duration-300 lg:h-24 lg:min-w-0 ${
                  activeIndex === index
                    ? "border-[var(--color-gold-bright)]"
                    : "border-white/10 opacity-65 hover:-translate-y-1 hover:opacity-100"
                }`}
                style={{
                  backgroundImage: `linear-gradient(180deg,rgba(14,11,8,0.04),rgba(14,11,8,0.78)),url(${service.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <span className="absolute inset-x-3 bottom-3 font-display text-lg text-white">
                  {service.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
