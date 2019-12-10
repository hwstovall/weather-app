import * as React from 'react';

import { Map, TileLayer } from 'react-leaflet';
import { PositionContext } from '../../contexts/position-context';

export const BackgroundMap = () => {
  const { position } = React.useContext(PositionContext);

  return (
    <Map
      center={[position.lat, position.lng]}
      zoom={10}
      boundsOptions={{
        paddingBottomRight: [-1000, 0],
      }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </Map>
  )
}
