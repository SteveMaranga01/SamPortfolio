import React from 'react'
import Hero from '@/sections/Hero'
import Navbar from '@/components/Navbar'
import About from '@/sections/About'
import Contacts from '@/sections/Contacts'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Testimonials from '@/sections/Testimonials'

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Contacts />
        <Experience />
        <Projects />
        <Testimonials />
      </main>
    </div>
  )
}

export default App
