var CreatedAt = React.createClass({
  componentDidMount() {
    $(this.refs.createdAt).timeago();
  },
  render() {
    return (
      <time ref="createdAt" dateTime={this.props.isoTime}>
        {this.props.isoTime}
      </time>
    )
  }
});
