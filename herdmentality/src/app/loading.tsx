import React from 'react'

export default function loading() {
  return (
    <>
      <div className='w-full h-full flex'>
        <div className='justify-center items-center'>
          <h1>loading</h1>
            <span 
                className="loading loading-ring loading-lg"
            ></span>
        </div>
      </div>
    </>
  )
}
