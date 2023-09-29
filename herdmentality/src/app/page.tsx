import Image from 'next/image'
import AnswerCard from './components/AnswerCard'

export default function Home() {
  return (
    <>
      <div className='relative'>
        <div className='card w-auto h-auto bg-neutral text-neutral-content shadow-xl'>{/* Prompt */}
          <div>
            <p className='card-body text-center text-7xl'>Placeholder Prompt Text</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className='flex gap-3 justify-center items-center flex-cols h-[50vh]'>{/* Answers */}
          <AnswerCard />
        </div>
        <div className='grid grid-cols-5'>
          <div className="divider col-span-2 pt-4"></div>
          <button className='btn-neutral rounded-full pt-1 pb-3 text-5xl'>Apply</button>
          <div className="divider col-span-2 pt-4"></div>
        </div>
        <div className='flex gap-3 flex-cols'>{/* Users and point bracket */}
          <p>oaijoisj</p>
        </div>
      </div>
    </>
  )
}
