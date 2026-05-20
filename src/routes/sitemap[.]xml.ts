import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = ""; // TODO: replace with project URL once a domain is set.

const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/tecnologia", priority: "0.9", changefreq: "monthly" },
  { path: "/sobre", priority: "0.7", changefreq: "monthly" },
  { path: "/contacto", priority: "0.7", changefreq: "yearly" },
] as const;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = routes
          .map(
            (r) =>
              `  <url>\n    <loc>${BASE_URL}${r.path}</loc>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
