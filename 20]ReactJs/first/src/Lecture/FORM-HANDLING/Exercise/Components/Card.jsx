import React from 'react'

// The 'Card' component receives 'user' (an object with name, email, and image), 'handelRemove' (a function), and 'id' (the user's index) as props from 'Cards.jsx'.
function Card({ user , handelRemove , id }) {
  return (
    <div className="w-56 bg-white m-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 flex flex-col items-center border border-gray-200 hover:scale-105">

      <div className="relative w-16 h-16 rounded-full overflow-hidden ring-3 ring-sky-200 shadow-md">
        {/* The 'src' attribute for the image is dynamically set using 'user.image', which comes from the props. */}
        <img className="w-full h-full object-cover" src={user.image} alt="" />
      </div>

      {/* The user's name is dynamically displayed using 'user.name' from the props. */}
      <h1 className="text-lg font-semibold text-center leading-none text-gray-800 mt-3">{user.name}</h1>

      {/* The user's email is dynamically displayed using 'user.email' from the props. */}
      <h2 className="opacity-60 text-xs">{user.email}</h2>

      <p className="text-gray-600 text-center text-xs mt-2 leading-relaxed">
        I am Prince Chouhan. Passionate about building cool UIs and
        exploring modern web technologies.
      </p>

      {/* When this button is clicked, it calls the 'handelRemove' function passed down from the 'App' component,
      and it passes its own 'id' (the index) back up the component tree to identify which user to remove. */}
      <button onClick={()=>handelRemove(id)} className="mt-3 px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white text-xs rounded-md shadow-sm transition-all"> Remove it </button>
    </div>
  )
}

export default Card