import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/Button";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · JMGeo · Topografía con drones y LiDAR" },
      { name: "description", content: "Cuéntanos qué necesitas medir. Respondemos en menos de 24 horas laborables. Captura LiDAR aérea con drones en seis países europeos." },
      { property: "og:title", content: "Contacto · JMGeo · Topografía con drones y LiDAR" },
      { property: "og:description", content: "Cuéntanos qué necesitas medir. Respondemos en menos de 24 horas laborables. Captura LiDAR aérea con drones en seis países europeos." },
    ],
  }),
  component: ContactoPage,
});

const ease = [0.22, 1, 0.36, 1] as const;
const fadeIn = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease },
};

type FieldErrors = Partial<Record<"nombre" | "email" | "mensaje" | "privacidad", string>>;

function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  // TODO: conectar con Resend usando el endpoint /api/contact cuando esté lista la cuenta. Destino: javier@jmgeo.es
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: FieldErrors = {};

    const nombre = String(data.get("nombre") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const mensaje = String(data.get("mensaje") ?? "").trim();
    const privacidad = data.get("privacidad");

    if (!nombre) next.nombre = "Indícanos tu nombre";
    if (!email) next.email = "Indícanos tu email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Email no válido";
    if (!mensaje) next.mensaje = "Cuéntanos brevemente tu proyecto";
    if (!privacidad) next.privacidad = "Necesitamos tu consentimiento";

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("loading");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <main className="bg-paper">
      <section className="px-6 py-[120px] pb-[100px] md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-20 lg:grid-cols-[3fr_2fr]">
          {/* Columna izquierda — formulario */}
          <motion.div {...fadeIn}>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
              CONTACTO
            </p>
            <h1 className="mt-6 font-display text-ink" style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1.02, letterSpacing: "-0.02em" }}>
              Cuéntanos qué <span className="italic-acc">necesitas medir</span>.
            </h1>
            <p className="mt-8 max-w-[480px] font-sans text-[18px] leading-relaxed text-mid">
              Respondemos en menos de 24 horas laborables. Sin compromiso.
            </p>

            <div className="mt-12">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease }}
                    className="border-t border-amber pt-10"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber">
                      MENSAJE ENVIADO
                    </p>
                    <h2 className="mt-4 font-display text-[32px] leading-[1.1] text-ink">
                      Gracias. Te contestamos en menos de 24 horas.
                    </h2>
                    <p className="mt-4 font-sans text-[14px] text-mid">
                      Si tu consulta es urgente, también puedes escribirnos directamente a{" "}
                      <a href="mailto:javier@jmgeo.es" className="text-ink underline decoration-amber underline-offset-4">
                        javier@jmgeo.es
                      </a>
                    </p>
                    <div className="mt-8">
                      <Button
                        variant="tertiary"
                        onClick={() => {
                          setStatus("idle");
                          setErrors({});
                        }}
                      >
                        Enviar otro mensaje
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease }}
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-6"
                  >
                    <Field label="Nombre completo" name="nombre" required error={errors.nombre} />
                    <Field label="Empresa u organización" name="empresa" />
                    <Field label="Email" name="email" type="email" required error={errors.email} />
                    <Field label="Teléfono" name="telefono" type="tel" />

                    <div className="flex flex-col gap-2">
                      <label htmlFor="tipo" className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
                        Tipo de proyecto
                      </label>
                      <select
                        id="tipo"
                        name="tipo"
                        defaultValue=""
                        className="rounded-xl border border-ink/12 bg-[var(--paper-alt)] px-4 py-[14px] font-sans text-[15px] text-ink outline-none transition-colors focus:border-amber focus:bg-paper"
                      >
                        <option value="" disabled>Selecciona una opción</option>
                        <option>Levantamiento de grandes extensiones</option>
                        <option>Captura de alta precisión</option>
                        <option>Proyecto técnico a medida</option>
                        <option>Consulta general</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="mensaje" className="font-sans text-[10px] uppercase tracking-[0.2em] text-amber">
                        Cuéntanos tu proyecto <span className="text-ink/40">*</span>
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={5}
                        placeholder="Brevemente: qué necesitas, dónde, para cuándo y en qué formato te interesa recibir la entrega"
                        className="rounded-xl border bg-[var(--paper-alt)] px-4 py-[14px] font-sans text-[15px] text-ink placeholder:text-mid/70 outline-none transition-colors focus:border-amber focus:bg-paper"
                        style={{ borderColor: errors.mensaje ? "#B26A5F" : "rgba(58,74,90,0.12)" }}
                      />
                      {errors.mensaje && (
                        <p className="font-sans text-[11px]" style={{ color: "#B26A5F" }}>{errors.mensaje}</p>
                      )}
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="privacidad"
                        className="mt-1 h-4 w-4 accent-[var(--amber)]"
                      />
                      <span className="font-sans text-[14px] text-mid">
                        He leído y acepto la política de privacidad
                      </span>
                    </label>
                    {errors.privacidad && (
                      <p className="-mt-3 font-mono text-[11px]" style={{ color: "#a03d2f" }}>{errors.privacidad}</p>
                    )}

                    <div className="mt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={status === "loading"}
                        className="w-full md:w-auto md:min-w-[240px]"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin text-amber" />
                            Enviando…
                          </>
                        ) : (
                          "Enviar mensaje"
                        )}
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Columna derecha — información */}
          <motion.aside {...fadeIn} transition={{ duration: 0.7, ease, delay: 0.1 }}>
            <div
              className="border-t-2 border-amber bg-paper p-9"
              style={{ boxShadow: "0 1px 0 rgba(20,40,58,0.06)" }}
            >
              <InfoBlock title="DIRECTAMENTE">
                <p className="text-mid text-[13px] mb-2">Contacto directo con Javier</p>
                <a href="mailto:javier@jmgeo.es" className="block text-ink hover:text-amber transition-colors">
                  javier@jmgeo.es
                </a>
                <a href="tel:+34640266724" className="block text-ink hover:text-amber transition-colors mt-1">
                  +34 640 266 724
                </a>
              </InfoBlock>

              <Divider />

              <InfoBlock title="OFICINA">
                <p className="text-ink">Maestra Juana Senent 5, 5</p>
                <p className="text-ink">46910 Benetússer</p>
                <p className="text-ink">Valencia, España</p>
              </InfoBlock>

              <Divider />

              <InfoBlock title="HORARIO">
                <p className="text-ink">Lunes a viernes</p>
                <p className="text-ink">09:00 — 18:00 (CET)</p>
              </InfoBlock>

              <Divider />

              <InfoBlock title="PRESENCIA">
                <p className="text-ink">
                  Operamos en España, Reino Unido, Italia, Portugal, Francia y Alemania.
                </p>
              </InfoBlock>
            </div>

            <div className="mt-6 overflow-hidden rounded-sm">
              <iframe
                title="Ubicación JMGeo en Benetússer, Valencia"
                src="https://www.google.com/maps?q=Maestra+Juana+Senent+5,+Benet%C3%BAsser,+Valencia,+Espa%C3%B1a&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, filter: "grayscale(40%)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
        {label} {required && <span className="text-ink/40">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="rounded-sm border bg-[#FAF8F2] px-4 py-[14px] font-sans text-[15px] text-ink outline-none transition-colors focus:border-amber focus:bg-white"
        style={{ borderColor: error ? "#a03d2f" : "rgba(20,40,58,0.2)" }}
      />
      {error && (
        <p className="font-mono text-[11px]" style={{ color: "#a03d2f" }}>{error}</p>
      )}
    </div>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-amber mb-3">
        {title}
      </h3>
      <div className="font-sans text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}

function Divider() {
  return <hr className="my-6 border-0 border-t" style={{ borderColor: "rgba(20,40,58,0.1)" }} />;
}
