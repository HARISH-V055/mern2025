import React from 'react'
import Child from './components/Child'
import Home from './Pages/Home'
import About from './Pages/About' 
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import Login from './Pages/login'
import Counter from './Pages/counter'
import Effect from './assets/hooks/Effect'
import Hooks from './Pages/Hooks'
import Effect2 from './assets/hooks/Effect2'
import Reducer from './assets/hooks/Reducer'
import Ref from './assets/hooks/Ref'
import State from './assets/hooks/State'

import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'



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
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/state" element={<State />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/effect2" element={<Effect2 />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/ref" element={<Ref />} />
        <Route path="/child" element={<Child name="John Doe" pno="1234567890" />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        
      </Routes>
   
  </div>)

}

export default App;