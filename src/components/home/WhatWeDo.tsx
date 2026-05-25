import { motion } from "framer-motion";
import { Expandable } from "@/components/Expandable";
import imgGrandes from "@/assets/clientes/solar-aerial-light.png";
import imgPrecision from "@/assets/clientes/estacion-total.png";
import imgProyectos from "@/assets/clientes/equipo-obra.png";

const ease = [0.22, 1, 0.36, 1] as const;

// Limpieza visual: la foto vive arriba sin texto encima. El texto va debajo,
// con un blurb corto y un desplegable para quien quiera profundizar.
const cards = [
  {
    num: "01",
    title: "Grandes extensiones",
    short: "Levantamientos LiDAR de cientos de hectáreas.",
    detail:
      "Vuelos planificados con cobertura LiDAR completa, apoyo geodésico y entregables listos para CAD: MDT, MDS, curvas de nivel y nubes clasificadas.",
    img: imgGrandes,
  },
  {
    num: "02",
    title: "Precisión milimétrica",
    short: "Capturas de alta densidad para detalles técnicos.",
    detail:
      "Estructuras, infraestructura crítica y control geométrico con densidad de puntos elevada. Ideal para auditorías y modelos as-built.",
    img: imgPrecision,
  },
  {
    num: "03",
    title: "Proyectos técnicos",
    short: "Obra civil, ingeniería y topografía a medida.",
    detail:
      "Combinamos LiDAR aéreo, estación total y GNSS para casos exigentes. Entregamos datos en el formato y flujo de trabajo que usa tu equipo.",
    img: imgProyectos,
  },
];

export function WhatWeDo() {
  return (
    <section className="bg-paper py-[140px] border-t border-ink/10">
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
          Tres formas de aplicar la{" "}
          <span className="italic-acc">misma tecnología</span>.
        </motion.h2>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
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
