import * as React from 'react';

import '../styles/components/city-list.scss';

import { CityTile } from './city-tile';
import { City } from '../types/location';

export const CityList = () => {
  const cities: ReadonlyArray<City> = [
    { name: 'Atlanta', position: { lat: 33.7676338, lng: -84.5606888 } },
    { name: 'New York', position: { lat: 40.6976684, lng: -74.2605569 } },
    { name: 'Los Angeles', position: { lat: 34.0207289, lng: -118.6926118 } },
  ];

  return (
    <div className="city-list">
      <ul>
        {cities.map((city) => (
          <li>
            <CityTile city={city} temp={70} />
          </li>
        ))}
      </ul>
    </div>
  );
};
