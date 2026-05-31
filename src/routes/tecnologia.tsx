import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/Button";
import imgDrone from "@/assets/clientes/drone-lidar.png";
import imgGnss from "@/assets/clientes/gps-rover.png";
import imgEstacion from "@/assets/clientes/obra-fotovoltaica.png";

export const Route = createFileRoute("/tecnologia")({
  head: () => ({
    meta: [
      { title: "Tecnología · JM GEO · Topografía con drones y LiDAR" },
      { name: "description", content: "Los equipos de JM GEO: drones LiDAR, posicionamiento GNSS y estación total. Tecnología de precisión para cada proyecto topográfico." },
      { property: "og:title", content: "Tecnología · JM GEO · Topografía con drones y LiDAR" },
      { property: "og:description", content: "Los equipos de JM GEO: drones LiDAR, posicionamiento GNSS y estación total. Tecnología de precisión para cada proyecto topográfico." },
    ],
  }),
  component: TecnologiaPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease },
};

// Cada equipo expone un slot `videoSrc`. Sustituir el bloque placeholder
// (el <div> con la <img>) por:
// <video src={videoSrc} muted loop playsInline autoPlay
//   className="absolute inset-0 w-full h-full object-cover" />
const equipment = [
  {
    id: "drones-lidar",
    num: "01",
    label: "Equipo 01",
    titleStart: "Captura aérea con ",
    titleItalic: "LiDAR",
    paragraphs: [
      "Montamos sensores LiDAR de alta densidad sobre plataformas DJI Matrice para capturar el terreno desde el aire. Cada vuelo genera una nube de millones de puntos georreferenciados, incluso bajo vegetación.",
      "La densidad se ajusta a cada proyecto: desde reconocimientos generales de grandes superficies hasta capturas de alto detalle sobre infraestructuras y terrenos complejos.",
    ],
    deliverablesLabel: "Qué entregamos",
    deliverables: [
      "Nube de puntos clasificada (LAS/LAZ)",
      "Modelo digital del terreno (MDT)",
      "Modelo digital de superficies (MDS)",
      "Curvas de nivel a la equidistancia que pidas",
      "Ortofoto georreferenciada (con cámara complementaria)",
    ],
    img: imgDrone,
    videoSrc: null,
  },
  {
    id: "gps-gnss",
    num: "02",
    label: "Equipo 02",
    titleStart: "Posicionamiento ",
    titleItalic: "GNSS",
    paragraphs: [
      "Receptores GNSS multi-constelación con corrección RTK que dan apoyo geodésico a toda la captura. Son la referencia que ancla cada proyecto a coordenadas reales.",
      "Materializamos y medimos los puntos de control que garantizan la precisión centimétrica de los levantamientos y permiten enlazar distintas técnicas en un mismo sistema de referencia.",
    ],
    deliverablesLabel: "Para qué",
    deliverables: [
      "Apoyo geodésico de los vuelos LiDAR",
      "Puntos de control y georreferenciación",
      "Enlace a sistemas de referencia oficiales",
      "Verificación de precisión en campo",
    ],
    img: imgGnss,
    videoSrc: null,
  },
  {
    id: "estaciones-totales",
    num: "03",
    label: "Equipo 03",
    titleStart: "Estación ",
    titleItalic: "total",
    paragraphs: [
      "Para los trabajos donde prima la exactitud puntual, la estación total mide ángulos y distancias con tolerancias milimétricas. Es el complemento de precisión a la captura aérea.",
      "La empleamos en replanteos, control geométrico de obra y levantamiento de detalle, allí donde cada punto cuenta y el láser aéreo no llega con suficiente resolución.",
    ],
    deliverablesLabel: "Para qué",
    deliverables: [
      "Replanteo de obra",
      "Control geométrico y de ejecución",
      "Levantamiento de detalle",
      "Comprobaciones milimétricas",
    ],
    img: imgEstacion,
    videoSrc: null,
  },
];

