import { Link } from "@tanstack/react-router";
import { Home, Phone, MessageCircle, Images } from "lucide-react";
import { BRAND, waLink } from "@/lib/brand";

export function MobileBottomNav() {
  const item = "flex flex-col items-center justify-center gap-0.5 text-[11px] flex-1 py-2 text-muted-foreground";
  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 glass border-t border-border pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-stretch">
        <Link to="/" className={item} activeProps={{ className: "text-gold" }}>
          <Home className="w-5 h-5" /> Home
        </Link>
        <Link to="/gallery" className={item} activeProps={{ className: "text-gold" }}>
          <Images className="w-5 h-5" /> Gallery
        </Link>
        <a href={waLink()} className={item + " text-emerald-400"}>
          <MessageCircle className="w-5 h-5" /> WhatsApp
        </a>
        <a href={`tel:${BRAND.phone}`} className={item + " text-gold"}>
          <Phone className="w-5 h-5" /> Call
        </a>
      </div>
    </nav>
  );
}