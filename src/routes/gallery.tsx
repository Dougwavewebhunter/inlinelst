import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { X } from "lucide-react";
import img1 from "@/assets/project-1.jpeg";
import img2 from "@/assets/project-2.jpeg";
import img3 from "@/assets/project-3.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Inline Granite" },
      { name: "description", content: "Recent granite, quartz and marble installations by Inline Granite." },
      { property: "og:title", content: "Gallery — Inline Granite" },
      { property: "og:description", content: "Recent stone installation projects." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const ITEMS = [
  { src: img1, label: "Marble Bathroom Vanity" },
  { src: img2, label: "Quartz Kitchen Tops" },
  { src: img3, label: "Quartz Bar Counter" },
  { src: img1, label: "Feature Wall Marble" },
  { src: img2, label: "L-Shape Kitchen Install" },
  { src: img3, label: "Restaurant Counter" },
];

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <SiteLayout>
      <PageHero eyebrow="Gallery" title="A look at our recent work" subtitle="Tap any image to view." />
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <button key={i} onClick={() => setActive(i)} className="group relative overflow-hidden rounded-2xl bg-card border border-border animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
              <img src={it.src} alt={it.label} loading="lazy" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 text-left">
                <div className="text-xs uppercase tracking-widest text-gold">Project</div>
                <div className="text-sm font-semibold">{it.label}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {active !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur grid place-items-center p-4 animate-fade-up" onClick={() => setActive(null)}>
          <button className="absolute top-4 right-4 text-white" onClick={() => setActive(null)}><X /></button>
          <img src={ITEMS[active].src} alt={ITEMS[active].label} className="max-h-[88vh] max-w-full rounded-2xl shadow-elegant" />
        </div>
      )}
    </SiteLayout>
  );
}