import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

const propTypes = {
  isoTime: PropTypes.string.isRequired,
  format: PropTypes.number
};

export default class CreatedAt extends Component {
  fromNow(time, format) {
    if (format === 0) {
      return Moment(time).fromNow();
    } else if (format === 1) {
      return Moment(time).format('lll');
    } else if (format === 2) {
      return Moment(time).format('ll');
    }
  }

  render() {
    const {isoTime, format} = this.props;
    let time = this.fromNow(isoTime, format);
    return (
      <time dateTime={time}>
        {time}
      </time>
    );
  }
}

CreatedAt.propTypes = propTypes;
