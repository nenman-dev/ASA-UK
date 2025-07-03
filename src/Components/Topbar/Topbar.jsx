import React from 'react'
import './Topbar.css'
import search_icon from '../../assets/search.svg'
import { Link } from 'react-scroll';

const Topbar = () => {
    

  return (
    <div className='topbar'>
      <ul className='topbar-links'>
          <li><Link to = 'main-footer' smooth= {true} offset={200} duration={500} className='topbar-contact'>Contact Us</Link></li>
          <li>Members Login</li>
          <li><span><img src={search_icon} alt=''/></span>Search</li>
      </ul>
    </div>
  )
}

export default Topbar