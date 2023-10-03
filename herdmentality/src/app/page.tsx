import Image from 'next/image'
import AnswerCard from './components/AnswerCard'
import Link from 'next/link'
import LoginForm from './components/LoginForm'

export default function Home() {
  return (
    <>
      <div className='relative flex flex-col justify-center items-center'>
        <h1 className='text-[3.5vh] leading-none'>Enter name to join game</h1>
        <LoginForm />
      </div>
    </>
  )
}
