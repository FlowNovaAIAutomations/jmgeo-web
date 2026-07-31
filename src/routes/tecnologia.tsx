import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
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

// Clips ambientales generados por IA (Higgsfield Seedance) a partir de las
// fotos reales; viven en public/videos. La foto original hace de póster
// mientras carga. Si algún equipo se queda sin vídeo, poner videoSrc: null
// y vuelve el placeholder estático.
// Los textos viven en locales/{es,en}/common.json (tech.blocks), casados por índice.
const equipmentBase = [
  { id: "drones-lidar", num: "01", img: imgDrone, videoSrc: "/videos/tecnologia-01-dron-lidar.mp4" },
  { id: "gps-gnss", num: "02", img: imgGnss, videoSrc: "/videos/tecnologia-02-gnss.mp4" },
  { id: "estaciones-totales", num: "03", img: imgEstacion, videoSrc: "/videos/tecnologia-03-aerea-obra.mp4" },
];

interface TechBlockTexts {
  label: string;
  titleStart?: string;
  titleItalic: string;
  titleEnd?: string;
  paragraphs: string[];
  deliverablesLabel: string;
  deliverables: string[];
}

function TecnologiaPage() {
  const { t } = useTranslation();
  const blocks = t("tech.blocks", { returnObjects: true }) as TechBlockTexts[];
  const equipment = equipmentBase.map((eq, i) => ({ ...eq, ...blocks[i] }));

  return (
    <>
      {/* PAGE HEADER */}
      <section className="bg-paper pt-[140px] pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-mono uppercase text-[13px] tracking-[0.25em] text-amber"
          >
            {t("tech.label")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mt-8 font-display font-normal text-ink leading-[0.95] tracking-tight max-w-[1200px]"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            {t("tech.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="mt-10 max-w-[720px] text-xl text-mid leading-relaxed"
          >
            {t("tech.sub")}
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
            {t("tech.ctaTitle1")}
            <br />
            {t("tech.ctaTitle2")}
          </h2>
          <p className="mt-6 text-mid text-lg max-w-lg leading-relaxed">
            {t("tech.ctaSub")}
          </p>
          <Link to="/contacto" className="mt-10">
            <Button variant="primary" size="lg">{t("tech.ctaButton")}</Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}

interface EquipmentBlockProps {
  eq: (typeof equipmentBase)[number] & TechBlockTexts;
  reversed: boolean;
}

function EquipmentBlock({ eq, reversed }: EquipmentBlockProps) {
  const { t } = useTranslation();
  return (
    <div
      id={eq.id}
      className="relative grid md:grid-cols-12 gap-10 lg:gap-16 items-center scroll-mt-28"
    >
      {/* Video slot */}
      <div className={`md:col-span-5 ${reversed ? "md:order-2" : ""}`}>
        <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[20px] bg-[var(--envelope)] group">
          {eq.videoSrc ? (
            <AmbientVideo src={eq.videoSrc} poster={eq.img} />
          ) : (
            <>
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
                {t("tech.videoSoon")}
              </div>
            </>
          )}
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
        <p className="font-mono uppercase text-[13px] tracking-[0.25em] text-amber">
          {eq.label}
        </p>
        <h2
          className="mt-6 font-display font-normal text-ink leading-[1.02] tracking-tight"
          style={{ fontSize: "clamp(2.25rem, 4.2vw, 3.5rem)" }}
        >
          {eq.titleStart}
          <span className="italic-acc">{eq.titleItalic}</span>
          {eq.titleEnd}
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

/**
 * AmbientVideo — clip en bucle, silencioso, sin controles y sin botón de play.
 * `autoPlay` (con muted + playsInline, permitido en todos los navegadores)
 * garantiza que el vídeo arranque solo; el IntersectionObserver es una mejora
 * progresiva que pausa los clips fuera de pantalla para ahorrar batería y CPU
 * y los reanuda al volver a ser visibles. La foto original hace de póster.
 */
function AmbientVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            // El navegador puede bloquear el autoplay (ahorro de datos, etc.);
            // en ese caso se queda el póster, sin romper nada.
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}
