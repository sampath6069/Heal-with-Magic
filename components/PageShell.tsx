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
        <section className="section-shell pb-6 pt-14 sm:pt-18">
          <div className="glass-card max-w-4xl rounded-[2.4rem] p-8 sm:p-10">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="font-display text-5xl text-[var(--color-plum-deep)] sm:text-6xl">
              {title}
            </h1>
            <p className="text-lg leading-8 text-[var(--color-muted)]">
              {description}
            </p>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </>
  );
}
