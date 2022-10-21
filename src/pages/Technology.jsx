import React from 'react'
import BestTech from '../components/Elements/Technology/BestTech'
import Blockchain from '../components/Elements/Technology/Blockchain'
import Cards from '../components/Elements/Technology/Cards'
import Connect from '../components/Elements/Technology/Connect'
import Grids from '../components/Elements/Technology/Grids'
import Ground from '../components/Elements/Technology/Ground'
import Hero from '../components/Elements/Technology/Hero'
import Network from '../components/Elements/Technology/Network'
import Roadmap from '../components/Elements/Technology/Roadmap'
import Start from '../components/Elements/Technology/Start'
import Transection from '../components/Elements/Technology/Transection'

const Technology = () => {
  return (
    <>
        <Hero/>
        <Blockchain/>
        <Network/>
        <Connect/>
        <BestTech/>
        <Transection/>
        <Ground/>
        <Grids/>
        <Roadmap/>
        <Cards/>
        <Start/>
    </>
  )
}

export default Technology