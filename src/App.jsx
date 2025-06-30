import React, {useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Pillars from './Components/Pillars/Pillars'
import Events from './Components/Events/Events'
import Latest from './Components/Latest/Latest'
import Join from './Components/JoinUs/Join'
import Topbar from './Components/Topbar/Topbar'
import Brands from './Components/Brands/Brands'
import TopFooter from './Components/TopFooter/TopFooter'
import MidFooter from './Components/MidFooter/MidFooter'
import MainFooter from './Components/MainFooter/MainFooter'
import Bottom from './Components/BottomFooter/BottomFooter'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'



const App = () => {
  const [playState, setPlayState]= useState(false);
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <About setPlayState={setPlayState}/>
        <Title title='Our Pillars'/>
        <Pillars/>
        <Title title='Events'/>
        <Events/>
        <Title title='Latest News'/>
        <Latest/>
        <Join/>
      </div>
      <Brands/>
      <TopFooter/>
      <MidFooter/>
      <MainFooter/>
      <Bottom/>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App