"use client";

import Image from "next/image";
import { Send, Users, Award, Headphones } from "lucide-react";
import { useModal } from "./ModalContext";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

export default function Hero() {
  const { openModal } = useModal();

  return (
    <header className="relative flex min-h-[80vh] flex-col justify-center overflow-hidden text-white max-sm:min-h-[auto]">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80&auto=format&fit=crop"
        alt="Playa caribeña al atardecer"
        fill
        priority
        quality={80}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(165deg, rgba(13,148,136,0.55) 0%, rgba(28,25,23,0.65) 60%, rgba(28,25,23,0.7) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-[1] mx-auto max-w-[880px] px-6 pb-20 pt-[120px] text-center max-sm:px-5 max-sm:pb-[60px] max-sm:pt-20">
        <span className="mb-7 inline-block rounded-full border border-white/30 bg-white/[0.08] px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-white">
          Tu viaje completo, al mejor precio
        </span>

        <h1 className="mb-5 text-balance text-white">
          Diseñamos tu viaje a medida
        </h1>

        <p className="mx-auto mb-10 max-w-[640px] text-pretty text-xl leading-relaxed text-white/[0.92] max-sm:text-[17px]">
          Asesoramiento personalizado, mejores precios y acompañamiento durante
          todo tu viaje.
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-sm:mx-auto max-sm:max-w-[320px] max-sm:flex-col">
          <button
            className="inline-flex items-center justify-center gap-2 rounded-sm bg-amber px-7 py-3.5 text-lg font-bold text-dark shadow-amber transition-all hover:brightness-105"
            onClick={() => openModal()}
          >
            <Send size={18} />
            Quiero viajar
          </button>

          <a
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-white/60 bg-white/10 px-4 py-3.5 text-base font-semibold text-white backdrop-blur-[4px] transition-all hover:border-white hover:bg-white/[0.18] max-sm:w-full"
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Hablar por WhatsApp
          </a>
        </div>
      </div>

      {/* Trust bar — visually part of the hero (overlays background image) */}
      <div className="relative z-[1] mt-auto border-t border-white/15 bg-teal/[0.18] backdrop-blur-[10px]">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-around gap-6 px-6 py-[22px] max-sm:flex-col max-sm:items-start max-sm:gap-4">
          <div className="flex items-center gap-3 text-[15px] text-white">
            <Users size={22} className="text-[#fde68a]" />
            <span><strong className="font-semibold">+5.000</strong> viajeros felices</span>
          </div>
          <div className="flex items-center gap-3 text-[15px] text-white">
            <Award size={22} className="text-[#fde68a]" />
            <span><strong className="font-semibold">15 años</strong> de experiencia</span>
          </div>
          <div className="flex items-center gap-3 text-[15px] text-white">
            <Headphones size={22} className="text-[#fde68a]" />
            <span><strong className="font-semibold">Atención 24/7</strong> durante tu viaje</span>
          </div>
        </div>
      </div>
    </header>
  );
}
