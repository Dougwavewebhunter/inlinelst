export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 60%, var(--magenta) 0%, transparent 45%)" }} />
      <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-28 text-center">
        {eyebrow && <div className="text-xs uppercase tracking-[0.3em] text-gold mb-3 animate-fade-up">{eyebrow}</div>}
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-up" style={{ animationDelay: "60ms" }}>{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl mx-auto text-muted-foreground animate-fade-up" style={{ animationDelay: "120ms" }}>{subtitle}</p>}
      </div>
    </section>
  );
}