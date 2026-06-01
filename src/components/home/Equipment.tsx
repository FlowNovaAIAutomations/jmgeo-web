import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

const ease = [0.22, 1, 0.36, 1] as const;

const equipment = [
  {
    num: "01",
    name: "Drones LiDAR",
    desc: "Captura aérea de alta densidad para grandes superficies, infraestructuras y terrenos complejos.",
    hash: "drones-lidar",
  },
  {
    num: "02",
    name: "GPS GNSS",
    desc: "Posicionamiento geodésico multi-constelación para apoyo de campo y control de precisión.",
    hash: "gps-gnss",
  },
  {
    num: "03",
    name: "Estaciones totales",
    desc: "Mediciones angulares y de distancia de máxima exactitud para detalles y replanteos.",
    hash: "estaciones-totales",
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
          className="font-mono uppercase text-[13px] tracking-[0.25em] text-amber"
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
          Tecnología de <span className="italic-acc">precisión</span>
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {equipment.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
            >
              <Link
                to="/tecnologia"
                hash={e.hash}
                className="group flex h-full flex-col rounded-[20px] bg-paper border border-ink/[0.06] p-10 shadow-soft hover:shadow-soft-lg transition-shadow"
              >
                <div
                  className="font-display font-light leading-none"
                  style={{ fontSize: "80px", letterSpacing: "-0.04em", color: "rgba(42,56,69,0.12)" }}
                >
                  {e.num}
                </div>
                <h3 className="mt-6 font-display text-[22px] font-medium text-ink leading-tight group-hover:text-amber transition-colors">
                  {e.name}
                </h3>
                <p className="mt-3 text-[15px] text-mid leading-relaxed">
                  {e.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono uppercase text-[10px] tracking-[0.25em] text-ink/70 group-hover:text-amber border-b border-ink/20 group-hover:border-amber pb-1 transition-colors self-start">
                  Detalle
                  <span className="text-amber">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
