import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { CompassRose } from "@/components/CompassRose";

export const Route = createFileRoute("/clientes")({
  head: () => ({ meta: [{ title: "Área clientes — JMGeo" }] }),
  component: ClientsPage,
});

function ClientsPage() {
  const { t } = useTranslation();
  return (
    <section className="relative mx-auto max-w-7xl px-6 lg:px-10 py-32 md:py-48 min-h-[70vh] flex flex-col items-center text-center">
      <div className="text-amber/30">
        <CompassRose size={140} />
      </div>
      <p className="label-tech mt-12">04 / Acceso</p>
      <h1 className="mt-6 font-display text-5xl md:text-7xl text-ink tracking-tight">
        {t("pages.clients.title")}
      </h1>
      <p className="mt-8 font-display italic text-2xl md:text-3xl text-ink/70">
        <span className="italic-acc">{t("pages.clients.soon")}</span>
      </p>
    </section>
  );
}
