import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Show from './components/Show'
import Home from './components/Home'
import Service from './components/Service'

function App() {
  return (
    <>
      {/* Renders the Navbar component on every page using React Router's layout. */}
      <Navbar />
      {/* Defines the routes for the application. */}
      <Routes>
        {/* Sets up the root route ('/') to render the Home component. */}
        <Route path='/' element={<Home />} />
        {/* Sets up the '/Show' route to render the Show component. */}
        <Route path='/Show' element={<Show />} />
        {/* Sets up the '/Service' route to render the Service component. */}
        <Route path='/Service' element={<Service/>} />
      </Routes>
    </>
  )
}

export default App