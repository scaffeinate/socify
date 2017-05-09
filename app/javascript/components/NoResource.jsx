import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  resourceName: PropTypes.string.isRequired
};

const NoResource = ({ resourceName }) => (
  <div className="text-center">
    <h5>No {resourceName} found.</h5>
  </div>
);

NoResource.propTypes = propTypes;

export default NoResource;
