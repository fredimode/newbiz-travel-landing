import { tiposViaje } from "@/lib/tipos-viaje";
import TipoCard from "./TipoCard";

export default function TiposDeViaje() {
  return (
    <section
      className="py-24 max-lg:py-16 max-sm:py-12"
      id="tipos"
      style={{
        background:
          "linear-gradient(165deg, #f0fdfa 0%, #fffbeb 50%, #fafaf9 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-14 max-w-[720px] text-center max-sm:mb-10">
          <span className="mb-3 inline-block text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
            Para cada momento
          </span>
          <h2 className="mb-3">¿Qué tipo de viaje estás buscando?</h2>
          <p className="text-lg text-medium">
            Sea cual sea la ocasión, armamos una propuesta a tu medida.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiposViaje.map((tipo) => (
            <TipoCard key={tipo.id} tipo={tipo} />
          ))}
        </div>
      </div>
    </section>
  );
}
