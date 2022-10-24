import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Base = (props) => {
  return (
    <>  
        <div className='msg_img '>
          <img src="assets/images/support.svg" className='' alt="" />
      </div>
        <Header/>
        {props.children}
        <Footer/>
    </>
  )
}

export default Base