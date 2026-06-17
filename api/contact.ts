export const config = { runtime: "edge" };

const FROM = "JM GEO <administracion@jmgeo.es>";
const ADMIN_TO = "administracion@jmgeo.es";

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

async function sendEmail(
  apiKey: string,
  payload: { to: string; subject: string; html: string; reply_to?: string }
) {
  return fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [payload.to],
      subject: payload.subject,
      html: payload.html,
      ...(payload.reply_to ? { reply_to: payload.reply_to } : {}),
    }),
  });
}

// ─── Email templates (inline — email clients require tables + inline styles) ──

const C = {
  navy: "#0A2D52",
  ink: "#2A3644",
  text: "#3A4A5A",
  mid: "#7E8B98",
  paper: "#F8FAFB",
  paperAlt: "#EEF2F5",
  accent: "#6B93B8",
  white: "#FFFFFF",
};
const LOGO_URL = "https://jmgeo.es/logo-jmgeo.png";
const FONT = "Arial, Helvetica, sans-serif";

function esc(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function shell({ preheader, heroTitle, bodyHtml }: { preheader: string; heroTitle: string; bodyHtml: string }) {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;padding:0;background:${C.paperAlt};">
<span style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.paperAlt};"><tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:${C.white};border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(20,40,58,0.08);">
<tr><td align="center" style="background:${C.paper};padding:28px 32px;"><img src="${LOGO_URL}" width="132" alt="JM GEO" style="display:block;border:0;width:132px;height:auto;"></td></tr>
<tr><td style="background:${C.navy};border-left:4px solid ${C.accent};padding:22px 32px;"><div style="font-family:${FONT};color:${C.white};font-size:20px;font-weight:bold;line-height:1.3;">${esc(heroTitle)}</div></td></tr>
<tr><td style="padding:32px;font-family:${FONT};color:${C.text};font-size:15px;line-height:1.65;">${bodyHtml}</td></tr>
<tr><td style="background:${C.paperAlt};padding:22px 32px;font-family:${FONT};color:${C.mid};font-size:12px;line-height:1.7;">
<strong style="color:${C.ink};">JM GEO, S.L.</strong><br>
Maestra Juana Sena, 5 - 5 · 46910 Benetússer (Valencia) · España<br>
+34 640 266 724 · administracion@jmgeo.es<br>
<span style="color:${C.accent};">Midiendo el presente para construir el futuro</span>
</td></tr>
</table></td></tr></table></body></html>`;
}

function fieldRow(label: string, value: string) {
  return `<tr>
<td style="padding:7px 0;vertical-align:top;font-family:${FONT};color:${C.mid};font-size:11px;text-transform:uppercase;letter-spacing:0.08em;width:130px;">${esc(label)}</td>
<td style="padding:7px 0;vertical-align:top;font-family:${FONT};color:${C.ink};font-size:15px;">${esc(value) || "—"}</td>
</tr>`;
}

function adminEmailHtml(d: { nombre: string; empresa: string; email: string; telefono: string; tipo: string; mensaje: string }) {
  const body = `
<p style="margin:0 0 20px;">Has recibido una nueva consulta desde el formulario de <strong>jmgeo.es</strong>:</p>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
${fieldRow("Nombre", d.nombre)}
${fieldRow("Empresa", d.empresa)}
${fieldRow("Email", d.email)}
${fieldRow("Teléfono", d.telefono)}
${fieldRow("Tipo de proyecto", d.tipo)}
</table>
<div style="margin:24px 0 8px;font-family:${FONT};color:${C.mid};font-size:11px;text-transform:uppercase;letter-spacing:0.08em;">Mensaje</div>
<div style="padding:16px 18px;background:${C.paperAlt};border-radius:12px;color:${C.ink};font-size:15px;line-height:1.6;">${esc(d.mensaje).replace(/\n/g, "<br>")}</div>
<p style="margin:24px 0 0;color:${C.mid};font-size:12px;">Puedes responder directamente a este correo para contestar a ${esc(d.nombre)}.</p>`;
  return shell({ preheader: `Nueva consulta de ${d.nombre}`, heroTitle: "Nueva consulta recibida", bodyHtml: body });
}

function clientEmailHtml(d: { nombre: string }) {
  const body = `
<p style="margin:0 0 18px;">Hola ${esc(d.nombre)},</p>
<p style="margin:0 0 18px;">Gracias por ponerte en contacto con <strong>JM GEO</strong>. Hemos recibido tu consulta y ya la estamos revisando.</p>
<p style="margin:0 0 18px;">Te responderemos en breve, una vez estudiada tu propuesta, para asesorarte sobre el mejor enfoque técnico para tu proyecto.</p>
<p style="margin:0;">Un saludo,<br><strong style="color:${C.ink};">Equipo JM GEO</strong></p>`;
  return shell({ preheader: "Hemos recibido tu consulta y te responderemos en breve.", heroTitle: "Hemos recibido tu consulta", bodyHtml: body });
}

// ─── Handler ──────────────────────────────────────────────────────────────────

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") return json({ ok: false, error: "method_not_allowed" }, 405);

  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  // Honeypot
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return json({ ok: true }, 200);
  }

  const nombre = String(data.nombre ?? "").trim();
  const email = String(data.email ?? "").trim();
  const mensaje = String(data.mensaje ?? "").trim();
  const consentimiento = Boolean(data.consentimiento);
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!nombre || !emailOk || !mensaje || !consentimiento) {
    return json({ ok: false, error: "validation" }, 422);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return json({ ok: false, error: "not_configured" }, 503);

  const contacto = {
    nombre,
    empresa: String(data.empresa ?? "").trim(),
    email,
    telefono: String(data.telefono ?? "").trim(),
    tipo: String(data.tipo ?? "").trim(),
    mensaje,
  };

  try {
    const res = await sendEmail(apiKey, {
      to: ADMIN_TO,
      subject: `[TEST] Nueva consulta web — ${nombre}`,
      html: adminEmailHtml(contacto),
      reply_to: email,
    });
    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      return json({ ok: false, error: "email_failed", detail: body }, 502);
    }
  } catch {
    return json({ ok: false, error: "email_unreachable" }, 502);
  }

  try {
    await sendEmail(apiKey, {
      to: email,
      subject: "[TEST] Hemos recibido tu consulta — JM GEO",
      html: clientEmailHtml(contacto),
    });
  } catch {
    // best-effort
  }

  return json({ ok: true }, 200);
}
