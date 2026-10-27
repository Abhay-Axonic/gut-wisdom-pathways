import { Helmet } from "react-helmet-async";
import { site, isProductionHost } from "@/config/site";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  breadcrumbs?: { name: string; path: string }[];
  jsonLd?: object[];
  noindex?: boolean;
}

export function Seo({ title, description, path, breadcrumbs, jsonLd = [], noindex }: SeoProps) {
  const url = `${site.productionUrl}${path === "/" ? "/" : path}`;
  const fullTitle = path === "/" ? title : `${title} | ${site.brandName}`;
  const blockIndex = noindex || !isProductionHost();
  const schemas = [...jsonLd];
  if (breadcrumbs?.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ name: "Home", path: "/" }, ...breadcrumbs].map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: `${site.productionUrl}${b.path}`,
      })),
    });
  }
  return (
    <Helmet>
      <html lang="en-GB" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {blockIndex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(s)}</script>
      ))}
    </Helmet>
  );
}
