DateTimePickerModal = require('../datetimepickermodal.jsx');
var EventsForm = React.createClass({
  getInitialState() {
    return {

    }
  },
  handleClick() {
    $('#datetimepickermodal').modal('show');
  },
  render() {
    return(
      <div>
        <form>
          <div className="form-group">
            <label>Event Name</label>
            <input type='text' placeholder='Event Name' name='name' value={this.state.event_name} className='form-control' autoFocus />
          </div>
          <div className="form-group">
            <label>When is it?</label>
            <input type='text' placeholder='When is it?' name='when' value={this.state.date} className='form-control' onClick={this.handleClick} />
          </div>
        </form>
      </div>
    );
  }
});

module.exports = EventsForm;
