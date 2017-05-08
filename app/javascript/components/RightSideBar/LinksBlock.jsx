import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../helpers/SessionHelper';

const propTypes = {
  user: PropTypes.object.isRequired
};

class LinksBlock extends Component {
  constructor(props) {
    super(props);
    const linkItems = [
      { label: 'Profile', value: 0, icon: 'icon-user' },
      { label: 'NewsFeed', value: 1, icon: 'icon-newspaper' },
      { label: 'Events', value: 2, icon: 'icon-calendar-empty' },
      { label: 'Photo Albums', value: 3, icon: 'icon-picture' },
      { label: 'Friends', value: 4, icon: 'icon-users' },
      { label: 'Followers', value: 5, icon: 'icon-users' },
      { label: 'Find Friends', value: 6, icon: 'icon-search' },
      { label: 'Edit Profile', value: 7, icon: 'icon-pencil' },
      { label: 'Change Password', value: 9, icon: 'icon-lock' }, // TODO: Move this to elsewhere internal
      { label: 'Deactivate', value: 9, icon: 'icon-trash' } // TODO: Move this to elsewhere internal
    ];
    this.linkItems = linkItems;
    this.state = {
      currentItem: 0
    };
  }
  render() {
    // TODO: Handle active click
    const links = this.linkItems.map(({ linkItem }) => (
      <a key={linkItem.value} className="list-group-item">
        <i className={linkItem.icon} /> {linkItem.label}
      </a>
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
