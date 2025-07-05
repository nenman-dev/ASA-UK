import React from 'react'
import './GalleryCard.css'
import { Link } from 'react-router-dom'

const GalleryCard = ({ image, tag, title, description, showButton, date, link, tagLink}) => {
  return (
    <div className='gallery-card'>
      <img src={image} alt={tag} />
      <p>{tag}</p>

    {tagLink && (
      <a href={tagLink} className="gallery-tag-link">
        <p>{tag}</p>
      </a>
    )}
    {!tagLink && <p>{tag}</p>}


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