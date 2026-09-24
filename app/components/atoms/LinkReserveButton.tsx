import { MessageCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function LinkReserveButton({children, full}: {children: string, full?: boolean}) {
  return (
    <Link className={` flex items-center gap-2 px-5 py-2.5 ${ full ?' w-full justify-center ' : ' max-w-max ' } min-h-11 bg-primary font-barlow font-bold text-xs uppercase tracking-widest text-primary-foreground lg:hover:bg-primary-hover transition-colors duration-100`} href={''}> <MessageCircle size={18} className=' text-primary-foreground ' />{children} </Link>
  )
}
