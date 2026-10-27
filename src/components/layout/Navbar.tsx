import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, ctaLabel, ctaHref } from "@/config/site";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export const navItems = [
  { name: "Services", href: "/services" },
  { name: "Fees", href: "/fees" },
  { name: "Clinicians", href: "/clinicians" },
  { name: "Testing", href: "/testing" },
  { name: "The science", href: "/science" },
  { name: "FAQs", href: "/faq" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) { setOpen(false); toggleRef.current?.focus(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <nav className="container flex h-16 items-center justify-between lg:h-20" aria-label="Main">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-heading text-xl font-medium text-primary sm:text-2xl">{site.brandName}</span>
          <span className="hidden text-xs uppercase tracking-[0.18em] text-brass sm:inline">London</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn("rounded-md px-3 py-2 text-[0.95rem] text-muted-foreground transition-colors hover:text-foreground", isActive && "text-foreground underline decoration-brass decoration-2 underline-offset-8")
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Button asChild className="ml-3" onClick={() => track("cta_click", "header")}>
            <Link to={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-background lg:hidden">
          <div className="container flex flex-col py-6">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={({ isActive }) => cn("border-b border-border py-4 font-heading text-2xl", isActive ? "text-primary" : "text-foreground")}>
                {item.name}
              </NavLink>
            ))}
            <NavLink to="/contact" className="border-b border-border py-4 font-heading text-2xl">Contact</NavLink>
            <Button asChild size="lg" className="mt-8" onClick={() => track("cta_click", "mobile_menu")}>
              <Link to={ctaHref}>{ctaLabel}</Link>
            </Button>
            <a href={site.contact.phoneHref} onClick={() => track("phone_click", "mobile_menu")} className="mt-4 text-center text-muted-foreground">
              Or call {site.contact.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
