import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// URL del ERP (repo separado, ver CLAUDE.md — "NO mezclar el código del ERP con esta web").
const PORTAL_URL = "https://portal.jmgeo.es";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Área de clientes · JM GEO · Topografía con drones y LiDAR" },
      {
        name: "description",
        content:
          "Accede a tu portal JM GEO: proyectos, entregables LiDAR, versiones e histórico de trabajo.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ClientsPage,
});

/**
 * /clientes es la puerta de entrada al ERP: no muestra nada, redirige.
 *
 * En una visita directa el redirect lo resuelve Vercel en el edge (307, ver
 * `redirects` en vercel.json), así que esto no llega a pintarse. Pero una
 * navegación interna del router (el botón "Área clientes" del header) NO pasa
 * por el edge, así que aquí repetimos el salto en cliente. El enlace visible
 * es la red de seguridad para quien no tenga JS.
 */
function ClientsPage() {
  const { t } = useTranslation();

  useEffect(() => {
    // replace y no assign: al volver atrás no se vuelve a caer aquí.
    window.location.replace(PORTAL_URL);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--envelope)] px-[8vw] text-center">
      <p className="font-sans text-sm text-paper/70">
        {t("clients.redirecting")}{" "}
        <a href={PORTAL_URL} className="text-amber underline">
          {t("clients.cta")}
        </a>
      </p>
    </div>
  );
}
