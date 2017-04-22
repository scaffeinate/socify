const InputFileFieldPreview = React.createClass({
  render() {
    return (
      <div>
        <img src={this.props.src} className="attachment" />
        <a href="#" onClick={this.props.onRemoveClick} className="remove-attachment">
          <i className="icon-trash"></i>
        </a>
      </div>
    )
  }
});

module.exports = InputFileFieldPreview;
