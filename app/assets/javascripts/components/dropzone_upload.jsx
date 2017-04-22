var Dropzone = require('react-dropzone');
var DropzoneUpload = React.createClass({
  getInitialState() {
    return {
      dropzoneContent: this.defaultMessage()
    }
  },
  defaultMessage() {
    return <div className='text-center message'>Drop/select picture for the Event.</div>;
  },
  uploadingMessage() {
    return <div className='text-center message'><img src='/assets/ajax-loader.gif'></img>&nbsp;&nbsp;Uploading...</div>;
  },
  imageBackground(data) {
    var cover_url = 'url(' + data['cover_url'] + ')';
    return <div className='preview' style={{backgroundImage: cover_url}}></div>;
  },
  previewGrid(data) {
    var previews = <div className='previews'>{this.state.files.map((file) => <img src={file.preview} /> )}</div>;
  },
  onDrop(acceptedFiles, rejectedFiles) {
    var _this = this;
    var formData = new FormData();
    var url = '/attachments';
    var files = [];
    for(var index in acceptedFiles) {
      var file = acceptedFiles[index];
      formData.append('files[]', file, file['name']);
    }

    this.setState({dropzoneContent: this.uploadingMessage()});

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
        _this.onImageUploaded(data);
      });
    });
  },
  onImageUploaded(data) {
    if(this.props.multiple) {

    } else {
      this.setState({dropzoneContent: this.imageBackground(data)});
    }
    this.props.onImageUploaded(data);
  },
  render() {
    return (
      <div>
        <Dropzone multiple={this.props.multiple} className='dropzone' accept='image/*' onDrop={this.onDrop}>
          {this.state.dropzoneContent}
        </Dropzone>
      </div>
    )
  }
});

module.exports = DropzoneUpload;
