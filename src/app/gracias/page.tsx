"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { CheckCircle2, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

function GraciasContent() {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref") || "";
  const nombre = searchParams.get("nombre") || "";
  const destino = searchParams.get("destino");
  const tipo = searchParams.get("tipo");
  const tipoLabel = tipo ? TIPO_LABELS[tipo] : undefined;

  const waUrl = buildWhatsAppUrl({
    nombre,
    destino: destino || undefined,
    tipoViaje: tipo || undefined,
  });

  return (
    <div className="mx-auto max-w-[600px] px-6 text-center">
      <CheckCircle2 size={64} className="mx-auto mb-6 text-teal" />

      {destino && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-soft px-3.5 py-1.5 text-[13px] font-semibold text-teal-dark">
          <MapPin size={16} /> Tu consulta sobre: {destino}
        </span>
      )}
      {tipoLabel && !destino && (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-teal-soft px-3.5 py-1.5 text-[13px] font-semibold text-teal-dark">
          <Sparkles size={16} /> {tipoLabel}
        </span>
      )}

      <h1 className="mb-4 text-dark">
        {nombre ? `¡Gracias, ${nombre}!` : "¡Gracias!"}
      </h1>

      <p className="mb-10 text-lg text-medium">
        {ref
          ? `Recibimos tu consulta ${ref}. Te respondemos en menos de 24 horas hábiles.`
          : "Recibimos tu consulta. Te respondemos en menos de 24 horas hábiles."}
      </p>

      <div className="mb-10 rounded-md border border-separator bg-white p-8 shadow-card">
        <p className="mb-4 font-medium text-dark">
          ¿Necesitás respuesta urgente?
        </p>
        <a
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-wa px-7 py-3.5 text-lg font-semibold text-white transition-all hover:brightness-105"
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
          Continuar por WhatsApp
        </a>
      </div>

      <div className="mb-8 space-y-1 text-sm text-medium">
        <p>
          También podés escribirnos a{" "}
          <a href="mailto:info@newbiztravel.com.ar" className="text-teal-dark hover:underline">
            info@newbiztravel.com.ar
          </a>
        </p>
        <p>Tel/WhatsApp: +54 9 11 4085-3640</p>
      </div>

      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-sm border border-teal px-6 py-3 text-base font-medium text-teal transition-colors hover:bg-teal-soft"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default function GraciasPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[60vh] items-center py-24 max-lg:py-16 max-sm:py-12">
        <Suspense
          fallback={
            <div className="mx-auto text-center text-medium">Cargando...</div>
          }
        >
          <GraciasContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
