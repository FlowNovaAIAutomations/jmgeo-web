import { motion } from "framer-motion";

const countries = [
  { code: "ES", name: "España" },
  { code: "UK", name: "Reino Unido" },
  { code: "IT", name: "Italia" },
  { code: "PT", name: "Portugal" },
  { code: "FR", name: "Francia" },
  { code: "DE", name: "Alemania" },
];

const stats = [
  { value: "6", label: "Países europeos" },
  { value: "120+", label: "Proyectos entregados" },
  { value: "24/7", label: "Acceso a tus datos" },
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

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="mt-8 text-ink/80 leading-[1.65] max-w-md"
          >
            En JM GEO apostamos por una topografía adaptada al momento
            tecnológico actual. Por ello, incorporamos las últimas innovaciones
            en sistemas digitales de medición. Creemos que la combinación entre
            la dedicación humana en campo y el uso de tecnología emergente es
            clave para ofrecer resultados de máximo rigor en proyectos de
            edificación, energía e infraestructuras.
          </motion.p>
        </div>

        {/* RIGHT — Stats + countries visual */}
        <div className="md:col-span-7">
          {/* Stats band */}
          <div className="grid grid-cols-3 border-t border-b border-ink/15 divide-x divide-ink/10">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease, delay: i * 0.06 }}
                className="py-7 px-4 text-center first:border-l-0"
              >
                <div className="font-display text-ink text-[clamp(1.75rem,3vw,2.5rem)] leading-none">
                  {s.value}
                </div>
                <div className="mt-3 font-mono uppercase text-[10px] tracking-[0.2em] text-mid">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Europe presence panel */}
          <div className="mt-10 relative rounded-sm border border-ink/15 bg-ink text-paper overflow-hidden">
            {/* subtle compass-style decoration */}
            <div
              className="absolute inset-0 pointer-events-none opacity-60"
              style={{
                background:
                  "radial-gradient(60% 80% at 80% 20%, rgba(185,132,24,0.18) 0%, transparent 60%), radial-gradient(50% 60% at 10% 90%, rgba(247,245,239,0.05) 0%, transparent 60%)",
              }}
            />
            <div className="relative p-8 md:p-10">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="font-mono uppercase text-[10px] tracking-[0.25em] text-amber">
                    Presencia operativa
                  </p>
                  <h3 className="mt-2 font-display text-paper text-2xl md:text-3xl leading-tight">
                    Operando en 6 países de Europa
                  </h3>
                </div>
                <div className="hidden md:flex items-center gap-2 rounded-full border border-paper/20 px-3 py-1.5">
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
