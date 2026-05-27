import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/brand";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 md:bottom-6 right-4 z-40 grid place-items-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-elegant animate-float hover:scale-110 transition"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute inset-0 rounded-full ring-2 ring-emerald-400/60 animate-ping" />
    </a>
  );
}