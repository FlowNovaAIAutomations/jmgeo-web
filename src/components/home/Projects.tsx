import { motion } from "framer-motion";
import { Search, MapPin, Calendar, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Projects — sección "Portal Cliente JM GEO".
 * El panel derecho es una maqueta FIEL del dashboard real del portal de
 * clientes (portal.jmgeo.es → PortalDashboardPage del ERP): cabecera
 * "Mis proyectos" con buscador, chips de filtro por estado con contador
 * y filas de proyecto con miniatura, badge de estado, ubicación y fecha
 * de entrega. Datos ficticios (sin proyectos reales, riesgo NDA).
 * Textos en locales/{es,en}/common.json (projects.*).
 */

// Colores de estado copiados de src/config/estadosProyecto.ts del ERP,
// para que el badge sea idéntico al que verá el cliente en su portal.
const ESTADO_UI: Record<string, { bg: string; color: string }> = {
  activo: { bg: "rgba(34,197,94,0.12)", color: "#16a34a" },
  finalizado: { bg: "rgba(100,116,139,0.12)", color: "#64748b" },
};

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

interface PortalCard {
  name: string;
  ref: string;
  location: string;
  delivery: string;
  status: "activo" | "finalizado";
}

export function Projects() {
  const { t } = useTranslation();
  const cards = t("projects.cards", { returnObjects: true }) as PortalCard[];
  const nActivos = cards.filter((c) => c.status === "activo").length;
  const chips = [
    { label: t("projects.filterAll"), count: cards.length, active: false },
    { label: t("projects.statusActive"), count: nActivos, active: true },
    { label: t("projects.statusDone"), count: cards.length - nActivos, active: false },
  ];
  return (
    <section id="proyectos" className="bg-paper py-[140px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* LEFT — Copy */}
        <div className="lg:col-span-5">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease }}
            className="font-mono uppercase text-[13px] tracking-[0.25em] text-amber"
          >
            {t("projects.label")}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mt-7 font-display font-normal text-ink leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.75rem)" }}
          >
            {t("projects.title1")}
            <span className="block text-ink/35 whitespace-nowrap">{t("projects.title2")}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-8 text-ink/80 leading-[1.65] max-w-md"
          >
            {t("projects.body")}
          </motion.p>

          <motion.a
            href="/clientes"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="mt-10 inline-flex items-center gap-2 font-mono uppercase text-[11px] tracking-[0.25em] text-ink border-b border-ink/30 hover:border-amber hover:text-amber transition-colors pb-1"
          >
            {t("projects.cta")}
            <span className="text-amber">→</span>
          </motion.a>
        </div>

        {/* RIGHT — Cloud panel mockup */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="lg:col-span-7 relative"
        >
          {/* glow */}
          <div
            aria-hidden
            className="absolute -inset-6 rounded-2xl pointer-events-none"
            style={{
              background:
                "radial-gradient(60% 60% at 80% 20%, rgba(185,132,24,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 20% 90%, rgba(20,40,58,0.15) 0%, transparent 60%)",
              filter: "blur(20px)",
            }}
          />

          {/* Maqueta del portal real (vista lista del dashboard del cliente) */}
          <div className="relative rounded-[20px] overflow-hidden shadow-soft-lg border border-ink/15 bg-[var(--paper-alt)]">
            {/* Barra superior tipo navegador/app */}
            <div className="flex items-center justify-between px-5 py-3 bg-ink text-paper">
              <div className="flex items-center gap-3">
                <div className="h-7 w-7 rounded-md bg-amber/15 border border-amber/30 flex items-center justify-center">
                  <span className="font-display text-amber text-[13px]">J</span>
                </div>
                <span className="font-mono text-[11px] tracking-[0.15em] text-paper/80">
                  {t("projects.domain")}
                </span>
              </div>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
              </span>
            </div>

            <div className="p-5 md:p-6">
              {/* Cabecera: "Mis proyectos" + buscador decorativo */}
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono uppercase text-[10px] tracking-[0.25em] text-mid">
                  {t("projects.myProjects")}
                </p>
                <div className="flex items-center gap-2 rounded-[10px] border border-ink/10 bg-paper px-3 py-1.5 text-mid">
                  <Search className="h-3.5 w-3.5" strokeWidth={1.6} />
                  <span className="text-[12px]">{t("projects.search")}</span>
                </div>
              </div>

              {/* Chips de filtro por estado con contador */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-mid">{t("projects.filterLabel")}</span>
                {chips.map((chip) => (
                  <span
                    key={chip.label}
                    className="rounded-full px-3 py-1 text-[11px] font-semibold"
                    style={
                      chip.active
                        ? { background: "var(--ink)", color: "white" }
                        : { background: "var(--paper)", color: "var(--mid)", border: "1px solid rgba(58,74,90,0.12)" }
                    }
                  >
                    {chip.label} ({chip.count})
                  </span>
                ))}
              </div>

              {/* Filas de proyecto (vista lista del portal) */}
              <div className="mt-4 space-y-3" aria-hidden="true">
                {cards.map((c, i) => (
                  <motion.div
                    key={c.ref}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-4 rounded-[14px] bg-paper border border-ink/10 p-3.5 md:p-4"
                  >
                    {/* Miniatura con iniciales (como el portal sin portada) */}
                    <div
                      className="flex h-11 w-11 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-[10px] text-[11px] font-medium text-white/80"
                      style={{ background: "linear-gradient(135deg, #3D5166 0%, #4A5E72 100%)" }}
                    >
                      {initials(c.name)}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] md:text-[14px] font-semibold uppercase tracking-wide text-ink">
                        {c.name}
                        <span className="ml-2 text-[10px] font-medium normal-case tracking-normal text-mid">
                          {c.ref}
                        </span>
                      </p>
                      <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] md:text-[12px] text-mid">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" strokeWidth={1.5} /> {c.location}
                        </span>
                        <span className="hidden sm:flex items-center gap-1">
                          <Calendar className="h-3 w-3" strokeWidth={1.5} /> {t("projects.delivery")}: {c.delivery}
                        </span>
                      </p>
                    </div>

                    {/* Badge de estado — colores idénticos al ERP */}
                    <span
                      className="shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                      style={ESTADO_UI[c.status]}
                    >
                      {c.status === "activo" ? t("projects.statusActive") : t("projects.statusDone")}
                    </span>

                    <span className="hidden md:flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--paper-alt)] text-ink">
                      <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
