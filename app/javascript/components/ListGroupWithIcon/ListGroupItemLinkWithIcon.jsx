import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';

const propTypes = {
  listItem: PropTypes.object.isRequired,
  currentItem: PropTypes.number.isRequired
};

const ListGroupItemLinkWithIcon = ({ listItem, currentItem }) => (
  (listItem.value) ?
    (<ListGroupItem tag="a" href={listItem.path} active={(listItem.key === currentItem)}>
      {listItem.beforeIconText} <i className={listItem.icon} />
      {listItem.afterIconText}{listItem.value}
    </ListGroupItem>) : (null)
);

ListGroupItemLinkWithIcon.propTypes = propTypes;
export default ListGroupItemLinkWithIcon;
