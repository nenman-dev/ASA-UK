import React from 'react'
import './Pillars.css'
import gallery_1 from '../../assets/gallery_1.png' 
import gallery_2 from '../../assets/gallery_2.png' 
import gallery_3 from '../../assets/gallery_3.png' 
import gallery_4 from '../../assets/gallery_4.png' 
import white_arrow from '../../assets/arrow.svg'

const Pillars = () => {
  return (
    <div className='pillars'>
        <div className='gallery'>
            <div className='gallery-1'>
                <img src={gallery_1} alt="" />
                <div className='content'>
                    <p>Connect</p>
                    <img src={white_arrow} alt="" className='arrow' />
                </div>
            </div>
            <div className='gallery-2'>
                <img src={gallery_2} alt=""/>
                <div className='content'>
                    <p>Learn</p>
                    <img src={white_arrow} alt="" className='arrow'/>
                </div>
            </div>
            <div className='gallery-3'>
                <img src={gallery_3} alt="" />
                <div className='content'>
                    <p>Debate</p>
                    <img src={white_arrow} alt="" className='arrow'/>
                </div>
            </div>
            <div className='gallery-4'>
                <img src={gallery_4} alt="" />
                <div className='content'>
                    <p>Celebrate</p>
                    <img src={white_arrow} alt="" className='arrow'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pillars