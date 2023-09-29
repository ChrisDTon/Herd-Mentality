import React from 'react'

const AnswerCard = () => {
  return (
    <div className='card w-auto h-fit bg-accent text-accent-content shadow-xl'>
        <p className='card-body text-center text-4xl'>Answer Placeholder Text</p>
        <div className='grid p-2 gap-2 grid-cols-2'>
            <button className='btn-success rounded-lg text-2xl font-medium p-2 hover:bg-[#5ab9a1]'>Point</button>
            <button className='btn-error rounded-lg text-2xl font-medium p-2 hover:bg-[#ad1423]'>Black Sheep</button>
        </div>
    </div>
  )
}

export default AnswerCard