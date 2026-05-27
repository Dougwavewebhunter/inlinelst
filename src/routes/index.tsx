import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight, Phone, MessageCircle, CheckCircle2, Hammer, Sparkles, ShieldCheck, Star, Quote } from "lucide-react";
import img1 from "@/assets/project-1.jpeg";
import img2 from "@/assets/project-2.jpeg";
import img3 from "@/assets/project-3.jpeg";
import { BRAND, waLink } from "@/lib/brand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Inline Granite — Premium Granite, Quartz & Marble Installation" },
      { name: "description", content: "Inline Granite supplies and installs premium granite, quartz and marble countertops across South Africa. Get a free quote today." },
      { property: "og:title", content: "Inline Granite — Premium Countertop Installation" },
      { property: "og:description", content: "Supply & fit of granite, quartz and marble countertops in South Africa." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const SLIDES = [
  { img: img1, title: "Luxury Marble Vanities", sub: "Showpiece bathrooms, expertly installed." },
  { img: img2, title: "Quartz Kitchen Tops", sub: "Seamless, durable surfaces for modern homes." },
  { img: img3, title: "Premium Granite Counters", sub: "Crafted, polished and fitted with precision." },
];

const TYPING_WORDS = ["Granite.", "Quartz.", "Marble.", "Excellence."];

function Index() {
  const [slide, setSlide] = useState(0);
  const [typed, setTyped] = useState("");
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const word = TYPING_WORDS[wordIdx];
    let i = 0;
    const typer = setInterval(() => {
      i++;
      setTyped(word.slice(0, i));
      if (i >= word.length) {
        clearInterval(typer);
        setTimeout(() => setWordIdx((w) => (w + 1) % TYPING_WORDS.length), 1800);
      }
    }, 90);
    return () => clearInterval(typer);
  }, [wordIdx]);

  return (
    <SiteLayout>
      {/* HERO SLIDER */}
      <section className="relative h-[88vh] min-h-[560px] -mt-20 overflow-hidden">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ${i === slide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.img} alt={s.title} className="w-full h-full object-cover scale-105" loading={i === 0 ? "eager" : "lazy"} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.10 0.01 60 / 0.55), oklch(0.10 0.01 60 / 0.85))" }} />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-7xl px-4 w-full">
            <div className="max-w-3xl">
              <div className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold animate-fade-up">Inline Granite & Marble</div>
              <h1 className="mt-4 text-4xl md:text-7xl font-bold leading-[1.05] animate-fade-up" style={{ animationDelay: "120ms" }}>
                Crafted in <span className="gradient-gold-text">{typed}</span><span className="caret" />
              </h1>
              <p className="mt-5 text-base md:text-xl text-foreground/85 max-w-2xl animate-fade-up" style={{ animationDelay: "220ms" }}>
                {SLIDES[slide].sub} Premium supply & installation of granite, quartz and marble countertops across South Africa.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "320ms" }}>
                <a href={`tel:${BRAND.phone}`} className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-primary-foreground shadow-gold" style={{ background: "var(--gradient-gold)" }}>
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a href={waLink()} className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold bg-emerald-500 text-white">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold border border-border bg-card/40 text-foreground hover:bg-card transition">
                  Request Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {SLIDES.map((_, i) => (
            <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => setSlide(i)} className={`h-1.5 rounded-full transition-all ${i === slide ? "w-10 bg-gold" : "w-4 bg-white/40"}`} />
          ))}
        </div>

        {/* Floating accents */}
        <div className="hidden md:block absolute top-32 right-20 w-24 h-24 rounded-full opacity-30 animate-float" style={{ background: "var(--gradient-gold)" }} />
        <div className="hidden md:block absolute bottom-32 right-1/3 w-16 h-16 rounded-full opacity-30 animate-float" style={{ background: "var(--magenta)", animationDelay: "1.5s" }} />
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">What We Do</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Premium stone, perfectly fitted</h2>
          <p className="mt-4 text-muted-foreground">Supply and installation of granite, quartz and marble countertops — kitchens, bathrooms, bars and more.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: Sparkles, t: "Granite Countertops", d: "Durable, heat-resistant stone with unique natural patterns." },
            { icon: Hammer, t: "Quartz Countertops", d: "Engineered for consistency, low maintenance and lasting beauty." },
            { icon: ShieldCheck, t: "Marble Installation", d: "Timeless elegance for vanities, kitchens and feature walls." },
          ].map((s, i) => (
            <div key={s.t} className="group relative bg-card border border-border rounded-2xl p-7 hover:-translate-y-1 hover:shadow-elegant transition-all duration-300 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="w-12 h-12 grid place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm text-gold">Learn more <ArrowRight className="w-4 h-4" /></Link>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-card/40 border-y border-border py-20">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Why Inline Granite</div>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold">Workmanship you can see, finish you can feel.</h2>
            <p className="mt-4 text-muted-foreground">From templating to install, our craftsmen treat every slab with care — clean joins, polished edges and a finish that lasts.</p>
            <ul className="mt-6 space-y-3">
              {["On-site templating & measuring", "Premium imported & local stone", "Precision cuts & seamless joins", "Full installation & finishing"].map((t) => (
                <li key={t} className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-gold" /> <span>{t}</span></li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border border-border hover:border-gold transition">About Us <ArrowRight className="w-4 h-4" /></Link>
          </div>
          <div className="relative">
            <img src={img1} alt="Inline Granite installation" loading="lazy" className="rounded-2xl shadow-elegant w-full h-[420px] object-cover" />
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-card border border-border rounded-2xl p-5 shadow-elegant">
              <div className="text-3xl font-bold gradient-gold-text">10+</div>
              <div className="text-xs text-muted-foreground">Years of experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-gold">Client Words</div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold">Trusted by homeowners & builders</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "Lerato M.", q: "Beautiful quartz kitchen tops. Professional from quote to install." },
            { n: "Sandile K.", q: "Marble vanity is stunning — workmanship is top notch." },
            { n: "Anita P.", q: "Reliable team and a perfect finish on our granite counters." },
          ].map((t, i) => (
            <div key={t.n} className="bg-card border border-border rounded-2xl p-7 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
              <Quote className="w-6 h-6 text-gold" />
              <p className="mt-3 text-foreground/90">{t.q}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="text-sm font-semibold">{t.n}</div>
                <div className="flex text-gold">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-14 text-center" style={{ background: "var(--gradient-gold)" }}>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">Ready to transform your space?</h2>
          <p className="mt-3 text-primary-foreground/85 max-w-xl mx-auto">Get a free, no-obligation quote today.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={`tel:${BRAND.phone}`} className="rounded-full px-6 py-3 font-semibold bg-background text-foreground">Call {BRAND.phoneDisplay}</a>
            <a href={waLink()} className="rounded-full px-6 py-3 font-semibold bg-foreground/10 text-primary-foreground border border-primary-foreground/30">WhatsApp Us</a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
