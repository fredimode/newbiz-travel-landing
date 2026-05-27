"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark pt-16 pb-6 text-white/65">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.2fr_1.3fr] lg:gap-12">
          {/* Brand */}
          <div>
            <span className="mb-3.5 flex items-center gap-2.5 font-heading text-[22px] text-white">
              <Image src="/logo.png" alt="New Biz Travel" width={36} height={36} />
              New Biz Travel
            </span>
            <p className="mb-4.5 max-w-[280px] text-sm leading-relaxed">
              Agencia de viajes con sede en Buenos Aires. Diseñamos experiencias
              a medida desde 2010.
            </p>
            <div className="flex gap-2.5">
              <a
                href="https://instagram.com/newbiztravel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-[38px] w-[38px] place-items-center rounded-sm bg-white/[0.08] text-white/85 transition-all hover:bg-teal hover:text-white"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-[38px] w-[38px] place-items-center rounded-sm bg-white/[0.08] text-white/85 transition-all hover:bg-teal hover:text-white"
              >
                <FacebookIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://wa.me/5491140853640"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-[38px] w-[38px] place-items-center rounded-sm bg-white/[0.08] text-white/85 transition-all hover:bg-teal hover:text-white"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="mb-4.5 text-[13px] font-bold uppercase tracking-[0.1em] text-white">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li><a href="#destinos" className="text-sm transition-colors hover:text-white">Destinos</a></li>
              <li><a href="#tipos" className="text-sm transition-colors hover:text-white">Tipos de viaje</a></li>
              <li><a href="#nosotros" className="text-sm transition-colors hover:text-white">Nosotros</a></li>
              <li><a href="#contacto" className="text-sm transition-colors hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4.5 text-[13px] font-bold uppercase tracking-[0.1em] text-white">
              Contacto
            </h4>
            <div className="space-y-2 text-sm leading-relaxed">
              <div><MapPin size={16} className="mr-2 inline-block align-[-2px] text-teal" />Crisólogo Larralde 3923, OF 510, Saavedra, CABA</div>
              <div><Phone size={16} className="mr-2 inline-block align-[-2px] text-teal" />+54 9 11 4085-3640</div>
              <div><Mail size={16} className="mr-2 inline-block align-[-2px] text-teal" />info@newbiztravel.com.ar</div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-4.5 text-[13px] font-bold uppercase tracking-[0.1em] text-white">
              Newsletter
            </h4>
            <p className="mb-3 text-sm">Recibí ofertas y novedades cada mes.</p>
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                /* TODO: wire newsletter */
              }}
            >
              <input
                type="email"
                placeholder="tu@email.com"
                required
                className="min-w-0 flex-1 rounded-sm border border-white/15 bg-white/[0.08] px-3.5 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-transparent focus:outline-2 focus:outline-offset-2 focus:outline-teal"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-sm bg-teal px-4 py-2.5 text-sm font-semibold text-white hover:bg-teal-dark"
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-[13px] text-white/55 max-sm:justify-center max-sm:text-center">
            <span>© 2026 New Biz Travel. Todos los derechos reservados.</span>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white/80">Política de privacidad</a>
              <a href="#" className="hover:text-white/80">Términos y condiciones</a>
            </div>
          </div>
          <div className="mt-3 text-xs text-white/45">
            New Biz SRL · CUIT 30-71173463-1 · Leg. 14764 · Agencia habilitada
            por el Ministerio de Turismo
          </div>
        </div>
      </div>
    </footer>
  );
}
