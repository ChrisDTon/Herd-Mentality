import React from 'react'
import AnswerCard from '../../components/AnswerCard'
import PlayerCard from '@/app/components/PlayerCard'

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
          className="divider my-[2vh] h-[2vh]"
        ></div>
        <form>
          <div 
            className='flex gap-3 justify-center items-center h-[39vh] max-h-[39vh]'
          >{/* Answers */}
            <input 
              type='text' 
              className='h-[40vh] w-full'
            ></input>
          </div>
          <div 
            className='grid grid-cols-5 my-[2vh]'
          >
            <div 
              className="divider my-[2vh] h-[2vh] col-span-2 pt-[0.5vh]"
            ></div>
            <button 
              type='submit' 
              className='btn-neutral rounded-full py-[0.8vh] text-[5vh] leading-none'
            >Answer</button>
            <div 
              className="divider my-[2vh] h-[2vh] col-span-2 pt-[0.5vh]"
            ></div>
          </div>
        </form>
        <div 
          className='flex gap-3 h-[27.8vh] justify-center items-center flex-cols'
        >{/* Users and point bracket */}
          <PlayerCard />
          <PlayerCard />
          <PlayerCard />
        </div>
      </div>
    </>
  )
}

export default page