var ContentEditable = React.createClass({
  getInitialState() {
    return {
      text: ''
    }
  },
  handleChange(event) {
    this.setState({ text: event.target.innerHTML });
  },
  render() {
    return (
      <div>
        <div contentEditable className="editable form-control input-mentionable" onInput={this.handleChange} placeholder={this.props.placeholder}></div>
        <input type="text" value={this.state.text} onChange={this.handleChange}></input>
      </div>
    )
  }
});
