import React from 'react'
import Blog from '../components/Elements/Home/Blog'
import Cards from '../components/Elements/Home/Cards'
import Hero from '../components/Elements/Home/Hero'
import Network from '../components/Elements/Home/Network'
import Protocols from '../components/Elements/Home/Protocols'
import Team from '../components/Elements/Home/Team'


const Home = () => {
  return (
    <>
      <Hero/>
      <Cards/>
      <Network/>
      <Protocols/>
      <Team/>
      <Blog/>
      
    </>
  )
}

export default Home