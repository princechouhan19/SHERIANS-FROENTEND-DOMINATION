import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import User from './components/User'
import About from './components/About'
import Userdetail from './components/Userdetail'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 via-pink-200 to-red-200">
      <Navbar />
      <div className="pt-20 px-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/User' element={<User />} />
          <Route path='/User/:id' element={<Userdetail />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </div>
  )
}

export default App