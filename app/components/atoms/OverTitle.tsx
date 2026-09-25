import React from 'react'

export default function OverTitle({ children, dark, line }: { children: string, dark?: boolean, line?:boolean }) {
      return (
            <h3 className={` flex items-center gap-3 font-barlow font-bold ${ dark ?'text-primary-foreground' :' text-primary'} tracking-[0.22em] text-[11px] uppercase `}>
                  {
                        line && <div className=" w-10 border-b border-primary"></div>
                  }
                  {children}
            </h3>
      )
}
