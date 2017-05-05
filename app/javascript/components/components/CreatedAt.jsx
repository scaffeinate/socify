import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

const propTypes = {
  isoTime: PropTypes.string.isRequired,
  format: PropTypes.number
};

const defaultProps = {
  format: 0
};

class CreatedAt extends Component {
  static fromNow(time, format) {
    if (format === 1) {
      return Moment(time).format('lll');
    } else if (format === 2) {
      return Moment(time).format('ll');
    }

    return Moment(time).fromNow();
  }

  constructor(props) {
    super(props);
    this.fromNow = this.fromNow.bind(this);
  }

  render() {
    const { isoTime, format } = this.props;
    const time = this.fromNow(isoTime, format);
    return (
      <time dateTime={time}>
        {time}
      </time>
    );
  }
}

CreatedAt.propTypes = propTypes;
CreatedAt.defaultProps = defaultProps;

export default CreatedAt;
