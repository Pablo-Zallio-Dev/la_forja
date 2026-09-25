export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  badge?: string;
}

export const TEAM_DATA: TeamMember[] = [
  {
    id: "01",
    name: "MARCOS",
    role: "PELUQUERO - LA FORJA",
    image: "/images/image_barber_01.webp", // Pon aquí la ruta de la imagen
    badge: "corte"
  },
  {
    id: "02",
    name: "DIEGO",
    role: "PELUQUERO - LA FORJA",
    image: "/images/image_barber_02.webp", // Pon aquí la ruta de la imagen
    badge: "corte"
  },
  {
    id: "03",
    name: "ÁLEX",
    role: "PELUQUERO & BARBERO - LA FORJA",
    image: "/images/image_barber_03.webp", // Pon aquí la ruta de la imagen
    badge: "barba & corte"
  },
  {
    id: "04",
    name: "JAVI",
    role: "BARBERO - LA FORJA",
    image: "/images/image_barber_04.webp", // Pon aquí la ruta de la imagen
    badge: "barba"
  }
];