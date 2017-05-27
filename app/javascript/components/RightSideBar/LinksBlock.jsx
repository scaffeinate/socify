import React from 'react';
import PropTypes from 'prop-types';
import ListGroupWithIcon from '../ListGroupWithIcon';
import '../../helpers/SessionHelper';

const propTypes = {
  linkItems: PropTypes.array.isRequired,
  currentItem: PropTypes.number
};

const defaultProps = {
  currentItem: 0
};

const LinksBlock = ({ linkItems }) => (
  <div className="sidebar-block">
    <ListGroupWithIcon listItems={linkItems} links />
  </div>
);

LinksBlock.propTypes = propTypes;
LinksBlock.defaultProps = defaultProps;

export default LinksBlock;
