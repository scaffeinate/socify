var ContentEditable = React.createClass({
  getInitialState() {
    return {
      text: '',
      html: '',
      linkPreview: ''
    }
  },
  handleChange(event) {
    var html = event.target.innerHTML;
    var text = html.replace(/<.*?\>/g, '');
    if(text.trim() == '') {
      this.refs.contentEditable.innerHTML = '';
    }
    this.setState({ text: text});
  },
  onPaste(ev) {
    ev.preventDefault();
    var _this = this;
    var text = ev.clipboardData.getData('text');
    document.execCommand('insertText', false, text);

    if(validator.isURL(text)) {
      $.get('posts/preview', {
        'url': text
      }, function(data) {
        var html = data['html'].trim();
        if (html != '') {
          _this.setState({html: html});
          _this.renderLinkPreview();
        }
      });
    }
  },
  renderLinkPreview() {
    this.setState({linkPreview: <LinkPreview html={this.state.html} name={this.props.previewName} />});
  },
  render() {
    return (
      <div>
        <div className="contenteditable">
          <div ref="contentEditable" contentEditable className="editable form-control input-mentionable" onInput={this.handleChange} onPaste={this.onPaste} placeholder={this.props.placeholder}></div>
          <input type="hidden" name={this.props.name} value={this.state.text}></input>
        </div>
        <div className="link-preview">
          {this.state.linkPreview}
        </div>
      </div>
    );
  }
});
