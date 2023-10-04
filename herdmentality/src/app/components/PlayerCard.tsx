import React from 'react'

const PlayerCard = () => {
  return (
    <div className="card card-compact w-[18.9vw] text-primary-content h-full bg-primary shadow-xl">
        <figure><img src="/vercel.svg" className='max-w-[18.9vw]'/></figure>
        <div className="card-body">
            <div className='flex justify-between items-center'>
                <h2 className="card-title mb-[0.5vh] text-[2.5vh]">OOOOOOOO</h2>
                <div className='text-[2vh]'>Points: </div>
            </div>
        </div>
    </div>
  )
}

export default PlayerCard