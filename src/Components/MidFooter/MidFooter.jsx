import React from 'react'
import './MidFooter.css'
import white_arrow from '../../assets/arrow.svg'


const MidFooter = () => {
  return (
    <div className='mid-footer'>
        <div className='mid-footer-content'>
            <h3>Help us tell the <br/> African Story</h3>
            <button className='btn foot-content'>DONATE <span><img src={white_arrow} alt=''/></span></button>
        </div>
    </div>
  )
}

export default MidFooter