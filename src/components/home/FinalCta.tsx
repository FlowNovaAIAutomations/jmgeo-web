import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/Button";
import { CompassRose } from "@/components/CompassRose";

const ease = [0.22, 1, 0.36, 1] as const;

export function FinalCta() {
  return (
    <section className="relative bg-ink text-paper py-[160px] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-paper pointer-events-none">
        <CompassRose size={720} opacity={0.04} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease }}
        className="relative mx-auto max-w-[1100px] px-6 lg:px-10 text-center flex flex-col items-center"
      >
        <h2
          className="font-display font-normal leading-[0.98] tracking-tight"
          style={{ fontSize: "clamp(3.5rem, 8vw, 6.875rem)" }}
        >
          Tienes un proyecto.
          <br />
          <span className="italic-acc">Lo medimos</span>.
        </h2>

        <p className="mt-8 max-w-[540px] text-paper/75 text-lg leading-relaxed">
          Cuéntanos qué necesitas capturar. Respondemos en menos de 24 horas.
        </p>

        <Link to="/contacto" className="mt-12">
          <Button variant="accent" size="lg">Contactar</Button>
        </Link>
      </motion.div>
    </section>
  );
}
