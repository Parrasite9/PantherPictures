import React from 'react'
import Movies from './Movies'
import '../CSS/Body.css'
import Offers from './Offers'
import Footer from './Footer'

function Body() {
  return (
    <div className='body'>
      <Movies />
      <Offers />
      <Footer />
    </div>
  )
}

export default Body
