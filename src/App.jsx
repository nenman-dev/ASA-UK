import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Title from './Components/Title/Title'
import Pillars from './Components/Pillars/Pillars'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className='container'>
          <About/>
          <Title title='Our Pillars'/>
          <Pillars/>
          <Title title='Events'/>
        </div>
    </div>
  )
}

export default App