import * as React from 'react';

import '../../../styles/components/widgets/weather-information/weather-information.scss';

import { TemperatureDisplay } from '../temperature-display';
import { Loadable } from '../../../types/network';
import { DarkSkyAPIResponse } from '../../../types/dark-sky';

import { default as response } from '../../../../fixtures/dark-sky/response.json';
import { CurrentConditions } from './current-conditions';
import { DailyForcast } from './daily-forecast';

export const WeatherInformation = () => {
  const [data, setData] = React.useState<Loadable<DarkSkyAPIResponse>>({ status: 'idle' });

  React.useEffect(() => {
    setTimeout(() => setData({ status: 'ready', value: response }), 500);
  }, []);

  let body;
  switch (data.status) {
    case 'ready':
      const { currently, daily } = data.value;

      body = (
        <React.Fragment>
          <CurrentConditions currently={currently} daily={daily} />
          <DailyForcast daily={data.value.daily} />
        </React.Fragment>
      );
      break;
    default:
      body = <h1>Loading...</h1>;
      break;
  }

  return (
    <div className="weather-information">
      {body}
    </div>
  );
};
