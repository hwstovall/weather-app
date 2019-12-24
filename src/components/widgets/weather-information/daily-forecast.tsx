import * as React from 'react';

import '../../../styles/components/widgets/weather-information/hourly-forecast.scss';

import moment from 'moment';

import { Daily } from '../../../types/dark-sky';
import { Tile } from '../tile';
import { WeatherIcon } from '../weather-icon';
import { TemperatureDisplay } from '../temperature-display';
import { DateDisplay } from '../date-display';

interface DailyForcastProps {
  readonly daily: Daily;
}

export const DailyForcast = ({ daily }: DailyForcastProps) => (
  <section className="hourly-forecast page-section">
    <h1 className="section-title">8 Day Forecast</h1>

    <div className="hourly-forecast-hours">
      {daily.data.map((dv) => (
        <div className="hourly-forecast-hour">
          <WeatherIcon icon={dv.icon} />

          <DateDisplay date={moment.unix(dv.time)} format="ddd" />

          <TemperatureDisplay
            temperature={Math.round(dv.apparentTemperatureHigh)}
            unit="F"
          />
          <TemperatureDisplay
            temperature={Math.round(dv.apparentTemperatureLow)}
            unit="F"
          />
        </div>
      ))}
    </div>
  </section>
);
