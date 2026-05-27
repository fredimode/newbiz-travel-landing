import { z } from "zod";
import { sendEmail } from "@/lib/send-email";
import { escapeHtml } from "@/lib/escape-html";

const consultaSchema = z.object({
  nombre: z.string().min(2).max(100),
  email: z.string().email().max(200),
  telefono: z.string().min(8).max(30),
  destino: z.string().max(100).optional(),
  tipoViaje: z
    .enum(["luna_miel", "familia", "evento", "grupo"])
    .optional(),
  cantidad: z.coerce.number().int().min(1).max(30).optional(),
  fechaInicio: z.string().optional(),
  fechaFin: z.string().optional(),
  presupuesto: z
    .enum(["hasta_1000", "1000_2500", "2500_5000", "mas_5000"])
    .optional(),
  mensaje: z.string().max(2000).optional(),
  source: z.enum([
    "hero",
    "destino_card",
    "tipo_viaje_card",
    "contacto_final",
  ]),
  acepta_politicas: z.literal(true),
});

const TIPO_LABELS: Record<string, string> = {
  luna_miel: "Luna de miel",
  familia: "Vacaciones en familia",
  evento: "Mundial 2026",
  grupo: "Viajes grupales",
};

const PRESUPUESTO_LABELS: Record<string, string> = {
  hasta_1000: "Hasta USD 1.000",
  "1000_2500": "USD 1.000 - 2.500",
  "2500_5000": "USD 2.500 - 5.000",
  mas_5000: "Más de USD 5.000",
};

const SOURCE_LABELS: Record<string, string> = {
  hero: "Botón principal del hero",
  destino_card: "Card de destino",
  tipo_viaje_card: "Card de tipo de viaje",
  contacto_final: "Form de contacto final",
};

function generateRef(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let suffix = "";
  for (let i = 0; i < 6; i++) {
    suffix += chars[Math.floor(Math.random() * chars.length)];
  }
  return `CON-${suffix}`;
}

function formatDate(iso: string): string {
  try {
    const [y, m, d] = iso.split("-");
    return `${d}/${m}/${y}`;
  } catch {
    return iso;
  }
}

function formatFechas(inicio?: string, fin?: string): string {
  if (!inicio && !fin) return "";
  if (inicio && fin)
    return `del ${formatDate(inicio)} al ${formatDate(fin)}`;
  if (inicio) return `desde ${formatDate(inicio)}`;
  return "";
}

type ConsultaData = z.infer<typeof consultaSchema>;

