import Link from 'next/link'
import React from 'react'

export default function Footer() {
      return (
            <section className=" flex flex-col sm:flex-row sm:justify-between items-center gap-4 p-8 ">
                  <p className=" font-barlow text-xs text-muted ">© 2026 Barbería La Forja</p>
                  <div className=" flex flex-col md:flex-row gap-2 items-center ">
                        <p className=" font-barlow text-xs text-muted ">Diseñado y Desarrollado por</p>

                        <Link className=" font-barlow text-sm uppercase text-muted " href={''}>Pablo Zallio Web Design</Link>
                  </div>
            </section>
      )
}
