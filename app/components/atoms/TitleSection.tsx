import React from 'react'

export default function TitleSection({children, dark}: {children: string, dark?: boolean}) {
  return (
    <h2 className={`font-archivo-black text-4xl sm:text-5xl xl:text-6xl ${ dark ?' text-primary-foreground' : 'text-foreground' } uppercase`}>{children}</h2>
  )
}
