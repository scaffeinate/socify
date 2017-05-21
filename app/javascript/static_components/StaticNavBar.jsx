import React from 'react';
import PropTypes from 'prop-types';
import HeaderNavBar from '../components/HeaderNavBar';

const propTypes = {
  navItems: PropTypes.array
};

const defaultProps = {
  navItems: [
    { key: 0, name: 'About', path: '/about' },
    { key: 1, name: 'Sign in', path: '/users/sign_in' },
    { key: 2, name: 'Sign up', path: '/users/sign_up' }
  ]
};

const StaticNavBar = ({ navItems }) => (<HeaderNavBar navItems={navItems} />);

StaticNavBar.propTypes = propTypes;
StaticNavBar.defaultProps = defaultProps;

export default StaticNavBar;
