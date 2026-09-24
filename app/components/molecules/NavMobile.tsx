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
      
  return (
      <nav className="  ">
            {
                  NAV_ITEMS.map((link) => (
                        <LinkNavMobile key={link.id} href={link.href} label={link.label} number={link.id} />
                  ))
            }
      </nav>
  )
}
