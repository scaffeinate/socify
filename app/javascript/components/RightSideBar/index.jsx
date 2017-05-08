import React from 'react';
import PropTypes from 'prop-types';
import LinksBlock from './LinksBlock';
import GalleryBlock from './GalleryBlock';
import './styles.css';

const propTypes = {
  user: PropTypes.object.isRequired
};

const RightSideBar = ({ user }) => (
  <div>
    <LinksBlock user={user} />
    <GalleryBlock user={user} />
  </div>
);

RightSideBar.propTypes = propTypes;

export default RightSideBar;
