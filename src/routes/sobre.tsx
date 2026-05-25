import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Button } from "@/components/Button";
import { CompassRose } from "@/components/CompassRose";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre JMGeo · Topografía con drones y LiDAR" },
      { name: "description", content: "Empresa joven especializada en captura LiDAR con drones. Equipo, filosofía y enfoque técnico aplicados en seis países europeos." },
      { property: "og:title", content: "Sobre JMGeo · Topografía con drones y LiDAR" },
      { property: "og:description", content: "Empresa joven especializada en captura LiDAR con drones. Equipo, filosofía y enfoque técnico aplicados en seis países europeos." },
    ],
  }),
  component: SobrePage,
});

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease },
};

const pillars = [
  {
    label: "Sí hacemos",
    accent: "amber" as const,
    items: [
      "Estudio técnico individual de cada proyecto",
      "Comunicación directa con quien decide",
      "Entrega en los formatos que usa tu equipo",
      "Histórico completo y trazabilidad",
      "Soporte después de la entrega",
      "Confidencialidad bajo NDA cuando aplica",
    ],
  },
  {
    label: "No hacemos",
    accent: "mid" as const,
    items: [
      "Subcontratar la parte técnica crítica",
      "Cobrar extras sin avisar",
      'Entregar capturas "tal cual" sin revisar',
      "Esconder limitaciones técnicas",
      "Prometer plazos que no podemos cumplir",
      "Trabajar sin acuerdos por escrito",
    ],
  },
  {
    label: "Prometemos",
    accent: "amber" as const,
    items: [
      "Presupuesto cerrado antes de empezar",
      "Plazo realista desde el primer día",
      "Calidad técnica documentada",
      "Disponibilidad post-entrega",
      "Mejora continua del entregable",
      "Datos seguros y bien custodiados",
    ],
  },
];

// TEAM PLACEHOLDERS — replace with real members once Javi sends photos + info.
// Each item should become { name, role, photo } and the placeholder div
// should be swapped for <img src={photo} ... className="absolute inset-0 w-full h-full object-cover" />
const teamPlaceholders = Array.from({ length: 4 });

function SobrePage() {
  return (
    <>
      {/* 1 — TEXT HERO */}
      <section className="bg-paper py-[160px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber"
          >
            Sobre JMGeo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.15 }}
            className="mt-10 font-display font-normal text-ink leading-[0.96] tracking-tight max-w-[1200px]"
            style={{ fontSize: "clamp(4rem, 9vw, 7.5rem)" }}
          >
            Una empresa joven,
            <br />
            una <span className="italic-acc">especialización clara</span>.
          </motion.h1>
        </div>
      </section>

      {/* 2 — LONG TEXT */}
      <section className="bg-paper py-20">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-[720px] px-6 space-y-8 text-[18px] text-ink/85 leading-[1.65]"
        >
          <p>
            JMGeo es una empresa española de topografía técnica especializada en
            captura de datos LiDAR con drones. Aunque somos jóvenes como
            organización, el equipo acumula años de experiencia en topografía y
            geomática aplicadas a proyectos reales.
          </p>
          <p>
            Operamos en seis países europeos —España, Reino Unido, Italia,
            Portugal, Francia y Alemania— y trabajamos para constructoras,
            ingenierías, administraciones públicas y promotores. La diversidad
            de mercados nos obliga a ser muy precisos en cada entrega: distintas
            normativas, distintos formatos, distintos niveles de exigencia.
          </p>
          <p>
            Nuestro enfoque es deliberado: nos centramos en una tecnología
            —LiDAR aerotransportado— y la aplicamos a problemas muy distintos.
            Creemos que esa especialización es lo que nos permite resolver mejor
            cada caso. No queremos ser una topografía generalista más. Queremos
            ser el equipo al que llamas cuando lo que necesitas es captura aérea
            de precisión.
          </p>
        </motion.div>
      </section>

      {/* 3 — PILLARS */}
      <section className="relative bg-envelope text-paper py-[160px] overflow-hidden">
        <div className="absolute -top-32 -right-32 text-paper pointer-events-none">
          <CompassRose size={520} opacity={0.06} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <motion.p {...fadeUp} className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber">
            Filosofía
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mt-6 font-display font-normal leading-[1.02] tracking-tight max-w-3xl"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Cómo trabajamos, <span className="italic-acc">cómo no</span>.
          </motion.h2>

          <div className="mt-20 grid md:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease, delay: i * 0.12 }}
                className="rounded-[20px] bg-paper/[0.04] border border-paper/10 pt-8 px-8 pb-8"
              >
                <p className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber">
                  {p.label}
                </p>
                <ul className="mt-8 space-y-4">
                  {p.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
                      <span
                        className={`mt-[2px] ${
                          p.accent === "amber" ? "text-amber" : "text-paper/40"
                        }`}
                      >
                        ·
                      </span>
                      <span className="text-paper/85">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — TEAM (placeholders) */}
      <section className="bg-paper py-[140px]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.p {...fadeUp} className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber">
            Equipo
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mt-6 font-display font-normal text-ink leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}
          >
            El equipo detrás del <span className="italic-acc">vuelo</span>.
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-6 max-w-lg text-mid text-base"
          >
            Aquí estaremos los miembros del equipo una vez tengamos las fotos
            profesionales.
          </motion.p>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {teamPlaceholders.map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
              >
                {/* TEAM PHOTO SLOT — replace with <img src={member.photo} ... /> */}
                <div className="relative aspect-square w-full bg-[#ECEAE3] border border-ink/10 flex items-center justify-center">
                  <User className="h-10 w-10 text-ink/15" strokeWidth={1} />
                </div>
                <h3 className="mt-5 font-display text-[22px] text-ink/90">
                  Nombre Apellido
                </h3>
                <p className="mt-1 font-mono uppercase text-[11px] tracking-[0.2em] text-mid">
                  Rol
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — CTA */}
      <section className="bg-paper py-[120px] border-t border-ink/10">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-2xl px-6 text-center flex flex-col items-center"
        >
          <h2 className="font-display font-normal text-ink text-4xl md:text-[40px] leading-tight tracking-tight">
            Cuéntanos tu proyecto.
          </h2>
          <Link to="/contacto" className="mt-10">
            <Button variant="primary" size="lg">Contactar</Button>
          </Link>
        </motion.div>
      </section>
    </>
  );
}