function TecnologiaPage() {
  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-paper pt-[140px] pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber"
          >
            Tecnología
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mt-8 font-display font-normal text-ink leading-[0.95] tracking-tight max-w-[1200px]"
            style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}
          >
            Los equipos detrás de{" "}
            <span className="italic-acc">cada levantamiento</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-10 max-w-[720px] text-xl text-mid leading-relaxed"
          >
            Combinamos captura aérea LiDAR, posicionamiento GNSS y estación total
            para cubrir cualquier proyecto, desde grandes superficies hasta el
            detalle milimétrico.
          </motion.p>
        </div>
      </section>

      {/* 3 EQUIPOS (zigzag) */}
      <section className="bg-paper py-[120px] border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-[160px]">
          {equipment.map((eq, idx) => (
            <EquipmentBlock key={eq.id} eq={eq} reversed={idx % 2 === 1} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-paper py-[140px] border-t border-ink/10">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-3xl px-6 lg:px-10 text-center flex flex-col items-center"
        >
          <h2
            className="font-display font-normal text-ink leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            ¿Tu proyecto encaja? <span className="italic-acc">Cuéntanoslo</span>
          </h2>
          <p className="mt-6 text-mid text-lg max-w-lg leading-relaxed">
            Estudiamos cada caso individualmente y proponemos el enfoque técnico
            adecuado.
          </p>
          <Link to="/contacto" className="mt-10">
            <Button variant="primary" size="lg">Solicitar presupuesto</Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}

interface EquipmentBlockProps {
  eq: (typeof equipment)[number];
  reversed: boolean;
}

function EquipmentBlock({ eq, reversed }: EquipmentBlockProps) {
  return (
    <div
      id={eq.id}
      className="relative grid md:grid-cols-12 gap-10 lg:gap-16 items-center scroll-mt-28"
    >
      {/* Decorative giant number */}
      <div
        className={`absolute pointer-events-none font-display font-light italic text-amber/[0.12] leading-none select-none hidden md:block ${
          reversed ? "right-0 -top-16" : "left-0 -top-16"
        }`}
        style={{ fontSize: "200px" }}
        aria-hidden="true"
      >
        {eq.num}
      </div>

      {/* Video slot */}
      <div className={`md:col-span-5 ${reversed ? "md:order-2" : ""}`}>
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[20px] bg-[var(--envelope)] group">
          {/* VIDEO SLOT — sustituir por <video src={eq.videoSrc} ... /> */}
          <img loading="lazy" decoding="async" src={eq.img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--envelope)]/45 group-hover:bg-[var(--envelope)]/25 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-paper/40 flex items-center justify-center text-paper group-hover:scale-110 transition-transform">
              <Play className="h-5 w-5 fill-paper" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 font-sans uppercase text-[10px] tracking-[0.25em] text-paper/70">
            Vídeo próximamente
          </div>
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: reversed ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease }}
        className={`md:col-span-7 relative ${reversed ? "md:order-1" : ""}`}
      >
        <p className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber">
          {eq.label}
        </p>
        <h2
          className="mt-6 font-display font-normal text-ink leading-[1.02] tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 4.2vw, 3.5rem)" }}
        >
          {eq.titleStart}
          <span className="italic-acc">{eq.titleItalic}</span>
        </h2>

        <div className="mt-8 space-y-5 text-[16px] text-ink/85 leading-[1.65] max-w-xl">
          {eq.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-10 border-t border-ink/15 pt-6 max-w-xl">
          <p className="font-mono uppercase text-[10px] tracking-[0.25em] text-mid">
            {eq.deliverablesLabel}
          </p>
          <ul className="mt-4 space-y-2.5">
            {eq.deliverables.map((d) => (
              <li key={d} className="flex gap-3 text-[15px] text-ink/85">
                <span className="text-amber mt-[2px]">·</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
