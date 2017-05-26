import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import store from '../store/index';
import routes from '../routes';

const propTypes = {
  /* TODO: Add store prop */
  history: PropTypes.object.isRequired
};

const Root = ({ history }) => (
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>
);

Root.propTypes = propTypes;

export default Root;
