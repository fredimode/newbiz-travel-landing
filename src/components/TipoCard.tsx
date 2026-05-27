"use client";

import { Heart, Home, Trophy, Users, ArrowRight } from "lucide-react";
import type { TipoViaje } from "@/lib/tipos-viaje";

const ICON_MAP = {
  heart: Heart,
  home: Home,
  trophy: Trophy,
  users: Users,
} as const;

export default function TipoCard({ tipo }: { tipo: TipoViaje }) {
  const Icon = ICON_MAP[tipo.icon];

  return (
    <div className="flex flex-col items-center gap-3 rounded-md border border-separator bg-white p-8 text-center transition-all duration-250 hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover max-sm:p-6">
      <div className="mb-1 grid h-20 w-20 place-items-center rounded-full bg-teal-soft text-teal">
        <Icon size={36} />
      </div>
      <h3>{tipo.nombre}</h3>
      <p className="flex-1 text-[15px] text-medium">{tipo.descripcion}</p>
      <button
        className="inline-flex items-center gap-1 py-1.5 text-sm font-semibold text-teal transition-all hover:gap-2 hover:text-teal-dark"
        onClick={() => {
          /* TODO: open ConsultaModal with tipo */
        }}
      >
        Quiero saber más <ArrowRight size={14} />
      </button>
    </div>
  );
}
