import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2 } from "lucide-react";
import img1 from "@/assets/project-1.jpeg";
import img2 from "@/assets/project-2.jpeg";
import img3 from "@/assets/project-3.jpeg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Inline Granite" },
      { name: "description", content: "Granite, quartz and marble countertop supply and installation — kitchens, vanities and bars." },
      { property: "og:title", content: "Services — Inline Granite" },
      { property: "og:description", content: "Supply & fit of granite, quartz and marble." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const SERVICES = [
  { img: img1, t: "Marble Vanities & Bathrooms", d: "Stunning marble vanity tops and feature walls, expertly installed.", points: ["Custom templates", "Polished edges", "Seamless joins"] },
  { img: img2, t: "Quartz Kitchen Countertops", d: "Engineered quartz for hard-wearing, low-maintenance kitchen surfaces.", points: ["Wide colour range", "Heat & stain resistant", "Long-lasting finish"] },
  { img: img3, t: "Granite Counters & Bars", d: "Premium granite countertops for kitchens, islands and entertainment areas.", points: ["Natural patterns", "Durable surface", "Professional install"] },
];

function Services() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Our Services" title="Supply & installation, done right" subtitle="We fit and supply granite, quartz and marble countertops — beautifully finished and built to last." />
      <section className="mx-auto max-w-7xl px-4 py-16 space-y-12">
        {SERVICES.map((s, i) => (
          <div key={s.t} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[direction:rtl]" : ""}`}>
            <img src={s.img} alt={s.t} loading="lazy" className="rounded-2xl shadow-elegant w-full h-[360px] object-cover [direction:ltr]" />
            <div className="[direction:ltr]">
              <h2 className="text-2xl md:text-4xl font-bold">{s.t}</h2>
              <p className="mt-3 text-muted-foreground">{s.d}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => <li key={p} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gold" /> {p}</li>)}
              </ul>
              <Link to="/contact" className="mt-6 inline-flex rounded-full px-5 py-2.5 font-semibold text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>Get a quote</Link>
            </div>
          </div>
        ))}

        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">FAQ</div>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold">Common questions</h2>
          </div>
          <Accordion type="single" collapsible className="mt-8 max-w-3xl mx-auto">
            {[
              ["Do you supply and install?", "Yes — we supply the stone and handle full installation, including templating, cutting and finishing."],
              ["Which areas do you service?", "We work across South Africa — get in touch and we'll confirm scheduling."],
              ["How long does an install take?", "Most kitchens are installed within a day once templating is complete."],
              ["Do you offer free quotes?", "Yes. Call, WhatsApp or fill in the contact form for a free no-obligation quote."],
            ].map(([q, a]) => (
              <AccordionItem key={q} value={q} className="border-border">
                <AccordionTrigger className="text-left">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </SiteLayout>
  );
}