import React from 'react'
import '../CSS/Footer.css'
import Map from './Map'

function Footer() {
  return (
    <div className='footer'>
      <div className="location">
        <h2>Theatre Address:</h2>
        <h3>2181 W I-10 Service Rd, Fort Stockton, TX 79735</h3>
        <h4>Located on the left side of the Fort Stockton Convention Center</h4>
        {/* <Map /> */}
        <h3>(432)-360-0800</h3>
        <h4>pantherpicturesfs@gmail.com</h4>
      </div>
    </div>
  )
}

export default Footer
