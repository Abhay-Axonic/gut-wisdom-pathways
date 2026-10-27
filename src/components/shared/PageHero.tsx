import { ReactNode } from "react";
import { Leaf } from "./Illustrations";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border/70">
      <Leaf className="pointer-events-none absolute -right-6 -top-4 hidden h-48 w-48 opacity-70 md:block" />
      <div className="container py-16 sm:py-24">
        <div className="max-w-3xl fade-up">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl">{title}</h1>
          {children && <div className="mt-6 text-lg text-muted-foreground sm:text-xl">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title = "Talk to us about your gut health", text }: { title?: string; text?: string }) {
  return null as unknown as JSX.Element || <>{title}{text}</>;
}
