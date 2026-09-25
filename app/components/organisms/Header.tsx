'use client'
import React, { useState } from 'react'
import Logo from '../atoms/Logo'
import NavMobileButton from '../atoms/NavMobileButton'
import MenuMobile from './MenuMobile'
import LinkReserveButton from '../atoms/LinkReserveButton'
import NavDesktop from '../molecules/NavDesktop'

export default function Header() {

      const [open, setOpen] = useState(false)

      return (
            <section className=" fixed top-0 z-500 flex justify-center w-full bg-background border-b border-border  ">
                  <div className="flex justify-between items-center w-full max-w-384 h-20 px-5 sm:px-8 lg:px-12">

                        <Logo />
                        <div className=" lg:hidden ">
                              <MenuMobile open={open} setOpen={setOpen} />
                        </div>
                        <NavDesktop />
                        <div className=" flex items-center gap-2 ">
                              <div className=" hidden md:block ">
                                    <LinkReserveButton>Reservar por whatsapp</LinkReserveButton>
                              </div>
                              <div className=" lg:hidden ">
                                    <NavMobileButton open={open} setOpen={setOpen} />
                              </div>
                        </div>
                  </div>
            </section>
      )
}


/* 


{
            open && <MenuMobile />
      }
            */