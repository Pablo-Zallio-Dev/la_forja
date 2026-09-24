import React from 'react'

export default function Container({ children, id }: { children: React.ReactNode, id?:string }) {
      return (
            <div id={id} className=' py-20 sm:py-28 px-5 sm:px-8 ' >{children}</div>
      )
}
