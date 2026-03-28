import type { MetadataRoute } from "next";

const BASE_URL = "https://flagzone.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/was-ist-flag-football", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/olympia-2028", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/wm-2026-duesseldorf", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/ausruestung", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/team-finden", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/impressum", priority: 0.2, changeFrequency: "yearly" as const },
    { path: "/datenschutz", priority: 0.2, changeFrequency: "yearly" as const },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
