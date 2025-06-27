import React from 'react'
import './Brands.css'
import brand1 from '../../assets/brand1.png'
import brand2 from '../../assets/brand2.png'
import brand3 from '../../assets/brand3.png'
import brand4 from '../../assets/brand4.png'

const Brands = () => {
  return (
    <div className='brands'>
        <div className='brand-content'>
            <p>Our Brands</p>
            <div className='brand-logo'>
                <img src= {brand1} alt='' className='first'/>
                <img src= {brand2} alt='' className='second'/> 
                <img src= {brand3} alt='' className='third'/>
                <img src= {brand4} alt='' className='fourth'/>
            </div>
        </div>
    </div>
  )
}

export default Brands