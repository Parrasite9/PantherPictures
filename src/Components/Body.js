import React from 'react'
import Movies from './Movies'
import '../CSS/Body.css'
import Offers from './Offers'

function Body() {
  return (
    <div className='body'>
      <Movies />
      <Offers />
    </div>
  )
}

export default Body
