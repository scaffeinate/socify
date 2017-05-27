import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

const propTypes = {
  isoTime: PropTypes.string.isRequired,
  format: PropTypes.number
};

const defaultProps = {
  isoTime: '',
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

  render() {
    const { isoTime, format } = this.props;
    const time = CreatedAt.fromNow(isoTime, format);
    return (
      <div className="inline-block">
        <time dateTime={time}>
          {time}
        </time>
      </div>
    );
  }
}

CreatedAt.propTypes = propTypes;
CreatedAt.defaultProps = defaultProps;

export default CreatedAt;
