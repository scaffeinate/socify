var StyledFileField = React.createClass({
  getInitialState() {
    return {
      attachment: '',
      preview: ''
    }
  },
  getPreviewTemplate(attachment, onRemoveClick) {
    return (<StyledFileFieldPreview attachment={attachment} onRemoveClick={onRemoveClick} />);
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
        _this.setState({attachment: e.target.result});
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
      <div className="styled-file-field">
        <input type="file" className="hidden" ref="fileField" onChange={this.onChange} />
        <input type="hidden" name={this.props.name} value={this.state.attachment} />
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
