import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import PatientStories from '../components/PatientStories'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
  return (
    <div>
    <Hero/>
    <Services/>

    <PatientStories/>
    <WhyChooseUs/>
    </div>
  )
}

export default Home
