import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { adminEmailHtml, clientEmailHtml } from "@/lib/email-template";

/**
 * POST /api/contact
 *
 * Recibe el formulario de contacto y envía 2 emails vía Resend:
 *   1. Notificación a administracion@jmgeo.es (con Reply-To del cliente).
 *   2. Confirmación de recepción al cliente.
 *
 * - Valida en servidor (nombre, email, mensaje, consentimiento).
 * - Honeypot anti-spam: si `website` viene relleno, se descarta en silencio.
 * - La API key vive como env var del servidor (RESEND_API_KEY), nunca se
 *   expone al cliente. El dominio jmgeo.es debe estar verificado en Resend.
 */

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
  payload: {
    to: string;
    subject: string;
    html: string;
    reply_to?: string;
  }
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

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let data: Record<string, unknown>;
        try {
          data = await request.json();
        } catch {
          return json({ ok: false, error: "invalid_json" }, 400);
        }

        // Honeypot — un bot rellena este campo oculto. Respondemos 200 sin enviar.
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
        if (!apiKey) {
          return json({ ok: false, error: "not_configured" }, 503);
        }

        const contacto = {
          nombre,
          empresa: String(data.empresa ?? "").trim(),
          email,
          telefono: String(data.telefono ?? "").trim(),
          tipo: String(data.tipo ?? "").trim(),
          mensaje,
          fecha: new Date().toISOString(),
        };

        // 1) Email a administración (obligatorio: el lead debe llegar)
        try {
          const res = await sendEmail(apiKey, {
            to: ADMIN_TO,
            subject: `Nueva consulta web — ${nombre}`,
            html: adminEmailHtml(contacto),
            reply_to: email,
          });
          if (!res.ok) {
            return json({ ok: false, error: "email_failed" }, 502);
          }
        } catch {
          return json({ ok: false, error: "email_unreachable" }, 502);
        }

        // 2) Email de confirmación al cliente (best-effort)
        try {
          await sendEmail(apiKey, {
            to: email,
            subject: "Hemos recibido tu consulta — JM GEO",
            html: clientEmailHtml(contacto),
          });
        } catch {
          // El lead ya llegó a administración; no bloqueamos por el acuse.
        }

        return json({ ok: true }, 200);
      },
    },
  },
});
