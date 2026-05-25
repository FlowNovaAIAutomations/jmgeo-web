import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/Button";
import { CompassRose } from "@/components/CompassRose";
import imgGrandes from "@/assets/clientes/obra-fotovoltaica.png";
import imgPrecision from "@/assets/clientes/drone-lidar.png";
import imgMedida from "@/assets/clientes/gps-rover.png";
import imgNube from "@/assets/clientes/cad-curvas.png";

export const Route = createFileRoute("/tecnologia")({
  head: () => ({
    meta: [
      { title: "Tecnología · JMGeo · Topografía con drones y LiDAR" },
      { name: "description", content: "LiDAR aéreo sobre drones aplicado a proyectos reales: levantamientos de gran superficie, alta precisión y soluciones técnicas a medida." },
      { property: "og:title", content: "Tecnología · JMGeo · Topografía con drones y LiDAR" },
      { property: "og:description", content: "LiDAR aéreo sobre drones aplicado a proyectos reales: levantamientos de gran superficie, alta precisión y soluciones técnicas a medida." },
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

// Each block exposes a `videoSrc` slot. Replace the placeholder block
// (the inner <div> with the Unsplash <img>) with:
// <video src={videoSrc} muted loop playsInline autoPlay
//   className="absolute inset-0 w-full h-full object-cover" />
const applications = [
  {
    num: "01",
    label: "Aplicación 01",
    titleStart: "Levantamientos de ",
    titleItalic: "grandes superficies",
    paragraphs: [
      "Vuelos planificados que cubren cientos de hectáreas en una sola jornada. Ideal para urbanismo, planificación de infraestructura, estudios ambientales o proyectos lineales como carreteras y tendidos.",
      "La densidad de captura se ajusta al tipo de proyecto: desde 50 puntos por metro cuadrado para reconocimientos generales hasta más de 400 puntos por m² para zonas que requieren detalle.",
    ],
    deliverablesLabel: "Qué entregamos",
    deliverables: [
      "Nube de puntos clasificada (LAS/LAZ)",
      "Modelo digital del terreno (MDT)",
      "Modelo digital de superficies (MDS)",
      "Curvas de nivel a la equidistancia que pidas",
      "Ortofoto georreferenciada (con cámara complementaria)",
    ],
    img: imgGrandes,
    videoSrc: null,
  },
  {
    num: "02",
    label: "Aplicación 02",
    titleStart: "Capturas de ",
    titleItalic: "alta precisión",
    paragraphs: [
      "Para proyectos donde el detalle es crítico: estructuras, edificios singulares, infraestructura técnica, instalaciones industriales, control geométrico de obras existentes.",
      "Vuelos a baja altura con alta densidad de captura y apoyo de puntos de control geodésico. Conseguimos precisiones centimétricas o incluso milimétricas según el caso.",
    ],
    deliverablesLabel: "Qué entregamos",
    deliverables: [
      "Nube de puntos de muy alta densidad",
      "Mediciones específicas con tolerancias documentadas",
      "Modelos 3D listos para CAD/BIM",
      "Comparativas con estado proyectado",
      "Informes técnicos certificados",
    ],
    img: imgPrecision,
    videoSrc: null,
  },
  {
    num: "03",
    label: "Aplicación 03",
    titleStart: "Aplicaciones ",
    titleItalic: "a medida",
    paragraphs: [
      "Cada proyecto técnico tiene necesidades distintas. Combinamos LiDAR aéreo con otras técnicas (topografía clásica, GPS, ortofoto) para entregar exactamente lo que tu equipo necesita.",
      "Trabajamos con ingenierías, estudios de arquitectura, administraciones y constructoras. Adaptamos el formato de salida al software que usen.",
    ],
    deliverablesLabel: "Ejemplos de trabajos",
    deliverables: [
      "Cubicaciones y movimientos de tierra",
      "Análisis de pendientes y escorrentía",
      "Monitorización de avance de obra",
      "Documentación de patrimonio",
      "Estudios para fotovoltaicas e infraestructura energética",
    ],
    img: imgMedida,
    videoSrc: null,
  },
];

const countries = [
  { code: "ES", name: "España", desc: "Base operativa principal" },
  { code: "UK", name: "Reino Unido", desc: "Proyectos técnicos y obra civil" },
  { code: "IT", name: "Italia", desc: "Topografía y patrimonio" },
  { code: "PT", name: "Portugal", desc: "Infraestructura y urbanismo" },
  { code: "FR", name: "Francia", desc: "Captura de grandes extensiones" },
  { code: "DE", name: "Alemania", desc: "Proyectos industriales" },
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
            Tecnología / Drones + LIDAR
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mt-8 font-display font-normal text-ink leading-[0.95] tracking-tight max-w-[1200px]"
            style={{ fontSize: "clamp(4rem, 10vw, 8.75rem)" }}
          >
            Capturar el terreno con drones y láser.
            <br />
            Aplicado a <span className="italic-acc">proyectos reales</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-10 max-w-[720px] text-xl text-mid leading-relaxed"
          >
            La tecnología LiDAR montada en drones permite obtener nubes de puntos
            densas y georreferenciadas del terreno, incluso bajo vegetación.
            Estos son los principales tipos de trabajos que hacemos con ella.
          </motion.p>
        </div>
      </section>

      {/* SECTION A — FUNDAMENTALS */}
      <section className="bg-paper py-[120px] border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <motion.div {...fadeUp}>
              <p className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber">
                Fundamentos
              </p>
              <h2
                className="mt-6 font-display font-normal text-ink leading-[1.02] tracking-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Millones de puntos por segundo, cada uno con su{" "}
                <span className="italic-acc">coordenada exacta</span>.
              </h2>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7, ease, delay: 0.1 }}
              className="space-y-6 text-[16px] text-ink/85 leading-[1.6]"
            >
              <p>
                LiDAR (<em>Light Detection and Ranging</em>) es una tecnología
                de medición que utiliza pulsos láser para calcular distancias
                con altísima precisión. Al montarse en un dron, permite capturar
                el terreno desde el aire mucho más rápido y con más detalle que
                la topografía tradicional.
              </p>
              <p>
                Cada vuelo genera una nube de millones de puntos, donde cada uno
                tiene su coordenada X, Y, Z con precisión centimétrica. A partir
                de esa nube se construyen modelos del terreno, ortofotos,
                mediciones de volumen, análisis estructurales y todo lo que el
                proyecto necesite.
              </p>
              <p>
                Frente a métodos tradicionales, LiDAR aérea aporta velocidad,
                escala y detalle. Es especialmente útil en terrenos extensos,
                con vegetación, o cuando se necesita repetir capturas para
                control de avance.
              </p>
            </motion.div>
          </div>

          {/* Point cloud illustrative image */}
          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease }}
            className="mt-24"
          >
            <div className="relative w-full aspect-[21/9] overflow-hidden rounded-[20px] bg-[var(--envelope)]">
              <img loading="lazy" decoding="async"                 src={imgNube}
                alt="Representación de nube de puntos LiDAR"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "contrast(1.05) saturate(0.75) brightness(0.9)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(74,94,114,0.2), rgba(74,94,114,0.45))",
                }}
              />
            </div>
            <figcaption className="mt-4 font-sans uppercase text-[10px] tracking-[0.25em] text-mid">
              Ejemplo de nube de puntos LIDAR · 48M puntos · Densidad 200 pts/m²
            </figcaption>
          </motion.figure>
        </div>
      </section>

      {/* SECTION B — 3 APPLICATIONS (zigzag) */}
      <section className="bg-paper py-[160px] border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 space-y-[160px]">
          {applications.map((app, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <ApplicationBlock key={app.num} app={app} reversed={reversed} />
            );
          })}
        </div>
      </section>

      {/* SECTION C — INTERNATIONAL */}
      <section className="relative bg-[var(--envelope)] text-paper py-[160px] overflow-hidden">
        <div className="absolute -bottom-32 -left-32 text-paper pointer-events-none">
          <CompassRose size={520} opacity={0.05} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <motion.p {...fadeUp} className="font-sans uppercase text-[11px] tracking-[0.25em] text-amber">
            Alcance
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mt-6 font-display font-normal leading-[1] tracking-tight max-w-4xl"
            style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
          >
            Operamos donde <span className="italic-acc">esté tu proyecto</span>.
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-8 max-w-xl text-paper/75 leading-relaxed text-lg"
          >
            Hemos trabajado en seis países europeos. Nuestro stack de drones y
            procesado se traslada donde haga falta.
          </motion.p>

          <div className="mt-20 grid md:grid-cols-3 gap-4">
            {countries.map((c, i) => (
              <motion.div
                key={c.code}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease, delay: i * 0.08 }}
                className="bg-paper/[0.04] border border-paper/10 rounded-[20px] p-8"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-sans text-[11px] tracking-[0.25em] text-amber">
                    {c.code}
                  </span>
                  <h3 className="font-display text-2xl text-paper">{c.name}</h3>
                </div>
                <p className="mt-4 text-sm text-paper/65 leading-relaxed">
                  {c.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D — CTA */}
      <section className="bg-paper py-[140px]">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-3xl px-6 lg:px-10 text-center flex flex-col items-center"
        >
          <h2
            className="font-display font-normal text-ink leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            ¿Tu proyecto encaja? <span className="italic-acc">Cuéntanoslo</span>.
          </h2>
          <p className="mt-6 text-mid text-lg max-w-lg leading-relaxed">
            Estudiamos cada caso individualmente y proponemos el enfoque técnico
            adecuado.
          </p>
          <Link to="/contacto" className="mt-10">
            <Button variant="primary" size="lg">Contactar</Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}

