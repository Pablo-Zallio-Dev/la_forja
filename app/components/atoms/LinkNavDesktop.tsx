import Link from 'next/link'
import React from 'react'

export default function LinkNavDesktop({href, label}: {href: string, label: string}) {
  return (
    <Link href={href} className=' font-barlow font-semibold tracking-widest text-xs text-foreground hover:text-primary uppercase transition-colors duration-150 '>{label}</Link>
  )
}
