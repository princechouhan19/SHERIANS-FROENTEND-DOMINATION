import React, { useRef } from 'react'

function UseRef() {

  const elem = useRef(null);
  const Name = useRef(null);
  const Email = useRef(null);

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log('Name:', Name.current.value , 'Email:', Email.current.value);
  }

  return (
    <div ref={elem} className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">

      <form action="" onSubmit={handelSubmit} className="flex flex-col gap-5 w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Sign Up</h2>

        <input className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-lg"
        ref={Name} placeholder="Full Name" type="text" />

        <input className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-lg"
        ref={Email} placeholder="you@example.com" type="email"/>

        <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition">Submit</button>
      </form>

    </div>
  )
}

export default UseRef