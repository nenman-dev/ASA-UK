import React from 'react'
import './Hero.css'
import white_arrow from '../../assets/arrow.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-text'>
            <h1> Support the work of the society</h1>
            <button className='btn orange'>BECOME A MEMBER <img src= {white_arrow} alt=""/></button>
        </div>
    </div>

  )
}

export default Hero