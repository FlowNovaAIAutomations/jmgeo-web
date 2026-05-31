import { motion } from "framer-motion";
import { Download } from "lucide-react";

const deliverables = [
  {
    title: "Parque Solar — Levantamiento LiDAR",
    meta: "Nube de puntos · Ortofoto · MDT",
  },
  {
    title: "Obra Civil — Control topográfico",
    meta: "Planos CAD · Informe técnico",
  },
  {
    title: "Cantera — Cubicación volumétrica",
    meta: "Modelo 3D · Cálculo de volúmenes",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Projects — sección "Portal Cliente JM GEO".
 * Maqueta del panel cloud con entregables descargables.
 */
export function Projects() {
  return (
    <section id="proyectos" className="bg-paper py-[140px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* LEFT — Copy */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/5 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
            <span className="font-mono uppercase text-[10px] tracking-[0.25em] text-amber">
              Portal Cliente JM GEO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mt-7 font-display font-normal text-ink leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.75rem)" }}
          >
            Tus proyectos
            <span className="block text-ink/35 whitespace-nowrap">disponibles 24/7</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-8 text-ink/80 leading-[1.65] max-w-md"
          >
            Accede a todos tus proyectos, entregables y documentación técnica
            desde una plataforma centralizada diseñada para visualizar,
            gestionar y descargar información de forma rápida y segura.
          </motion.p>

          <motion.a
            href="/clientes"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.3 }}
            className="mt-10 inline-flex items-center gap-2 font-mono uppercase text-[11px] tracking-[0.25em] text-ink border-b border-ink/30 hover:border-amber hover:text-amber transition-colors pb-1"
          >
            Acceder al área cliente
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

          <div className="relative rounded-[20px] bg-ink text-paper p-6 md:p-8 shadow-soft-lg border border-ink/20">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-amber/15 border border-amber/30 flex items-center justify-center">
                  <span className="font-display text-amber text-sm">J</span>
                </div>
                <h3 className="font-display text-paper text-xl md:text-2xl">
                  JM GEO Cloud
                </h3>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
                <span className="font-mono uppercase text-[10px] tracking-[0.2em] text-amber">
                  Online
                </span>
              </div>
            </div>

            {/* Deliverable rows */}
            <div className="space-y-3">
              {deliverables.map((d, i) => (
                <motion.div
                  key={d.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, ease, delay: 0.2 + i * 0.1 }}
                  className="bg-paper text-ink rounded-xl px-4 py-3 md:px-5 md:py-4 flex items-center justify-between gap-3 hover:translate-x-0.5 transition-transform"
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-ink text-[14px] md:text-[15px] leading-snug">
                      {d.title}
                    </div>
                    <div className="mt-1 text-mid text-[11px] md:text-[12px]">
                      {d.meta}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="shrink-0 inline-flex items-center gap-2 bg-ink text-paper hover:bg-ink/85 rounded-lg px-3 py-2 md:px-4 text-[12px] font-medium transition-colors"
                  >
                    <Download className="h-3.5 w-3.5" strokeWidth={2} />
                    <span className="hidden sm:inline">Descargar</span>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Footer meta */}
            <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[10px] md:text-[11px] font-mono uppercase tracking-[0.2em] text-paper/50">
              <span>3 entregables disponibles</span>
              <span>Actualizado hace 2 h</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
