// Post-build: writes dist/<route>/index.html (and <route>.html) with route-specific
// title, description, canonical, social tags and JSON-LD in the static HTML,
// so crawlers and social preview services see per-page metadata without running JS.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const cfg = readFileSync("src/config/site.ts", "utf8");
const base = cfg.match(/productionUrl:\s*"([^"]+)"/)[1];
const meta = JSON.parse(readFileSync("src/config/routeMeta.json", "utf8"));
const tpl = readFileSync("dist/index.html", "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const head = (path, m) => {
  const url = base + path;
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" data-prerender />`,
    `<link rel="canonical" href="${url}" data-prerender />`,
    `<meta property="og:site_name" content="Microbiome Clinic" />`,
    `<meta property="og:title" content="${esc(m.title)}" data-prerender />`,
    `<meta property="og:description" content="${esc(m.description)}" data-prerender />`,
    `<meta property="og:url" content="${url}" data-prerender />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="en_GB" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.title)}" data-prerender />`,
    `<meta name="twitter:description" content="${esc(m.description)}" data-prerender />`,
    ...(m.jsonLd || []).map((j) => `<script type="application/ld+json" data-prerender>${JSON.stringify(j).replace(/</g, "\\u003c")}</script>`),
  ].map((l) => "    " + l).join("\n");
};
const render = (path) => tpl.replace(/<!--seo-->[\s\S]*?<!--\/seo-->/, `<!--seo-->\n${head(path, meta[path])}\n    <!--/seo-->`);
for (const path of Object.keys(meta)) {
  const html = render(path);
  if (path === "/") { writeFileSync("dist/index.html", html); continue; }
  mkdirSync(`dist${path}`, { recursive: true });
  writeFileSync(`dist${path}/index.html`, html);
  writeFileSync(`dist${path}.html`, html);
}
console.log("prerendered head for", Object.keys(meta).length, "routes");
