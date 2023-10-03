import React from 'react'
import ModifierButtons from './ModifierButtons'

const AnswerCard = () => {
  return (
    <div className='relative card w-fit h-fit max-w-[18.9vw] bg-accent text-accent-content shadow-xl'>
        <div className='absolute w-6 h-6 bg-[#5ab9a1] rounded-full left-1/2 transform -translate-x-1/2 -top-3 invisible'></div>
        <p className='card-body text-center text-4xl break-words'>Super duper long text to increase the width and size of the card for testing purposes and to be a bit annoying pneumonoultramicroscopicsilicovolcanoconiosis</p>
        <ModifierButtons />
    </div>
  )
}

export default AnswerCard