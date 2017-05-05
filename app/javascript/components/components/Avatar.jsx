import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  linkTo: PropTypes.string.isRequired,
  avatar: PropTypes.string
};

const defaultProps = {
  avatar: '/assets/avatar.png'
};

const Avatar = ({ linkTo, avatar }) => (
  <a href={linkTo}>
    <img src={avatar} className="avatar" alt="Avatar" />
  </a>
);

Avatar.propTypes = propTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