interface ApplicationBlockProps {
  app: (typeof applications)[number];
  reversed: boolean;
}

function ApplicationBlock({ app, reversed }: ApplicationBlockProps) {
  return (
    <div className="relative grid md:grid-cols-12 gap-10 lg:gap-16 items-center">
      {/* Decorative giant number */}
      <div
        className={`absolute pointer-events-none font-display font-light italic text-amber/[0.12] leading-none select-none hidden md:block ${
          reversed ? "right-0 -top-16" : "left-0 -top-16"
        }`}
        style={{ fontSize: "200px" }}
        aria-hidden="true"
      >
        {app.num}
      </div>

      {/* Video slot */}
      <div className={`md:col-span-5 ${reversed ? "md:order-2" : ""}`}>
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-envelope group">
          {/* VIDEO SLOT — replace with <video src={app.videoSrc} ... /> */}
          <img loading="lazy" decoding="async"             src={app.img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/55 group-hover:bg-ink/35 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-amber flex items-center justify-center text-amber group-hover:scale-110 transition-transform">
              <Play className="h-5 w-5 fill-amber" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 font-mono uppercase text-[10px] tracking-[0.25em] text-paper/70">
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
          {app.label}
        </p>
        <h2
          className="mt-6 font-display font-normal text-ink leading-[1.02] tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 4.2vw, 3.5rem)" }}
        >
          {app.titleStart}
          <span className="italic-acc">{app.titleItalic}</span>.
        </h2>

        <div className="mt-8 space-y-5 text-[16px] text-ink/85 leading-[1.65] max-w-xl">
          {app.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className="mt-10 border-t border-ink/15 pt-6 max-w-xl">
          <p className="font-mono uppercase text-[10px] tracking-[0.25em] text-mid">
            {app.deliverablesLabel}
          </p>
          <ul className="mt-4 space-y-2.5">
            {app.deliverables.map((d) => (
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
