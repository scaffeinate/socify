import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../../components/NavBar';

const propTypes = {
  children: PropTypes.object.isRequired
};

const Application = ({ children }) => (
  <div>
    <NavBar />
    <div className="container">
      {children}
    </div>
  </div>
);

Application.propTypes = propTypes;

export default Application;
