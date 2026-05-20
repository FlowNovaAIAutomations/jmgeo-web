import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative w-full min-h-[720px] h-screen overflow-hidden -mt-24">
      {/* Background image — aerial / lidar terrain */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=2400&q=85')",
          filter: "contrast(1.05) saturate(0.9)",
        }}
      />
      {/* Diagonal navy overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top right, rgba(20,40,58,0.55), rgba(20,40,58,0.15))",
        }}
      />

      <div className="relative h-full mx-auto max-w-7xl px-6 lg:px-10 flex flex-col justify-end pb-32 md:pb-40">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber"
        >
          01 / Topografía con drones y LIDAR
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.25 }}
          className="mt-6 font-display font-normal text-paper leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(3.5rem, 9vw, 8.125rem)" }}
        >
          Capturamos el terreno desde el aire,
          <br />
          con precisión <span className="italic-acc">milimétrica</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.4 }}
          className="mt-8 max-w-xl text-paper/85 leading-relaxed"
          style={{ fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)" }}
        >
          Drones equipados con tecnología LiDAR para levantamientos topográficos
          de grandes extensiones y trabajos de alta precisión. Operamos en seis
          países europeos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <Link to="/tecnologia">
            <Button variant="primary" size="lg">Ver tecnología</Button>
          </Link>
          <Link to="/contacto" className="group inline-flex items-center gap-2 text-paper">
            <span className="text-sm">Hablar con nosotros</span>
            <span className="text-amber transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-paper/70"
      >
        <span className="font-mono uppercase text-[10px] tracking-[0.3em]">
          Descubrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-paper/60"
        />
      </motion.div>
    </section>
  );
}
