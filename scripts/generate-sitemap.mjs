// Generates public/sitemap.xml from the production URL in src/config/site.ts
import { readFileSync, writeFileSync } from "node:fs";
const cfg = readFileSync("src/config/site.ts", "utf8");
const base = cfg.match(/productionUrl:\s*"([^"]+)"/)[1];
const routes = ["/", "/services", "/fees", "/clinicians", "/testing", "/science", "/faq", "/about", "/contact", "/providers", "/privacy", "/terms", "/accessibility"];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map((r) => `  <url><loc>${base}${r}</loc></url>`).join("\n")}\n</urlset>\n`;
writeFileSync("public/sitemap.xml", xml);
writeFileSync("public/robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`);
console.log("sitemap written for", base);
