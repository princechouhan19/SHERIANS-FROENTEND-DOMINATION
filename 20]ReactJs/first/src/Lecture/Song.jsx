import React from 'react'

function Song() {
    const data =[
        { image: 'https://i.scdn.co/image/ab6761610000e5ebbc7e4fffd515b47ff1ebbc1f', title: 'Millionaire', artist: 'Yo Yo Honey Singh' },
        { image: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png', title: 'Shape of You', artist: 'Ed Sheeran' },
        { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSL_R1VQvWKnihQBKr0yKXEj19XWpXM2_dXw&s', title: 'Jhol', artist: 'Maanu, Annural Khalid, Xulfi' }
    ]
    return (
        <div className='wrapper w-full h-screen flex items-center justify-center gap-10 bg-blue-300'>
            {data.map((elem, index) =>(
                <div key={index} className='card w-64 h-20 p-2 flex relative overflow-hidden rounded-[20px] border border-white border-opacity-30 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)] transition-all duration-300 before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent after:content-[""] after:absolute after:top-0 after:left-0 after:w-px after:h-full after:bg-gradient-to-b after:from-white/80 after:via-transparent after:to-white/30' style={{background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)'}}>
                <div className='portrait w-18 h-16 rounded-[20px] flex relative'>
                    <img className='w-full h-full object-cover rounded-[10px]' src={elem.image} alt="" />
                    <div className='play-icon absolute inset-0 flex items-center justify-center z-10 backdrop-blur-md bg-black/20 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-200 text-white/80'>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </div>
                </div>
                <div className='info w-40 pl-4'>
                    <div className='artist text-base font-semibold text-gray-800'>{elem.artist}</div>
                    <div className='title text-sm font-light text-gray-600'>{elem.title}</div>
                </div>
            </div>

            ))}
        </div>
    )
}

export default Song