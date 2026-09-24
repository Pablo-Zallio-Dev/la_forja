import Link from 'next/link'
import React from 'react'

export default function LinkNavMobile({ href, label, number }: { href: string, label: string, number: string }) {
      return (
            <Link href={href} className=' flex items-center justify-between min-h-16 border-b border-border font-archivo-black font-black text-xl uppercase '>
                  {label}
                  <p className=" font-barlow text-[10px] text-primary  ">{number}</p>
            </Link>
      )
}
