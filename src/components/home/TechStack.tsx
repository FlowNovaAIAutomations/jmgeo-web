import { motion } from "framer-motion";
import { CompassRose } from "@/components/CompassRose";
import { Expandable } from "@/components/Expandable";

const ease = [0.22, 1, 0.36, 1] as const;

const items = [
  {
    num: "01",
    title: "Drones LiDAR",
    short: "Sensores de alta densidad sobre DJI Matrice.",
    detail:
      "Plataformas profesionales con misiones planificadas: rutas, altura, solape y densidad calculados para cada proyecto.",
  },
  {
    num: "02",
    title: "GPS GNSS",
    short: "Apoyo de campo con receptores de precisión.",
    detail:
      "Bases y rovers GNSS para georreferenciar toda la captura y garantizar precisión sub-centimétrica.",
  },
  {
    num: "03",
    title: "Estaciones totales",
    short: "Medición angular y de distancias en campo.",
    detail:
      "Equipos de estación total para levantamientos puntuales, replanteos y control de obra con máxima precisión.",
  },
];

export function TechStack() {
  return (
    <section className="relative bg-[var(--paper-alt)] text-ink py-[180px] overflow-hidden">
      <div className="absolute -top-20 -right-20 text-ink/20 pointer-events-none">
        <CompassRose size={400} opacity={0.18} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="label-tech"
        >
          04 — Tecnología
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-6 font-display font-normal text-ink leading-[1] tracking-tight max-w-4xl"
          style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
        >
          Equipos de <span className="italic-acc">precisión</span>.
        </motion.h2>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="bg-paper rounded-[20px] p-10 flex flex-col shadow-soft hover:shadow-soft-lg transition-shadow"
            >
              <div
                className="font-display font-light text-ink/15 leading-none"
                style={{ fontSize: "56px", letterSpacing: "-0.04em" }}
              >
                {it.num}
              </div>
              <h3 className="mt-8 font-display text-[20px] font-medium text-ink">
                {it.title}
              </h3>
              <p className="mt-3 text-[14px] text-mid leading-relaxed">
                {it.short}
              </p>
              <Expandable label="Detalle">
                <p>{it.detail}</p>
              </Expandable>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
