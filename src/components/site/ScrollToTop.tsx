import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-36 md:bottom-24 right-4 z-40 grid place-items-center w-11 h-11 rounded-full bg-card border border-border text-foreground hover:text-gold transition"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}