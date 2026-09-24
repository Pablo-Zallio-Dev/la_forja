import React from 'react'

export default function AboutBarberTitleCard({name}: {name: string}) {
  return (
      <h4 className=" font-archivo-black text-xl sm:text-2xl uppercase text-foreground  ">{name}</h4>
  )
}
