import React from 'react'

function Navbar({data}) {
  return (
    <div className='navbar w-full px-20 py-3 flex justify-between items-center'>
      <h3>Orange</h3>
      <div className='flex p-2 px-4 rounded-md bg-orange-400 text-white text-sm gap-3'>
        <h3>Favourites</h3>
        {/* Calculate and display count of favorited songs by filtering for items with added: true */}
        <h4>{data.filter(item => item.added).length}</h4>
      </div>
    </div>
  )
}

export default Navbar