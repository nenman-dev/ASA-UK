import React from 'react'
import './Pillars.css'
import gallery_1 from '../../assets/gallery_1.png' 
import gallery_2 from '../../assets/gallery_2.png' 
import gallery_3 from '../../assets/gallery_3.png' 
import gallery_4 from '../../assets/gallery_4.png' 

const Pillars = () => {
  return (
    <div className='pillars'>
        <div className='gallery'>
            <div className='gallery-1'>
                <img src={gallery_1} alt="" />
                <p>Connect</p>
            </div>
            <div className='gallery-2'>
                <img src={gallery_2} alt="" />
                <p>Learn</p>
            </div>
            <div className='gallery-3'>
                <img src={gallery_3} alt="" />
                <p>Debate</p>
            </div>
            <div className='gallery-4'>
                <img src={gallery_4} alt="" />
                <p>Celebrate</p>
            </div>
        </div>
    </div>
  )
}

export default Pillars