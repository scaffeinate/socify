const CreatedAt = React.createClass({
  fromNow(isoTime, format) {
    if(format === 0) {
      return Moment(isoTime).fromNow();
    } else if(format === 1) {
      return Moment(isoTime).format('lll');
    } else if(format === 2){
      return Moment(isoTime).format('ll');
    }
  },
  render() {
    var time = this.fromNow(this.props.isoTime, this.props.format);
    return (
      <time dateTime={time}>
        {time}
      </time>
    )
  }
});

module.exports = CreatedAt;
