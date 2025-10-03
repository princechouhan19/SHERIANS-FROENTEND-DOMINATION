import React from 'react'
import Home from '../Components/Home'
import User from '../Components/User'
import About from '../Components/About'
import Login from '../Components/Login'
import Userdetail from '../Components/Userdetail'
import { Route, Routes } from 'react-router-dom'



const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/user" element={<User />}>
                <Route path=":name" element={<Userdetail />}></Route>
            </Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
        </Routes>
    )
}

export default Routing
