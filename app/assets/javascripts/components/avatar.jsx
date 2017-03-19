var Avatar = React.createClass({
  render() {
    return(
      <a href={this.props.linkTo}>
        <img src={this.props.avatar || '/assets/avatar.png'} className='avatar'></img>
      </a>
    )
  }
});
