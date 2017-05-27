import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import Avatar from '../Avatar';
import SessionHelper from '../../helpers/SessionHelper';

const propTypes = {
  user: PropTypes.object.isRequired
};

const ProfileBlock = ({ user }) => (
  <div className="sidebar-block">
    <div
      className={SessionHelper.isUserPage() ? 'sidebar-cover-user' : 'sidebar-cover'}
      style={{ backgroundImage: `url(${(user.cover ? user.cover.url : '/assets/cover-card.png')})` }}
    >
      <Avatar linkTo={'/'} /><br />
    </div>
    <div className="section">
      <Row>
        <Col xs={12}>
          <h4 className="name">{user.name}</h4>
          <span id="bio">{user.bio || 'Nothing to say about me.'}</span>
        </Col>
      </Row>
    </div>
    <div className="section">
      <Row>
        <Col xs={4}>
          <div className="stats-count">
            <span>FRIENDS</span>
            <h4>{user.following_users_count}</h4>
          </div>
        </Col>
        <Col xs={4}>
          <div className="stats-count">
            <span>POSTS</span>
            <h4>{user.posts_count}</h4>
          </div>
        </Col>
        <Col xs={4}>
          <div className="stats-count">
            <span>ALBUMS</span>
            <h4>{user.photo_albums_count}</h4>
          </div>
        </Col>
      </Row>
    </div>
    {SessionHelper.isCurrentUser(user) ?
      (<Row>
        <Col xs={12}>
          <div className="section">
            { /* TODO: Insert Follow button here */ }
            <h6>{/* TODO: Shows Follows You if the user follows current_user */}</h6>
          </div>
        </Col>
      </Row>) : ''}
  </div>
);

ProfileBlock.propTypes = propTypes;

export default ProfileBlock;
