var LinkPreview = React.createClass({
  render() {
    return (
      <div className={this.props.html ? "link-preview" : "link-preview hidden"}>
        <div className="onebox-preview form-group" dangerouslySetInnerHTML={{ __html: this.props.html }}></div>
        <input type="hidden" name={this.props.name} value={this.props.html} />
      </div>
    );
  }
});

module.exports = LinkPreview;
