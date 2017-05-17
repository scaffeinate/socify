import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import routes from '../routes';

const propTypes = {
  /* TODO: Add store prop */
  history: PropTypes.object.isRequired
};

const Root = ({ history }) => (
  <Router routes={routes} history={history} />
);

Root.propTypes = propTypes;

export default Root;
