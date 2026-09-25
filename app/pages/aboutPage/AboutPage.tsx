import Container from '@/app/components/atoms/Container'
import OverTitle from '@/app/components/atoms/OverTitle'
import Paragraph from '@/app/components/atoms/Paragraph'
import TitleSection from '@/app/components/atoms/TitleSection'
import { TEAM_DATA } from '@/app/data/dataBarber'
import Image from 'next/image'
import React from 'react'

export default function AboutPage() {
      return (
            <Container id={'equipo'} className=' flex flex-col lg:flex-row gap-14 items-center min-h-screen '>
                  <div className=" flex flex-col gap-5 lg:w-1/2 ">
                        <OverTitle>equipo & filosofia</OverTitle>
                        <TitleSection>La barbería de siempre, al ritmo de hoy</TitleSection>
                        <Paragraph>Somos cuatro barberos unidos por la técnica, el trato cercano y la obsesión por un acabado impecable. Aquí vienes a cortarte; vuelves por el ambiente.</Paragraph>
                  </div>
                  <div className=" grid grid-cols-1 sm:grid-cols-2 border border-border w-full lg:w-1/2   ">
                        {
                              TEAM_DATA.map((barber) => (
                                    <div key={barber.id} className=" border border-border p-4 group">
                                          <div className=" relative w-full aspect-16/12 border border-border ">
                                                <Image src={barber.image} alt={''} fill className=' object-cover group-hover:scale-105 transition-transform duration-300 ' />
                                                <span className=" absolute top-3 left-3 bg-card p-1.5 rounded-full font-archivo-black font-black text-xs text-primary ">{barber.id}</span>
                                                <p className=" absolute bottom-2 right-2.5 px-1.5 py-0.5 bg-card font-barlow font-bold text-muted text-[10px] uppercase tracking-widest ">{barber.badge}</p>
                                          </div>
                                          <div className=" pt-5 ">
                                                <h3 className=" uppercase font-archivo-black font-black text-xl lg:text-2xl ">{barber.name}</h3>
                                                <p className=" pt-2 font-barlow text-[10px] text-muted tracking-widest ">{barber.role}</p>
                                          </div>
                                    </div>
                              ))
                        }
                  </div>
            </Container>
      )
}
