import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';

const propTypes = {
  listItem: PropTypes.object.isRequired
};

const ListGroupItemWithIcon = ({ listItem }) => (
  (listItem.value) ?
    (<ListGroupItem>
      {listItem.beforeIconText} <i className={listItem.icon} />
      {listItem.afterIconText}{listItem.value}
    </ListGroupItem>) : null
);

ListGroupItemWithIcon.propTypes = propTypes;
export default ListGroupItemWithIcon;
