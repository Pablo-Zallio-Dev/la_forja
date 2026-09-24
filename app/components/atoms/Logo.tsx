import React from 'react'
import { Scissors } from 'lucide-react'
import Link from 'next/link'
export default function Logo() {
      return (
            <Link className=" flex items-center gap-3 group " href={'/'}>
                  <div className=" flex justify-center items-center h-10 w-10 border border-primary lg:group-hover:bg-primary  transition-colors duration-200">
                        <Scissors size={19} className=' text-primary lg:group-hover:text-primary-foreground transition-colors duration-200' />

                  </div>
                  <div className="">
                        <p className=" font-archivo-black uppercase text-xl text-foreground tracking-widest ">la forja</p>
                        <p className=" font-barlow uppercase font-semibold tracking-[0.3em] text-muted text-[10px] ">barberia</p>
                  </div>
            </Link>
      )
}
