export interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  featured?: boolean;
  badge?: string;
  iconName: "scissors" | "armchair" | "droplet" | "sparkles";
}

export const SERVICES_DATA: Service[] = [
  {
    id: "fade-degradado",
    category: "PRECISIÓN",
    title: "FADE / DEGRADADO",
    description: "Degradado limpio y personalizado, trabajado al detalle para tu tipo de cabello.",
    duration: "45 min",
    price: 18,
    iconName: "scissors"
  },
  {
    id: "corte-clasico",
    category: "EL ESENCIAL",
    title: "CORTE CLÁSICO",
    description: "Corte a tijera o máquina con lavado, acabado y asesoramiento de estilo.",
    duration: "40 min",
    price: 16,
    iconName: "armchair"
  },
  {
    id: "cuidado-de-barba",
    category: "RITUAL",
    title: "CUIDADO DE BARBA",
    description: "Toalla caliente, perfilado con navaja y nutrición con aceites seleccionados.",
    duration: "30 min",
    price: 12,
    iconName: "droplet"
  },
  {
    id: "corte-barba",
    category: "SERVICIO ESTRELLA",
    title: "CORTE + BARBA",
    description: "El ritual completo de La Forja: corte técnico y arreglo tradicional de barba.",
    duration: "70 min",
    price: 26,
    featured: true,
    badge: "MÁS SOLICITADO",
    iconName: "sparkles"
  },
  {
    id: "tratamiento-facial",
    category: "NUEVO",
    title: "TRATAMIENTO FACIAL",
    description: "Limpieza rápida, exfoliación e hidratación intensiva para terminar como nuevo.",
    duration: "25 min",
    price: 15,
    iconName: "droplet"
  },
  {
    id: "padres-e-hijos",
    category: "SÁBADOS",
    title: "PADRES E HIJOS",
    description: "Una experiencia compartida en sillones paralelos durante la jornada del sábado.",
    duration: "60 min",
    price: 29,
    iconName: "armchair"
  }
];