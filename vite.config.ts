// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Despliegue en Vercel: desactivamos @cloudflare/vite-plugin (que empaqueta la salida como
// Cloudflare Worker) y activamos prerender estático de todas las rutas públicas + shell SPA.
// Vercel sirve dist/client/ directamente como sitio estático, con fallback al shell para
// rutas no prerenderizadas.
export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    server: { entry: "server" },
    pages: [
      { path: "/" },
      { path: "/tecnologia" },
      { path: "/sobre" },
      { path: "/contacto" },
      { path: "/clientes" },
      { path: "/aviso-legal" },
      { path: "/privacidad" },
      { path: "/cookies" },
      { path: "/sitemap.xml" },
    ],
    prerender: { enabled: true, crawlLinks: true },
    spa: { enabled: true },
  },
});
