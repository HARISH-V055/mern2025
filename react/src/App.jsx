import React from 'react'
import Child from './components/child'
import Home from './Pages/Home'
import About from './Pages/About' 
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import Login from './Pages/login'
import Counter from './Pages/counter'
import './App.css'
import Navbar from './components/navbar'
import { Routes, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  return (
    <div>
    <Navbar/>
     <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/child" element={<Child name="John Doe" pno="1234567890" />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        
      </Routes>
   
  </div>)

}

export default App;