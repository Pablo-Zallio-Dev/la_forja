import { MessageCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface LinkReserveButtonProps {
      children?: React.ReactNode;
      className?: string;
      full?: boolean;
      phone?: string; // Número con prefijo de país sin '+' (ej: 34600000000)
      serviceName?: string;
}



export default function LinkReserveButton({ children, full, className, phone = '34696075650',  }: LinkReserveButtonProps) {
      const cleanPhone = phone ? phone.replace(/\D/g, '') : '34600000000'

      const baseMessage = `¡Hola Barbería La Forja! Quisiera solicitar una cita:

• Nombre y Apellidos: [Escribir Nombre]
• Servicio: [Corte / Fade / Barba / Pack / Facial]
• Día y Hora de preferencia: [Ej. Viernes por la tarde]
• Barbero (Opcional): [Nombre o Indiferente]`

  // Codificación del mensaje para URL
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(baseMessage)}`
  
      return (
            <Link href={whatsappUrl} target='_blank' className={` flex items-center gap-2 px-5 py-2.5 ${full ? ' w-full justify-center ' : ' max-w-max '} min-h-11 bg-primary font-barlow font-bold text-xs uppercase tracking-widest text-primary-foreground lg:hover:bg-primary-hover transition-colors duration-100 ${className} `} > <MessageCircle size={18} className=' text-primary-foreground ' />{children} </Link>
      )
}
