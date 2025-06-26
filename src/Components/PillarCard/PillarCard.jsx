import React from 'react'
import './PillarCard.css'

const PillarCard = ({image, label, arrowIcon}) => {
   return (
    <div className='gallery-card'>
      <img src={image} alt={label} />
      <div className='content'>
        <p>{label}</p>
        <img src={arrowIcon} alt="arrow" className='arrow' />
      </div>
    </div>
  );
};


export default PillarCard
