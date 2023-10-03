'use client'
import React from 'react'
import ModifierButtons from './ModifierButtons'

const AnswerCard = () => {
  return (
    <form>
      <div className='flex gap-3 justify-center items-center flex-cols h-[50vh]'>{/* Answers */}
        <AnswerCard />
      </div>
      <div className='grid grid-cols-5'>
        <div className="divider col-span-2 pt-4"></div>
        <button type="submit" className='btn-neutral rounded-full pt-1 pb-3 text-5xl'>Apply</button>
        <div className="divider col-span-2 pt-4"></div>
      </div>
    </form>
  )
}

export default AnswerCard