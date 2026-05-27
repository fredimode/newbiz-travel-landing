"use client";

import { Heart, Home, Trophy, Users, ArrowRight } from "lucide-react";
import type { TipoViaje } from "@/lib/tipos-viaje";
import { useModal } from "./ModalContext";

const ICON_MAP = {
  heart: Heart,
  home: Home,
  trophy: Trophy,
  users: Users,
} as const;

export default function TipoCard({ tipo }: { tipo: TipoViaje }) {
  const { openModal } = useModal();
  const Icon = ICON_MAP[tipo.icon];

  return (
    <div
      className="relative flex flex-col items-center gap-3 overflow-hidden rounded-md border border-separator p-8 text-center transition-all duration-250 hover:-translate-y-1 hover:border-transparent hover:shadow-card-hover max-sm:p-6"
      style={{
        backgroundImage: `url(${tipo.imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/[0.85]" />
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="mb-1 grid h-20 w-20 place-items-center rounded-full bg-teal-soft text-teal">
          <Icon size={36} />
        </div>
        <h3>{tipo.nombre}</h3>
        <p className="flex-1 text-[15px] text-medium">{tipo.descripcion}</p>
        <button
          className="inline-flex items-center gap-1 py-1.5 text-sm font-semibold text-teal transition-all hover:gap-2 hover:text-teal-dark"
          onClick={() => openModal({ tipoViaje: tipo.id })}
        >
          Quiero saber más <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
