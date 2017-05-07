import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  html: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

const LinkPreview = ({ html, name }) => (
  <div className={html ? 'link-preview' : 'link-preview hidden'}>
    <div className="onebox-preview form-group" dangerouslySetInnerHTML={{ __html: html }} />
    <input type="hidden" name={name} value={html} />
  </div>
);

LinkPreview.propTypes = propTypes;

export default LinkPreview;
