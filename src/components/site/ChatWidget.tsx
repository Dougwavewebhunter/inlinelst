import { useEffect, useState } from "react";
import { X, Send, MessageSquare } from "lucide-react";
import { waLink, BRAND } from "@/lib/brand";

const SERVICES = ["Granite countertops", "Quartz countertops", "Marble countertops", "Vanity tops", "Other"];

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [pop, setPop] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  useEffect(() => {
    const t = setTimeout(() => { if (!sessionStorage.getItem("chat-seen")) setPop(true); }, 6000);
    return () => clearTimeout(t);
  }, []);

  const send = () => {
    const msg = `Hi ${BRAND.name}!\nName: ${name}\nPhone: ${phone}\nService: ${service}`;
    window.open(waLink(msg), "_blank");
  };

  return (
    <>
      {pop && !open && (
        <div className="fixed bottom-40 md:bottom-24 right-4 z-40 max-w-[260px] bg-card border border-border rounded-2xl p-4 shadow-elegant animate-fade-up">
          <button onClick={() => { setPop(false); sessionStorage.setItem("chat-seen", "1"); }} className="absolute top-2 right-2 text-muted-foreground"><X className="w-4 h-4" /></button>
          <div className="text-sm font-semibold">Need a quote?</div>
          <p className="text-xs text-muted-foreground mt-1">Chat with us — we usually reply within minutes.</p>
          <button onClick={() => { setOpen(true); setPop(false); }} className="mt-3 w-full rounded-full px-3 py-2 text-xs font-semibold text-primary-foreground" style={{ background: "var(--gradient-gold)" }}>
            Start chat
          </button>
        </div>
      )}

      <button
        aria-label="Open chat"
        onClick={() => setOpen(true)}
        className="fixed bottom-36 md:bottom-24 right-4 z-40 grid place-items-center w-12 h-12 rounded-full text-primary-foreground shadow-gold"
        style={{ background: "var(--gradient-gold)" }}
      >
        <MessageSquare className="w-5 h-5" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm grid place-items-end sm:place-items-center p-4 animate-fade-up" onClick={() => setOpen(false)}>
          <div onClick={(e) => e.stopPropagation()} className="w-full sm:max-w-md bg-card border border-border rounded-2xl overflow-hidden shadow-elegant">
            <div className="flex items-center justify-between p-4" style={{ background: "var(--gradient-gold)" }}>
              <div className="text-primary-foreground">
                <div className="font-semibold">Inline Granite Assistant</div>
                <div className="text-xs opacity-80">We reply on WhatsApp</div>
              </div>
              <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground"><X className="w-5 h-5" /></button>
            </div>
            <div className="p-4 space-y-3">
              <input className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              <input className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <div>
                <div className="text-xs text-muted-foreground mb-2">Service needed</div>
                <div className="flex flex-wrap gap-2">
                  {SERVICES.map((s) => (
                    <button key={s} onClick={() => setService(s)} className={`text-xs px-3 py-1.5 rounded-full border transition ${service === s ? "bg-gold text-primary-foreground border-transparent" : "border-border text-muted-foreground hover:text-foreground"}`}>{s}</button>
                  ))}
                </div>
              </div>
              <button onClick={send} disabled={!name || !phone || !service} className="w-full inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 font-semibold text-primary-foreground disabled:opacity-50" style={{ background: "var(--gradient-gold)" }}>
                <Send className="w-4 h-4" /> Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}