import React from 'react'
import { Scissors, Armchair, Droplet, Sparkles, LucideIcon } from 'lucide-react'

// Mapa de iconos disponibles por nombre
const iconMap: Record<string, LucideIcon> = {
  scissors: Scissors,
  armchair: Armchair,
  droplet: Droplet,
  sparkles: Sparkles,
}

export default function ServiceIconCard({ iconName }: { iconName: string }) {
  const IconComponent = iconMap[iconName] || Scissors // Icono por defecto si no lo encuentra

  return (
    <div className="flex justify-center items-center w-11 h-11 border border-primary/80">
      <IconComponent size={20} className="text-primary/80" />
    </div>
  )
}