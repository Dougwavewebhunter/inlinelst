import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";
import { BRAND, waLink } from "@/lib/brand";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Inline Granite" },
      { name: "description", content: "Get in touch with Inline Granite for a free quote on your countertop project." },
      { property: "og:title", content: "Contact — Inline Granite" },
      { property: "og:description", content: "Call, WhatsApp or message us for a free quote." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "Granite", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => {
      const msg = `Hi ${BRAND.name},%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0AMessage: ${form.message}`;
      window.open(`https://wa.me/${BRAND.whatsapp}?text=${msg}`, "_blank");
      setState("done");
    }, 900);
  };

  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Let's talk about your project" subtitle="Get a free quote — usually within 24 hours." />
      <section className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2 space-y-6">
          {[
            { i: Phone, t: "Phone", v: BRAND.phoneDisplay, href: `tel:${BRAND.phone}` },
            { i: MessageCircle, t: "WhatsApp", v: BRAND.phoneDisplay, href: waLink() },
            { i: Mail, t: "Email", v: BRAND.email, href: `mailto:${BRAND.email}` },
            { i: MapPin, t: "Location", v: BRAND.address },
          ].map((c) => (
            <a key={c.t} href={c.href} className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 hover:border-gold transition">
              <div className="w-11 h-11 grid place-items-center rounded-xl text-primary-foreground" style={{ background: "var(--gradient-gold)" }}><c.i className="w-5 h-5" /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                <div className="font-semibold break-all">{c.v}</div>
              </div>
            </a>
          ))}
          <div className="rounded-2xl overflow-hidden border border-border">
            <iframe title="Map" src="https://www.google.com/maps?q=South+Africa&output=embed" className="w-full h-64" loading="lazy" />
          </div>
        </div>

        <form onSubmit={submit} className="lg:col-span-3 bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold">Request a quote</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-background border border-border rounded-lg px-3 py-3" />
            <input required placeholder="Phone number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="bg-background border border-border rounded-lg px-3 py-3" />
          </div>
          <input type="email" required placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-background border border-border rounded-lg px-3 py-3" />
          <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full bg-background border border-border rounded-lg px-3 py-3">
            {["Granite countertops", "Quartz countertops", "Marble installation", "Vanity tops", "Other"].map((s) => <option key={s}>{s}</option>)}
          </select>
          <textarea required placeholder="Tell us about your project..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-background border border-border rounded-lg px-3 py-3" />
          <button disabled={state !== "idle"} className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-primary-foreground disabled:opacity-70" style={{ background: "var(--gradient-gold)" }}>
            {state === "loading" && <Loader2 className="w-4 h-4 animate-spin" />}
            {state === "done" && <CheckCircle2 className="w-4 h-4" />}
            {state === "idle" && "Send message"}
            {state === "loading" && "Sending..."}
            {state === "done" && "Sent! Opening WhatsApp..."}
          </button>
        </form>
      </section>
    </SiteLayout>
  );
}