import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs';

import { CityTile } from '../src/components/city-tile';
import { BackgroundMap } from '../src/components/widgets/background-map';

const stories = storiesOf('Widgets', module);
stories.addDecorator(withKnobs);

stories.add('City Tile', () => {
  const city = text('City', 'Atlanta');

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px 1fr' }}>
      <div />
      <CityTile city={city} temp={76} />
      <div />
    </div>
  );
});

stories.add('Background Map', () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 500px 1fr' }}>
      <div />
      <BackgroundMap />
      <div />
    </div>
  );
});
