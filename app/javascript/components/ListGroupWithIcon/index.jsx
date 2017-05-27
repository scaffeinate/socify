import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import ListGroupItemWithIcon from './ListGroupItemWithIcon';
import './styles.css';

const propTypes = {
  listItems: PropTypes.array.isRequired
};

const ListGroupWithIcon = ({ listItems }) => (
  <ListGroup>
    {listItems.map(listItem => (<ListGroupItemWithIcon key={listItem.key} listItem={listItem} />))}
  </ListGroup>
);

ListGroupWithIcon.propTypes = propTypes;
export default ListGroupWithIcon;
