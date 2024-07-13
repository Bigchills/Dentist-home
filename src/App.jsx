import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Dedication from './components/Dedication'
import Tesitmonials from './components/Testimonials'
import Discount from './components/Discount'
import Treatment from './components/Treatment'
import Team from './components/Team'
import Appointment from './components/Appointment'
import Newssection from './components/Newssection'
import Footer from './components/Footer'
const App = () => {
 


  return (
    <div className='m-0 p-0 box-border font-body'>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Dedication/>
      <Tesitmonials/>
      <Discount/>
      <Treatment/>
      <Team/>
      <Appointment/>
      <Newssection/>
      <Footer/>
    </div>
  )
}

export default App
