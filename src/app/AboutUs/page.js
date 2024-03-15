import React from 'react'
import AboutHero from '../Components/Components/About/AboutHero'
import AboutHero2 from '../Components/Components/About/AboutHero2'
import Navbar from '../Components/Navbar/Navbar'
import NavbarMb from '../Components/Navbar/NavbarMb'

function AboutUs() {
  return (
    <div>
      <Navbar />
      <NavbarMb />
      <AboutHero />
      <AboutHero2 />
    </div>
  )
}

export default AboutUs