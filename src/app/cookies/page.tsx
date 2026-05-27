import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Cookies · New Biz Travel",
  description:
    "Política de cookies de New Biz Travel. Solo utilizamos cookies técnicas estrictamente necesarias.",
  robots: { index: true, follow: true },
};

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="py-24 max-lg:py-16 max-sm:py-12">
        <article className="mx-auto max-w-3xl space-y-8 px-6 text-[17px] leading-relaxed text-medium">
          <header>
            <h1 className="mb-4 text-dark">Política de Cookies</h1>
            <p className="text-sm text-light">
              Última actualización: 27 de mayo de 2026
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-dark">1. ¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web
              colocan en su dispositivo (computadora, tablet o teléfono) cuando
              los visita. Se utilizan para recordar información sobre la visita,
              mejorar la experiencia de navegación y, en algunos casos, recopilar
              estadísticas sobre el uso del sitio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">2. Cookies que utilizamos</h2>
            <p>
              En newbiztravel.com.ar utilizamos únicamente{" "}
              <strong className="font-medium text-dark">
                cookies técnicas estrictamente necesarias
              </strong>{" "}
              para el correcto funcionamiento del sitio. Estas cookies:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-teal">
              <li>Garantizan que el sitio funcione correctamente.</li>
              <li>Almacenan preferencias básicas durante su sesión.</li>
              <li>No recopilan información personal identificable.</li>
              <li>No se utilizan con fines publicitarios ni de seguimiento.</li>
            </ul>
            <p>
              Actualmente no utilizamos cookies de terceros, ni de plataformas
              publicitarias, ni de redes sociales, ni de servicios de analytics.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">3. Gestión de cookies</h2>
            <p>
              Puede configurar su navegador para aceptar, rechazar o eliminar las
              cookies en cualquier momento. La mayoría de los navegadores permiten
              gestionar las preferencias de cookies desde sus opciones de
              configuración o privacidad.
            </p>
            <p>
              Tenga en cuenta que rechazar las cookies técnicas necesarias puede
              afectar el funcionamiento de algunas partes del sitio.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">4. Cambios en esta política</h2>
            <p>
              Si en el futuro implementamos cookies de terceros (por ejemplo, para
              analytics o publicidad), actualizaremos esta política y
              solicitaremos su consentimiento explícito antes de activar dichas
              cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">5. Contacto</h2>
            <p>Para consultas sobre nuestra política de cookies:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-teal">
              <li>
                Email:{" "}
                <a href="mailto:info@newbiztravel.com.ar" className="text-teal-dark hover:underline">
                  info@newbiztravel.com.ar
                </a>
              </li>
              <li>Teléfono / WhatsApp: +54 9 11 4085-3640</li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
