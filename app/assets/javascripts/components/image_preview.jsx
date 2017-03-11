var ImagePreview = React.createClass({
  render() {
    return (
      <div className="img-preview">
        <img src={this.props.src}></img>
      </div>
    );
  }
});
