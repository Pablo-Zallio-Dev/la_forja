import { LucideIcon } from 'lucide-react'
import React from 'react'

export default function ServiceIconCard({icon: Icon}: {icon: LucideIcon}) {
  return (
    <div className=' flex justify-center items-center w-11 h-11 border border-primary/80 '><Icon size={20} className=' text-primary/80 ' /></div>
  )
}
