import React from 'react'
import Navbar from './Navbar'
import HeroPov from './HeroPov'
import About from './About'

function HomeLayout() {
  return (
    <main className='flex flex-col overflow-hidden font-sans'>
      <Navbar/>
      <HeroPov/>
      <About/>
    </main>
  )
}

export default HomeLayout
