import * as React from 'react';

import './styles/global.scss';

import { hot } from 'react-hot-loader/root';
import { Route, BrowserRouter } from 'react-router-dom';
import { Home } from './pages/home';

export const App = hot(() => {
  return (
    <BrowserRouter>
      <Route component={Home} />
    </BrowserRouter>
  )
});
