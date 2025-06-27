import React from 'react'
import './Topbar.css'
import search_icon from '../../assets/search.svg'

const Topbar = () => {
  return (
    <div className='topbar'>
        <ul className='topbar-links'>
            <li className='topbar-contact'>Contact Us</li>
            <li>Members Login</li>
            <li><span><img src={search_icon} alt=''/></span>Search</li>
        </ul>
    </div>
  )
}

export default Topbar