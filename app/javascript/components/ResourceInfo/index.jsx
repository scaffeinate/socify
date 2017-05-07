import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const propTypes = {
  resource: PropTypes.object.isRequired
};

const ResourceInfo = ({ resource }) => (
  <div>
    <span className="likes-count">{resource.likes_count}</span>
    <div className="comment-btn">
      <i className="icon-comment-alt" />
    </div>
    <span className="comments-count">{resource.comments_count}</span>
  </div>
);

ResourceInfo.propTypes = propTypes;

export default ResourceInfo;