function buildHtmlEmail(data: ConsultaData, ref: string): string {
  const telefonoLimpio = data.telefono.replace(/[^0-9]/g, "");

  const tipoLabel = data.tipoViaje
    ? TIPO_LABELS[data.tipoViaje]
    : undefined;
  const presupuestoLabel = data.presupuesto
    ? PRESUPUESTO_LABELS[data.presupuesto]
    : undefined;
  const fechas = formatFechas(data.fechaInicio, data.fechaFin);

  const rowDestino = data.destino
    ? `<tr>
        <td style="padding:8px 0;color:#57534e;width:35%;font-size:14px"><strong>Destino:</strong></td>
        <td style="padding:8px 0;color:#1c1917;font-size:14px">${escapeHtml(data.destino)}</td>
      </tr>`
    : "";

  const rowTipo = tipoLabel
    ? `<tr>
        <td style="padding:8px 0;color:#57534e;font-size:14px"><strong>Tipo de viaje:</strong></td>
        <td style="padding:8px 0;color:#1c1917;font-size:14px">${escapeHtml(tipoLabel)}</td>
      </tr>`
    : "";

  const rowCantidad = data.cantidad
    ? `<tr>
        <td style="padding:8px 0;color:#57534e;font-size:14px"><strong>Personas:</strong></td>
        <td style="padding:8px 0;color:#1c1917;font-size:14px">${data.cantidad}</td>
      </tr>`
    : "";

  const rowFechas = fechas
    ? `<tr>
        <td style="padding:8px 0;color:#57534e;font-size:14px"><strong>Fechas:</strong></td>
        <td style="padding:8px 0;color:#1c1917;font-size:14px">${escapeHtml(fechas)}</td>
      </tr>`
    : "";

  const rowPresupuesto = presupuestoLabel
    ? `<tr>
        <td style="padding:8px 0;color:#57534e;font-size:14px"><strong>Presupuesto:</strong></td>
        <td style="padding:8px 0;color:#1c1917;font-size:14px">${escapeHtml(presupuestoLabel)}</td>
      </tr>`
    : "";

  const sectionMensaje = data.mensaje
    ? `<h2 style="color:#0d9488;font-size:16px;margin-top:24px;border-bottom:1px solid #e7e5e4;padding-bottom:8px">Comentarios del cliente</h2>
       <p style="color:#1c1917;line-height:1.6;font-size:14px;margin:12px 0 0;padding:12px;background-color:#fafaf9;border-left:3px solid #0d9488;border-radius:4px">${escapeHtml(data.mensaje).replace(/\n/g, "<br>")}</p>`
    : "";

  return `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background-color:#ffffff">
  <div style="background-color:#0d9488;padding:30px 20px;text-align:center">
    <h1 style="color:#ffffff;margin:0;font-size:22px">Nueva consulta desde la web</h1>
    <p style="color:#d1fae5;margin:8px 0 0;font-size:13px">${ref}</p>
  </div>
  <div style="padding:25px 20px;background-color:#f5f5f4">
    <div style="background-color:#ffffff;padding:24px;border-radius:8px">
      <h2 style="color:#0d9488;margin-top:0;font-size:16px;border-bottom:1px solid #e7e5e4;padding-bottom:8px">Datos del contacto</h2>
      <table style="width:100%;border-collapse:collapse">
        <tr>
          <td style="padding:8px 0;color:#57534e;width:35%;font-size:14px"><strong>Nombre:</strong></td>
          <td style="padding:8px 0;color:#1c1917;font-size:14px">${escapeHtml(data.nombre)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#57534e;font-size:14px"><strong>Email:</strong></td>
          <td style="padding:8px 0;font-size:14px"><a href="mailto:${escapeHtml(data.email)}" style="color:#0d9488;text-decoration:none">${escapeHtml(data.email)}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#57534e;font-size:14px"><strong>Teléfono:</strong></td>
          <td style="padding:8px 0;font-size:14px"><a href="https://wa.me/${telefonoLimpio}" style="color:#0d9488;text-decoration:none">${escapeHtml(data.telefono)}</a></td>
        </tr>
      </table>
      <h2 style="color:#0d9488;font-size:16px;margin-top:24px;border-bottom:1px solid #e7e5e4;padding-bottom:8px">Detalles del viaje</h2>
      <table style="width:100%;border-collapse:collapse">
        ${rowDestino}
        ${rowTipo}
        ${rowCantidad}
        ${rowFechas}
        ${rowPresupuesto}
      </table>
      ${sectionMensaje}
    </div>
    <div style="text-align:center;color:#78716c;font-size:12px;margin-top:16px">
      <p style="margin:4px 0">Para responder al cliente, hacé <strong>Reply</strong> directamente a este email.</p>
      <p style="margin:4px 0">Origen: ${escapeHtml(SOURCE_LABELS[data.source])} · ID: ${ref}</p>
    </div>
  </div>
</div>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = consultaSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { error: "Datos inválidos", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const ref = generateRef();
    const subject = `[Nueva consulta ${ref}] ${data.nombre}`;
    const html = buildHtmlEmail(data, ref);

    await sendEmail({
      to: process.env.EMAIL_TO!,
      subject,
      html,
      replyTo: data.email,
      fromName: "Consultas New Biz Travel",
    });

    return Response.json({ success: true, ref });
  } catch (err) {
    console.error("[/api/consultas] Error:", err);
    return Response.json(
      {
        error:
          "No pudimos procesar tu consulta. Por favor escribinos por WhatsApp.",
      },
      { status: 500 }
    );
  }
}
