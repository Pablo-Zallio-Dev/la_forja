import React from 'react'
import LinkNavDesktop from '../atoms/LinkNavDesktop';

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


export default function NavDesktop() {
  return (
   <nav className=" hidden lg:flex gap-8 ">
      {
            NAV_ITEMS.map((link) => (
                  <LinkNavDesktop key={link.id} href={link.href} label={link.label} />
            ))
      }
   </nav>
  )
}
