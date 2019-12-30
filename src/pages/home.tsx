import * as React from 'react';

import '../styles/pages/home.scss';

import { PositionProvider } from '../contexts/position-context';
import { WeatherInformation } from '../components/weather-information/weather-information';
import { CityList } from '../components/city-list';

export const Home = () => {
  return (
    <PositionProvider>
      <section className="page home-page">
        <nav>
          <CityList />
        </nav>
        <main>
          <WeatherInformation />
        </main>
      </section>
    </PositionProvider>
  );
}
