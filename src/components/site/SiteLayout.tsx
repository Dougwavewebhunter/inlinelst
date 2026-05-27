import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBottomNav } from "./MobileBottomNav";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { ChatWidget } from "./ChatWidget";
import { PWAInstall } from "./PWAInstall";
import { ScrollToTop } from "./ScrollToTop";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-24 md:pb-0">{children}</main>
      <Footer />
      <MobileBottomNav />
      <FloatingWhatsApp />
      <ChatWidget />
      <ScrollToTop />
      <PWAInstall />
    </div>
  );
}