import { Tag, CreditCard, Headphones, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Tag,
    title: "Precios garantizados",
    desc: "Te conseguimos las mejores tarifas del mercado.",
  },
  {
    icon: CreditCard,
    title: "Cuotas sin interés",
    desc: "Hasta 6 cuotas con tarjeta argentina.",
  },
  {
    icon: Headphones,
    title: "Atención 24/7",
    desc: "Durante tu viaje siempre tenés a alguien.",
  },
  {
    icon: ShieldCheck,
    title: "Expertise",
    desc: "15 años armando viajes en Latinoamérica.",
  },
];

export default function PorQueElegirnos() {
  return (
    <section className="bg-teal-soft py-24 max-lg:py-16 max-sm:py-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-14 max-w-[720px] text-center max-sm:mb-10">
          <span className="mb-3 inline-block text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
            Por qué elegirnos
          </span>
          <h2>La diferencia de viajar con expertos</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feat) => (
            <div key={feat.title} className="px-4 py-6 text-center">
              <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-md bg-white text-teal shadow-card">
                <feat.icon size={28} />
              </div>
              <h3 className="mb-2">{feat.title}</h3>
              <p className="text-[15px] text-medium">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
