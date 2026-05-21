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
    title: "Nube de puntos",
    short: "Clasificación, filtrado y modelos derivados.",
    detail:
      "Generamos MDT, MDS, curvas y extracción de elementos sobre grandes volúmenes con software especializado.",
  },
  {
    num: "03",
    title: "CAD y cartografía",
    short: "Entregables listos para tu flujo de trabajo.",
    detail:
      "Compatibilidad con AutoCAD Civil 3D, Revit, GIS y los formatos que use tu proyecto.",
  },
  {
    num: "04",
    title: "GNSS y geodesia",
    short: "Apoyo de campo con receptores de precisión.",
    detail:
      "Bases y rovers GNSS para georreferenciar toda la captura LiDAR con precisión sub-centimétrica.",
  },
];

export function TechStack() {
  return (
    <section className="relative bg-envelope text-paper py-[160px] overflow-hidden">
      <div className="absolute -top-20 -right-20 text-amber pointer-events-none">
        <CompassRose size={400} opacity={0.06} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber"
        >
          04 / Tecnología
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-6 font-display font-normal leading-[1] tracking-tight max-w-4xl"
          style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
        >
          Equipo y <span className="italic-acc">herramientas</span> a la altura.
        </motion.h2>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/15">
          {items.map((it, i) => (
            <motion.div
              key={it.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="bg-envelope pt-10 pb-12 px-8 flex flex-col"
            >
              <div
                className="font-display font-light italic text-amber leading-none"
                style={{ fontSize: "60px" }}
              >
                {it.num}
              </div>
              <h3 className="mt-8 font-display text-[20px] font-medium text-paper">
                {it.title}
              </h3>
              <p className="mt-3 text-[14px] text-paper/65 leading-relaxed">
                {it.short}
              </p>
              <Expandable label="Detalle" tone="dark">
                <p>{it.detail}</p>
              </Expandable>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
