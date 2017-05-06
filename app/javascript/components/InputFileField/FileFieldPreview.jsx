import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onRemoveClick: PropTypes.func.isRequired
};

const FileFieldPreview = ({ onRemoveClick }) => (
  <div>
    <img src={this.props.src} className="attachment" alt="Attachment" />
    <button onClick={onRemoveClick} className="remove-attachment">
      <i className="icon-trash" />
    </button>
  </div>
);

FileFieldPreview.propTypes = propTypes;

export default FileFieldPreview;
