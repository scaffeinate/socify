var ContentEditable = React.createClass({
  getInitialState() {
    return {
      text: this.stripTags(this.props.content),
      content: this.stripTags(this.props.content)
    }
  },
  handleChange(event) {
    var html = event.target.innerHTML;
    var text = this.stripTags(html);
    if(!text) {
      this.setState({content: ''});
    }
    this.setState({text: text});
    this.props.handleChange(event, text);
  },
  onPaste(event) {
    event.preventDefault();
    var _this = this;
    var pastedContent = event.clipboardData.getData('text');
    document.execCommand('insertText', false, pastedContent);
    this.props.onPaste(pastedContent);
  },
  stripTags(html) {
    return html ? html.replace(/<(?!br\s*\/?)[^>]+>/g, '') : '';
  },
  render() {
    return (
      <div>
        <div className="contenteditable">
          <div ref="contentEditable" contentEditable className="editable form-control input-mentionable" onInput={this.handleChange} onPaste={this.onPaste} placeholder={this.props.placeholder} dangerouslySetInnerHTML={{__html: this.state.content}}></div>
        </div>
      </div>
    );
  }
});
