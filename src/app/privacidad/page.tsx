import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad · New Biz Travel",
  description:
    "Política de privacidad de New Biz Travel. Información sobre el tratamiento de datos personales conforme a la Ley 25.326.",
  robots: { index: true, follow: true },
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="py-24 max-lg:py-16 max-sm:py-12">
        <article className="mx-auto max-w-3xl space-y-8 px-6 text-[17px] leading-relaxed text-medium">
          <header>
            <h1 className="mb-4 text-dark">Política de Privacidad</h1>
            <p className="text-sm text-light">
              Última actualización: 27 de mayo de 2026
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-dark">1. Responsable del tratamiento de datos</h2>
            <p>
              New Biz Travel (en adelante &quot;New Biz Travel&quot;, &quot;nosotros&quot; o
              &quot;la Agencia&quot;) con domicilio en Crisólogo Larralde 3923, OF 510,
              Saavedra, Ciudad Autónoma de Buenos Aires, CUIT 30-71173463-1,
              Legajo EVyT 14764, es el responsable del tratamiento de los datos
              personales recogidos a través de este sitio web
              (newbiztravel.com.ar).
            </p>
            <p>
              Para cualquier consulta sobre el tratamiento de sus datos, puede
              contactarnos en{" "}
              <a href="mailto:info@newbiztravel.com.ar" className="text-teal-dark hover:underline">
                info@newbiztravel.com.ar
              </a>{" "}
              o al teléfono +54 9 11 4085-3640.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">2. Datos que recolectamos</h2>
            <p>
              Recolectamos los siguientes datos personales que usted nos
              proporciona voluntariamente a través de nuestros formularios de
              consulta:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-teal">
              <li>
                <strong className="font-medium text-dark">Datos de contacto:</strong> nombre
                y apellido, dirección de correo electrónico, número de teléfono.
              </li>
              <li>
                <strong className="font-medium text-dark">Datos sobre su consulta:</strong>{" "}
                destino de interés, fechas tentativas, cantidad de pasajeros,
                presupuesto aproximado y cualquier otra información que usted nos
                comparta voluntariamente para que podamos preparar una propuesta
                personalizada.
              </li>
              <li>
                <strong className="font-medium text-dark">Datos de navegación:</strong>{" "}
                dirección IP, tipo de navegador y datos técnicos básicos para el
                funcionamiento del sitio.
              </li>
            </ul>
            <p>
              Solamente recolectamos datos que usted nos proporciona
              voluntariamente. No utilizamos sistemas automatizados de tracking
              publicitario, ni recopilamos datos de fuentes externas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">3. Finalidad del tratamiento</h2>
            <p>Utilizamos sus datos personales para:</p>
            <ul className="list-disc space-y-2 pl-6 marker:text-teal">
              <li>Responder sus consultas y elaborar propuestas de viaje personalizadas.</li>
              <li>Gestionar reservas y trámites con proveedores turísticos.</li>
              <li>Enviar comunicaciones relacionadas con su consulta o reserva.</li>
              <li>
                Cumplir con obligaciones legales, fiscales y regulatorias
                aplicables a nuestra actividad como agencia de viajes registrada.
              </li>
              <li>Mejorar nuestros servicios y la experiencia de uso del sitio web.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">4. Divulgación a terceros</h2>
            <p>
              Como agencia de viajes intermediaria entre el cliente y los
              proveedores turísticos, eventualmente podemos compartir sus datos
              personales con:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-teal">
              <li>
                <strong className="font-medium text-dark">Proveedores turísticos</strong> con
                los que se contraten servicios para usted: aerolíneas, cadenas
                hoteleras, operadores mayoristas, compañías de transporte y
                traslados, prestadores de excursiones, asistencias al viajero, y
                proveedores análogos. Esta divulgación se realiza únicamente cuando
                es necesaria para concretar y operar la reserva contratada.
              </li>
              <li>
                <strong className="font-medium text-dark">Proveedores de servicios tecnológicos</strong>{" "}
                que utilizamos para operar el sitio web, gestionar comunicaciones
                y almacenar información operativa, sujetos a acuerdos de
                confidencialidad y tratamiento responsable de datos.
              </li>
              <li>
                <strong className="font-medium text-dark">Procesadores de pago</strong>{" "}
                habilitados, cuando corresponda procesar cobros por servicios
                contratados.
              </li>
              <li>
                <strong className="font-medium text-dark">Autoridades gubernamentales o entidades legales</strong>{" "}
                cuando exista una obligación legal o requerimiento judicial que así
                lo exija.
              </li>
            </ul>
            <p>
              Todos los terceros con los que compartimos información están sujetos
              a obligaciones de confidencialidad y al tratamiento responsable de
              sus datos personales, conforme a la legislación aplicable.
            </p>
            <p>
              No vendemos, alquilamos ni comercializamos sus datos personales con
              fines publicitarios.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">5. Almacenamiento y seguridad</h2>
            <p>
              Sus datos son almacenados en servidores seguros y son tratados con
              las medidas técnicas y organizativas razonables para evitar accesos
              no autorizados, pérdidas o alteraciones. Sin embargo, ninguna
              transmisión de datos a través de Internet es completamente segura,
              por lo que no podemos garantizar seguridad absoluta de la
              información transmitida.
            </p>
            <p>
              Conservamos sus datos durante el tiempo necesario para cumplir con
              las finalidades indicadas y con las obligaciones legales aplicables.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">6. Derechos del titular de los datos</h2>
            <p>
              De acuerdo con la Ley Nacional 25.326 de Protección de Datos
              Personales, usted tiene derecho a:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-teal">
              <li>
                <strong className="font-medium text-dark">Acceso:</strong> solicitar
                información sobre los datos personales que tenemos sobre usted.
              </li>
              <li>
                <strong className="font-medium text-dark">Rectificación:</strong> pedir la
                corrección de datos inexactos o incompletos.
              </li>
              <li>
                <strong className="font-medium text-dark">Supresión:</strong> solicitar la
                eliminación de sus datos cuando ya no sean necesarios para los
                fines para los que fueron recolectados.
              </li>
              <li>
                <strong className="font-medium text-dark">Oposición:</strong> oponerse al
                tratamiento de sus datos en determinadas circunstancias.
              </li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, puede enviarnos un correo
              electrónico a{" "}
              <a href="mailto:info@newbiztravel.com.ar" className="text-teal-dark hover:underline">
                info@newbiztravel.com.ar
              </a>{" "}
              indicando el derecho que desea ejercer y adjuntando una copia de su
              documento de identidad. Responderemos su solicitud dentro de los
              plazos legales.
            </p>
            <p>
              LA AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, Órgano de Control de
              la Ley N° 25.326, tiene la atribución de atender las denuncias y
              reclamos que se interpongan con relación al incumplimiento de las
              normas sobre protección de datos personales.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">7. Enlaces a sitios externos</h2>
            <p>
              Nuestro sitio puede contener enlaces a sitios web de terceros (por
              ejemplo, redes sociales, proveedores turísticos). No nos hacemos
              responsables por las prácticas de privacidad de esos sitios. Le
              recomendamos revisar sus respectivas políticas de privacidad.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">8. Modificaciones</h2>
            <p>
              Podemos actualizar esta Política de Privacidad ocasionalmente. La
              fecha de &quot;Última actualización&quot; al inicio del documento indica
              cuándo fue la última revisión. Le recomendamos revisarla
              periódicamente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-dark">9. Contacto</h2>
            <p>
              Para cualquier consulta, comentario o ejercicio de derechos
              relacionados con esta Política de Privacidad, puede contactarnos:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-teal">
              <li>
                Email:{" "}
                <a href="mailto:info@newbiztravel.com.ar" className="text-teal-dark hover:underline">
                  info@newbiztravel.com.ar
                </a>
              </li>
              <li>Teléfono / WhatsApp: +54 9 11 4085-3640</li>
              <li>Dirección: Crisólogo Larralde 3923, OF 510, Saavedra, CABA, Argentina</li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
