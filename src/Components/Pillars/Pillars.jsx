import React from 'react';
import gallery_1 from '../../assets/gallery_1.png'
import gallery_2 from '../../assets/gallery_2.png'
import gallery_3 from '../../assets/gallery_3.png'
import gallery_4 from '../../assets/gallery_4.png'
import white_arrow from '../../assets/arrow.svg'
import PillarCard from '../PillarCard/PillarCard';

const Pillars = () => {
  return (
    <div className='pillars'>
      <div className='gallery'>
        <PillarCard image={gallery_1} label="Connect" arrowIcon={white_arrow} link="#connect" />
        <PillarCard image={gallery_2} label="Learn" arrowIcon={white_arrow} link="#learn"/>
        <PillarCard image={gallery_3} label="Debate" arrowIcon={white_arrow} link="#debate" />
        <PillarCard image={gallery_4} label="Celebrate" arrowIcon={white_arrow}  link="#celebrate"/>
      </div>
    </div>
  );
};

export default Pillars;