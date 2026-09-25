import React from 'react'

export default function NavMobileButton({open, setOpen}: {open: boolean, setOpen:React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div className=' flex flex-col items-center gap-0.5 p-4 h-11 w-11 border border-primary active:opacity-80 transition-opacity duration-50 ' onClick={() => setOpen(!open)} >
      <span className=" w-3.5 h-0 border-y border-primary "></span>
      <span className=" w-3.5 h-0 border-y border-primary "></span>
      <span className=" w-3.5 h-0 border-y border-primary "></span>
    </div>
  )
}
