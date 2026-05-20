export function LegalPlaceholder({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <main className="bg-paper">
      <section className="mx-auto max-w-[800px] px-6 md:px-10" style={{ padding: "180px 24px 160px" }}>
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
            letterSpacing: "-0.02em",
            marginTop: "24px",
          }}
        >
          {title}
        </h1>
        <p
          className="font-sans text-mid"
          style={{ fontSize: "18px", lineHeight: 1.7, marginTop: "40px" }}
        >
          Contenido legal en preparación.
        </p>
      </section>
    </main>
  );
}
