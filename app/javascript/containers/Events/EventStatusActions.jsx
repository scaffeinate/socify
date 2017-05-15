import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  statusItems: PropTypes.array,
  baseClassNames: PropTypes.string,
  event: PropTypes.object.isRequired
};

const defaultProps = {
  baseClassNames: 'btn btn-sm btn-default',
  statusItems: [
    { label: 'Not Going', value: 0, icon: 'icon-cancel-1' },
    { label: 'Interested', value: 1, icon: 'icon-bookmark' },
    { label: 'Going', value: 2, icon: 'icon-ok' }
  ]
};

class EventStatusActions extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.getClassName = this.getClassName.bind(this);
    this.state = {
      currentActiveItem: this.props.event.currentStatus
    };
  }

  onClick(e, value) {
    e.preventDefault();
    /* TODO: API Call here */
    this.setState({ currentActiveItem: value });
  }

  getClassName(currentItem) {
    const isActiveClass = (this.state.currentActiveItem === currentItem) ? 'active' : '';
    const baseClassNames = this.props.baseClassNames;
    return `${baseClassNames} ${isActiveClass}`;
  }

  render() {
    const self = this;
    const statusItems = this.props.statusItems.map(({ statusItem }) => (
      <a
        href="#click"
        key={statusItem.value}
        className={self.constructClassName(statusItem.value)}
        onClick={e => self.onClick(e, statusItem.value)}
      >
        <i className={statusItem.icon} /> {statusItem.label}
      </a>
    ));
    return (<div className="status-actions">{statusItems}</div>);
  }
}

EventStatusActions.propTypes = propTypes;
EventStatusActions.defaultProps = defaultProps;

export default EventStatusActions;
