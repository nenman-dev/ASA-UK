import React from 'react'
import './Events.css'


const Events = () => {

    const rawDate = new Date('2019-05-30');

        const formatted = new Intl.DateTimeFormat('en-GB').format(rawDate); 

  return (
    <div className='events'>
        <div className='events-left'>
            <div className='date'>
                <p> When - <br/>{formatted}</p>
                <p>Volunteering</p>
            </div>
            <h1 className='heading1'> South Africa <br/>Pre-election Briefing</h1>
            <p className='text'>Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Eu feugiat pretium nibh ipsum consequat nisl vel pretium. Eget nulla facilisi etiam dignissim diam quis enim.</p>
            <button className='events-btn'>READ MORE</button>
        </div>
        <div className='events-right'>
            <div className='date'>
                <p> When - <br/>{formatted}</p>
                <p>Fund Raiser</p>
            </div>
            <h1 className='heading2'> South Africa <br/>Pre-election Briefing</h1>
            <button className='events-btn'>READ MORE</button>
        </div>
    </div>
  )
}

export default Events