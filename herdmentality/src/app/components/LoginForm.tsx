import React from 'react'
import { redirect } from 'next/navigation'

export default function LoginForm() {
    async function create(formData: FormData) {
      'use server'
        
      // mutate data
      // revalidate cache

      redirect(`/game`) // Navigate to new route
    }
   
    return (
      <div className='flex h-[90vh]'>
        <form action={create} className='card bg-accent p-14 text-accent-content shadow-xl flex gap-10 flex-col justify-center items-center m-auto'>
          <label className='text-6xl font-medium'>Name</label>
          <input type='text' name='username' required className='input input-bordered w-full max-w-4xl h-fit text-9xl text-center text-accent-content' maxLength={8}/>
          <button type='submit' className='btn-neutral rounded-full p-5 w-[20vw] text-5xl'>Apply</button>
        </form>
      </div>
    )
  }