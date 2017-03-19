const ImagePreview = React.createClass({
  render() {
    var className = this.props.className || 'img-preview';
    return (
      <div className={this.props.src ? className : 'hidden'}>
        <img src={this.props.src}></img>
      </div>
    );
  }
});
