import React, { useState } from 'react'
import './PillarCard.css'

const PillarCard = ({image, label, arrowIcon}) => {
  const [rotate, setRotate]=useState(false);

  const handleClick = () => {
    setRotate(prev => !prev);
  };

   return (
    <div className='gallery-card'>
      <img src={image} alt={label} />
      <div className='content'>
        <p>{label}</p>
        <img src={arrowIcon} alt="arrow" className= {`arrow ${rotate ? 'rotate' : ''}`} onClick={handleClick}  />
      </div>
    </div>
  );
};


export default PillarCard
