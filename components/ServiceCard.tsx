type Service = {
  name: string;
  description: string;
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-7 transition-transform duration-200 hover:-translate-y-1">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(196,154,95,0.28)] bg-[rgba(196,154,95,0.1)] text-sm font-semibold text-[var(--color-gold-bright)]">
        DS
      </div>
      <h3 className="font-display text-3xl text-[var(--color-ink)]">
        {service.name}
      </h3>
      <p className="mt-4 text-base leading-7 text-[var(--color-copy)]">
        {service.description}
      </p>
    </article>
  );
}
