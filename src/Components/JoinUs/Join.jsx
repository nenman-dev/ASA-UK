import React from 'react'
import './Join.css'
import Join_img from '../../assets/Join.png'
import white_arrow from '../../assets/arrow.svg'
import dark_arrow from '../../assets/dark_arrow1.png'

const Join = () => {
  return (
    <div className='join'>
      <div className='join-left'>
        <div className='join-text'>
          <h3>Join a community that wants to give back.</h3>
          <p>Lorem ipsum dolor sit amet, id vel illum everti, perfecto tacimates et sit, in sit alienum verterem definiebas. Sea an accusam periculis. Omnis soluta est ea. Ei detraxit corrumpit.</p>
          <button className='join-btn'>JOIN US <span><img src= {white_arrow} alt="" className='white_arrow'/> <img src= {dark_arrow} alt="" className='dark_arrow'/></span></button>
        </div>
      </div>
      <div className='join-right'>
        <img src={Join_img} alt=''/>
      </div>
    </div>
  )
}

export default Join