import { destinos } from "@/lib/destinos";
import DestinoCard from "./DestinoCard";

export default function DestinosDestacados() {
  return (
    <section className="py-24 max-lg:py-16 max-sm:py-12" id="destinos">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-14 max-w-[720px] text-center max-sm:mb-10">
          <span className="mb-3 inline-block text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
            Destinos destacados
          </span>
          <h2 className="mb-3">Destinos que recomendamos</h2>
          <p className="text-lg text-medium">
            Curados por nuestros especialistas. Cada propuesta es personalizable
            según tus fechas, presupuesto y preferencias.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinos.map((destino) => (
            <DestinoCard key={destino.id} destino={destino} />
          ))}
        </div>
      </div>
    </section>
  );
}
