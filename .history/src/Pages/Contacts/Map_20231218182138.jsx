import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map() {
  <div style={{ height: '550px', width: '850px' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: '' }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}>
      <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
    </GoogleMapReact>
  </div>;
}
