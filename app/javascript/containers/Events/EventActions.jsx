import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onEventDelete: PropTypes.func.isRequired
};

const EventActions = ({ onEventDelete }) => (
  <div className="dropdown">
    {/* Change to reactstrap component */}
    <a href="#dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      <i className="icon-down-open-big" />
    </a>
    <ul className="dropdown-menu">
      <li>
        <a href="#delete" onClick={onEventDelete}>Delete</a>
      </li>
    </ul>
  </div>
);

EventActions.propTypes = propTypes;

export default EventActions;
