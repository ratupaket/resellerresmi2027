import React from 'react'

export default function Title({ children }) {
  return (
    <div className='text-center mb-8'>
      <h1 className="text-2xl font-rocksalt font-bold">{children}</h1>
    </div>
  )
}
