import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application from './containers/Layouts/Application';
import Front from './containers/Home/Front';
import AboutPage from './containers/Home/AboutPage';

export default (
  <Route path="/" component={Application}>
    <IndexRoute component={Front} />
    <Route path="/about" component={AboutPage} />
  </Route>
);
