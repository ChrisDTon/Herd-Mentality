'use client'
import React from 'react'

const ModifierButtons = () => {
  return (
    <div className='grid p-2 grid-cols-2'>
        <button
          className='btn-success rounded-l-xl text-2xl font-medium p-2 hover:bg-[#5ab9a1]'
          onClick={() => console.log('point')}
        >Point</button>
        <button
          className='btn-error rounded-r-xl text-2xl font-medium p-2 hover:bg-[#ad1423]'
          onClick={() => console.log('black sheep')}
        >Black Sheep</button>
    </div>
  )
}

export default ModifierButtons