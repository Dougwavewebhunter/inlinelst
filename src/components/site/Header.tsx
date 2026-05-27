import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { BRAND } from "@/lib/brand";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border/60 py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Inline Granite logo" className="h-12 w-12 rounded-md object-cover shadow-elegant" />
          <div className="leading-tight hidden sm:block">
            <div className="font-semibold text-foreground">{BRAND.name}</div>
            <div className="text-xs text-muted-foreground">Granite • Quartz • Marble</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm font-medium text-foreground/85 hover:text-foreground rounded-md transition-colors relative"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={`tel:${BRAND.phone}`}
            className="ml-3 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground shadow-gold hover:scale-[1.03] transition-transform"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md bg-card border border-border"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu — solid background, slide-in */}
      <div
        className={`md:hidden fixed inset-x-0 top-[68px] bg-background border-t border-border transition-all duration-300 origin-top ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="px-4 py-6 flex flex-col gap-1">
          {NAV.map((n, i) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-3 rounded-lg text-base font-medium text-foreground hover:bg-card transition-colors animate-fade-up"
              style={{ animationDelay: `${i * 40}ms` }}
              activeProps={{ className: "bg-card text-gold" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={`tel:${BRAND.phone}`}
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 font-semibold text-primary-foreground"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Phone className="w-4 h-4" /> Call {BRAND.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}