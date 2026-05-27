const STEPS = [
  {
    num: "01",
    title: "Contanos qué buscás",
    desc: "Mandanos tu consulta o llamanos. Te escuchamos para entender qué tipo de experiencia querés vivir.",
  },
  {
    num: "02",
    title: "Armamos tu propuesta",
    desc: "Nuestros expertos te arman una propuesta personalizada con los mejores precios del mercado.",
  },
  {
    num: "03",
    title: "Disfrutá sin preocupaciones",
    desc: "Reservamos todo, te entregamos la documentación y te acompañamos durante todo el viaje.",
  },
];

export default function ComoTrabajamos() {
  return (
    <section className="py-24 max-lg:py-16 max-sm:py-12" id="nosotros">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto mb-14 max-w-[720px] text-center max-sm:mb-10">
          <span className="mb-3 inline-block text-[13px] font-semibold uppercase tracking-[0.14em] text-teal">
            Cómo trabajamos
          </span>
          <h2 className="mb-3">Cómo armamos tu viaje</h2>
          <p className="text-lg text-medium">
            Un proceso simple, pensado para que vos solo te ocupes de disfrutar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.num} className="px-2 text-center">
              <div className="mx-auto mb-5 grid h-[72px] w-[72px] place-items-center rounded-full bg-teal font-heading text-[26px] text-white shadow-[0_8px_20px_rgba(13,148,136,0.25)]">
                {step.num}
              </div>
              <h3 className="mb-2">{step.title}</h3>
              <p className="text-[15px] text-medium">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
