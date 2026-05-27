export type TipoViaje = {
  id: string;
  nombre: string;
  descripcion: string;
  icon: "heart" | "home" | "trophy" | "users";
};

export const tiposViaje: TipoViaje[] = [
  {
    id: "luna_miel",
    nombre: "Luna de miel",
    descripcion:
      "Una experiencia única para celebrar el amor en destinos soñados.",
    icon: "heart",
  },
  {
    id: "familia",
    nombre: "Vacaciones en familia",
    descripcion:
      "Diversión asegurada para todas las edades, con hoteles family-friendly.",
    icon: "home",
  },
  {
    id: "evento",
    nombre: "Mundial 2026",
    descripcion:
      "Vivilo desde adentro. Paquetes con entradas, hotel y vuelos.",
    icon: "trophy",
  },
  {
    id: "grupo",
    nombre: "Viajes grupales",
    descripcion:
      "Quinceañeras, despedidas, viajes con amigos. Precios especiales para grupos.",
    icon: "users",
  },
];
