import React from 'react'

export default function loading() {
  return (
    <>
      <div className='h-[97vh]'>
        <div className='flex h-full justify-center items-center'>
          <div>
            <h1>Loading...</h1>
            <span 
                className="loading loading-spinner w-[50vw]"
            ></span>
          </div>
        </div>
      </div>
    </>
  )
}
