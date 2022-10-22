import React from 'react'
import Ambasador from '../components/Elements/Community/Ambasador'
import Cards from '../components/Elements/Community/Cards'
import Chat from '../components/Elements/Community/Chat'
import Events from '../components/Elements/Community/Events'
import Hero from '../components/Elements/Community/Hero'
import Involved from '../components/Elements/Community/Involved'
import Validater from '../components/Elements/Community/Validater'

const Community = () => {
  return (
    <>
        <Hero/>
        <Cards/>
        <Involved/>
        <Validater/>
        <Ambasador/>
        <Events/>
        <Chat/>
    </>
  )
}

export default Community