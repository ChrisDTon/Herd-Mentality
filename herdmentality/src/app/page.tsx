import Image from 'next/image'

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
        <div className='flex gap-3 flex-cols'>{/* Answers */}
          <div className='card w-auto h-auto bg-accent text-accent-content shadow-xl'>
            <p className='card-body text-center text-4xl'>Answer Placeholder Text</p>
            <div className='grid p-2 gap-2 grid-cols-2'>
              <button className='btn-success rounded-lg text-2xl font-medium p-2 hover:bg-[#5ab9a1]'>Point</button>
              <button className='btn-error rounded-lg text-2xl font-medium p-2 hover:bg-[#ad1423]'>Black Sheep</button>
            </div>
          </div>
          <div className='card w-auto h-auto bg-accent text-accent-content shadow-xl'>
            <p className='card-body text-center text-4xl'>Answer Placeholder Text</p>
          </div>
          <div className='card w-auto h-auto bg-accent text-accent-content shadow-xl'>
            <p className='card-body text-center text-4xl'>Answer Placeholder Text</p>
          </div>
          <div className='card w-auto h-auto bg-accent text-accent-content shadow-xl'>
            <p className='card-body text-center text-4xl'>Answer Placeholder Text</p>
          </div>
          <div className='card w-auto h-auto bg-accent text-accent-content shadow-xl'>
            <p className='card-body text-center text-4xl'>Answer Placeholder Text</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className='flex gap-3 flex-cols'>{/* Users and point bracket */}
          <p>oaijoisj</p>
        </div>
      </div>
    </>
  )
}
