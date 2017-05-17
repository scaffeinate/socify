import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application from './containers/Layouts/Application';
import Front from './containers/Home/Front';

export default (
  <Route path="/" component={Application}>
    <IndexRoute component={Front} />
  </Route>
);
