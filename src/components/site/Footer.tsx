import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { BRAND, waLink } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Inline Granite" className="h-12 w-12 rounded-md" />
            <div>
              <div className="font-semibold">{BRAND.name}</div>
              <div className="text-xs text-muted-foreground">{BRAND.tagline}</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Premium supply & installation of granite, quartz and marble countertops across South Africa.
          </p>
          <div className="mt-4 flex gap-3">
            <a aria-label="WhatsApp" href={waLink()} className="w-10 h-10 grid place-items-center rounded-full bg-card border border-border hover:text-gold transition"><MessageCircle className="w-4 h-4" /></a>
            <a aria-label="Facebook" href="#" className="w-10 h-10 grid place-items-center rounded-full bg-card border border-border hover:text-gold transition"><Facebook className="w-4 h-4" /></a>
            <a aria-label="Instagram" href="#" className="w-10 h-10 grid place-items-center rounded-full bg-card border border-border hover:text-gold transition"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/", "Home"], ["/about", "About"], ["/services", "Services"],
              ["/gallery", "Gallery"], ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}><Link to={to} className="text-muted-foreground hover:text-foreground">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-gold">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-1 text-gold" /><a href={`tel:${BRAND.phone}`} className="text-muted-foreground hover:text-foreground">{BRAND.phoneDisplay}</a></li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-1 text-gold" /><a href={`mailto:${BRAND.email}`} className="text-muted-foreground hover:text-foreground break-all">{BRAND.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-1 text-gold" /><span className="text-muted-foreground">{BRAND.address}</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-gold">Get a Free Quote</h4>
          <p className="mt-4 text-sm text-muted-foreground">Tap below to chat with us instantly on WhatsApp.</p>
          <a href={waLink()} className="mt-4 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div>
            Website designed by <a href={BRAND.credit.url} target="_blank" rel="noreferrer" className="text-gold hover:underline">{BRAND.credit.url}</a> · <a href={`tel:${BRAND.credit.phone}`} className="hover:text-foreground">{BRAND.credit.phone}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}