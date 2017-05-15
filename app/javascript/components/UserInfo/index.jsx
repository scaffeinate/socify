import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import './styles.css';

const propTypes = {
  user: PropTypes.object.isRequired
};

const UserInfo = ({ user }) => (
  <div className="user-info">
    <Avatar linkTo={`/users/${user.id}`} avatar={user.avatar} />
    <h4 className="name">
      <a href={`/users/${user.id}`}>{user.name}</a>
    </h4>
  </div>
);

UserInfo.propTypes = propTypes;

export default UserInfo;
