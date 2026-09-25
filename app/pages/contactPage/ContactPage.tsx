import Container from '@/app/components/atoms/Container'
import LinkReserveButton from '@/app/components/atoms/LinkReserveButton'
import OverTitle from '@/app/components/atoms/OverTitle'
import Paragraph from '@/app/components/atoms/Paragraph'
import TitleSection from '@/app/components/atoms/TitleSection'
import React from 'react'

export default function ContactPage() {
      return (
            <div className=" grid grid-cols-1 lg:grid-cols-2 border-y border-border bg-surface-raised ">

                  <Container id={'contacto'} className='w-full '>
                        <div className="  p-6 border border-border   ">
                              <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.908971704181!2d-0.3717877236335708!3d39.47138511263248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048b14112aeb1%3A0xa5d05039540dd6c8!2sCarrer%20de%20Col%C3%B3n%2C%2047%2C%20Ciutat%20Vella%2C%2046004%20Val%C3%A8ncia!5e0!3m2!1ses!2ses!4v1790325631917!5m2!1ses!2ses"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                              />
                        </div>
                  </Container>
                  <div className=" flex items-center justify-center px-4 py-12 bg-primary text-primary-foreground ">
                        <section className='  max-w-160 '>
                              <div className=" flex flex-col gap-5 pb-12 border-b border-primary-foreground/25 ">
                                    <OverTitle dark>tu sillòn te espera</OverTitle>
                                    <TitleSection dark>¿Hablamos de tu próximo corte?</TitleSection>
                                    <Paragraph dark>Cuéntanos qué servicio quieres, cuándo te viene bien y si tienes barbero preferido.</Paragraph>
                                    <LinkReserveButton className='shadow-lg/40'>reservar por whatsapp</LinkReserveButton>
                              </div>
                              <div className=" flex flex-col sm:flex-row gap-5 pt-7 ">
                                    <div className="w-1/2">
                                          <p className=" font-barlow text-sm font-bold uppercase ">L-V</p>
                                          <p className=" font-barlow text-sm  uppercase ">10:00-20:00</p>
                                    </div>
                                    <div className=" flex flex-col gap-1 ">
                                          <div className="flex gap-2">
                                                <p className=" font-barlow text-sm font-bold uppercase ">sabados</p>
                                                <p className="py-0.5 px-2 font-bold tracking-widest bg-background font-barlow text-[9px] text-primary uppercase ">especial</p>
                                          </div>
                                          <p className=" font-barlow text-sm  uppercase ">10:00-20:00</p>
                                          <p className=" pt-2 font-barlow text-xs font-bold uppercase ">especial padres e hijos</p>

                                    </div>
                              </div>

                        </section>
                  </div>
            </div>
      )
}
