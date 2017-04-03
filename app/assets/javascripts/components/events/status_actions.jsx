var EventStatusActions = React.createClass({
  render() {
    return (
      <div className="status-actions">
        <a href='#' className='btn btn-sm btn-default'><i className='icon-bookmark-empty'></i> Interested</a>
        <a href='#' className='btn btn-sm btn-default'><i className='icon-ok'></i> Going</a>
      </div>
    )
  }
});

module.exports = EventStatusActions;
