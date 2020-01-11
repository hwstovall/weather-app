import * as React from 'react';

import './styles/app.scss';

import { RouteComponentProps } from 'react-router';

import { CityList } from './components/city-list';
import { City } from './types/location';
import { CurrentConditions } from './components/current-conditions';
import { HourlyForecast } from './components/hourly-forecast';
import { Loadable } from './types/network';
import { DarkSkyAPIResponse } from './types/dark-sky';

import { default as response } from '../fixtures/dark-sky/response.json';

const cities: ReadonlyArray<City> = [
  { slug: 'atlanta', name: 'Atlanta', position: { lat: 33.7676338, lng: -84.5606888 } },
  { slug: 'new-york', name: 'New York', position: { lat: 40.6976684, lng: -74.2605569 } },
  { slug: 'los-angeles', name: 'Los Angeles', position: { lat: 34.0207289, lng: -118.6926118 } },
];

export const App = ({ match, history }: RouteComponentProps<{ readonly city: string }>) => {
  const [city, setCity] = React.useState<City>(() => (
    cities.find((city) => city.slug === match.params.city) || cities[0]
  ));
  const [data, setData] = React.useState<Loadable<DarkSkyAPIResponse>>({ status: 'idle' });

  React.useEffect(() => {
    setTimeout(() => setData({ status: 'ready', value: (response as DarkSkyAPIResponse) }), 500);
  }, []);

  const changeCity = React.useCallback((value: City) => {
    setCity(value);
    history.replace(`/${value.slug}`);
  }, [setCity]);

  return (
    <div className="app">
      <nav>
        <CityList cities={cities} onClick={changeCity} />
      </nav>
      <main>
        <CurrentConditions city={city} data={data} />
        <HourlyForecast data={data} />
      </main>
    </div>
  );
};
