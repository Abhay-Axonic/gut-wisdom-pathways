import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ConsentBanner } from "@/components/shared/ConsentBanner";
import { ctaHref, ctaLabel } from "@/config/site";
import { track } from "@/lib/analytics";
import { useSectionReveal } from "@/components/shared/Reveal";

export function Layout({ children, hideMobileCta }: { children: ReactNode; hideMobileCta?: boolean }) {
  useSectionReveal();
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main id="main" className="flex-1" tabIndex={-1}>{children}</main>
      <Footer />
      {!hideMobileCta && (
        <>
          <div className="h-20 lg:hidden" aria-hidden />
          <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
            <Link to={ctaHref} onClick={() => track("cta_click", "mobile_bar")} className="flex min-h-12 w-full items-center justify-center rounded-md bg-primary font-medium text-primary-foreground">
              {ctaLabel}
            </Link>
          </div>
        </>
      )}
      <ConsentBanner />
    </div>
  );
}
