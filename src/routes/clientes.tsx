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
    <div className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: "#38454F" }}>
      {/* Decorative top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: "#F7F5EF", opacity: 0.1 }}
      />

      {/* Decorative bottom line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: "#F7F5EF", opacity: 0.1 }}
      />

      {/* Background CompassRose */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <CompassRose size={600} opacity={0.06} className="text-amber" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-[8vw] text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.3em]"
          style={{ color: "#B98418" }}
          variants={item}
        >
          Área de clientes
        </motion.p>

        <motion.h1
          className="mt-8 font-display leading-none tracking-tight"
          style={{
            fontSize: "clamp(56px, 8vw, 110px)",
            color: "#F7F5EF",
            maxWidth: "1000px",
          }}
          variants={item}
        >
          Próximamente,
          <br />
          <span
            className="italic-acc"
            style={{ color: "#F7F5EF", backgroundImage: "linear-gradient(#B98418, #B98418)" }}
          >
            tu portal
          </span>
          .
        </motion.h1>

        <motion.p
          className="mt-9 text-lg leading-relaxed"
          style={{
            color: "rgba(247, 245, 239, 0.75)",
            maxWidth: "540px",
            fontFamily: '"Inter Tight", system-ui, sans-serif',
          }}
          variants={item}
        >
          Estamos preparando un espacio privado donde nuestros clientes podrán
          acceder a sus proyectos, descargar entregables LiDAR, ver versiones,
          comentar y consultar el histórico completo de su trabajo con JMGeo.
        </motion.p>

        <motion.p
          className="mt-[60px] font-mono text-[11px] uppercase"
          style={{
            color: "rgba(247, 245, 239, 0.5)",
            letterSpacing: "0.25em",
          }}
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
