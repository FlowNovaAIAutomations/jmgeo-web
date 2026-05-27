import { motion } from "framer-motion";
import heroDrones from "@/assets/hero-drones-clean.png";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Hero — composición vertical centrada según mockup del cliente:
 *  · Título (2 líneas) centrado arriba
 *  · Subtítulo justo debajo
 *  · Foto de los drones en un panel grande, centrada, bordes redondeados
 *
 * IMPORTANTE: la imagen `hero-drones-clean.png` debe ser LIMPIA (sin texto encima);
 * el título y subtítulo se renderizan en HTML para mantener SEO/a11y/responsive.
 */
export function Hero() {
  return (
    <section className="relative w-full bg-[var(--envelope)] text-paper overflow-hidden -mt-24 pt-32 pb-20 md:pt-40 md:pb-24">
      {/* Glow sutil de fondo */}
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(80% 60% at 20% 30%, rgba(251,251,249,0.05) 0%, transparent 60%), radial-gradient(60% 50% at 90% 80%, rgba(251,251,249,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        {/* Headline — 2 líneas, sin punto final */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="font-display font-normal leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          Midiendo el presente
          <br />
          para construir el futuro
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.25 }}
          className="mt-6 text-paper/70 leading-relaxed text-lg md:text-xl"
        >
          Topografía para proyectos de ingeniería
        </motion.p>

        {/* Foto de los drones — panel centrado debajo del texto */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          className="mt-12 md:mt-16"
        >
          <div className="relative rounded-[20px] overflow-hidden shadow-soft-lg">
            <img
              src={heroDrones}
              alt="Tres drones LiDAR sobrevolando un paisaje al atardecer"
              loading="eager"
              decoding="async"
              className="block w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
