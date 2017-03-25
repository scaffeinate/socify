var CreatedAt = React.createClass({
  getInitialState() {
    return {
      isoTime: this.props.isoTime
    }
  },
  componentWillMount() {
    var fromNow = Moment(this.props.isoTime).fromNow();
    this.setState({isoTime: fromNow});
  },
  render() {
    return (
      <time dateTime={this.state.isoTime}>
        {this.state.isoTime}
      </time>
    )
  }
});

module.exports = CreatedAt;
