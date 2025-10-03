import React from 'react'
function Card() {
  const data = [
    // Defining an array of objects named 'data'.
    // Each object represents a single card and contains its image URL, name, and description.
    { image: 'https://images.unsplash.com/photo-1738830223726-151adcd58131?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Samsung S24 Ultra", description: "Experience the future with Samsung S24 Ultra." , instock: true },
    { image: 'https://images.unsplash.com/photo-1609096458733-95b38583ac4e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Apple iWatch", description: "Experience the future with Apple iWatch." , instock: false },
    { image: 'https://images.unsplash.com/photo-1697355360151-2866de32ad4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: "Google Pixel 5", description: "Experience the future with Google Pixel 5." , instock: false },
  ]

  return (
    <div className='wrapper w-full h-screen flex items-center justify-center gap-10 bg-cyan-50'>
      {
        // Using the '.map()' method to iterate over the 'data' array.
        // For each item ('elem') in the array, it returns a new JSX element (a card).
        // The 'key' prop is required by React when rendering a list of elements.
        // It helps React identify which items have changed, are added, or are removed.
        data.map((elem, index) => (
          <div key={index} className='w-60 h-65 card relative overflow-hidden rounded-[20px] border border-white border-opacity-30 shadow-[0_8px_32px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.1)] hover:scale-101 transition-all duration-300 before:content-[""] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent after:content-[""] after:absolute after:top-0 after:left-0 after:w-px after:h-full after:bg-gradient-to-b after:from-white/80 after:via-transparent after:to-white/30' style={{background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)'}}>
            {/* 'key={index}' is used here as a unique identifier for each card. */}
            <div className='Image w-full h-32 bg-transparent'>
              <img className='w-full h-full object-cover' src={elem.image} alt="" />
              {/* The 'src' attribute of the image is dynamically set to the 'image' property of the current element ('elem'). */}
            </div>
            <div className='Text w-full px-3 py-4'>
              <h2 className='text-lg pb-2 font-semibold text-gray-800'>{elem.name}</h2>
              {/* The 'name' of the product is displayed here, dynamically fetched from 'elem.name'. */}
              <p className='text-xs pb-2 text-gray-600'>{elem.description}</p>
              <button className={`px-4 py-1 ${elem.instock ? 'bg-blue-600 bg-opacity-80 hover:bg-opacity-100' : 'bg-red-500 bg-opacity-80 hover:bg-opacity-100' } rounded-full text-xs text-white backdrop-blur-sm border border-gray-300 border-opacity-40 transition-all duration-200 `}>{elem.instock ? "In Stock" : "Out Of Stock"}</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Card
// Exporting the 'Card' component so it can be imported and used in other files.