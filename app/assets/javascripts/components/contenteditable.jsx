var ContentEditable = React.createClass({
  getInitialState() {
    return {
      text: this.stripTags(this.props.content),
      content: this.stripTags(this.props.content),
      linkPreviewHTML: this.props.linkPreviewHTML
    }
  },
  handleChange(event) {
    var html = event.target.innerHTML;
    var text = this.stripTags(html);
    if(!text) {
      this.refs.contentEditable.innerHTML = '';
    }
    this.setState({text: text});
  },
  onPaste(ev) {
    ev.preventDefault();
    var _this = this;
    var text = ev.clipboardData.getData('text');
    document.execCommand('insertText', false, text);

    if(validator.isURL(text)) {
      $.get('/posts/preview', {
        'url': text
      }, function(data) {
        var html = data['html'].trim();
        if (html != '') {
          _this.setState({linkPreviewHTML: html});
        }
      });
    }
  },
  stripTags(html) {
    return html ? html.replace(/<(?!br).*?\>/g, '') : '';
  },
  render() {
    return (
      <div>
        <div className="contenteditable">
          <div ref="contentEditable" contentEditable className="editable form-control input-mentionable" onInput={this.handleChange} onPaste={this.onPaste} placeholder={this.props.placeholder} dangerouslySetInnerHTML={{__html: this.state.content}}></div>
          <input type="hidden" name={this.props.name} value={this.state.text}></input>
        </div>
        <LinkPreview html={this.state.linkPreviewHTML} name={this.props.previewName} />
      </div>
    );
  }
});
