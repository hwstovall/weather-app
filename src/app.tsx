import * as React from 'react';

import './styles/global.scss';

import * as Leaflet from 'leaflet';

import { hot } from 'react-hot-loader/root';
import { Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';

export const App = hot(() => {
  return (
    <BrowserRouter>
      <main>
        <Route component={Home} />
      </main>
    </BrowserRouter>
  )
});
