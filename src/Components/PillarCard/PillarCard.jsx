import React, { useState } from 'react'
import './PillarCard.css'
import { Link } from 'react-router-dom' 

const PillarCard = ({image, label, arrowIcon, link}) => {
  const [rotate, setRotate]=useState(false);

  const handleClick = () => {
    setRotate(prev => !prev);
  };

   return (
    <div className='gallery-card'>
      <img src={image} alt={label} className='gallery-image' />
      <div className='content'>
        <h3>{label}</h3>
        {link && (
          <a href={link} className="arrow-link">
            <img src={arrowIcon} alt="arrow icon" className= {`arrow ${rotate ? 'rotate' : ''}`} onClick={handleClick} />
          </a>
        )}
      </div>
    </div>
  );
};


export default PillarCard
