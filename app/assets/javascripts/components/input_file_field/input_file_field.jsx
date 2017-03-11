var InputFileField = React.createClass({
  getInitialState() {
    return {
      data_uri: '',
      preview: ''
    }
  },
  getPreviewTemplate(src, onRemoveClick) {
    return (<InputFileFieldPreview src={src} onRemoveClick={onRemoveClick} />);
  },
  handleClick(event) {
    this.refs.fileField.click();
  },
  onChange(event) {
    var fileField = event.target;
    var _this = this;
    if (fileField.files && fileField.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        _this.setState({data_uri: e.target.result});
        _this.setState({preview: _this.getPreviewTemplate(e.target.result, _this.onRemoveClick)});
      }
      reader.readAsDataURL(fileField.files[0]);
    }
  },
  onRemoveClick(event) {
    this.setState({attachment: ''});
    this.setState({preview: ''});
  },
  render() {
    return (
      <div className="input-file-field">
        <input type="file" className="hidden" ref="fileField" onChange={this.onChange} />
        <input type="hidden" name={this.props.name} value={this.state.data_uri} />
        <a href="#" onClick={this.handleClick} className="btn btn-primary pull-right">
          <i className="icon-attach-1"></i>
        </a>
        <div className="preview">
          {this.state.preview}
        </div>
      </div>
    )
  }
});
