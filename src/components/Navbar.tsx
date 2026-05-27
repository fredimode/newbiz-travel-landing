"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const WA_URL =
  "https://wa.me/5491140853640?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20sobre%20un%20viaje.";

const NAV_LINKS = [
  { label: "Destinos", href: "#destinos" },
  { label: "Tipos de viaje", href: "#tipos" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-separator bg-bg/92 backdrop-blur-[10px]">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-6">
          <a
            href="/"
            className="flex items-center gap-2"
            aria-label="New Biz Travel — Inicio"
          >
            <Image
              src="/logo.png"
              alt=""
              width={40}
              height={40}
              priority
            />
            <Image
              src="/logo-dark.png"
              alt="New Biz Travel"
              width={140}
              height={32}
              priority
              className="hidden object-contain sm:block"
            />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] font-medium text-medium transition-colors hover:text-teal"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              className="hidden items-center gap-2 rounded-sm bg-wa px-4 py-2.5 text-base font-semibold text-white transition-all hover:brightness-105 sm:inline-flex"
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              WhatsApp
            </a>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-dark lg:hidden"
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-60 bg-dark/50 transition-opacity ${
          drawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setDrawerOpen(false)}
      >
        <div
          className={`absolute right-0 top-0 flex h-full w-[min(320px,85%)] flex-col gap-1.5 bg-bg p-6 transition-transform duration-250 ease-out ${
            drawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt=""
                width={36}
                height={36}
              />
              <Image
                src="/logo-dark.png"
                alt="New Biz Travel"
                width={120}
                height={28}
                className="object-contain"
              />
            </span>
            <button
              className="grid h-10 w-10 place-items-center rounded-sm"
              onClick={() => setDrawerOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={22} />
            </button>
          </div>

          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-3 py-3.5 text-[17px] font-medium text-dark hover:bg-teal-soft"
              onClick={() => setDrawerOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-sm bg-wa px-4 py-2.5 text-base font-semibold text-white hover:brightness-105"
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            Hablar por WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
