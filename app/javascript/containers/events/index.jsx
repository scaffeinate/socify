var Event = require('./event.jsx');
var EventTabs = require('./_tabs.jsx');
var EventStatusActions = require('./_status_actions.jsx');
var Events = React.createClass({
  render() {
    var events = this.props.data.map(function(event, index) {
      return '';
    });
    return (
      <div id="events-stream" className="stream">
        <div className="new-resource">
          <div className="row">
            <div className="col-xs-8">
              <EventTabs authenticityToken={this.props.authenticityToken} />
            </div>
            <div className="col-xs-4">
              <a href='/events/new' className='btn btn-sm btn-primary pull-right'>
                <i className="icon-plus"></i> {'New Event'}
              </a>
            </div>
          </div>
        </div>
        <div id="events" className="resources-block newsfeed">
          <h4 className="underlined">EXPLORE EVENTS</h4>
          {events}
        </div>
        <div className="pagination-block">
        </div>
      </div>
    );
  }
});

module.exports = Events;
