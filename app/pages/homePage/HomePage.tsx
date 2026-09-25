import LinkReserveButton from "@/app/components/atoms/LinkReserveButton";
import OverTitle from "@/app/components/atoms/OverTitle";
import Paragraph from "@/app/components/atoms/Paragraph";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <section id="home" className=" grid grid-cols-1 lg:grid-cols-2 pt-20 border-b border-border ">
      <div className="  w-full py-16 lg:py-24 px-5 lg:px-16 ">
        <div className=" flex flex-col gap-7 max-w-130 ">
          <OverTitle line>Barbería · Oficio · Carácter</OverTitle>
          <h1 className=" font-archivo-black font-black uppercase text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] ">
            Cortes clásicos. <br />{" "}
            <span className="text-primary">Técnica</span> moderna.
          </h1>
          <Paragraph>
            Fades impecables, cuidado de barba y el ambiente de la barbería de
            toda la vida. Cuatro sillones. Buen oficio. Mejor música.
          </Paragraph>
          <div className=" flex flex-col ">
            <div className="flex flex-wrap items-center gap-5">
              <LinkReserveButton>reservar por whatsapp</LinkReserveButton>
              <Link
                href={"#servicios"}
                className="max-w-max pb-1 font-barlow font-bold uppercase text-xs text-primary border-b border-primary tracking-[0.16em] "
              >
                ver servicios
              </Link>
            </div>
            <p className=" font-barlow mt-3 text-xs text-muted ">
              Confirmamos tu cita en un máximo de 24 horas.
            </p>
          </div>
          {/* info */}
        </div>
      </div>
      <div className="relative w-full h-125 lg:h-screen">
        {/* Imagen para MÓVIL (visible en móviles, oculta a partir de breakpoint md: 768px) */}
        <Image
          src="/images/image_home_mobile.webp"
          alt="Barbería La Forja"
          fill
          priority
          className="block md:hidden object-top-left object-cover"
        />

        {/* Imagen para DESKTOP (oculta en móviles, visible a partir de md: 768px) */}
        <Image
          src="/images/image_home_desktop.webp"
          alt="Barbería La Forja"
          fill
          priority
          className="hidden md:block object-top-left object-cover"
        />
        <div className=" absolute bottom-6 right-6 bg-background py-3 px-4 border border-border ">
            <p className=" font-barlow font-bold text-[10px] text-primary tracking-widest uppercase ">desde 2023</p>
            <p className=" font-barlow font-semibold text-foreground text-sm ">4 sillones · 1 oficio</p>
        </div>
      </div>

    </section>
  );
}
