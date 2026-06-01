import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/Button";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · JM GEO · Topografía con drones y LiDAR" },
      { name: "description", content: "Cuéntanos qué necesitas medir. Respondemos en menos de 24 horas laborables. Captura LiDAR aérea con drones en seis países europeos." },
      { property: "og:title", content: "Contacto · JM GEO · Topografía con drones y LiDAR" },
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

  // TODO: conectar con Resend usando el endpoint /api/contact cuando esté lista la cuenta. Destino: administracion@jmgeo.es
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
              SOLICITAR PRESUPUESTO
            </p>
            <h1 className="mt-6 font-display text-ink" style={{ fontSize: "clamp(3rem, 6vw, 5rem)", lineHeight: 1.02, letterSpacing: "-0.02em" }}>
              Cuéntanos qué <span className="italic-acc">necesitas medir</span>
            </h1>

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
                      <a href="mailto:administracion@jmgeo.es" className="text-ink underline decoration-amber underline-offset-4">
                        administracion@jmgeo.es
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
                        className="rounded-xl border border-ink/12 bg-[var(--paper-alt)] pl-4 pr-10 py-[14px] font-sans text-[15px] text-ink outline-none transition-colors focus:border-amber focus:bg-paper appearance-none bg-no-repeat bg-[length:16px_16px] bg-[position:right_14px_center]"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238595A3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")` }}
                      >
                        <option value="" disabled>Selecciona una opción</option>
                        <option>Levantamiento LiDAR</option>
                        <option>Levantamiento fotogrametría</option>
                        <option>Replanteo</option>
                        <option>Generación MDT&amp;MDE</option>
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
                      <p className="-mt-3 font-sans text-[11px]" style={{ color: "#B26A5F" }}>{errors.privacidad}</p>
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
                          "Solicitar presupuesto"
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
            <div className="rounded-[20px] border border-ink/8 bg-paper p-9 shadow-soft">
              <InfoBlock title="CONTACTO">
                <p className="text-ink">JM GEO, S.L.</p>
                <p className="text-ink">Maestra Juana Sena, 5 - 5</p>
                <p className="text-ink">46910 Benetússer (Valencia)</p>
                <p className="text-ink">España</p>
                <a href="tel:+34640266724" className="block text-ink hover:text-amber transition-colors mt-3">
                  T: +34 640 266 724
                </a>
                <a href="mailto:administracion@jmgeo.es" className="block text-ink hover:text-amber transition-colors mt-1">
                  E: administracion@jmgeo.es
                </a>
              </InfoBlock>

              <Divider />

              <InfoBlock title="HORARIO">
                <p className="text-ink">Lunes a viernes</p>
                <p className="text-ink">9:00 — 17:00</p>
              </InfoBlock>
            </div>

            <div className="mt-6 overflow-hidden rounded-[20px]">
              <iframe
                title="Ubicación JM GEO en Benetússer, Valencia"
                src="https://www.google.com/maps?q=Maestra+Juana+Sena+5,+Benet%C3%BAsser,+Valencia,+Espa%C3%B1a&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, filter: "grayscale(60%)" }}
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
      <label htmlFor={name} className="font-sans text-[10px] uppercase tracking-[0.2em] text-amber">
        {label} {required && <span className="text-ink/40">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="rounded-xl border bg-[var(--paper-alt)] px-4 py-[14px] font-sans text-[15px] text-ink outline-none transition-colors focus:border-amber focus:bg-paper"
        style={{ borderColor: error ? "#B26A5F" : "rgba(58,74,90,0.12)" }}
      />
      {error && (
        <p className="font-sans text-[11px]" style={{ color: "#B26A5F" }}>{error}</p>
      )}
    </div>
  );
}

function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-amber mb-3">
        {title}
      </h3>
      <div className="font-sans text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}

function Divider() {
  return <hr className="my-6 border-0 border-t" style={{ borderColor: "rgba(58,74,90,0.08)" }} />;
}
