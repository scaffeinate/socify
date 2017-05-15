import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onCommentDelete: PropTypes.func.isRequired
};

const CommentActions = ({ onCommentDelete }) => (
  <div className="dropdown">
    {/* Change to reactstrap component */}
    <a href="#dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
      <i className="icon-down-open-big" />
    </a>
    <ul className="dropdown-menu">
      <li>
        <a href="#delete" onClick={onCommentDelete}>Delete</a>
      </li>
    </ul>
  </div>
);

CommentActions.propTypes = propTypes;

export default CommentActions;
