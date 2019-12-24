import * as React from 'react';

import '../../../styles/components/widgets/weather-information/current-conditions.scss';

import moment from 'moment';
import { animated, useTrail, SpringConfig } from 'react-spring';

import { Currently, Daily } from '../../../types/dark-sky';
import { HighLow } from '../high-low';
import { TemperatureDisplay } from '../temperature-display';
import { WeatherIcon } from '../weather-icon';

interface CurrentConditionsProps {
  readonly currently: Currently;
  readonly daily: Daily;
}

const config: SpringConfig = { mass: 5, tension: 2000, friction: 200 }

export const CurrentConditions = ({ currently, daily }: CurrentConditionsProps) => {
  const trail = useTrail(daily.data.length, {
    opacity: 1,
    y: 0,
    from: { opacity: 0, y: 20 },
    config,
  });

  return (
    <section className="current-conditions page-section">
      <h1 className="section-title">Atlanta, Georgia</h1>

      <div className="content">
        <div className="today">
          <WeatherIcon icon={currently.icon} />
          <TemperatureDisplay
            className="current-temp"
            temperature={Math.round(currently.apparentTemperature)}
            unit="F"
          />

          <p className="summary">{currently.summary}</p>
          <HighLow high={daily.data[0].temperatureHigh} low={daily.data[0].temperatureLow} />
        </div>

        <div className="daily-forecast">
          {trail.map(({ y, opacity }, i) => {
            const data = daily.data[i];

            return (
              <animated.div
                className="daily-forecast-entry"
                style={{ opacity, transform: y.interpolate(v => `translate3d(0,${v}px,0)`) }}
              >
                <p className="day">{moment.unix(data.time).format('dddd')}</p>
                <div className="forecast">
                  <HighLow high={data.temperatureHigh} low={data.temperatureLow} round />
                  <WeatherIcon icon={data.icon} />
                </div>
              </animated.div>
            );
          })}
        </div>
      </div>
    </section>
  )
};
