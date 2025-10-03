import React from 'react'
import { Link , Routes , Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Routing from './utils/Routing';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">

      <Navbar />

      <Routing />

    </div>
  )
}

export default App
