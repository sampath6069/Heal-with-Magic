"use client";

import Link from "next/link";
import { useState } from "react";
import { QuickLeadForm } from "@/components/QuickLeadForm";
import { contactDetails, serviceHighlights, showcaseImages, siteData, stats } from "@/lib/site-data";

export function Hero() {
  // Keep client project imagery in the portfolio, not in the studio's opening visual.
  const primaryImage = showcaseImages[3];
  const secondaryImage = showcaseImages[5];
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  return (
    <section
      className="relative overflow-hidden border-b border-white/6"
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setPointer({
          x: ((event.clientX - bounds.left) / bounds.width) * 100,
          y: ((event.clientY - bounds.top) / bounds.height) * 100,
        });
      }}
    >
      <div
        className="hero-image-motion absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(11,9,8,0.92) 0%, rgba(11,9,8,0.72) 42%, rgba(11,9,8,0.58) 100%), url(${primaryImage.url})`,
          backgroundSize: "cover",
          backgroundPosition: `${50 + (pointer.x - 50) * 0.05}% ${50 + (pointer.y - 50) * 0.05}%`,
        }}
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,154,95,0.24),transparent_18%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.12),transparent_16%)]"
        style={{
          backgroundPosition: `${pointer.x}% ${pointer.y}%`,
        }}
      />

      <div className="section-shell relative pb-10 pt-12 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-3xl space-y-7">
            <p className="eyebrow">{siteData.baseLocation}</p>
            <h1 className="font-display text-5xl leading-[0.95] text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
              Interior designers in Guntur for homes, offices and restaurants.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-copy)]">
              {siteData.companyName} designs and executes homes, offices, restaurants,
              and commercial spaces with practical planning and dependable site support.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={contactDetails.whatsappLink} target="_blank" rel="noreferrer" className="button-whatsapp">
                WhatsApp Us
              </Link>
              <Link href="/book-free-session" className="button-secondary">
                Book a Free Consultation
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {serviceHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--color-ink)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.slice(0, 2).map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-5 backdrop-blur"
                >
                  <p className="font-sans text-4xl font-black tracking-tight text-[var(--color-gold-bright)]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[var(--color-copy)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 lg:justify-end">
            <QuickLeadForm context="an interior project in Guntur or Hyderabad" />

            <div
              className="image-overlay hero-feature-card min-h-[24rem] overflow-hidden rounded-[2.2rem] border border-white/12 shadow-[0_32px_80px_rgba(0,0,0,0.28)]"
              style={{
                backgroundImage: `url(${secondaryImage.url})`,
                backgroundSize: "cover",
                backgroundPosition: `${50 + (pointer.x - 50) * -0.08}% ${50 + (pointer.y - 50) * -0.06}%`,
              }}
            >
              <div className="relative z-10 flex h-full flex-col justify-end p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold-bright)]">
                  {secondaryImage.tag}
                </p>
                <p className="mt-3 max-w-xs font-display text-3xl text-white">
                  {secondaryImage.title}
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-[2rem] p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-gold-bright)]">Homes and businesses</p>
              <p className="mt-3 text-lg leading-8 text-[var(--color-copy)]">
                Design support for homes, restaurants, offices, and hospitality spaces across Andhra Pradesh and Hyderabad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
