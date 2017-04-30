import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import FormData from 'form-data';
import fetch from 'isomorphic-fetch';

const propTypes = {
  uploadURL: PropTypes.string.isRequired,
  authenticityToken: PropTypes.string.isRequired, // TODO: Remove this and use global CSRF-Token
  onFileUploaded: PropTypes.func.isRequired,
  defaultMessage: PropTypes.string,
  multiple: PropTypes.boolean
};

const defaultProps = {
  defaultMessage: 'Drop/Upload file',
  multiple: false
};

export default class DropzoneUpload extends Component {
  constructor(props) {
    super(props);
    this.getDefaultMessage = this.getDefaultMessage.bind(this);
    this.getUploadingMessage = this.getUploadingMessage.bind(this);
    this.onFileDrop = this.onFileDrop.bind(this);
    this.state = {
      dropzoneContent: this.getDefaultMessage()
    };
  }

  onFileDrop(acceptedFiles) {
    const formData = new FormData();
    const url = this.props.uploadURL;
    const authenticityToken = this.props.authenticityToken;
    const onFileUploaded = this.props.onFileUploaded;

    this.setState({ dropzoneContent: this.getUploadingMessage() });

    acceptedFiles.forEach((file) => {
      formData.append('files[]', file, file.name);
    });

    fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': authenticityToken
      },
      credentials: 'same-origin'
    })
    .then(response => response.json())
    .then(data => onFileUploaded(data))
    .catch(e => console.error(e));
  }

  getDefaultMessage() {
    return <div className="text-center message">{this.props.defaultMessage}</div>;
  }

  getUploadingMessage = () => (
    <div className="text-center message">
      <img src="/assets/ajax-loader.gif" alt="" /> &nbsp;&nbsp;Uploading...
    </div>
  )

  render() {
    return (
      <div>
        <Dropzone multiple={this.props.multiple} className="dropzone" accept="image/*" onDrop={this.onFileDrop}>
          {this.state.dropzoneContent}
        </Dropzone>
      </div>
    );
  }
}

DropzoneUpload.propTypes = propTypes;
DropzoneUpload.defaultProps = defaultProps;
