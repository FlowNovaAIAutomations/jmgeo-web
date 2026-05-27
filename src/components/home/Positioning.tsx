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
    <section id="nosotros" className="bg-paper py-[140px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-12 gap-12 lg:gap-20">
        {/* LEFT — Title + intro */}
        <div className="md:col-span-5 md:sticky md:top-32 md:self-start">
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
            style={{ fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)" }}
          >
            Una empresa joven con datos a{" "}
            <span className="italic-acc">escala europea</span>.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-8 max-w-md text-ink/80 leading-[1.65] space-y-5"
          >
            <p>
              En JM GEO apostamos por una topografía adaptada al momento
              tecnológico actual.
            </p>
            <p>
              Por ello, incorporamos las últimas innovaciones en sistemas
              digitales de medición. Creemos que la combinación entre la
              dedicación humana en campo y el uso de tecnología emergente es
              clave para ofrecer resultados de máximo rigor en proyectos de
              edificación, energía e infraestructuras.
            </p>
          </motion.div>
        </div>

        {/* RIGHT — Panel oscuro "Presencia operativa" con países */}
        {/* mt-10 en desktop para que el panel arranque a la altura del título
            en vez de a la altura del label "02 / Quiénes somos" */}
        <div className="md:col-span-7 md:mt-10">
          <div className="relative rounded-sm border border-ink/15 bg-ink text-paper overflow-hidden">
            {/* glow sutil */}
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{
                background:
                  "radial-gradient(60% 80% at 80% 20%, rgba(185,132,24,0.18) 0%, transparent 60%), radial-gradient(50% 60% at 10% 90%, rgba(247,245,239,0.05) 0%, transparent 60%)",
              }}
            />
            <div className="relative p-8 md:p-10">
              <div className="flex items-start justify-between mb-8 gap-6">
                <div>
                  <p className="font-mono uppercase text-[10px] tracking-[0.25em] text-amber">
                    Presencia operativa
                  </p>
                  <div
                    className="mt-3 font-display text-paper leading-none"
                    style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
                  >
                    120+
                  </div>
                  <p className="mt-3 font-mono uppercase text-[10px] tracking-[0.25em] text-paper/65">
                    Proyectos entregados
                  </p>
                </div>
                <div className="shrink-0 inline-flex items-center gap-2 rounded-full border border-paper/20 px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
                  <span className="font-mono uppercase text-[10px] tracking-[0.2em] text-paper/70">
                    En activo
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-paper/10">
                {countries.map((c, i) => (
                  <motion.div
                    key={c.code}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, ease, delay: i * 0.05 }}
                    className="bg-ink p-4 hover:bg-ink/60 transition-colors group"
                  >
                    <div className="font-display text-[26px] leading-none text-paper group-hover:text-amber transition-colors">
                      {c.code}
                    </div>
                    <div className="mt-2 font-mono uppercase text-[9px] tracking-[0.2em] text-paper/55">
                      {c.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
