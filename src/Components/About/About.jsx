import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import white_arrow from '../../assets/arrow.svg'
import dark_arrow from '../../assets/dark_arrow1.png'
import play_icon from '../../assets/play.svg'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="about_img"/>
            <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h4>What we do. <br/>Promoting Africa.</h4>
            <p>The Royal African Society is Britain's prime Africa organisation.</p>
            <p>Our goal is to promote Africa in business, politics, culture and academia. We are a membership society that works to foster better understanding and strong relationships between Britain, Africa and the world.</p>
            <p>Our in-depth knowledge of the continent and our collaborative approach to programmes and partnerships make us the first choice for anyone who wants to engage, understand, celebrate or learn more about Africa. </p>
            <button className='btn'>KNOW MORE <img src= {white_arrow} alt="" className='white_arrow'/> <img src= {dark_arrow} alt="" className='dark_arrow'/></button>
        </div>
    </div>
  )
}

export default About