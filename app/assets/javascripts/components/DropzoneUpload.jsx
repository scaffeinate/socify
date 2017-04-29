import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import imageBackgroundDiv from './ImageBackgroundDiv';

const propTypes = {
  uploadURL: PropTypes.string.isRequired,
  authenticityToken: PropTypes.string.isRequired, //TODO: Remove this and use global CSRF-Token
  defaultMessage: PropTypes.string,
  onFileUploaded: PropTypes.func.isRequired
};

export default class DropzoneUpload extends Component {
  constructor(props) {
    super(props);
    this.getDefaultMessage = this.getDefaultMessage.bind(this);
    this.getUploadingMessage = this.getUploadingMessage.bind(this);
    this.onFileDrop = this.onFileDrop.bind(this);
    this.state = {
      dropzoneContent: this.getDefaultMessage()
    }
  }

  onFileDrop(acceptedFiles, rejectedFiles) {
    let _this = this;
    let formData = new FormData();
    let url = this.props.uploadURL;
    let files = [];

    this.setState({dropzoneContent: this.getUploadingMessage()});

    for(var index in acceptedFiles) {
      var file = acceptedFiles[index];
      formData.append('files[]', file, file['name']);
    }

    fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-Token': _this.props.authenticityToken
      },
      credentials: 'same-origin'
    }).then(function(response) {
      response.json().then(function(data) {
        this.props.onFileUploaded(data);
      });
    });
  }

  getDefaultMessage() {
    return <div className='text-center message'>{this.props.defaultMessage || 'Drop/Upload file'}</div>;
  }

  getUploadingMessage() {
    return (
      <div className='text-center message'>
        <img src='/assets/ajax-loader.gif' /> &nbsp;&nbsp;Uploading...
      </div>
    );
  }

  render() {
    return (
      <div>
        <Dropzone multiple={this.props.multiple} className='dropzone' accept='image/*' onDrop={this.onFileDrop}>
          {this.state.dropzoneContent}
        </Dropzone>
      </div>
    );
  }
}

DropzoneUpload.propTypes = propTypes;
