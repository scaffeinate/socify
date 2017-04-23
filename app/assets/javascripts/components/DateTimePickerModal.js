import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'
import InputMoment from 'input-moment'

class DateTimePickerModal extends Component {
  constructor(props) {
    super(props)
    this._handleChange = (moment) => this.handleChange(moment)
    this._handleSave = () => this.handleSave()
    this.state = {
      moment: Moment()
    }
  }

  static propTypes = {
    onDateSelected: PropTypes.func.isRequired
  }

  handleChange(moment) {
    this.setState({moment: moment})
  }

  handleSave() {
    this.props.onDateSelected(this.state.moment)
  }

  render() {
    return (
      <div id="datetimepickermodal" className="modal fade" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type='button' className='close' data-dismiss='modal'>
                <i className='icon-cancel'></i>
              </button>
              <h4 className="modal-title">Pick Date &amp; Time</h4>
            </div>
            <div className="modal-body">
              <InputMoment moment={this.state.moment} onChange={this._handleChange} onSave={this._handleSave} prevMonthIcon='icon-left-open' nextMonthIcon='icon-right-open'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DateTimePickerModal
