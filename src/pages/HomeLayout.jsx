import React from 'react'
import Navbar from './Navbar'
import HeroPov from './HeroPov'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'

function HomeLayout() {
  return (
    <main className='flex flex-col overflow-hidden font-sans'>
      <Navbar/>
      <HeroPov/>
      <About/>
      <Skills/>
      <Projects/>
    </main>
  )
}

export default HomeLayout
