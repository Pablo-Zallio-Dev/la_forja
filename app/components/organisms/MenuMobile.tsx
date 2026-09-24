import React from 'react'
import LogoMenuMobile from '../atoms/LogoMenuMobile'
import NavMobile from '../molecules/NavMobile'
import LinkReserveButton from '../atoms/LinkReserveButton'
import { X } from 'lucide-react'

export default function MenuMobile({ open, setOpen }: { open: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
      return (
            <section onClick={() => setOpen(false)} className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm transition-all duration-200 ease-in-out ${open
                  ? 'opacity-100 pointer-events-auto'
                  : 'opacity-0 pointer-events-none'
                  }`}>
                  <aside className={`fixed top-0 right-0 z-200 flex flex-col gap-4 w-full max-w-sm py-20 px-5 bg-background h-screen border-l border-primary transition-transform duration-200 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'
                        }`}>
                        <button className=" absolute top-4 right-4 " onClick={() => setOpen(!open)} ><X size={16} className=' text-foreground ' /></button>
                        <LogoMenuMobile />
                        <NavMobile />
                        <LinkReserveButton full >reservar por whatsapp</LinkReserveButton>
                  </aside>
            </section>
      )
}
