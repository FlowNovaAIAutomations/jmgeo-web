import { motion } from "framer-motion";
import { CompassRose } from "@/components/CompassRose";

const ease = [0.22, 1, 0.36, 1] as const;

const items = [
  {
    num: "01",
    title: "Drones LiDAR profesionales",
    desc: "Sensores LiDAR de alta densidad montados en plataformas DJI Matrice. Vuelos planificados con software de gestión de misiones.",
  },
  {
    num: "02",
    title: "Procesado de nube de puntos",
    desc: "Clasificación, filtrado, generación de MDT y MDS, extracción de elementos. Software especializado para grandes volúmenes de datos.",
  },
  {
    num: "03",
    title: "Cartografía y CAD",
    desc: "Entregables compatibles con AutoCAD Civil 3D, Revit, GIS y los formatos que use tu proyecto.",
  },
  {
    num: "04",
    title: "GPS y control geodésico",
    desc: "Apoyo topográfico de campo con receptores GNSS de precisión para georreferenciar todos los datos LiDAR capturados.",
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
          El equipo importa.
          <br />
          Las <span className="italic-acc">herramientas</span>, también.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mt-8 max-w-xl text-paper/70 leading-relaxed"
        >
          Trabajamos con stack profesional de última generación. Cada vuelo, cada
          captura, cada entrega tiene detrás equipo cualificado.
        </motion.p>

        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-paper/15">
          {items.map((it, i) => (
            <motion.div
              key={it.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: i * 0.1 }}
              className="bg-envelope pt-10 pb-12 px-8"
            >
              <div className="font-display font-light italic text-amber leading-none" style={{ fontSize: "60px" }}>
                {it.num}
              </div>
              <h3 className="mt-8 font-display text-[18px] font-medium text-paper">
                {it.title}
              </h3>
              <p className="mt-3 text-[14px] text-paper/65 leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
