/** Decorative botanical / microbial illustrations. Purely ornamental (aria-hidden). */
export function MicrobeField({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 480" className={className} aria-hidden="true" fill="none">
      <circle cx="240" cy="240" r="210" className="stroke-brass/40" strokeWidth="1" />
      <circle cx="240" cy="240" r="160" className="stroke-accent/30" strokeWidth="1" strokeDasharray="2 6" />
      <g className="fill-secondary stroke-accent" strokeWidth="1.5">
        <rect x="150" y="140" width="110" height="44" rx="22" transform="rotate(-28 205 162)" />
        <rect x="250" y="270" width="96" height="38" rx="19" transform="rotate(18 298 289)" />
      </g>
      <g className="fill-primary/90">
        <circle cx="300" cy="170" r="22" />
        <circle cx="170" cy="300" r="14" />
        <circle cx="330" cy="350" r="9" />
      </g>
      <g className="stroke-primary" strokeWidth="1.5" strokeLinecap="round">
        <path d="M120 220c20-30 50-40 80-30" />
        <path d="M300 170c30 10 60 40 70 70" />
        <path d="M170 300c-10 30 0 60 30 80" />
      </g>
      <g className="fill-brass/70">
        <circle cx="205" cy="162" r="3" /><circle cx="225" cy="155" r="3" /><circle cx="185" cy="170" r="3" />
        <circle cx="298" cy="289" r="3" /><circle cx="278" cy="284" r="3" />
      </g>
      <g className="stroke-brass" strokeWidth="1.2" strokeLinecap="round">
        <path d="M380 120c-30 40-30 80 0 120" />
        <path d="M380 140c12 2 22 8 28 18M380 175c-12 2-22 8-28 18M380 205c12 2 22 8 28 18" />
      </g>
    </svg>
  );
}

export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true" fill="none">
      <path d="M20 100C20 50 50 20 100 20c0 50-30 80-80 80Z" className="fill-secondary stroke-accent" strokeWidth="1.5" />
      <path d="M20 100 80 40M45 75h18M58 62h16M40 70V55" className="stroke-accent" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
