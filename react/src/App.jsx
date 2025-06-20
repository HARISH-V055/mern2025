import React from 'react'
import Child from './components/child'
import Home from './Pages/Home'
import About from './Pages/About' 
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div>App
    <Child name="HARISH" pno="6369681442" />
    <About/>
    <Skills/>
    <Home/>
    <Contact/>
    <h1>Welcome to App</h1>
  </div>)

}

export default App;