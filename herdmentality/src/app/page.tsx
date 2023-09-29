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
        <div className='flex gap-3 justify-center items-center flex-cols h-[60vh]'>{/* Answers */}
          <AnswerCard />
          <AnswerCard />
          <AnswerCard />
          <AnswerCard />
          <AnswerCard />
        </div>
        <div className="divider"></div>
        <div className='flex gap-3 flex-cols'>{/* Users and point bracket */}
          <p>oaijoisj</p>
        </div>
      </div>
    </>
  )
}
