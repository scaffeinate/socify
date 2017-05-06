import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileFieldPreview from './FileFieldPreview';
/* global FileReader */

const propTypes = {
  name: PropTypes.string.isRequired
};

class InputFileField extends Component {
  static getPreviewTemplate(src, onRemoveClick) {
    return (<FileFieldPreview src={src} onRemoveClick={onRemoveClick} />);
  }

  constructor(props) {
    super(props);
    this.state = {
      dataUri: '',
      preview: ''
    };
    this.onFileFieldChange = this.onFileFieldChange.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
  }

  onFileFieldChange(event) {
    const fileField = event.target;
    const self = this;
    if (fileField.files && fileField.files[0]) {
      const reader = new FileReader();
      reader.onload = (evt) => {
        self.setState({ data_uri: evt.target.result });
        self.setState({ preview: self.getPreviewTemplate(evt.target.result, self.onRemoveClick) });
      };
      reader.readAsDataURL(fileField.files[0]);
    }
  }

  onRemoveClick(event) {
    event.preventDefault();
    this.setState({ attachment: '' });
    this.setState({ preview: '' });
    this.setState({ data_uri: '' });
  }

  render() {
    return (
      <div className="input-file-field">
        <input type="file" className="hidden" ref={(r) => { this.fileField = r; }} onChange={this.onFileFieldChange} />
        <input type="hidden" name={this.props.name} value={this.state.dataUri} />
        <button onClick={() => { this.fileField.onClick(); }} className="btn btn-primary pull-right">
          <i className="icon-attach-1" />
        </button>
        <div className="preview">
          {this.state.preview}
        </div>
      </div>
    );
  }
}

InputFileField.propTypes = propTypes;

export default InputFileField;
