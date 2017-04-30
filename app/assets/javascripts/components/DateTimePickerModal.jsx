import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import InputMoment from 'input-moment';

const propTypes = {
  onDateSelected: PropTypes.func.isRequired
};

class DateTimePickerModal extends Component {
  constructor(props) {
    super(props);
    this.onDateChange = this.onDateChange.bind(this);
    this.onSaveClick = this.onSaveClick.bind(this);
    this.state = {
      moment: Moment()
    };
  }

  onDateChange(moment) {
    this.setState({ moment });
  }

  onSaveClick() {
    this.props.onDateSelected(this.state.moment);
  }

  render() {
    return (
      <div id="datetimepickermodal" className="modal fade" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="icon-cancel" />
              </button>
              <h4 className="modal-title">Pick Date &amp; Time</h4>
            </div>
            <div className="modal-body">
              <InputMoment moment={this.state.moment} onChange={this.onDateChange} onSave={this.onSaveClick} prevMonthIcon="icon-left-open" nextMonthIcon="icon-right-open" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DateTimePickerModal.propTypes = propTypes;

export default DateTimePickerModal;
