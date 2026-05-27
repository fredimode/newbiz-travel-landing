export type Destino = {
  id: string;
  nombre: string;
  tagline: string;
  precioDesde: number;
  badge?: "mas_vendido" | "promo";
  imageUrl: string;
  imageAlt: string;
};

export const destinos: Destino[] = [
  {
    id: "cancun",
    nombre: "Cancún · México",
    tagline: "All inclusive frente al mar",
    precioDesde: 850,
    badge: "mas_vendido",
    imageUrl:
      "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Playa de Cancún con aguas turquesas",
  },
  {
    id: "rio",
    nombre: "Río de Janeiro · Brasil",
    tagline: "Carnaval, playa y samba",
    precioDesde: 720,
    badge: "promo",
    imageUrl:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Vista aérea de Río de Janeiro con el Cristo Redentor",
  },
  {
    id: "punta-cana",
    nombre: "Punta Cana · Rep. Dominicana",
    tagline: "Paraíso caribeño",
    precioDesde: 990,
    imageUrl:
      "https://images.unsplash.com/photo-1602391833977-358a52198938?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Playa tropical en Punta Cana",
  },
  {
    id: "madrid-barcelona",
    nombre: "Madrid + Barcelona · España",
    tagline: "Lo mejor de España en 7 días",
    precioDesde: 1450,
    badge: "mas_vendido",
    imageUrl:
      "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Vista panorámica de Madrid al atardecer",
  },
  {
    id: "orlando",
    nombre: "Orlando · USA",
    tagline: "Mundo Disney en familia",
    precioDesde: 1380,
    imageUrl:
      "https://images.unsplash.com/photo-1597466599360-3b9775841aec?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Parque temático en Orlando",
  },
  {
    id: "bariloche",
    nombre: "Bariloche · Argentina",
    tagline: "Aventura en la Patagonia",
    precioDesde: 480,
    badge: "promo",
    imageUrl:
      "https://images.unsplash.com/photo-1531219432768-9f540ad97d92?w=800&q=80&auto=format&fit=crop",
    imageAlt: "Lago y montañas en Bariloche, Patagonia",
  },
];
