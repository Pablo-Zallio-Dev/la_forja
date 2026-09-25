import Link from 'next/link'
import React from 'react'

export default function LinkNavDesktop({href, label, onClick}: {href: string, label: string, onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void}) {
  return (
    <Link href={href} className=' font-barlow font-semibold tracking-widest text-xs text-foreground hover:text-primary uppercase transition-colors duration-150 ' onClick={onClick}>{label}</Link>
  )
}
