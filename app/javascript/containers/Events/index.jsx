import React from 'react';
import PropTypes from 'prop-types';
import EventTabs from './EventTabs';

const propTypes = {
  authenticityToken: PropTypes.string.isRequired, // TODO: Remove this and use global CSRF-Token
  events: PropTypes.object.isRequired
};

const Events = ({ events, authenticityToken }) => (
  <div id="events-stream" className="stream">
    <div className="new-resource">
      <div className="row">
        <div className="col-xs-8">
          <EventTabs authenticityToken={authenticityToken} />
        </div>
        <div className="col-xs-4">
          <a href="/events/new" className="btn btn-sm btn-primary pull-right">
            <i className="icon-plus" /> {'New Event'}
          </a>
        </div>
      </div>
    </div>
    <div id="events" className="resources-block newsfeed">
      <h4 className="underlined">EXPLORE EVENTS</h4>
      {events} {/* TODO: Render EventsList */}
    </div>
    {/* TODO: Use pagination block component */}
    <div className="pagination-block" />
  </div>
);

Events.propTypes = propTypes;

export default Events;
