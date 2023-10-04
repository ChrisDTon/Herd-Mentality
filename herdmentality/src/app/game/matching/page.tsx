import React from 'react'
import AnswerCard from '@/app/components/AnswerCard'
import PlayerCard from '@/app/components/PlayerCard'

const page = () => {
  return (
    <>
      <div 
        className='relative'
      >
        <div 
          className='card w-full h-[14vh] bg-neutral text-neutral-content shadow-xl justify-center items-center'
        >{/* Prompt */}
          <div>
            <p 
              className='card-body text-center text-[7vh] leading-none'
            >Placeholder Prompt Text</p>
          </div>
        </div>
        <div 
          className="divider my-[2vh] h-[2vh]"
        ></div>
        <form>
          <div 
            className='flex gap-3 justify-center items-center h-[39vh] max-h-[39vh]'
          >{/* Answers */}
            <AnswerCard />
            <AnswerCard />
            <AnswerCard />
            <AnswerCard />
            <AnswerCard />
          </div>
          <div 
            className='grid grid-cols-5 my-[2vh]'
          >
            <div 
              className="divider my-[2vh] h-[2vh] col-span-2 pt-[0.5vh]"
            ></div>
            <button 
              type='submit' 
              className='btn-neutral rounded-full h-[6.5vh] align-center pb-[0.8vh] text-[5vh] leading-none'
            >Apply</button>
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
        </div>
      </div>
    </>
  )
}

export default page