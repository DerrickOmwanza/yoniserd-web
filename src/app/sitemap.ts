import type { MetadataRoute } from "next";

import { site } from "@/content/site";

const routes = ["", "/about", "/programs", "/our-work", "/impact", "/news", "/gallery", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified,
    changeFrequency: route === "/news" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
