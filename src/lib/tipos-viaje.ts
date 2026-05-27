export type TipoViaje = {
  id: string;
  nombre: string;
  descripcion: string;
  icon: "heart" | "home" | "trophy" | "users";
  imageUrl: string;
};

export const tiposViaje: TipoViaje[] = [
  {
    id: "luna_miel",
    nombre: "Luna de miel",
    descripcion:
      "Una experiencia única para celebrar el amor en destinos soñados.",
    icon: "heart",
    imageUrl: "/tipos/luna-miel.jpg",
  },
  {
    id: "familia",
    nombre: "Vacaciones en familia",
    descripcion:
      "Diversión asegurada para todas las edades, con hoteles family-friendly.",
    icon: "home",
    imageUrl: "/tipos/familia.jpg",
  },
  {
    id: "evento",
    nombre: "Mundial 2026",
    descripcion:
      "Vivilo desde adentro. Paquetes con entradas, hotel y vuelos.",
    icon: "trophy",
    imageUrl: "/tipos/evento.jpg",
  },
  {
    id: "grupo",
    nombre: "Viajes grupales",
    descripcion:
      "Quinceañeras, despedidas, viajes con amigos. Precios especiales para grupos.",
    icon: "users",
    imageUrl: "/tipos/grupo.jpg",
  },
];
