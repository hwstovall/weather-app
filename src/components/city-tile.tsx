import * as React from 'react';

import '../styles/components/city-tile.scss';

import { City } from '../types/location';
import { PositionContext } from '../contexts/position-context';
import { TemperatureDisplay } from './widgets/temperature-display';
import { WeatherIcon } from './widgets/weather-icon';
import { Tile } from './widgets/tile';

interface CityTileProps {
  readonly city: City;
  readonly temp: number;
}

export const CityTile = ({ city, temp }: CityTileProps) => {
  const { setPosition } = React.useContext(PositionContext);
  const onClick = React.useCallback(() => setPosition(city.position), [setPosition, city]);

  return (
    <Tile className="city-tile" onClick={onClick}>
      <div className="inner">
        <div className="weather-icon">
          <WeatherIcon icon="clear-day" />
        </div>
        <div className="information">
          <TemperatureDisplay temperature={temp} unit="F" />
          <div className="city-name">{city.name}</div>
        </div>
      </div>
    </Tile>
  )
};
