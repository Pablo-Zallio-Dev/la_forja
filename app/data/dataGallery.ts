

export interface GalleryItem {
      id: string;
      src: string;
      alt: string;
      aspect: 'horizontal' | 'vertical';
      category?: string;
}

export const GALLERY_DATA: GalleryItem[] = [
      {
            id: "01",
            src: "/images/image_gallery_01.webp",
            alt: "Afeitado con toalla caliente y navaja",
            aspect: "horizontal",
            category: "Ritual"
      },
      {
            id: "02",
            src: "/images/image_gallery_02.webp",
            alt: "Corte técnico a tijera y peinado",
            aspect: "vertical",
            category: "Corte"
      },
      {
            id: "03",
            src: "/images/image_gallery_03.webp",
            alt: "Detalle de degradado y acabado posterior",
            aspect: "horizontal",
            category: "Fade"
      },
      {
            id: "04",
            src: "/images/image_gallery_04.webp",
            alt: "Interiorismo y sillones vintage de La Forja",
            aspect: "horizontal",
            category: "Local"
      },
      {
            id: "05",
            src: "/images/image_gallery_05.webp",
            alt: "Perfilado de barba y ritual tradicional",
            aspect: "vertical",
            category: "Barba"
      },
      {
            id: "06",
            src: "/images/image_gallery_06.webp",
            alt: "Corte de pelo y estilismo masculino",
            aspect: "vertical",
            category: "Corte"
      },
      {
            id: "07",
            src: "/images/image_gallery_07.webp",
            alt: "Corte de pelo y estilismo masculino",
            aspect: "vertical",
            category: "Corte"
      }
];