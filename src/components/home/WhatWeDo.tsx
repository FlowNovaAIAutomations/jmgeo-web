import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Expandable } from "@/components/Expandable";
import imgCaptura from "@/assets/clientes/drone-vuelo.png";
import imgEjecucion from "@/assets/clientes/equipo-obra.png";

const ease = [0.22, 1, 0.36, 1] as const;

// Los textos viven en locales/{es,en}/common.json (whatWeDo.cards / whatWeDo.steps);
// aquí solo quedan los datos no traducibles (números e imágenes), casados por índice.
const cardImgs = [imgCaptura, imgEjecucion];

export function WhatWeDo() {
  const { t } = useTranslation();
  const cardTexts = t("whatWeDo.cards", { returnObjects: true }) as {
    title: string;
    short: string;
    detail: string;
  }[];
  const cards = cardTexts.map((c, i) => ({
    ...c,
    num: String(i + 1).padStart(2, "0"),
    img: cardImgs[i],
  }));
  const steps = (
    t("whatWeDo.steps", { returnObjects: true }) as { title: string; desc: string }[]
  ).map((s, i) => ({ ...s, num: String(i + 1).padStart(2, "0") }));

  return (
    <section id="servicios" className="bg-paper py-[140px] border-t border-ink/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
          className="font-mono uppercase text-[13px] tracking-[0.25em] text-amber"
        >
          {t("whatWeDo.label")}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mt-6 font-display font-normal text-ink leading-[1.02] tracking-tight whitespace-nowrap"
          style={{ fontSize: "clamp(1.5rem, 3.8vw, 3.5rem)" }}
        >
          {t("whatWeDo.title")}
        </motion.h2>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {cards.map((c, i) => (
            <motion.article
              key={c.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease, delay: i * 0.12 }}
              className="group flex flex-col"
            >
              {/* Imagen limpia, sin overlay ni texto encima */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[var(--paper-alt)]">
                <img
                  loading="lazy"
                  decoding="async"
                  src={c.img}
                  alt={c.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-6 font-mono uppercase text-[13px] tracking-[0.25em] text-amber">
                {c.num}
              </div>
              <h3 className="mt-3 font-display text-[26px] font-medium text-ink leading-tight">
                {c.title}
              </h3>
              <p className="mt-3 text-[15px] text-mid leading-relaxed">
                {c.short}
              </p>

              <Expandable label={t("whatWeDo.more")}>
                <p>{c.detail}</p>
              </Expandable>
            </motion.article>
          ))}
        </div>

        {/* Pasos del proceso */}
        <div className="mt-24 relative">
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
                  className="font-display font-light leading-none"
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
