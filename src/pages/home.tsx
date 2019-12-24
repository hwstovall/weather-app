import * as React from 'react';

import '../styles/pages/home.scss';

import { CityList } from '../components/city-list';
import { BackgroundMap } from '../components/widgets/background-map';
import { PositionProvider } from '../contexts/position-context';
import { WeatherInformation } from '../components/widgets/weather-information/weather-information';

export const Home = () => {
  return (
    <PositionProvider>
      <main className="page home-page">
        <section className="page-content">
          <CityList />
          <WeatherInformation />
        </section>
      </main>
    </PositionProvider>
  );
}
