// Configuración propia de Vite (24-oct-2026). Sustituye a
// @lovable.dev/vite-tanstack-config: la web ya no se edita con Lovable y el
// envoltorio solo añadía cosas de su editor (etiquetador de componentes,
// puente y HMR del sandbox, registro de errores en dev). Aquí va lo que ese
// envoltorio hacía en el BUILD, con los mismos plugins y en el mismo orden:
// Tailwind, rutas de tsconfig, TanStack Start (con su protección de imports
// por defecto), React, el alias @, el dedupe de React/React Query y las
// variables VITE_*. El plugin de Cloudflare ya estaba desactivado: Vercel
// sirve dist/client como sitio estático, con prerender de las rutas públicas
// y el shell de la SPA para las demás.
import { defineConfig, loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    define: Object.fromEntries(
      Object.entries(env).map(([clave, valor]) => [
        `import.meta.env.${clave}`,
        JSON.stringify(valor),
      ]),
    ),
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    plugins: [
      tailwindcss(),
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        importProtection: {
          behavior: "error",
          client: { files: ["**/server/**"], specifiers: ["server-only"] },
        },
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
      }),
      viteReact(),
    ],
    server: { host: "::", port: 8080 },
  };
});
