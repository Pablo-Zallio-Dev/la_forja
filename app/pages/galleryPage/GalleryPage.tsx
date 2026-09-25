import Container from '@/app/components/atoms/Container'
import OverTitle from '@/app/components/atoms/OverTitle'
import TitleSection from '@/app/components/atoms/TitleSection'
import { GALLERY_DATA } from '@/app/data/dataGallery'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




export default function GalleryPage() {
      return (
            <section className=" w-full bg-surface-raised ">
                  <Container id={'galeria'} >
                        <div className=" flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 ">
                              <div className="">
                                    <OverTitle>trabajos recientes</OverTitle>
                                    <TitleSection>dentro de la forja</TitleSection>
                              </div>
                              <Link href={'https://www.instagram.com/laforjabarberia'} target='_blank' className=' flex items-center gap-2 font-barlow font-bold text-xs text-primary uppercase tracking-widest  '>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path fill="#d1a83e" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>@laforjabarberia</Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-45 pt-24">
                              {GALLERY_DATA.map((item) => (
                                    <div
                                          key={item.id}
                                          className={`relative overflow-hidden border border-border bg-card ${item.aspect === 'vertical' ? 'row-span-2' : 'row-span-1'
                                                }`}
                                    >
                                          <Image
                                                src={item.src}
                                                alt={item.alt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                                          />
                                    </div>
                              ))}
                        </div>
                  </Container>
            </section>
      )
}
