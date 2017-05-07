import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import SessionHelper from '../../helpers/SessionHelper';
import './styles.css';

const propTypes = {
  user: PropTypes.object.isRequired
};

const ProfileBlock = ({ user }) => (
  <div classNameName="sidebar-block">
    <div
      className={SessionHelper.isUserPage ? 'sidebar-cover-user' : 'sidebar-cover'}
      style={`background-image: url(${user.cover.url || '/assets/cover.png'});`}
    >
      <Avatar user={user} /><br />
    </div>
    <div className="row">
      <div className="section">
        <h4 className="name">{user.name}</h4>
        <span id="bio">{user.bio || 'Nothing to say about me.'}</span>
      </div>
    </div>
    <div className="row">
      <div className="section">
        <div className="stats-count">
          <span>FRIENDS</span>
          <h4>{user.following_users_count}</h4>
        </div>
        <div className="stats-count">
          <span>POSTS</span>
          <h4>{user.posts_count}</h4>
        </div>
        <div className="stats-count">
          <span>ALBUMS</span>
          <h4>{user.photo_albums_count}</h4>
        </div>
      </div>
    </div>
    {SessionHelper.isCurrentUser(user) ?
      (<div className="row">
        <div className="section">
          { /* TODO: Insert Follo button here */ }
          <h6>{/* TODO: Shows Follows You if the user follows current_user */}</h6>
        </div>
      </div>) : ''}
  </div>
);

ProfileBlock.propTypes = propTypes;

export default ProfileBlock;
