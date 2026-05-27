"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Destino } from "@/lib/destinos";

const BADGE_STYLES = {
  mas_vendido: "bg-teal text-white",
  promo: "bg-amber text-dark",
} as const;

const BADGE_LABELS = {
  mas_vendido: "Más vendido",
  promo: "Promo",
} as const;

export default function DestinoCard({ destino }: { destino: Destino }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-separator bg-white shadow-card transition-all duration-250 hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden bg-separator">
        <Image
          src={destino.imageUrl}
          alt={destino.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          loading="lazy"
        />
        {destino.badge && (
          <span
            className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold tracking-[0.02em] ${BADGE_STYLES[destino.badge]}`}
          >
            {BADGE_LABELS[destino.badge]}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1.5 px-[22px] pb-[22px] pt-5">
        <h3 className="mb-0.5 text-dark">{destino.nombre}</h3>
        <p className="text-[15px] text-medium">{destino.tagline}</p>

        <div className="mt-auto pt-3.5 text-sm text-medium">
          Desde
          <strong className="mt-0.5 block text-xl font-bold text-teal">
            USD {destino.precioDesde}
          </strong>
          <span className="text-[13px] text-light">por persona</span>
        </div>

        <button
          className="mt-3.5 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-teal px-4 py-2.5 text-base font-semibold text-white transition-colors hover:bg-teal-dark"
          onClick={() => {
            /* TODO: open ConsultaModal with destino */
          }}
        >
          Consultar disponibilidad
          <ArrowRight size={18} />
        </button>
      </div>
    </article>
  );
}
