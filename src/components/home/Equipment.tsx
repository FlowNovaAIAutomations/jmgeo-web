import { motion } from "framer-motion";
import { Plane, Satellite, Target } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const equipment = [
  {
    icon: Plane,
    name: "Drones LiDAR",
    desc: "Captura aérea de alta densidad para grandes superficies, infraestructuras y terrenos complejos.",
  },
  {
    icon: Satellite,
    name: "GPS GNSS",
    desc: "Posicionamiento geodésico multi-constelación para apoyo de campo y control de precisión.",
  },
  {
    icon: Target,
    name: "Estaciones totales",
    desc: "Mediciones angulares y de distancia de máxima exactitud para detalles y replanteos.",
  },
];

export function Equipment() {
  return (
    <section className="bg-[var(--paper-alt)] py-[140px] border-t border-ink/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber"
        >
          Equipos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-6 font-display font-normal text-ink leading-[1.02] tracking-tight max-w-3xl"
          style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)" }}
        >
          Equipos de <span className="italic-acc">precisión</span>.
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {equipment.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.article
                key={e.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease, delay: i * 0.12 }}
                className="rounded-[20px] bg-paper border border-ink/[0.06] p-8 shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--paper-alt)] text-[var(--accent)]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-display text-[22px] font-medium text-ink leading-tight">
                  {e.name}
                </h3>
                <p className="mt-3 text-[15px] text-mid leading-relaxed">
                  {e.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
