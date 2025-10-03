import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const models = [
    {
      name: "Prince-oss", 
      description: "Open-source lightweight model for general tasks.",
      ratelimit: "100 req/min",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIdj1AZLLPV0p_rYGm8MVQWDsEdY3vSLPlQ&s"
    },
    {
      name: "Prince-r1",
      description: "High-performance reasoning model for complex queries.",
      ratelimit: "60 req/min",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8yjAJwBdeTCFReoko1mEZKfRYQ9Z6DRZ9cg&s"
    },
    {
      name: "Prince-llama",
      description: "Advanced conversational AI with contextual memory.",
      ratelimit: "40 req/min",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR4KOeOHhZyXbUguBe-SoKsHpPYt2--1PA1g&s"
    },
  ]

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white px-6">
      {/* Header */}
      <h1 className="text-5xl pt-34 font-extrabold mb-6">🤖 Prince AI</h1>
      <p className="text-lg max-w-lg text-center mb-8">
        Your personal AI assistant for smarter interactions, built with modern
        technology and elegant design.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <Link
          to="/login"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
        >
          Get Started
        </Link>

        <Link
          to="/about"
          className="px-6 py-3 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition"
        >
          Learn More
        </Link>
      </div>

      {/* Models Section */}
      <div className="w-full max-w-5xl mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Available Models</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <Link
              key={index}
              to={model.path}
              className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-102 transform transition"
            >
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{model.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{model.description}</p>
                <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                  Rate Limit: {model.ratelimit}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
