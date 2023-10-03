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
        <form action={create}>
            <label>Name: </label>
            <input type='text' name='username' required />
            <button type='submit'>Apply</button>
        </form>
    )
  }