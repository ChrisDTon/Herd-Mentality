import Image from 'next/image'
import AnswerCard from './components/AnswerCard'
import Link from 'next/link'
import LoginForm from './components/LoginForm'

export default function Home() {
  return (
    <>
      <div className='relative'>
        <h1>Login to join game</h1>
        <LoginForm />
      </div>
    </>
  )
}
