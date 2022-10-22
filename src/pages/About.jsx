import React from 'react'
import Banner from '../components/Elements/About/Banner'
import Build from '../components/Elements/About/Build'
import Hero from '../components/Elements/About/Hero'
import Mission from '../components/Elements/About/Mission'
import Touch from '../components/Elements/About/Touch'
import Blog from '../components/Elements/Home/Blog'

const About = () => {
  return (
    <>
        <Hero/>
        <Mission/>
        <Build/>
        <Banner/>
        <Touch/>
        <Blog/>
    </>
  )
}

export default About