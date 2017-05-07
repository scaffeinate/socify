import React from 'react';
import PropTypes from 'prop-types';
import SessionHelper from '../../helpers/SessionHelper';
import './styles.css';

const propTypes = {
  user: PropTypes.object.isRequired
};

const ProfileBlock = ({ user }) => (
  <div className="sidebar-block">

  </div>
);

ProfileBlock.propTypes = propTypes;

export default ProfileBlock;
