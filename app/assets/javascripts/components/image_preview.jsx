var ImagePreview = React.createClass({
  render() {
    return (
      <div className={this.props.src ? "img-preview" : "hidden"}>
        <img src={this.props.src}></img>
      </div>
    );
  }
});
