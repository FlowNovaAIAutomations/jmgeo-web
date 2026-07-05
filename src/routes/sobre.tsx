import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/Button";
import { CompassRose } from "@/components/CompassRose";
import { countryShapes } from "@/components/home/countryShapes";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre JM GEO · Topografía con drones y LiDAR" },
      { name: "description", content: "Empresa joven con años de experiencia en topografía y geomática. Precisión, compromiso y tecnología emergente aplicados en seis países europeos." },
      { property: "og:title", content: "Sobre JM GEO · Topografía con drones y LiDAR" },
      { property: "og:description", content: "Empresa joven con años de experiencia en topografía y geomática. Precisión, compromiso y tecnología emergente aplicados en seis países europeos." },
    ],
  }),
  component: SobrePage,
});

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease },
};

function SobrePage() {
  const { t } = useTranslation();
  return (
    <>
      {/* 1 — HERO: título gigante */}
      <section className="relative bg-paper pt-[100px] pb-[32px] overflow-hidden">
        {/* CompassRose decorativa, muy sutil */}
        <motion.div
          aria-hidden
          className="absolute -right-32 top-10 text-ink pointer-events-none hidden md:block"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        >
          <CompassRose size={520} opacity={0.05} />
        </motion.div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-mono uppercase text-[13px] tracking-[0.25em] text-amber"
          >
            {t("about.label")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.15 }}
            className="mt-8 font-display font-normal text-ink leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {t("about.titleStart")}<span className="italic-acc">{t("about.titleItalic")}</span>
          </motion.h1>
        </div>
      </section>

      {/* 2 — TEXTO editorial */}
      <section className="bg-paper pb-[140px]">
        <div className="mx-auto max-w-[760px] px-6">
          <motion.p
            {...fadeUp}
            className="border-l-2 border-amber pl-7 text-[clamp(1.4rem,2.6vw,1.9rem)] text-ink leading-[1.5] font-display font-normal"
          >
            {t("about.lead")}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mt-12 space-y-7 text-[18px] text-ink/80 leading-[1.7]"
          >
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
          </motion.div>
        </div>
      </section>

      {/* 3 — PAÍSES: siluetas */}
      <section className="bg-[var(--paper-alt)] py-[120px] border-t border-ink/[0.06]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.p {...fadeUp} className="font-mono uppercase text-[13px] tracking-[0.25em] text-amber">
            {t("about.whereLabel")}
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mt-6 font-display font-normal text-ink leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)" }}
          >
            {t("about.whereTitle")}
          </motion.h2>

          <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-y-12 gap-x-6">
            {countryShapes.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease, delay: i * 0.06 }}
                className="group flex flex-col items-center"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="h-16 w-16 fill-ink/25 group-hover:fill-amber transition-colors duration-300"
                  aria-hidden="true"
                >
                  <g transform={c.transform}>
                    {c.paths.map((d, k) => (
                      <path key={k} d={d} />
                    ))}
                  </g>
                </svg>
                <span className="mt-4 font-mono uppercase text-[10px] tracking-[0.18em] text-mid text-center leading-tight">
                  {t(`countries.${c.name}`)}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — CIERRE: lema en degradado oscuro */}
      <section
        className="relative overflow-hidden text-paper py-[200px]"
        style={{ background: "linear-gradient(135deg, #03274B 0%, #0A2D52 50%, #16395F 100%)" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(100,160,220,0.18) 0%, transparent 70%)",
          }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-40 -left-32 text-paper pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <CompassRose size={560} opacity={0.22} />
        </motion.div>

        <motion.div
          {...fadeUp}
          className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center"
        >
          <h2
            className="font-display font-normal leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 6vw, 5.5rem)" }}
          >
            {t("about.closing1")}
            <span className="font-normal text-paper/65">{t("about.closing2")}</span>
          </h2>
        </motion.div>
      </section>

      {/* 5 — CTA */}
      <section className="bg-paper py-[120px]">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-2xl px-6 text-center flex flex-col items-center"
        >
          <h2 className="font-display font-normal text-ink leading-tight tracking-tight" style={{ fontSize: "clamp(2.25rem, 4vw, 3rem)" }}>
            {t("about.ctaStart")}<span className="italic-acc">{t("about.ctaItalic")}</span>
          </h2>
          <Link to="/contacto" className="mt-10">
            <Button variant="primary" size="lg">{t("about.button")}</Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
