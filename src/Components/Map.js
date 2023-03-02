import React from 'react'
import googleMapReact from 'google-map-react'

function Map() {

  const MapMarker = ({text}) => <div>{text}</div>

  function Map() {
    const defaultProps = {
      center: {
        lat: 10.00935602,
        lng: 77.01502627,
      },
      zoom: 11,
    }

    return (
      <div className='map'>
        <googleMapReact 
            bootstrapURLKeys={{ key: ''}} 
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            >
          <MapMarker lat={59.955413} lng={30.337844} text='My Marker' />
        </googleMapReact>
        
      </div>
    )
  }


}
export default Map

// AIzaSyDJOfK6PcbasoGz2P45EYp23HC3FwvnzSw
