import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "@/lib/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <p className="label-tech">404</p>
        <h1 className="mt-4 font-display text-5xl text-ink">Página no encontrada</h1>
        <div className="mt-8">
          <Link to="/" className="text-sm text-ink underline underline-offset-4 hover:text-amber">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-ink">Algo no cargó</h1>
        <p className="mt-2 text-sm text-mid">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 text-sm text-ink underline underline-offset-4 hover:text-amber"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JMGeo",
  url: "https://jmgeo.es",
  email: "javier@jmgeo.es",
  telephone: "+34 640 266 724",
  description:
    "Topografía técnica especializada en captura de datos LiDAR aéreos con drones. Operamos en seis países europeos.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Maestra Juana Senent 5, 5",
    postalCode: "46910",
    addressLocality: "Benetússer",
    addressRegion: "Valencia",
    addressCountry: "ES",
  },
  areaServed: ["ES", "GB", "IT", "PT", "FR", "DE"],
  logo: "/logo-jmgeo.png",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#F7F5EF" },
      { title: "JMGeo · Topografía con drones y LiDAR" },
      { name: "description", content: "JMGeo. Captura de datos LiDAR aéreos con drones para topografía técnica de precisión en seis países europeos." },
      { property: "og:site_name", content: "JMGeo" },
      { property: "og:title", content: "JMGeo · Topografía con drones y LiDAR" },
      { property: "og:description", content: "Captura LiDAR aérea precisa para infraestructura, energía y obra civil." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "JMGeo · Topografía con drones y LiDAR" },
      { name: "twitter:description", content: "Captura LiDAR aérea precisa para infraestructura, energía y obra civil." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/logo-jmgeo.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/logo-jmgeo.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/logo-jmgeo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..600&family=Inter+Tight:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-dvh flex flex-col bg-paper text-ink">
        <Header />
        <main id="main-content" className="flex-1 pt-24" tabIndex={-1}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
