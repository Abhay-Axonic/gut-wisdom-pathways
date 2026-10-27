import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Progressive section reveal. Content is visible by default; the hidden state only applies
 * once this hook adds `js-reveal` to <html>. Sections already in view are shown immediately.
 */
export function useSectionReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>("main > section:not(:first-child)"));
    const vh = window.innerHeight;
    els.forEach((el) => {
      el.setAttribute("data-reveal", "");
      if (el.getBoundingClientRect().top < vh) el.classList.add("is-visible");
    });
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    els.forEach((el) => !el.classList.contains("is-visible") && io.observe(el));
    // Safety net: never leave content hidden.
    const t = window.setTimeout(() => els.forEach((el) => el.classList.add("is-visible")), 4000);
    return () => { io.disconnect(); window.clearTimeout(t); };
  }, [pathname]);
}
