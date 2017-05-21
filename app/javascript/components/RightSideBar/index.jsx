import React from 'react';
import PropTypes from 'prop-types';
import LinksBlock from './LinksBlock';
import GalleryBlock from './GalleryBlock';
import './styles.css';

const propTypes = {
  linkItems: PropTypes.array.isRequired
};

const RightSideBar = ({ linkItems }) => (
  <div>
    <LinksBlock linkItems={linkItems} />
    <GalleryBlock />
  </div>
);

RightSideBar.propTypes = propTypes;

export default RightSideBar;
