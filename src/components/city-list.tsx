import * as React from 'react';

import '../styles/components/city-list.scss';

import { CityTile } from './city-tile';
import { City } from '../types/location';
import { SpringConfig, useTrail, animated } from 'react-spring';

const config: SpringConfig = { mass: 5, tension: 2000, friction: 200 };

export const CityList = () => {
  const cities: ReadonlyArray<City> = [
    { name: 'Atlanta', position: { lat: 33.7676338, lng: -84.5606888 } },
    { name: 'New York', position: { lat: 40.6976684, lng: -74.2605569 } },
    { name: 'Los Angeles', position: { lat: 34.0207289, lng: -118.6926118 } },
  ];
  const trail = useTrail(cities.length, {
    scale: 1,
    opacity: 1,
    from: { scale: 0, opacity: 0 },
    config,
  });

  return (
    <div className="city-list">
      <ul data-length={cities.length}>
        {trail.map(({ opacity, scale }, i) => {
          const city = cities[i];

          return (
            <animated.li
              key={city.name}
              style={{ transform: scale.interpolate((s) => `scale(${s})`), opacity }}
            >
              <CityTile city={city} temp={70} />
            </animated.li>
          );
        })}
      </ul>
    </div>
  );
};
