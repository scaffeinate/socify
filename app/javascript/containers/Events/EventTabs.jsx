import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  tabItems: PropTypes.array.isRequired
};

const defaultProps = {
  tabItems: [
    { label: 'Explore', value: 0, icon: 'icon-compass' },
    { label: 'Invited', value: 1, icon: 'icon-users' },
    { label: 'Created By You', value: 2, icon: 'icon-user' }
  ]
};

class EventTabs extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.getClassName = this.getClassName.bind(this);
    this.state = {
      currentActiveItem: 0
    };
  }

  onClick(e, value) {
    e.preventDefault();
    /* TODO: API Call here */
    this.setState({ currentActiveItem: value });
  }

  getClassName(currentItem) {
    return ((this.state.currentActiveItem === currentItem) ? 'active' : '');
  }

  render() {
    const self = this;
    const tabItems = this.props.tabItems.map(({ tabItem }) => (
      <li key={tabItem.value} className={self.getClassName(tabItem.value)}>
        <a href="#click" onClick={e => self.onClick(e, tabItem.value)}><i className={tabItem.icon} /> {tabItem.label}</a>
      </li>
    ));
    return (
      <ul className="nav nav-pills">
        {tabItems}
      </ul>
    );
  }
}

EventTabs.propTypes = propTypes;
EventTabs.defaultProps = defaultProps;

export default EventTabs;
