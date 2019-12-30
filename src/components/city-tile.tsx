import * as React from 'react';

import '../styles/components/city-tile.scss';

import { useSpring, animated } from 'react-spring';

import { City } from '../types/location';
import { PositionContext } from '../contexts/position-context';
import { TemperatureDisplay } from './widgets/temperature-display';

interface CityTileProps {
  readonly city: City;
  readonly temp: number;
}

const calc = (ref: React.RefObject<HTMLDivElement>, x, y) => {
  if (ref.current) {
    const rect = ref.current.getBoundingClientRect();
    return [-((y - rect.y) - rect.height / 2) / 5, ((x - rect.x) - rect.width / 2) / 5, 1.05];
  }

  return [0, 0, 1];
};
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const CityTile = ({ city, temp }: CityTileProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { setPosition } = React.useContext(PositionContext);

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }))

  return (
    <animated.div
      className="tile city-tile"
      onClick={() => {
        set({ xys: [0, 0, 1] });
        setPosition(city.position);
      }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(ref, x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}
      ref={ref}
    >
      <div className="inner">
        <div className="city-name">{city.name}</div>
        <div className="currently text-thin">Sunny</div>
        <TemperatureDisplay temperature={temp} unit="F" />
      </div>
    </animated.div>
  )
};
