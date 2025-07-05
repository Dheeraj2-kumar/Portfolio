import { useState } from 'react'
import Navbar from './compoment/Navbar/navbar'
import Intro from './compoment/Intro/intro'
import Skill from './compoment/Skill/skill'
import './App.css'
import Works from './compoment/Works/works'
import Contact from './compoment/Contact/contact'
import Footer from './compoment/Footer/footer'

function App() {
  

  return (
    <div>
      <Navbar/>
      <Intro/>
      <Skill/>
      <Works/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
