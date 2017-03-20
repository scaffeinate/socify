var ContentEditable = React.createClass({
  handleChange(event) {
    var html = event.target.innerHTML;
    var text = Utils.stripTags(html);
    this.props.handleChange(event, text);
  },
  onPaste(event) {
    event.preventDefault();
    var _this = this;
    var pastedContent = event.clipboardData.getData('text');
    document.execCommand('insertText', false, pastedContent);
    this.props.onPaste(pastedContent);
  },
  render() {
    var content = Utils.stripTags(this.props.content);
    return (
      <div>
        <div className="contenteditable">
          <div ref="contentEditable" contentEditable className="editable form-control input-mentionable" onInput={this.handleChange} onPaste={this.onPaste} placeholder={this.props.placeholder} dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
      </div>
    );
  }
});
