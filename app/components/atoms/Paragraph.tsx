import React from 'react'

export default function Paragraph({children, dark}: {children: string, dark: boolean}) {
  return (
    <p className={` font-barlow ${ dark ?'text-primary-foreground' : 'text-muted' } text-base sm:text-lg leading-7  `}>{children}</p>
  )
}
