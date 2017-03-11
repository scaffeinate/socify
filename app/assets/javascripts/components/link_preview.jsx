var LinkPreview = React.createClass({
  render() {
    return (
      <div className="link-preview">
        <div className="autobox-preview form-group" dangerouslySetInnerHTML={{ __html: this.props.html }}></div>
        <input type="hidden" name={this.props.name} value={this.props.html} />
      </div>
    );
  }
});
