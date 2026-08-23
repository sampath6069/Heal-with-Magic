import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site-data";

const serviceImages = [
  "/indian-living-room.webp",
  "/indian-modular-kitchen.webp",
  "/indian-bedroom.webp",
  "/indian-office.webp",
  "/indian-renovation.webp",
  "/indian-custom-furniture.webp",
  "/indian-luxurious-furniture.webp",
  "/indian-commercial-space.webp",
  "/indian-home-elevation.webp",
] as const;

const featuredServices = services.map((service, index) => ({
  name: service.name,
  image: serviceImages[index],
}));

type ServiceExplorerProps = {
  showAllLink?: boolean;
};

export function ServiceExplorer({ showAllLink = true }: ServiceExplorerProps) {
  return (
    <section className="section-shell reveal-on-scroll" aria-labelledby="service-explorer-title">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="eyebrow">What We Design</p>
          <h2 id="service-explorer-title" className="mt-3 font-display text-4xl text-[var(--color-ink)] sm:text-5xl">
            What we design.
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          {showAllLink && (
            <Link href="/services" className="button-tertiary">
              All services
            </Link>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featuredServices.map((service, index) => (
          <Link
            key={service.name}
            href={`/services?service=${encodeURIComponent(service.name)}`}
            className="service-grid-card group relative min-h-[17rem] overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5"
          >
            <Image
              src={service.image}
              alt={`${service.name} Indian interior design reference`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,11,8,0.06),rgba(14,11,8,0.72))]" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-gold-bright)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-display text-3xl text-white">{service.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
