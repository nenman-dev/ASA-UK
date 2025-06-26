import React from 'react'
import './GalleryCard.css'

const GalleryCard = ({ image, tag, title, description, showButton, date }) => {
  return (
    <div className='gallery-card'>
      <img src={image} alt={tag} />
      <p>{tag}</p>

      <div className='under-content'>
        <h5>{title}</h5>
        <h6>{description}</h6>
      </div>

      {showButton && (
        <div className='latest-link'>
          <button className='btn latest'>Read more</button>
          <p className='latest-date'>{date}</p>
        </div>
      )}
    </div>
  );
};

export default GalleryCard