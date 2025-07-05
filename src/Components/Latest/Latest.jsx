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
                tagLink="/category/ras-news"
                title="Key findings from parliamentary meeting on UK Visa refusals for African visitors to the UK"
                description="Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Eget nulla facilisi etiam dignissim diam quis enim."
                showButton={true}
                date={formatted}
                link="/articles/uk-visa-refusals"
            />
            <GalleryCard
                image={img_2}
                tag="Director Blog"
                tagLink="/category/director-blog"
                title="Conflict, Coups and Democracy: The African Union and the Second"
                description="Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Eget nulla facilisi etiam dignissim diam quis enim."
                showButton={true}
                date={formatted}
                link="/articles/director-blog"
            />
            <GalleryCard
                image={img_3}
                tag="African Arguments"
                tagLink="/category/african-argument"
                title="Key findings from parliamentary for African"
                description="Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Eget nulla facilisi etiam dignissim diam quis enim."
                showButton={true}
                date={formatted}
                link="/articles/african-argument"
            />
            <GalleryCard
                image={img_4}
                tag="African Arguments"
                tagLink="/category/african-argument"
                title="Conflict, Coups and Democracy: The African Union and the Second Arab Spring"
                description="Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Eget nulla facilisi etiam dignissim diam quis enim."
                showButton={true}
                date={formatted}
                link="/articles/african-argument"
            />
        </div>
    );
};


export default Latest