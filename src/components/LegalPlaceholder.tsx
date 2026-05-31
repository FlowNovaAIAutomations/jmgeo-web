export function LegalPlaceholder({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <main className="bg-paper">
      <section
        className="mx-auto max-w-[800px]"
        style={{ padding: "180px 5vw 160px" }}
      >
        <p
          className="font-mono uppercase text-amber"
          style={{ fontSize: "11px", letterSpacing: "0.25em" }}
        >
          {eyebrow}
        </p>
        <h1
          className="font-display text-ink"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.025em",
            marginTop: "24px",
          }}
        >
          {title}
        </h1>
        <p
          className="font-sans text-mid"
          style={{ fontSize: "18px", lineHeight: 1.55, marginTop: "40px" }}
        >
          Contenido legal en preparación. Para cualquier consulta, contactar con{" "}
          <a
            href="mailto:administracion@jmgeo.es"
            className="text-ink underline decoration-amber underline-offset-4 hover:text-amber transition-colors"
          >
            administracion@jmgeo.es
          </a>
          .
        </p>
        <div style={{ marginTop: "48px" }}>
          <a
            href="/"
            className="inline-flex items-center gap-2 font-sans text-sm text-ink hover:text-amber transition-colors group"
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">←</span>
            Volver al inicio
          </a>
        </div>
      </section>
    </main>
  );
}
