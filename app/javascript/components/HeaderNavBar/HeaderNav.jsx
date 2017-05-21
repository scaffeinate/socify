import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';
import HeaderDropdown from './HeaderDropdown';
import HeaderItem from './HeaderItem';

const propTypes = {
  navItems: PropTypes.array.isRequired
};

const HeaderNav = ({ navItems }) => (
  <Nav className="ml-auto" navbar>
    {navItems.map(navItem => (
      (navItem.dropdown) ? (<HeaderDropdown key={navItem.key} item={navItem} />) :
      (<HeaderItem key={navItem.key} item={navItem} />)
    ))}
  </Nav>
);
HeaderNav.propTypes = propTypes;
export default HeaderNav;
