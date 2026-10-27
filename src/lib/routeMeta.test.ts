import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import meta from "@/config/routeMeta.json";

const sitemapRoutes = readFileSync("scripts/generate-sitemap.mjs", "utf8").match(/const routes = (\[[^\]]+\])/)![1];
const routes: string[] = JSON.parse(sitemapRoutes.replace(/'/g, '"'));

describe("route metadata", () => {
  it("covers every sitemap route", () => {
    expect(Object.keys(meta).sort()).toEqual([...routes].sort());
  });
  it("has a unique title and description per page", () => {
    const m = meta as Record<string, { title: string; description: string }>;
    expect(new Set(Object.values(m).map((v) => v.title)).size).toBe(routes.length);
    expect(new Set(Object.values(m).map((v) => v.description)).size).toBe(routes.length);
  });
  it("keeps the missing page out of the sitemap", () => {
    expect(routes).not.toContain("/404");
  });
});
