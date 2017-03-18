var CreatedAt = React.createClass({
  timeagoInstance: null,
  getInitialState() {
    return {
      isoTime: this.props.isoTime
    }
  },
  componentWillMount() {
    if(this.timeagoInstance === null) {
      this.timeagoInstance = new timeago();
    }
    var formattedTime = this.timeagoInstance.format(this.props.isoTime);
    this.setState({isoTime: formattedTime});
  },
  render() {
    return (
      <time dateTime={this.state.isoTime}>
        {this.state.isoTime}
      </time>
    )
  }
});
