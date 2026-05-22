import { motion } from "framer-motion";
import { Play } from "lucide-react";
import lineas from "@/assets/clientes/obra-fotovoltaica.png";
import superficies from "@/assets/clientes/cad-curvas.png";
import civiles from "@/assets/clientes/drone-vuelo.png";

const ease = [0.22, 1, 0.36, 1] as const;

const cases = [
  {
    country: "España",
    title: "Levantamiento de líneas eléctricas",
    desc: "Captura geoespacial avanzada mediante drones LiDAR y procesamiento técnico de alta precisión.",
    img: lineas,
  },
  {
    country: "Portugal",
    title: "Levantamiento de grandes superficies",
    desc: "Captura geoespacial avanzada mediante drones LiDAR y procesamiento técnico de alta precisión.",
    img: superficies,
  },
  {
    country: "Francia",
    title: "Levantamiento de obras civiles",
    desc: "Captura geoespacial avanzada mediante drones LiDAR y procesamiento técnico de alta precisión.",
    img: civiles,
  },
];

export function CaseStudies() {
  return (
    <section id="casos" className="bg-paper py-[140px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber"
        >
          06 / Casos de éxito
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-6 font-display font-normal text-ink leading-[1.02] tracking-tight max-w-3xl"
          style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
        >
          Tipos de proyectos.{" "}
          <span className="block text-ink/35">Resultados medibles.</span>
        </motion.h2>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: 0.1 + i * 0.1 }}
              className="group bg-paper rounded-2xl overflow-hidden border border-ink/8 shadow-[0_10px_40px_-20px_rgba(20,40,58,0.18)] hover:shadow-[0_20px_60px_-20px_rgba(20,40,58,0.28)] transition-shadow"
            >
              {/* Media */}
              <div className="relative aspect-[4/3] overflow-hidden bg-ink/5">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-ink/40 backdrop-blur-sm border border-paper/30 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 text-paper translate-x-0.5" fill="currentColor" strokeWidth={0} />
                  </div>
                </div>
                {/* Pill */}
                <div className="absolute bottom-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-ink/70 backdrop-blur-sm px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-paper">
                    Vídeo proyecto
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-7">
                <p className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber">
                  {c.country}
                </p>
                <h3 className="mt-3 font-display text-ink text-2xl leading-tight">
                  {c.title}
                </h3>
                <p className="mt-4 text-ink/70 leading-relaxed text-[15px]">
                  {c.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
