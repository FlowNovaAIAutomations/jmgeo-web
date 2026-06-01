import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const steps = [
  { num: "01", title: "Briefing técnico", desc: "Entendemos qué necesitas medir, con qué precisión, para cuándo y en qué formato." },
  { num: "02", title: "Planificación de proyecto", desc: "Diseñamos la estrategia: metodología, equipos, planificación de campo y permisos cuando aplican." },
  { num: "03", title: "Levantamiento en campo", desc: "Capturamos los datos con drones LiDAR, GNSS y estación total según las necesidades del proyecto." },
  { num: "04", title: "Gabinete", desc: "Procesamos la información, generamos modelos y preparamos los entregables técnicos." },
  { num: "05", title: "Entrega", desc: "Te llega todo en los formatos que usas, con histórico y soporte posterior." },
];

export function Process() {
  return (
    <section className="bg-paper py-[140px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono uppercase text-[13px] tracking-[0.25em] text-amber"
        >
          Proceso
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-6 font-display font-normal text-ink leading-[1.02] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 4.5vw, 4rem)" }}
        >
          Cinco pasos, <span className="italic-acc">sin sorpresas</span>.
        </motion.h2>

        {/* Timeline */}
        <div className="mt-24 relative">
          {/* Horizontal connector with moving dot (desktop only) */}
          <div className="hidden md:block absolute top-[44px] left-0 right-0 h-px bg-ink/15">
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute -top-[3px] w-[7px] h-[7px] rounded-full bg-amber"
            />
          </div>

          <div className="grid md:grid-cols-5 gap-12 md:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease, delay: i * 0.15 }}
                className="relative"
              >
                <div
                  className="font-display font-light text-ink/12 leading-none"
                  style={{ fontSize: "80px", letterSpacing: "-0.04em", color: "rgba(42,56,69,0.12)" }}
                >
                  {s.num}
                </div>
                <h3 className="mt-6 font-display text-[18px] font-medium text-ink">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] text-mid leading-relaxed max-w-[260px]">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
