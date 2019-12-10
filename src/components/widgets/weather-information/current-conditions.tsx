import * as React from 'react';

import '../../../styles/components/widgets/weather-information/current-conditions.scss';

import { Currently, DailyValue } from '../../../types/dark-sky';
import { TemperatureDisplay } from '../temperature-display';
import { WeatherIcon } from '../weather-icon';
import { Tile } from '../tile';

interface CurrentConditionsProps {
  readonly currently: Currently;
  readonly today: DailyValue;
}

export const CurrentConditions = ({ currently, today }: CurrentConditionsProps) => (
  <section className="current-conditions page-section">
    <h1 className="section-title">Current Conditions</h1>

    <Tile className="inner">
      <TemperatureDisplay
        className="current-temp"
        temperature={currently.apparentTemperature}
        unit="F"
      />
      <WeatherIcon icon={currently.icon} />
      <p className="summary">{currently.summary}</p>
      <div className="high-low">
        <TemperatureDisplay className="low-temp" temperature={today.temperatureLow} unit="F" />
        <p>/</p>
        <TemperatureDisplay className="high-temp" temperature={today.temperatureHigh} unit="F" />
      </div>
    </Tile>
  </section>
);
