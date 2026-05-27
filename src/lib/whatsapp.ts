import { WA_NUMBER } from "./constants";

type WhatsAppParams = {
  nombre?: string;
  destino?: string;
  tipoViaje?: string;
};

const TIPO_LABELS: Record<string, string> = {
  luna_miel: "Luna de miel",
  familia: "Vacaciones en familia",
  evento: "Mundial 2026",
  grupo: "Viajes grupales",
};

export function buildWhatsAppUrl(params?: WhatsAppParams): string {
  if (!params?.nombre && !params?.destino && !params?.tipoViaje) {
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hola! Quiero info sobre viajes.")}`;
  }

  const parts: string[] = ["Hola! Quiero hacer una consulta"];

  if (params.destino) {
    parts[0] += ` sobre ${params.destino}`;
  } else if (params.tipoViaje && TIPO_LABELS[params.tipoViaje]) {
    parts[0] += ` sobre ${TIPO_LABELS[params.tipoViaje]}`;
  }

  if (params.nombre) {
    parts.push(`Soy ${params.nombre}`);
  }

  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(parts.join(". ") + ".")}`;
}
