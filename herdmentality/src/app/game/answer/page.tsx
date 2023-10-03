import React from 'react'
import AnswerCard from '../../components/AnswerCard'

const page = () => {
  return (
    <>
      <div 
        className='relative'
      >
        <div 
          className='card w-full h-fit bg-neutral text-neutral-content shadow-xl'
        >{/* Prompt */}
          <p 
            className='card-body text-center text-[7vh] leading-none'
          >Placeholder Prompt Text</p>
        </div>
        <div 
          className="divider"
        ></div>
        <form>
          <div 
            className='flex gap-3 justify-center items-center h-[50vh] max-h-[50vh]'
          >{/* Answers */}
            <input 
              type='text' 
              className='h-[40vh] w-full'
            ></input>
          </div>
          <div 
            className='grid grid-cols-5'
          >
            <div 
              className="divider col-span-2 pt-4"
            ></div>
            <button 
              type='submit' 
              className='btn-neutral rounded-full py-2 text-[5vh] leading-none'
            >Answer</button>
            <div 
              className="divider col-span-2 pt-4"
            ></div>
          </div>
        </form>
        <div 
          className='flex gap-3 flex-cols'
        >{/* Users and point bracket */}
          <p>oaijoisj</p>
        </div>
      </div>
    </>
  )
}

export default page