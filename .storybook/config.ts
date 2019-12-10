import { configure } from '@storybook/react';

import '../src/styles/global.scss';

const req = require.context('../stories', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
