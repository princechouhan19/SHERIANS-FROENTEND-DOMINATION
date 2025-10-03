import React from 'react'

function Props({ values, handleClick, index }) {
  const { image, name, Profession, friends } = values;

  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300">
      
      {/* Image */}
      <div className="h-48 w-full bg-gray-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover bg-center"
        />
      </div>

      {/* Text */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500 mt-1">{Profession}</p>
      </div>

      {/* Button */}
      <div className="px-5 pb-5">
        <button 
          onClick={() => handleClick(index)} 
          className={`w-full px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
            ${friends 
              ? "bg-green-100 text-green-700 hover:bg-green-200" 
              : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          {friends ? "✅ Friends" : "➕ Add Friend"}
        </button>
      </div>
    </div>
  )
}

export default Props
