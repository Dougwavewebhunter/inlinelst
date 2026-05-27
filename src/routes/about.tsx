import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Award, Users, Wrench, Sparkles } from "lucide-react";
import img from "@/assets/project-3.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Inline Granite" },
      { name: "description", content: "Learn about Inline Granite — premium supply and installation of granite, quartz and marble in South Africa." },
      { property: "og:title", content: "About — Inline Granite" },
      { property: "og:description", content: "Premium stone supply & installation, crafted with care." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About Us" title="Built on craft. Finished with care." subtitle="Inline Granite supplies and installs premium granite, quartz and marble countertops across South Africa." />
      <section className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <img src={img} alt="Inline Granite workshop" loading="lazy" className="rounded-2xl shadow-elegant w-full h-[440px] object-cover" />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Our story</h2>
          <p className="mt-4 text-muted-foreground">We are a team of stone specialists who love what we do. From quote and templating to cutting, polishing and installation, we handle every step with attention to detail.</p>
          <p className="mt-3 text-muted-foreground">Whether you are renovating a single bathroom or fitting out an entire home or business, we deliver a finish that lasts.</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[
              { i: Award, t: "10+ Years", d: "Experience" },
              { i: Users, t: "500+", d: "Happy clients" },
              { i: Wrench, t: "Full service", d: "Supply & install" },
              { i: Sparkles, t: "Premium", d: "Materials only" },
            ].map((s) => (
              <div key={s.t} className="bg-card border border-border rounded-xl p-4">
                <s.i className="w-5 h-5 text-gold" />
                <div className="mt-2 font-semibold">{s.t}</div>
                <div className="text-xs text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}