import React from 'react'
import GoogleMapReact from 'google-map-react'
import '../CSS/Map.css'


const Marker = ({text}) => <div>{} </div>

function Map() {

  const coordinates = {
    center: {
      lat: 30.902361,
      lng: -102.902684,
    },
    zoom: 11,
  }

  return (
    <div className='maps'>
      <GoogleMapReact
        bootstrapURLKeys={{key: 'AIzaSyDJOfK6PcbasoGz2P45EYp23HC3FwvnzSw'}}
        defaultCenter={coordinates.center}
        defaultZoom={coordinates.zoom}
      >
        <Marker text='My marker' />
      </GoogleMapReact>

      
    </div>
  )
}

export default Map


// AIzaSyDJOfK6PcbasoGz2P45EYp23HC3FwvnzSw
