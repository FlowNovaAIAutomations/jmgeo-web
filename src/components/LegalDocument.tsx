import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";

/**
 * Maquetación compartida para las páginas legales (aviso legal, privacidad,
 * cookies). Mantiene la estética minimalista del sitio: mucho aire, tipografía
 * sobria y acentos azules suaves. Los textos se componen con los primitivos
 * exportados (LegalSection, LegalP, LegalList…) para que las tres páginas sean
 * visualmente idénticas.
 */
export function LegalDocument({
  eyebrow = "LEGAL",
  title,
  updated,
  children,
}: {
  eyebrow?: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <main className="bg-paper">
      <section className="mx-auto max-w-[800px]" style={{ padding: "180px 5vw 160px" }}>
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
        <p className="font-sans text-mid" style={{ fontSize: "13px", marginTop: "20px" }}>
          {t("legal.updated")}: {updated}
        </p>

        <div style={{ marginTop: "56px" }}>{children}</div>

        <div style={{ marginTop: "72px" }}>
          <a
            href="/"
            className="inline-flex items-center gap-2 font-sans text-sm text-ink hover:text-amber transition-colors group"
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            {t("legal.back")}
          </a>
        </div>
      </section>
    </main>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section style={{ marginTop: "48px" }}>
      <h2
        className="font-display text-ink"
        style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)", lineHeight: 1.2, letterSpacing: "-0.015em" }}
      >
        {heading}
      </h2>
      <div style={{ marginTop: "20px" }}>{children}</div>
    </section>
  );
}

export function LegalP({ children }: { children: ReactNode }) {
  return (
    <p
      className="font-sans text-mid"
      style={{ fontSize: "16px", lineHeight: 1.7, marginTop: "16px" }}
    >
      {children}
    </p>
  );
}

export function LegalList({ children }: { children: ReactNode }) {
  return (
    <ul className="font-sans text-mid" style={{ fontSize: "16px", lineHeight: 1.7, marginTop: "16px" }}>
      {children}
    </ul>
  );
}

export function LegalLi({ children }: { children: ReactNode }) {
  return (
    <li style={{ display: "flex", gap: "12px", marginTop: "10px" }}>
      <span className="text-amber" aria-hidden="true" style={{ marginTop: "1px" }}>
        ·
      </span>
      <span>{children}</span>
    </li>
  );
}

export function LegalLink({ href, children }: { href: string; children: ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="text-ink underline decoration-amber underline-offset-4 hover:text-amber transition-colors"
    >
      {children}
    </a>
  );
}

/** Tabla sobria para el detalle de cookies. */
export function LegalTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div style={{ marginTop: "24px", overflowX: "auto" }}>
      <table className="font-sans" style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px" }}>
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                className="text-ink"
                style={{
                  textAlign: "left",
                  padding: "10px 14px 10px 0",
                  borderBottom: "1px solid var(--border)",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="text-mid"
                  style={{
                    padding: "12px 14px 12px 0",
                    borderBottom: "1px solid var(--border)",
                    verticalAlign: "top",
                    lineHeight: 1.5,
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
