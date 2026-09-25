import React from 'react'
import LinkNavMobile from '../atoms/LinkNavMobile';

export const NAV_ITEMS = [
  {
    id: "01",
    label: "INICIO",
    href: "#home"
  },
  {
    id: "02",
    label: "SERVICIOS",
    href: "#servicios"
  },
  {
    id: "03",
    label: "GALERÍA",
    href: "#galeria"
  },
  {
    id: "04",
    label: "EL EQUIPO",
    href: "#equipo"
  },
  {
    id: "05",
    label: "CONTACTO",
    href: "#contacto"
  }
];

export default function NavMobile() {

       const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
          e.preventDefault();
          
          const targetId = href.replace('#', '');
          
          // Si hace clic en inicio, podemos enviarlo al top 0 directamente
          if (targetId === 'home') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          } else {
            const element = document.getElementById(targetId);
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }
      
          // Actualiza la historia sin recargar ni bloquear clics futuros
          window.history.pushState(null, '', href);
        };
      
      
  return (
      <nav className="  ">
            {
                  NAV_ITEMS.map((link) => (
                        <LinkNavMobile key={link.id} href={link.href} label={link.label} number={link.id} onClick={(e) => handleScroll(e, link.href)}  />
                  ))
            }
      </nav>
  )
}
