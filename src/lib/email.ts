import { CONTACT_EMAIL } from "./constants";

export type ConsultaData = {
  nombre: string;
  email: string;
  telefono: string;
  destino?: string;
  tipoViaje?: string;
  cantidad?: string;
  fechaInicio?: string;
  fechaFin?: string;
  presupuesto?: string;
  mensaje?: string;
};

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

export function buildMailtoUrl(data: ConsultaData): string {
  const subject = `Consulta de viaje - ${data.nombre}`;

  const lines: string[] = [];
  lines.push("Hola,");
  lines.push("");
  lines.push(`Mi nombre es ${data.nombre}.`);

  if (data.destino) {
    lines.push(`Destino consultado: ${data.destino}`);
  }
  if (data.tipoViaje && TIPO_LABELS[data.tipoViaje]) {
    lines.push(`Tipo de viaje: ${TIPO_LABELS[data.tipoViaje]}`);
  }

  lines.push("");
  lines.push("Datos de contacto:");
  lines.push(`- Email: ${data.email}`);
  lines.push(`- Teléfono: ${data.telefono}`);

  if (data.cantidad || data.fechaInicio || data.presupuesto) {
    lines.push("");
  }

  if (data.cantidad) {
    lines.push(`Cantidad de personas: ${data.cantidad}`);
  }
  if (data.fechaInicio && data.fechaFin) {
    lines.push(`Fechas tentativas: del ${data.fechaInicio} al ${data.fechaFin}`);
  } else if (data.fechaInicio) {
    lines.push(`Fecha tentativa de salida: ${data.fechaInicio}`);
  }
  if (data.presupuesto && PRESUPUESTO_LABELS[data.presupuesto]) {
    lines.push(
      `Presupuesto aproximado: ${PRESUPUESTO_LABELS[data.presupuesto]}`
    );
  }

  if (data.mensaje) {
    lines.push("");
    lines.push("Comentarios:");
    lines.push(data.mensaje);
  }

  lines.push("");
  lines.push("Saludos.");

  const body = lines.join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
