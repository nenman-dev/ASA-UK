import React from 'react'
import './TopFooter.css'
import white_arrow from '../../assets/arrow.svg'

const TopFooter = () => {
  return (
    <div className='top-footer'>
        <div className='top-footer-content'>
            <p>Sign up to our newsletter</p>
            <ul>
                <li>Select Newsletter</li>
                <li>First Name *</li>
                <li>Last Name *</li>
                <li>E-mail *</li>
                <img src= {white_arrow} alt=''/>
            </ul>
        </div>
    </div>
  )
}

export default TopFooter