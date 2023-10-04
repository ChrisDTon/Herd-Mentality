import React from 'react'
import { redirect } from 'next/navigation'
import AnswerCard from '../components/AnswerCard'
import PlayerCard from '../components/PlayerCard'

const page = () => {
  
  async function create(formData: FormData) {
    'use server'
      
    // mutate data
    // revalidate cache

    redirect(`/game/answer/`) // Navigate to new route
  }

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
          >Waiting for All Players to Join</p>
        </div>
        <div 
          className="divider my-[2vh] h-[2vh]"
        ></div>
        <form
          action={create}
        >
          <div 
            className='flex gap-3 justify-center items-center h-[39vh] max-h-[39vh]'
          >{/* Answers */}
            <span 
              className="loading loading-ring loading-lg"
            ></span>
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
            >Start</button>
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