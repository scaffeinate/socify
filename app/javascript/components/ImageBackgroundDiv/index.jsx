import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  imgUrl: PropTypes.string.isRequired
};

const ImageBackgroundDiv = ({ imgUrl }) => (
  <div className="preview" style={{ backgroundImage: () => `url(${imgUrl})` }} />
);

ImageBackgroundDiv.propTypes = propTypes;

export default ImageBackgroundDiv;
