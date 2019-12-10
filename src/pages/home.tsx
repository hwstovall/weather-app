import * as React from 'react';

import '../styles/pages/home.scss';

import { CityList } from '../components/city-list';
import { BackgroundMap } from '../components/widgets/background-map';
import { PositionProvider } from '../contexts/position-context';
import { WeatherInformation } from '../components/widgets/weather-information/weather-information';

export const Home = () => {
  return (
    <PositionProvider>
      <div className="page home-page">
        <div className="background">
          <BackgroundMap />
          <div className="background-gradient">
            <div className="gradient gradient-1" />
            <div className="gradient gradient-2" />
            <div className="gradient gradient-3" />
          </div>
        </div>

        <div className="page-content">
          <div className="panel city-list">
            <CityList />
          </div>
          <div className="panel weather-information">
            <WeatherInformation />
          </div>
        </div>
      </div>
    </PositionProvider>
  );
}
