import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CompassRose } from "@/components/CompassRose";
import { Button } from "@/components/Button";

export const Route = createFileRoute("/clientes")({
  head: () => ({
    meta: [
      { title: "Área de clientes · JMGeo · Topografía con drones y LiDAR" },
      { name: "description", content: "Portal de clientes JMGeo. Próximamente disponible para acceso a entregables LiDAR, versiones y seguimiento de proyectos." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Área de clientes · JMGeo · Topografía con drones y LiDAR" },
      { property: "og:description", content: "Portal de clientes JMGeo. Próximamente disponible para acceso a entregables LiDAR, versiones y seguimiento de proyectos." },
    ],
  }),
  component: ClientsPage,
});

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease },
  },
};

function ClientsPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[var(--envelope)]">
      {/* Background CompassRose */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <CompassRose size={600} opacity={0.05} className="text-paper" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-[8vw] text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="font-sans text-xs uppercase tracking-[0.3em] text-paper/55"
          variants={item}
        >
          Área de clientes
        </motion.p>

        <motion.h1
          className="mt-8 font-display leading-none tracking-tight text-paper"
          style={{
            fontSize: "clamp(56px, 8vw, 110px)",
            maxWidth: "1000px",
          }}
          variants={item}
        >
          Próximamente,
          <br />
          <span className="italic text-paper/70">tu portal</span>.
        </motion.h1>

        <motion.p
          className="mt-9 text-lg leading-relaxed text-paper/70"
          style={{ maxWidth: "540px" }}
          variants={item}
        >
          Estamos preparando un espacio privado donde nuestros clientes podrán
          acceder a sus proyectos, descargar entregables LiDAR, ver versiones,
          comentar y consultar el histórico completo de su trabajo con JMGeo.
        </motion.p>

        <motion.p
          className="mt-[60px] font-sans text-[11px] uppercase text-paper/45"
          style={{ letterSpacing: "0.25em" }}
          variants={item}
        >
          DISPONIBLE · VERANO 2026
        </motion.p>

        <motion.div className="mt-12" variants={item}>
          <Link to="/">
            <Button
              variant="tertiary"
              className="!text-paper hover:!text-amber"
            >
              Volver al inicio
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
