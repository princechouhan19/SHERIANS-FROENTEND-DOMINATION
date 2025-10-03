import React from 'react'

function Card({data , handelClick , index}) {
  // Destructure props to extract song data and handler functions
  const {image, title, artist, added} = data;
  
  return (
    <div className='card w-64 h-24 p-2 flex relative rounded-[20px] border border-white border-opacity-30 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)] transition-all duration-300 before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent after:content-[""] after:absolute after:top-0 after:left-0 after:w-px after:h-full after:bg-gradient-to-b after:from-white/80 after:via-transparent after:to-white/30' style={{ background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}>
      <div className='portrait w-18 h-16 rounded-[20px] flex relative'>
        <img className='w-full h-full object-cover rounded-[10px]' src={image} alt="" />
        <div className='play-icon absolute inset-0 flex items-center justify-center z-10 backdrop-blur-md bg-black/20 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-200 text-white/80'>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className='info w-40 pl-4'>
        <div className='artist text-base font-semibold text-gray-800'>{artist}</div>
        <div className='title text-sm font-light text-gray-600'>{title}</div>
      </div>
      {/* Button that triggers handelClick with the card's index when clicked */}
      {/* Button text and color change based on the added status */}
      <button onClick={()=>handelClick(index)} className={`px-4 py-2 rounded-full ${added === false ? "bg-orange-400" : "bg-red-400"} text-white text-xs absolute -bottom-[1%] left-[24%] -tanslate-x-[50%] translate-y-[50%] whitespace-nowrap hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out`}>{added === false ? "Add to Favourites" : "Remove From Fav"}</button>
    </div>
  )
}

export default Card