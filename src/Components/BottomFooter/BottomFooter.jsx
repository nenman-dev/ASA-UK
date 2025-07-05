import React from 'react'
import './BottomFooter.css'
import { Link } from 'react-router-dom'

const Bottom = () => {
  return (
    <div className ='bottom-footer'>
      <div className='bottom-footer-content'>
        <p>© 2019 Royal African Society ltd. All right reserved.</p>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms-of-use">Terms Of Use</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Bottom