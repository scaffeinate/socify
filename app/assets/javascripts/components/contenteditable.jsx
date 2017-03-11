var ContentEditable = React.createClass({
  getInitialState() {
    return {
      text: ''
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
    var text = ev.clipboardData.getData('text');
    document.execCommand('insertText', false, text);
  },
  render() {
    return (
      <div>
        <div ref="contentEditable" contentEditable className="editable form-control input-mentionable" onInput={this.handleChange} onPaste={this.onPaste} placeholder={this.props.placeholder}></div>
        <input type="hidden" name={this.props.name} value={this.state.text}></input>
      </div>
    )
  }
});
