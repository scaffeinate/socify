import React from 'react';
import { UncontrolledNavDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.object.isRequired
};

const HeaderDropdown = ({ item }) => (
  <UncontrolledNavDropdown>
    <DropdownToggle caret nav>{item.name}</DropdownToggle>
    <DropdownMenu>
      {
        item.menuItems.map(menuItem => (
          <DropdownItem key={menuItem.key}>
            {menuItem.name}
          </DropdownItem>
        ))
      }
    </DropdownMenu>
  </UncontrolledNavDropdown>
);

HeaderDropdown.propTypes = propTypes;
export default HeaderDropdown;
