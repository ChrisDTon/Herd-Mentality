'use client'
import React from 'react'

const ModifierButtons = () => {
  return (
    <div className='grid p-2 grid-cols-2'>
        <button
          className='btn-success rounded-l-xl text-[2.5vh] leading-none font-medium p-2 hover:bg-[#5ab9a1]'
          onClick={() => console.log('point')}
        >Point</button>
        <button
          className='btn-error rounded-r-xl text-[2.5vh] leading-none font-medium p-2 hover:bg-[#ad1423]'
          onClick={() => console.log('black sheep')}
        >Black Sheep</button>
        {/*<div className="form-control">
          <label className="label justify-around cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-success" />
            <span className="font-medium text-lg">Point</span> 
          </label>
        </div>
        <div className="form-control">
          <label className="label justify-around cursor-pointer">
            <span className="font-medium text-lg">Black Sheep</span>
            <input type="checkbox" className="checkbox checkbox-error" /> 
          </label>
      </div>*/}
    </div>
  )
}

export default ModifierButtons