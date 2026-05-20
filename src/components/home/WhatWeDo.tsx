import { motion } from "framer-motion";
import { Play } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

// Each card has a `videoSrc` field reserved. When a real <video> arrives,
// replace the placeholder block (the <div> containing the Unsplash image)
// with: <video src={videoSrc} muted loop playsInline autoPlay className="absolute inset-0 w-full h-full object-cover" />
const cards = [
  {
    num: "01",
    title: "Grandes extensiones",
    desc: "Levantamientos topográficos de cientos de hectáreas con vuelos planificados, cobertura LIDAR completa y entregables listos para CAD.",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80",
    videoSrc: null,
  },
  {
    num: "02",
    title: "Precisión milimétrica",
    desc: "Capturas de alta densidad para detalles técnicos: estructuras, infraestructura crítica, control geométrico.",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=1600&q=80",
    videoSrc: null,
  },
  {
    num: "03",
    title: "Proyectos técnicos",
    desc: "Aplicaciones combinadas en obra civil, topografía e ingeniería para clientes que necesitan datos a medida.",
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1600&q=80",
    videoSrc: null,
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
          03 / En proyecto
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

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-mid leading-relaxed"
        >
          Nuestro stack LiDAR + drone se adapta a proyectos muy distintos. Estos
          son tres ejemplos representativos de lo que entregamos.
        </motion.p>

        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.article
              key={c.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
              className="group border border-ink/15 p-7 hover:border-ink/50 transition-colors flex flex-col"
            >
              {/* VIDEO SLOT — replace this block with <video> when real videos arrive */}
              <div className="relative aspect-video w-full overflow-hidden bg-envelope">
                <img loading="lazy" decoding="async"                   src={c.img}
                  alt={`Vista representativa de proyecto: ${c.title}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-ink/55 group-hover:bg-ink/35 transition-colors duration-[400ms]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border border-amber flex items-center justify-center text-amber group-hover:scale-110 transition-transform">
                    <Play className="h-5 w-5 fill-amber" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 font-mono uppercase text-[9px] tracking-[0.25em] text-paper/70">
                  Vídeo próximamente
                </div>
              </div>

              <div className="mt-6 font-mono uppercase text-[11px] tracking-[0.25em] text-amber">
                {c.num}
              </div>
              <h3 className="mt-3 font-display text-[26px] font-medium text-ink leading-tight">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] text-mid leading-relaxed">
                {c.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
