import React from 'react'
import './Latest.css'
import img_1 from '../../assets/img_1.png' 
import img_2 from '../../assets/img_2.png' 
import img_3 from '../../assets/img_3.png' 
import img_4 from '../../assets/img_4.png' 
import GalleryCard from '../GalleryCard/GalleryCard'


const Latest = () => {

const rawDate = new Date('2019-05-30');
const formatted = new Intl.DateTimeFormat('en-GB').format(rawDate); 

    return (
        <div className='latest-gallery'>
            <GalleryCard
                image={img_1}
                tag="RAS News"
                title="Key findings from parliamentary meeting on UK Visa refusals for African visitors to the UK"
                description="Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Eget nulla facilisi etiam dignissim diam quis enim."
                showButton={true}
                date={formatted}
            />
            <GalleryCard
                image={img_2}
                tag="Director Blog"
                title="Conflict, Coups and Democracy: The African Union and the Second"
                description="Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Eget nulla facilisi etiam dignissim diam quis enim."
                showButton={true}
                date={formatted}
            />
            <GalleryCard
                image={img_3}
                tag="African Arguments"
                title="Key findings from parliamentary for African"
                description="Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Eget nulla facilisi etiam dignissim diam quis enim."
                showButton={true}
                date={formatted}
            />
            <GalleryCard
                image={img_4}
                tag="African Arguments"
                title="Conflict, Coups and Democracy: The African Union and the Second Arab Spring"
                description="Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Eget nulla facilisi etiam dignissim diam quis enim."
                showButton={true}
                date={formatted}
            />
        </div>
    );
};


export default Latest