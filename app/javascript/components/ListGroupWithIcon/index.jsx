import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import ListGroupItemWithIcon from './ListGroupItemWithIcon';
import ListGroupItemLinkWithIcon from './ListGroupItemLinkWithIcon';
import './styles.css';

const propTypes = {
  listItems: PropTypes.array.isRequired,
  links: PropTypes.bool,
  currentItem: PropTypes.number
};

const defaultProps = {
  links: false,
  currentItem: 0
};

const ListGroupWithIcon = ({ listItems, links, currentItem }) => (
  <ListGroup>
    {listItems.map(listItem => (
      links ?
      (<ListGroupItemLinkWithIcon
        key={listItem.key}
        listItem={listItem}
        currentItem={currentItem}
      />)
      :
      (<ListGroupItemWithIcon
        key={listItem.key}
        listItem={listItem}
        currentItem={currentItem}
      />)
    ))}
  </ListGroup>
);

ListGroupWithIcon.propTypes = propTypes;
ListGroupWithIcon.defaultProps = defaultProps;
export default ListGroupWithIcon;
