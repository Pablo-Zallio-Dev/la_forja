import React from 'react'

export default function Container({ children, id, className }: { children: React.ReactNode, id?:string, className?: string }) {
      return (
            <div id={id} className={`  max-w-335 py-30 px-5 sm:px-12 mx-auto ${className} `} >{children}</div>
      )
}
