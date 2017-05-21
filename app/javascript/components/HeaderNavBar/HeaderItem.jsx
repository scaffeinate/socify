import React from 'react';
import { NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.object.isRequired
};

const HeaderItem = ({ item }) => (
  <NavItem>
    <NavLink href={item.path}>{item.name}</NavLink>
  </NavItem>
);

HeaderItem.propTypes = propTypes;
export default HeaderItem;
