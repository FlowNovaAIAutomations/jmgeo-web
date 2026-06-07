/**
 * Plantillas de email para el formulario de contacto.
 *
 * IMPORTANTE: los clientes de correo (Gmail, Outlook…) no soportan flexbox,
 * grid, fuentes web ni SVG. Todo va maquetado con TABLAS y estilos INLINE,
 * con fuentes seguras (Arial/Helvetica). La identidad de la web se replica
 * con la paleta de marca.
 */

const C = {
  navy: "#0A2D52", // franja de marca
  ink: "#2A3644", // texto principal
  text: "#3A4A5A", // texto cuerpo
  mid: "#7E8B98", // texto secundario
  paper: "#F8FAFB", // fondo claro
  paperAlt: "#EEF2F5", // fondo alterno
  accent: "#6B93B8", // acento azul
  white: "#FFFFFF",
};

// El logo se referencia por URL absoluta (los emails no admiten rutas relativas).
const LOGO_URL = "https://jmgeo.es/logo-jmgeo.png";
const FONT = "Arial, Helvetica, sans-serif";

export function esc(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function shell({
  preheader,
  heroTitle,
  bodyHtml,
}: {
  preheader: string;
  heroTitle: string;
  bodyHtml: string;
}): string {
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
</head>
<body style="margin:0;padding:0;background:${C.paperAlt};">
<span style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(preheader)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.paperAlt};">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:600px;background:${C.white};border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(20,40,58,0.08);">
<tr><td align="center" style="background:${C.paper};padding:28px 32px;">
<img src="${LOGO_URL}" width="132" alt="JM GEO" style="display:block;border:0;outline:none;width:132px;height:auto;">
</td></tr>
<tr><td style="background:${C.navy};border-left:4px solid ${C.accent};padding:22px 32px;">
<div style="font-family:${FONT};color:${C.white};font-size:20px;font-weight:bold;line-height:1.3;">${esc(heroTitle)}</div>
</td></tr>
<tr><td style="padding:32px;font-family:${FONT};color:${C.text};font-size:15px;line-height:1.65;">
${bodyHtml}
</td></tr>
<tr><td style="background:${C.paperAlt};padding:22px 32px;font-family:${FONT};color:${C.mid};font-size:12px;line-height:1.7;">
<strong style="color:${C.ink};">JM GEO, S.L.</strong><br>
Maestra Juana Sena, 5 - 5 · 46910 Benetússer (Valencia) · España<br>
+34 640 266 724 · administracion@jmgeo.es<br>
<span style="color:${C.accent};">Midiendo el presente para construir el futuro</span>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

interface ContactData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  tipo: string;
  mensaje: string;
  fecha: string;
}

function fieldRow(label: string, value: string): string {
  return `<tr>
<td style="padding:7px 0;vertical-align:top;font-family:${FONT};color:${C.mid};font-size:11px;text-transform:uppercase;letter-spacing:0.08em;width:130px;">${esc(label)}</td>
<td style="padding:7px 0;vertical-align:top;font-family:${FONT};color:${C.ink};font-size:15px;">${esc(value) || "—"}</td>
</tr>`;
}

/** Email a administración con todos los datos de la consulta. */
export function adminEmailHtml(d: ContactData): string {
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
  return shell({
    preheader: `Nueva consulta de ${d.nombre}`,
    heroTitle: "Nueva consulta recibida",
    bodyHtml: body,
  });
}

/** Email de confirmación de recepción al cliente. */
export function clientEmailHtml(d: ContactData): string {
  const body = `
<p style="margin:0 0 18px;">Hola ${esc(d.nombre)},</p>
<p style="margin:0 0 18px;">Gracias por ponerte en contacto con <strong>JM GEO</strong>. Hemos recibido tu consulta y ya la estamos revisando.</p>
<p style="margin:0 0 18px;">Te responderemos en breve, una vez estudiada tu propuesta, para asesorarte sobre el mejor enfoque técnico para tu proyecto.</p>
<p style="margin:0;">Un saludo,<br><strong style="color:${C.ink};">Equipo JM GEO</strong></p>`;
  return shell({
    preheader: "Hemos recibido tu consulta y te responderemos en breve.",
    heroTitle: "Hemos recibido tu consulta",
    bodyHtml: body,
  });
}
