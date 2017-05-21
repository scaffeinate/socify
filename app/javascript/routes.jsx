import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Application from './containers/Layouts/Application';
import MainLayout from './containers/Layouts/MainLayout';
import SideBarLayout from './containers/Layouts/SideBarLayout';
import Index from './containers/Home/Index';

export default (
  <Route path="/" component={Application}>
    <Route component={MainLayout}>
      <Route component={SideBarLayout}>
        <IndexRoute component={Index} />
      </Route>
    </Route>
  </Route>
);
