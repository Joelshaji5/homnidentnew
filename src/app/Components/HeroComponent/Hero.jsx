import React from 'react'
import "../../Style/Hero.css"

function Hero() {
  return (
    <div className='flex Hero1'>
        <div > <h1 className='heroHeadingTxt'>Making oral health accessible and affordable</h1>
        <p className='heroSubHeadingTxt '>Get Dental care at the comfort of your home.</p>
        <div className='flex justify-center'>
        <button className='heroBtn1'>Join Us</button>
        <a href="#first-section">
        <button className='heroBtn'>Book Now</button>

        </a>



        </div>
        
        
        </div>
        <div> 
        </div>

    </div>
  )
}

export default Hero