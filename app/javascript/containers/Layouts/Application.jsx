import React from 'react';
import PropTypes from 'prop-types';
import HeaderNavBar from '../../components/HeaderNavBar';

const propTypes = {
  children: PropTypes.object.isRequired
};

const Application = ({ children }) => (
  <div>
    <HeaderNavBar />
    <div className="container">
      {children}
    </div>
  </div>
);

Application.propTypes = propTypes;

export default Application;
