import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones · New Biz Travel",
  description:
    "Términos y condiciones de uso de New Biz Travel. Información sobre servicios, reservas, cancelaciones y responsabilidades.",
  robots: { index: true, follow: true },
};

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="py-24 max-lg:py-16 max-sm:py-12">
        <article className="mx-auto max-w-3xl space-y-8 px-6 text-[17px] leading-relaxed text-medium">
          <header>
            <h1 className="mb-4 text-dark">Términos y Condiciones</h1>
            <p className="text-sm text-light">
              Última actualización: 27 de mayo de 2026
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-dark">1. Identificación de la Agencia</h2>
            <p>
              New Biz Travel es una agencia de viajes con domicilio en Crisólogo
              Larralde 3923, OF 510, Saavedra, CABA, CUIT 30-71173463-1,
              inscripta en el Registro de Agentes de Viajes con Legajo EVyT
              14764, en los términos de la Ley Nacional N° 18.829 y su decreto
              reglamentario.
            </p>
            <p>
              Estos Términos y Condiciones rigen el uso de nuestro sitio web
              newbiztravel.com.ar y los servicios que prestamos a través del
              mismo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">2. Naturaleza del servicio</h2>
            <p>
              New Biz Travel actúa como <strong className="font-medium text-dark">intermediaria</strong>{" "}
              entre el cliente y los proveedores de servicios turísticos
              (aerolíneas, hoteles, operadores mayoristas, empresas de
              transporte, asistencias al viajero y demás). La Agencia no opera
              directamente los servicios contratados.
            </p>
            <p>
              Las condiciones particulares de cada servicio (cancelaciones,
              modificaciones, equipajes, check-in, etc.) son fijadas por cada
              proveedor y son las que rigen la prestación de dicho servicio.
            </p>
            <p>
              New Biz Travel no comercializa viajes ni servicios relacionados con
              destinos sujetos a sanciones internacionales vigentes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">3. Proceso de consulta y reserva</h2>
            <p>
              3.1. A través del formulario de contacto del sitio, el cliente
              puede solicitar una propuesta de viaje. La consulta no constituye
              reserva ni obligación de compra.
            </p>
            <p>
              3.2. Recibida la consulta, un asesor de la Agencia se contactará
              con el cliente para elaborar una propuesta personalizada con
              precios, condiciones y disponibilidad sujetos a confirmación.
            </p>
            <p>
              3.3. Las reservas se confirman una vez recibido el pago acordado y
              la aceptación expresa por parte del cliente de las condiciones
              particulares del producto contratado (incluyendo política de
              cancelación, documentación requerida y demás aspectos relevantes).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">4. Precios y forma de pago</h2>
            <p>
              4.1. Los precios pueden expresarse en pesos argentinos (ARS) o en
              dólares estadounidenses (USD), según el servicio y el proveedor.
            </p>
            <p>4.2. Cuando los precios estén expresados en USD, podrán abonarse:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-teal">
              <li>
                En pesos al tipo de cambio vendedor del Banco Nación más
                impuestos aplicables al día de la operación.
              </li>
              <li>
                En dólares billete, según disponibilidad y conforme la normativa
                cambiaria vigente.
              </li>
            </ul>
            <p>
              4.3. Los precios incluyen únicamente los servicios expresamente
              detallados en la propuesta. No incluyen: gastos personales,
              propinas, comidas y bebidas no especificadas, excursiones
              opcionales, seguros adicionales, visados, vacunas, ni cualquier
              otro concepto no listado.
            </p>
            <p>
              4.4. Las formas de pago disponibles (transferencia bancaria, tarjeta
              de crédito o débito, financiación en cuotas según el producto) se
              confirman al cerrar la propuesta. Las opciones específicas dependen
              del servicio y del proveedor.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">5. Política de cancelación y modificaciones</h2>
            <p>
              5.1. La política de cancelación y modificación depende de cada
              producto y proveedor. Las condiciones específicas serán informadas
              al cliente antes de la confirmación de la reserva.
            </p>
            <p>
              5.2. Los servicios &quot;no reembolsables&quot; no admiten devolución total o
              parcial en caso de cancelación.
            </p>
            <p>
              5.3. Los servicios &quot;reembolsables&quot; tienen una fecha límite de
              cancelación sin penalidad. Pasada esa fecha, pueden aplicarse
              cargos parciales o totales según el proveedor.
            </p>
            <p>
              5.4. Las modificaciones de fechas, nombres de pasajeros o destinos
              están sujetas a disponibilidad y posibles cargos adicionales.
            </p>
            <p>
              5.5. La Agencia podrá retener un cargo por gastos administrativos en
              caso de cancelaciones, conforme a la normativa vigente del sector.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">6. Documentación de viaje</h2>
            <p>
              6.1. Es responsabilidad exclusiva del cliente contar con la
              documentación necesaria para realizar el viaje, incluyendo pero no
              limitado a:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-teal">
              <li>
                Pasaporte vigente (con la antigüedad mínima requerida por cada
                país de destino).
              </li>
              <li>Visas correspondientes.</li>
              <li>Certificados de vacunación cuando aplique.</li>
              <li>
                Documentación para menores de edad (autorizaciones de viaje,
                partidas de nacimiento, etc.).
              </li>
            </ul>
            <p>
              6.2. La Agencia puede informar al cliente sobre los requisitos
              generales, pero la responsabilidad final de contar con la
              documentación recae en el viajero.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">7. Seguro de viaje</h2>
            <p>
              Se recomienda enfáticamente la contratación de un seguro de viaje
              que cubra asistencia médica, cancelación y otras contingencias. La
              Agencia ofrece este servicio, pero no es de contratación
              obligatoria salvo en los destinos donde la legislación local así lo
              exija.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">8. Limitación de responsabilidad</h2>
            <p>
              8.1. La Agencia actúa como intermediaria entre el cliente y los
              proveedores turísticos. No es responsable por incumplimientos,
              demoras, cancelaciones, pérdidas, daños o cualquier otro perjuicio
              causado por los proveedores.
            </p>
            <p>
              8.2. La Agencia no es responsable por hechos fortuitos o de fuerza
              mayor que afecten la prestación de los servicios (cancelaciones de
              vuelos, fenómenos climáticos, conflictos sociales, pandemias, etc.).
            </p>
            <p>
              8.3. La responsabilidad de la Agencia se limita a la correcta
              gestión de la intermediación entre el cliente y el proveedor.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">9. Reclamos</h2>
            <p>
              Cualquier reclamo relacionado con los servicios prestados deberá ser
              canalizado por escrito a{" "}
              <a href="mailto:info@newbiztravel.com.ar" className="text-teal-dark hover:underline">
                info@newbiztravel.com.ar
              </a>{" "}
              dentro de los plazos establecidos por la legislación aplicable,
              acompañando toda la documentación que respalde el reclamo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">10. Protección al consumidor</h2>
            <p>
              Conforme a la Ley 24.240 de Defensa del Consumidor, el cliente
              tiene derecho a información veraz, detallada, eficaz y suficiente
              sobre los servicios contratados. Para consultas vinculadas a la
              defensa del consumidor, puede contactar a la Dirección Nacional de
              Defensa del Consumidor o a los organismos provinciales
              correspondientes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">11. Propiedad intelectual</h2>
            <p>
              Todos los contenidos del sitio web (textos, imágenes, logos, diseño)
              son propiedad de New Biz Travel o de sus respectivos titulares y
              están protegidos por las leyes de propiedad intelectual. Se prohíbe
              su uso, reproducción o distribución sin autorización previa por
              escrito.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">12. Modificaciones a estos Términos</h2>
            <p>
              La Agencia se reserva el derecho de modificar estos Términos y
              Condiciones en cualquier momento. Las modificaciones entrarán en
              vigencia desde su publicación en el sitio web. Le recomendamos
              revisar periódicamente este documento.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">13. Ley aplicable y jurisdicción</h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la República
              Argentina. Para cualquier controversia, las partes se someten a la
              jurisdicción de los Tribunales Ordinarios de la Ciudad Autónoma de
              Buenos Aires, renunciando a cualquier otro fuero que pudiera
              corresponderles.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">14. Contacto</h2>
            <ul className="list-disc space-y-2 pl-6 marker:text-teal">
              <li>
                Email:{" "}
                <a href="mailto:info@newbiztravel.com.ar" className="text-teal-dark hover:underline">
                  info@newbiztravel.com.ar
                </a>
              </li>
              <li>Teléfono / WhatsApp: +54 9 11 4085-3640</li>
              <li>Dirección: Crisólogo Larralde 3923, OF 510, Saavedra, CABA, Argentina</li>
              <li>CUIT: 30-71173463-1</li>
              <li>Legajo EVyT: 14764</li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
