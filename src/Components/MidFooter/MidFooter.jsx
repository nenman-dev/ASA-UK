import React from 'react'
import './MidFooter.css'
import white_arrow from '../../assets/arrow.svg'
import dark_arrow from '../../assets/dark_arrow1.png'


const MidFooter = () => {
  return (
    <div className='mid-footer'>
        <div className='mid-footer-content'>
            <h3>Help us tell the <br/> African Story</h3>
            <button className='btn foot-content'>DONATE <span><img src={white_arrow} alt='' className='white_arrow'/> <img src= {dark_arrow} alt="" className='dark_arrow'/></span></button>
        </div>
    </div>
  )
}

export default MidFooter