import { motion } from "framer-motion";
import { Expandable } from "@/components/Expandable";
import imgCaptura from "@/assets/clientes/drone-vuelo.png";
import imgEjecucion from "@/assets/clientes/equipo-obra.png";

const ease = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    num: "01",
    title: "Captura topográfica para proyectos",
    short:
      "Obtención de datos geoespaciales precisos con tecnología LiDAR y métodos topográficos para el desarrollo de ingeniería, energía y obra civil.",
    detail:
      "Vuelos planificados, apoyo geodésico y procesado completo. Entregables listos para CAD: nubes de puntos clasificadas, MDT, MDS, ortofotos y curvas de nivel.",
    img: imgCaptura,
  },
  {
    num: "02",
    title: "Ejecución de obra",
    short:
      "Replanteos, control de ejecución, seguimiento y asistencia topográfica en todas las fases de construcción.",
    detail:
      "Acompañamos a constructoras e ingenierías desde el replanteo inicial hasta la liquidación final, con trazabilidad documental y los formatos que usa tu equipo.",
    img: imgEjecucion,
  },
];

export function WhatWeDo() {
  return (
    <section id="servicios" className="bg-paper py-[140px] border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber"
        >
          03 / Qué hacemos
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-6 font-display font-normal text-ink leading-[1.02] tracking-tight max-w-4xl"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
        >
          De la <span className="italic-acc">planificación</span> a la{" "}
          <span className="italic-acc">ejecución</span>.
        </motion.h2>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {cards.map((c, i) => (
            <motion.article
              key={c.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
              className="group flex flex-col"
            >
              {/* Imagen limpia, sin overlay ni texto encima */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[var(--paper-alt)]">
                <img
                  loading="lazy"
                  decoding="async"
                  src={c.img}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-6 font-mono uppercase text-[11px] tracking-[0.25em] text-amber">
                {c.num}
              </div>
              <h3 className="mt-3 font-display text-[26px] font-medium text-ink leading-tight">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] text-mid leading-relaxed">
                {c.short}
              </p>

              <Expandable label="Saber más">
                <p>{c.detail}</p>
              </Expandable>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
