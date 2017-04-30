import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string.isRequired,
  clsName: PropTypes.string
};

const defaultProps = {
  clsName: 'img-preview'
};

const ImagePreview = ({ src, clsName }) => (
  <div className={src ? clsName : 'hidden'}>
    <img src={src} alt="Preview" />
  </div>
);

ImagePreview.propTypes = propTypes;
ImagePreview.defaultProps = defaultProps;

export default ImagePreview;
