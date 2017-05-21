import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application from './containers/Layouts/Application';
import Index from './containers/Home/Index';

export default (
  <Route path="/" component={Application}>
    <IndexRoute component={Index} />
  </Route>
);
