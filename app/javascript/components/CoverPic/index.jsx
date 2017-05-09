import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  coverUrl: PropTypes.string
};

const defaultProps = {
  coverUrl: '/assets/cover.png' // TODO: Fix the asset path for the image
};

const CoverPic = ({ coverUrl }) => (
  <div className="cover-pic" style={`background-image: url(${coverUrl});`} />
);

CoverPic.propTypes = propTypes;
CoverPic.defaultProps = defaultProps;

export default CoverPic;
