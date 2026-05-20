import { motion } from "framer-motion";

const countries = [
  { code: "ES", name: "España" },
  { code: "UK", name: "Reino Unido" },
  { code: "IT", name: "Italia" },
  { code: "PT", name: "Portugal" },
  { code: "FR", name: "Francia" },
  { code: "DE", name: "Alemania" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Positioning() {
  return (
    <section className="bg-paper py-[140px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-16 lg:gap-24">
        <div className="md:sticky md:top-32 md:self-start">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease }}
            className="font-mono uppercase text-[11px] tracking-[0.25em] text-amber"
          >
            02 / Quiénes somos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="mt-6 font-display font-normal text-ink leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            Una empresa joven con datos a{" "}
            <span className="italic-acc">escala europea</span>.
          </motion.h2>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease }}
            className="text-lg text-ink/85 leading-[1.6] max-w-xl"
          >
            JMGeo es un equipo especializado en captura de datos LiDAR con
            drones. Trabajamos para constructoras, ingenierías y administraciones
            que necesitan información topográfica precisa, ya sea sobre grandes
            extensiones de terreno o sobre detalles muy específicos.
          </motion.p>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3">
            {countries.map((c, i) => (
              <motion.div
                key={c.code}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.08 }}
                className="border border-ink/15 p-5 hover:border-ink/40 transition-colors"
              >
                <div className="font-display text-[28px] leading-none text-ink">
                  {c.code}
                </div>
                <div className="mt-2 font-mono uppercase text-[10px] tracking-[0.2em] text-mid">
                  {c.name}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-sm text-mid">
            Proyectos ejecutados en 6 países europeos.
          </p>
        </div>
      </div>
    </section>
  );
}
