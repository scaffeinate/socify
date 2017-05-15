import React from 'react';
import PropTypes from 'prop-types';
import EventActions from './EventActions';
import UserInfo from '../../components/UserInfo';
import ImagePreview from '../../components/ImagePreview';
import CreatedAt from '../../components/CreatedAt';

const propTypes = {
  event: PropTypes.object.isRequired,
  onEventDelete: PropTypes.func.isRequired
};

const Event = ({ event, onEventDelete }) => (
  <div className="event">
    <div className="row">
      <UserInfo user={event.user} />
      <div className="actions">
        <EventActions onEventDelete={onEventDelete} />
      </div>
      <div className="row">
        <div className="event-created-at">
          <CreatedAt isoTime={event.created_at} format={0} />
        </div>
      </div>
      <div className="row">
        <div className="event-content">
          <ImagePreview src={event.attachment.file_name.url} clsName={'img-fit'} />
          <div className="event-details">
            <span className="text">{event.name}</span>
            <div className="calendar">
              <i className="icon-calendar-empty" /><CreatedAt isoTime={event.when} format={1} />
            </div>
            <div className="location">
              <i className="icon-location-1" />{(event.location) || 'Unknown'}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Event.propTypes = propTypes;

export default Event;
