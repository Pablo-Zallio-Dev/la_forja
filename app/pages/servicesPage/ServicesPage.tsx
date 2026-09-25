import Container from '@/app/components/atoms/Container'
import OverTitle from '@/app/components/atoms/OverTitle'
import Paragraph from '@/app/components/atoms/Paragraph'
import TitleSection from '@/app/components/atoms/TitleSection'
import { SERVICES_DATA } from '@/app/data/dataServices'
import ServiceIconCard from './atoms/ServiceIconCard'
import { CalendarDays } from 'lucide-react'

export default function ServicesPage() {
      return (
            <Container id='servicios'>
                  <div className=" pb-12 ">
                        <OverTitle>carta de servicios</OverTitle>
                        <TitleSection>Elige tu ritual</TitleSection>
                        <Paragraph>Precios provisionales. Cada servicio combina técnica, tiempo y atención al detalle.</Paragraph>
                  </div>
                  <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
                        {
                              SERVICES_DATA.map((service) => (
                                    <div key={service.id} className={`relative p-6 bg-card border ${ service.badge ?' border-primary bg-primary-soft '  :' border-border lg:hover:border-primary/60 transition-colors duration-300'}  `}>
                                          <ServiceIconCard iconName={service.iconName} />
                                          <h3 className=" pt-10 pb-3 text-[10px] text-primary uppercase font-barlow font-black tracking-widest  ">{service.category}</h3>
                                          <h2 className=" font-archivo-black font-bold uppercase text-2xl ">{service.title}</h2>
                                          <p className=" pt-3 font-barlow text-muted text-sm leading-6 ">{service.description}</p>
                                          <div className=" flex justify-between items-end pt-5 border-t border-border ">
                                                <div className=" flex gap-1 text-muted ">
                                                      <CalendarDays size={14} />
                                                      <p className=" font-barlow text-xs ">{service.duration}</p>
                                                </div>
                                                <p className=" font-archivo-black font-black text-primary text-2xl ">{service.price}€</p>
                                          </div>
                                          {
                                                service.badge && 
                                                <div className=" absolute top-0 right-0 bg-primary ">
                                                      <p className=" py-2 px-3 font-barlow font-black tracking-widest text-[9px] text-primary-foreground ">{service.badge}</p>
                                                </div>
                                          }
                                    </div>
                              ))
                        }
                  </div>
            </Container>
      )
}
