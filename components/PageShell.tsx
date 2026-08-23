import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-white/6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,154,95,0.2),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_40%)]" />
          <div className="section-shell relative pb-10 pt-16 sm:pt-20">
            <div className="max-w-4xl space-y-5">
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="font-display text-5xl text-[var(--color-ink)] sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-[var(--color-copy)]">
                {description}
              </p>
            </div>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}
