import * as React from 'react';

import '../styles/components/city-list.scss';

import { CityTile } from './city-tile';
import { City } from '../types/location';
import { SpringConfig, useTrail, animated } from 'react-spring';

const config: SpringConfig = { mass: 5, tension: 2000, friction: 200 };

interface CityListProps {
  readonly cities: ReadonlyArray<City>;
  readonly onClick: (city: City) => void;
}

export const CityList = ({ cities, onClick }: CityListProps) => {
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
              <CityTile
                city={city}
                temp={70}
                onClick={() => onClick(city)}
              />
            </animated.li>
          );
        })}
      </ul>
    </div>
  );
};
