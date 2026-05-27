/**
 * TODO: reemplazar imageUrl placeholders por imágenes reales.
 * El usuario va a subir 6 fotos a public/destinos/:
 *   - public/destinos/cancun.jpg
 *   - public/destinos/rio.jpg
 *   - public/destinos/punta-cana.jpg
 *   - public/destinos/madrid.jpg
 *   - public/destinos/orlando.jpg
 *   - public/destinos/bariloche.jpg
 *
 * Cuando estén, cambiar imageUrl de cada destino a:
 *   '/destinos/cancun.jpg', '/destinos/rio.jpg', etc.
 */

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
    imageUrl: "/destinos/cancun.jpg",
    imageAlt: "Playa de Cancún con aguas turquesas",
  },
  {
    id: "rio",
    nombre: "Río de Janeiro · Brasil",
    tagline: "Carnaval, playa y samba",
    precioDesde: 720,
    badge: "promo",
    imageUrl: "/destinos/rio.jpg",
    imageAlt: "Vista aérea de Río de Janeiro con el Cristo Redentor",
  },
  {
    id: "punta-cana",
    nombre: "Punta Cana · Rep. Dominicana",
    tagline: "Paraíso caribeño",
    precioDesde: 990,
    imageUrl: "/destinos/punta-cana.jpg",
    imageAlt: "Playa tropical en Punta Cana",
  },
  {
    id: "madrid-barcelona",
    nombre: "Madrid + Barcelona · España",
    tagline: "Lo mejor de España en 7 días",
    precioDesde: 1450,
    imageUrl: "/destinos/madrid.jpg",
    imageAlt: "Vista panorámica de Madrid al atardecer",
  },
  {
    id: "orlando",
    nombre: "Orlando · USA",
    tagline: "Mundo Disney en familia",
    precioDesde: 1380,
    imageUrl: "/destinos/orlando.jpg",
    imageAlt: "Parque temático en Orlando",
  },
  {
    id: "bariloche",
    nombre: "Bariloche · Argentina",
    tagline: "Aventura en la Patagonia",
    precioDesde: 480,
    imageUrl: "/destinos/bariloche.jpg",
    imageAlt: "Lago y montañas en Bariloche, Patagonia",
  },
];
