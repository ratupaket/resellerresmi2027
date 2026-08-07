import React from 'react'

export default function Marquee( { children } ) {
  return (
    <div>
    <marquee behavior="scroll" direction="left" className="bg-black/10 shadow-[0px_4.0px_20px_rgba(0,0,0,0.38)]">
      <p className="text-2xl font-semibold font-londrina tracking-widest py-4">{children}</p>
    </marquee>
    </div>
  )
}
