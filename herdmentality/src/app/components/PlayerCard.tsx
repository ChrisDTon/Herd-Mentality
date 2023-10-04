import React from 'react'

function randomSheep() {
    let sheepImageUrl = "/Flaschenschaf.svg";
    let randomnumb = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if(randomnumb == 1){
        sheepImageUrl = "/Tackerschaf.svg"
        return sheepImageUrl
    }
    if(randomnumb == 2){
        sheepImageUrl = "/Teeschaf.svg"
        return sheepImageUrl
    }
    return sheepImageUrl
}

const PlayerCard = () => {
  return (
    <div className="card card-compact w-[18.9vw] text-primary-content h-full bg-primary shadow-xl">
        <figure><img src={randomSheep()} className='max-w-[18.9vw] bg-sky-200'/></figure>
        <div className="card-body">
            <div className='flex justify-between items-center'>
                <h2 className="card-title mb-[0.5vh] text-[2.5vh]">OOOOOOOO</h2>
                <div className='text-[2vh]'>Points: </div>
            </div>
        </div>
    </div>
  )
}

export default PlayerCard