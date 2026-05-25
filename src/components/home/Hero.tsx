import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/Button";
import heroBg from "@/assets/clientes/hero-drone.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Hero — fondo envelope sólido, texto a la izquierda,
 * fotografía aislada en un panel a la derecha. SIN texto encima de la foto.
 */
export function Hero() {
  return (
    <section className="relative w-full bg-[var(--envelope)] text-paper overflow-hidden -mt-24 pt-32 pb-20 md:pt-40 md:pb-24 min-h-[760px] flex items-start">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-80"
        style={{
          background:
            "radial-gradient(80% 60% at 20% 30%, rgba(251,251,249,0.05) 0%, transparent 60%), radial-gradient(60% 50% at 90% 80%, rgba(251,251,249,0.03) 0%, transparent 60%)",
        }}
      />

      <div className="relative w-full mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT — Texto */}
        <div className="lg:col-span-6">
          {/* Badge pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.1 }}
            className="inline-flex items-center rounded-full border border-paper/15 bg-paper/[0.04] px-5 py-2.5"
          >
            <span className="font-sans text-sm text-paper/60 leading-snug">
              Tus proyectos, datos y levantamientos siempre accesibles desde cualquier lugar
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.2 }}
            className="mt-6 font-display font-normal leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5.8vw, 5rem)" }}
          >
            Midiendo el presente para construir el futuro
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
            className="mt-6 max-w-lg text-paper/65 leading-relaxed text-base"
          >
            Captura LiDAR aérea, fotogrametría, SLAM y nubes de puntos para operaciones técnicas en toda Europa
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Link to="/contacto">
              <Button variant="accent" size="lg">Solicitar presupuesto</Button>
            </Link>
            <Link
              to="/tecnologia"
              className="group inline-flex items-center gap-2 rounded-xl border border-paper/15 px-6 py-3 text-paper/80 hover:text-paper hover:bg-paper/5 transition-all"
            >
              <span className="text-sm font-medium">Ver tecnología</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT — Foto en panel limpio (sin texto encima) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.3 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative rounded-[20px] overflow-hidden shadow-soft-lg">
            <img
              src={heroBg}
              alt="Dron LiDAR sobrevolando un terreno para levantamiento topográfico"
              loading="eager"
              decoding="async"
              className="block w-full h-[460px] md:h-[540px] object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-paper/50"
      >
        <span className="font-sans uppercase text-[10px] tracking-[0.3em]">
          Descubrir
        </span>
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-0.5 h-8 bg-paper/40 rounded-full"
        />
      </motion.div>
    </section>
  );
}
