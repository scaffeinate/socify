import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import '../../helpers/SessionHelper';

const propTypes = {
  linkItems: PropTypes.array.isRequired
};

class LinksBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: 0
    };
  }
  render() {
    // TODO: Handle active click
    const links = this.props.linkItems.map(linkItem => (
      <Link key={linkItem.key} to={linkItem.path} className="list-group-item">
        <i className={linkItem.icon} /> {linkItem.label}
      </Link>
    ));

    return (
      <div className="sidebar-block">
        <div className="list-group">
          {links}
        </div>
      </div>
    );
  }
}

LinksBlock.propTypes = propTypes;

export default LinksBlock;
