/**
 * Decorative botanical / microbial illustrations. Purely ornamental (aria-hidden)
 * and scientifically neutral — they do not depict patient results.
 * Shared language: 1.25px strokes, accent (teal) outlines, brass details, forest fills.
 */
const S = 1.25;

export function MicrobeField({ className = "", animate = false }: { className?: string; animate?: boolean }) {
  return (
    <svg viewBox="0 0 480 480" className={`${className} ${animate ? "draw" : ""}`} aria-hidden="true" fill="none">
      <circle className="ring stroke-brass/50" pathLength={1} cx="240" cy="240" r="210" strokeWidth={S} />
      <circle cx="240" cy="240" r="160" className="stroke-accent/40" strokeWidth={S} strokeDasharray="2 6" />
      {/* fine culture texture */}
      <g className="fill-accent/25">
        {Array.from({ length: 28 }).map((_, i) => {
          const a = (i * 137.5 * Math.PI) / 180;
          const r = 40 + ((i * 53) % 150);
          return <circle key={i} cx={240 + Math.cos(a) * r} cy={240 + Math.sin(a) * r} r={1.4} />;
        })}
      </g>
      <g className="fill-secondary stroke-accent" strokeWidth={S}>
        <rect x="150" y="140" width="110" height="44" rx="22" transform="rotate(-28 205 162)" />
        <rect x="250" y="270" width="96" height="38" rx="19" transform="rotate(18 298 289)" />
        <ellipse cx="160" cy="230" rx="16" ry="11" transform="rotate(30 160 230)" />
      </g>
      <g className="fill-primary/90">
        <circle cx="300" cy="170" r="22" />
        <circle cx="170" cy="300" r="14" />
        <circle cx="330" cy="350" r="9" />
      </g>
      <g className="stroke-primary" strokeWidth={S} strokeLinecap="round">
        <path pathLength={1} d="M120 220c20-30 50-40 80-30" />
        <path pathLength={1} d="M300 170c30 10 60 40 70 70" />
        <path pathLength={1} d="M170 300c-10 30 0 60 30 80" />
        <path pathLength={1} d="M322 165c6-8 14-12 22-12M318 188c8 4 13 10 15 18" />
      </g>
      <g className="fill-brass/80">
        <circle cx="205" cy="162" r="3" /><circle cx="225" cy="155" r="3" /><circle cx="185" cy="170" r="3" />
        <circle cx="298" cy="289" r="3" /><circle cx="278" cy="284" r="3" />
      </g>
      <g className="stroke-brass" strokeWidth={S} strokeLinecap="round">
        <path pathLength={1} d="M380 120c-30 40-30 80 0 120" />
        <path pathLength={1} d="M380 140c12 2 22 8 28 18M380 175c-12 2-22 8-28 18M380 205c12 2 22 8 28 18" />
      </g>
    </svg>
  );
}

export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" fill="none">
      <path d="M20 100C20 50 50 20 100 20c0 50-30 80-80 80Z" className="fill-secondary stroke-accent" strokeWidth={S} />
      <path d="M20 100 80 40M45 75h18M58 62h16M40 70V55" className="stroke-accent" strokeWidth={S} strokeLinecap="round" />
    </svg>
  );
}

/** Small botanical sprig for section accents. */
export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 96" className={className} aria-hidden="true" fill="none">
      <g className="stroke-brass" strokeWidth={S} strokeLinecap="round">
        <path d="M32 92V10" />
        <path d="M32 30c-10-2-16-8-18-16 10 0 16 6 18 16ZM32 48c10-2 16-8 18-16-10 0-16 6-18 16ZM32 66c-10-2-16-8-18-16 10 0 16 6 18 16Z" />
      </g>
    </svg>
  );
}

/** A trio of small microbe motifs. */
export function MicrobeMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 48" className={className} aria-hidden="true" fill="none">
      <rect x="6" y="16" width="40" height="16" rx="8" className="fill-secondary stroke-accent" strokeWidth={S} />
      <circle cx="66" cy="24" r="8" className="fill-primary/85" />
      <circle cx="96" cy="24" r="12" className="stroke-accent" strokeWidth={S} strokeDasharray="2 4" />
      <circle cx="18" cy="24" r="1.6" className="fill-brass" /><circle cx="26" cy="24" r="1.6" className="fill-brass" /><circle cx="34" cy="24" r="1.6" className="fill-brass" />
    </svg>
  );
}

/** Organic curved divider. `fill` class sets the colour of the shape below the curve. */
export function CurveDivider({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className={`block h-8 w-full sm:h-12 ${flip ? "rotate-180" : ""} ${className}`} aria-hidden="true">
      <path d="M0 48V22C240 2 480 0 720 18s480 30 720 6v24Z" />
    </svg>
  );
}

/** Fine brass rule with a central node. */
export function BrassRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-10 bg-brass/60" />
      <span className="h-1.5 w-1.5 rotate-45 border border-brass" />
      <span className="h-px w-10 bg-brass/60" />
    </div>
  );
}
