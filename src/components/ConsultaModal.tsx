"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { X, Send, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import { useModal } from "./ModalContext";
import { buildMailtoUrl } from "@/lib/email";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const TIPO_LABELS: Record<string, string> = {
  luna_miel: "Luna de miel",
  familia: "Vacaciones en familia",
  evento: "Mundial 2026",
  grupo: "Viajes grupales",
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

export default function ConsultaModal() {
  const { isOpen, preset, closeModal } = useModal();
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) closeModal();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const mailtoUrl = buildMailtoUrl({
      nombre: fd.get("nombre") as string,
      email: fd.get("email") as string,
      telefono: fd.get("telefono") as string,
      destino: (fd.get("destino_interes") as string) || preset?.destino,
      tipoViaje: preset?.tipoViaje,
      cantidad: fd.get("cantidad_personas") as string,
      fechaInicio: fd.get("fecha_aprox_inicio") as string,
      fechaFin: fd.get("fecha_aprox_fin") as string,
      presupuesto: fd.get("presupuesto_aprox") as string,
      mensaje: fd.get("mensaje") as string,
    });

    window.location.href = mailtoUrl;

    const params = new URLSearchParams();
    params.set("nombre", fd.get("nombre") as string);
    if (preset?.destino) params.set("destino", preset.destino);
    if (preset?.tipoViaje) params.set("tipo", preset.tipoViaje);

    setTimeout(() => {
      closeModal();
      router.push(`/gracias?${params.toString()}`);
    }, 100);
  }

  function handleWhatsApp() {
    const form = document.getElementById("modal-form") as HTMLFormElement;
    const fd = new FormData(form);
    const url = buildWhatsAppUrl({
      nombre: fd.get("nombre") as string,
      destino: (fd.get("destino_interes") as string) || preset?.destino,
      tipoViaje: preset?.tipoViaje,
    });
    window.open(url, "_blank", "noopener");
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-dark/60 p-6 backdrop-blur-[4px]"
      aria-hidden={!isOpen}
      onClick={(e) => {
        if (e.target === overlayRef.current) closeModal();
      }}
    >
      <div
        className="relative my-6 w-full max-w-[680px] animate-[modalIn_0.22s_ease] rounded-md bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.3)] max-sm:p-7"
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        <button
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full text-medium transition-all hover:bg-bg hover:text-dark"
          onClick={closeModal}
          aria-label="Cerrar modal"
        >
          <X size={22} />
        </button>

        {preset?.destino && (
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-soft px-3.5 py-1.5 text-[13px] font-semibold text-teal-dark">
            <MapPin size={16} /> Consulta sobre: {preset.destino}
          </span>
        )}
        {preset?.tipoViaje && TIPO_LABELS[preset.tipoViaje] && (
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-soft px-3.5 py-1.5 text-[13px] font-semibold text-teal-dark">
            <Sparkles size={16} /> Tipo de viaje:{" "}
            {TIPO_LABELS[preset.tipoViaje]}
          </span>
        )}

        <h2 id="modal-title" className="mb-2 text-dark">
          Contanos sobre tu viaje
        </h2>
        <p className="mb-6 text-medium">
          Completá los datos y te respondemos en menos de 24 horas.
        </p>

        <form id="modal-form" onSubmit={handleSubmit} noValidate>
          <div className="mb-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="m-nombre" className="text-sm font-medium text-dark">
                Nombre completo
              </label>
              <input
                className="rounded-md border border-separator bg-white px-4 py-3 text-dark placeholder:text-light transition-all focus:border-transparent focus:bg-white focus:outline-2 focus:outline-offset-2 focus:outline-teal"
                type="text"
                id="m-nombre"
                name="nombre"
                placeholder="Juan Pérez"
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="m-email" className="text-sm font-medium text-dark">
                Email
              </label>
              <input
                className="rounded-md border border-separator bg-white px-4 py-3 text-dark placeholder:text-light transition-all focus:border-transparent focus:bg-white focus:outline-2 focus:outline-offset-2 focus:outline-teal"
                type="email"
                id="m-email"
                name="email"
                placeholder="vos@email.com"
                required
              />
            </div>
          </div>

          <div className="mb-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="m-telefono" className="text-sm font-medium text-dark">
                Teléfono
              </label>
              <input
                className="rounded-md border border-separator bg-white px-4 py-3 text-dark placeholder:text-light transition-all focus:border-transparent focus:bg-white focus:outline-2 focus:outline-offset-2 focus:outline-teal"
                type="tel"
                id="m-telefono"
                name="telefono"
                placeholder="+54 11 ..."
                required
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="m-destino" className="text-sm font-medium text-dark">
                Destino de interés
              </label>
              <input
                className="rounded-md border border-separator bg-white px-4 py-3 text-dark placeholder:text-light transition-all focus:border-transparent focus:bg-white focus:outline-2 focus:outline-offset-2 focus:outline-teal"
                type="text"
                id="m-destino"
                name="destino_interes"
                placeholder="Cancún, Europa, etc."
                defaultValue={preset?.destino || ""}
              />
            </div>
          </div>

          <div className="mb-3.5 grid grid-cols-1 gap-3.5 sm:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="m-fecha-desde" className="text-sm font-medium text-dark">
                Desde
              </label>
              <input
                className="rounded-md border border-separator bg-white px-4 py-3 text-dark placeholder:text-light transition-all focus:border-transparent focus:bg-white focus:outline-2 focus:outline-offset-2 focus:outline-teal"
                type="date"
                id="m-fecha-desde"
                name="fecha_aprox_inicio"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="m-fecha-hasta" className="text-sm font-medium text-dark">
                Hasta
              </label>
              <input
                className="rounded-md border border-separator bg-white px-4 py-3 text-dark placeholder:text-light transition-all focus:border-transparent focus:bg-white focus:outline-2 focus:outline-offset-2 focus:outline-teal"
                type="date"
                id="m-fecha-hasta"
                name="fecha_aprox_fin"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="m-personas" className="text-sm font-medium text-dark">
                Personas
              </label>
              <input
                className="rounded-md border border-separator bg-white px-4 py-3 text-dark placeholder:text-light transition-all focus:border-transparent focus:bg-white focus:outline-2 focus:outline-offset-2 focus:outline-teal"
                type="number"
                id="m-personas"
                name="cantidad_personas"
                min="1"
                placeholder="2"
              />
            </div>
          </div>

          <div className="mb-3.5 flex flex-col gap-1.5">
            <label htmlFor="m-presupuesto" className="text-sm font-medium text-dark">
              Presupuesto aproximado por persona (USD)
            </label>
            <select
              className="rounded-md border border-separator bg-white px-4 py-3 text-dark transition-all focus:border-transparent focus:bg-white focus:outline-2 focus:outline-offset-2 focus:outline-teal"
              id="m-presupuesto"
              name="presupuesto_aprox"
              defaultValue=""
            >
              <option value="">Seleccionar...</option>
              <option value="hasta_1000">Hasta USD 1.000</option>
              <option value="1000_2500">USD 1.000 - 2.500</option>
              <option value="2500_5000">USD 2.500 - 5.000</option>
              <option value="mas_5000">Más de USD 5.000</option>
            </select>
          </div>

          <div className="mb-3.5 flex flex-col gap-1.5">
            <label htmlFor="m-mensaje" className="text-sm font-medium text-dark">
              Mensaje (opcional)
            </label>
            <textarea
              className="min-h-[100px] resize-y rounded-md border border-separator bg-white px-4 py-3 text-dark placeholder:text-light transition-all focus:border-transparent focus:bg-white focus:outline-2 focus:outline-offset-2 focus:outline-teal"
              id="m-mensaje"
              name="mensaje"
              placeholder="Contanos cualquier detalle adicional..."
            />
          </div>

          <div className="mb-5 flex items-start gap-2">
            <input
              type="checkbox"
              id="m-privacy"
              name="acepta_privacidad"
              required
              className="mt-1 h-4 w-4 shrink-0 accent-teal"
            />
            <label htmlFor="m-privacy" className="text-sm text-medium">
              Acepto la{" "}
              <Link href="/privacidad" target="_blank" className="text-teal-dark hover:underline">
                Política de Privacidad
              </Link>{" "}
              y los{" "}
              <Link href="/terminos" target="_blank" className="text-teal-dark hover:underline">
                Términos y Condiciones
              </Link>
            </label>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-amber px-6 py-3 text-base font-bold text-dark shadow-amber transition-all hover:brightness-105"
            >
              <Send size={18} />
              Enviar consulta
            </button>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-wa px-6 py-3 text-base font-semibold text-white transition-all hover:brightness-105"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Continuar por WhatsApp
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-light">
            Al enviar se abrirá tu cliente de email con la consulta pre-armada
          </p>
        </form>
      </div>
    </div>
  );
}
