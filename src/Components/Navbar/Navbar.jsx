import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src= {logo} alt="" className='logo'/>
        <ul>
            <li>WHO WE ARE</li>
            <li>WHAT WE DO</li>
            <li>EVENT</li>
            <li>JOIN & SUPPORT</li>
            <li>NEWS</li>
            <li><button className='btn orange'>BECOME A MEMBER</button></li>
            <li><button className='btn green'>DONATE</button></li>
        </ul>
    </nav>
  )
}

export default Navbar