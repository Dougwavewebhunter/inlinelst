import { useEffect, useState } from "react";
import { X, Download } from "lucide-react";
import logo from "@/assets/logo.png";

type BIP = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: string }> };

export function PWAInstall() {
  const [evt, setEvt] = useState<BIP | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onBip = (e: Event) => {
      e.preventDefault();
      setEvt(e as BIP);
      if (!sessionStorage.getItem("pwa-seen")) {
        setTimeout(() => setShow(true), 5000);
      }
    };
    window.addEventListener("beforeinstallprompt", onBip);
    return () => window.removeEventListener("beforeinstallprompt", onBip);
  }, []);

  if (!show) return null;
  const close = () => { setShow(false); sessionStorage.setItem("pwa-seen", "1"); };

  return (
    <div className="fixed inset-x-4 bottom-24 md:bottom-6 md:left-auto md:right-6 md:max-w-sm z-50 bg-card border border-border rounded-2xl p-4 shadow-elegant animate-fade-up">
      <button onClick={close} className="absolute top-2 right-2 text-muted-foreground"><X className="w-4 h-4" /></button>
      <div className="flex items-center gap-3">
        <img src={logo} alt="Inline Granite" className="w-12 h-12 rounded-md" />
        <div>
          <div className="font-semibold text-sm">Install Inline Granite</div>
          <p className="text-xs text-muted-foreground">Add our app to your home screen for instant access.</p>
        </div>
      </div>
      <button
        onClick={async () => { if (evt) { await evt.prompt(); close(); } }}
        className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-primary-foreground"
        style={{ background: "var(--gradient-gold)" }}
      >
        <Download className="w-4 h-4" /> Install App
      </button>
    </div>
  );
}