import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  return (
    <div className='gradient-bg'>
      <Navbar/>
      <Header/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App