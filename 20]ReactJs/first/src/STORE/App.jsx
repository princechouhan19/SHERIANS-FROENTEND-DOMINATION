import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './Components/Details'
import Create from './Components/Create'
import Edit from './Components/Edit'

const App = () => {
  return (
    <div className='flex min-h-screen'>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/create' element={<Create/>}></Route>
          <Route path='/details/:id' element={<Details/>}></Route>
          <Route path='/edit/:id' element={<Edit/>}></Route>
        </Routes>
    </div>
  )
}

export default App