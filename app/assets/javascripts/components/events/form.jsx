DateTimePickerModal = require('../datetimepickermodal.jsx');
var EventsForm = React.createClass({
  getInitialState() {
    return {
      address: '',
      date: this.formatDate()
    }
  },
  handleClick() {
    $('#datetimepickermodal').modal('show');
  },
  handleDateSelected(moment) {
    $('#datetimepickermodal').modal('hide');
    var formattedDate = this.formatDate(moment);
    this.setState({date: formattedDate});
  },
  handlePlaceChange(address) {
    this.setState({address: address});
  },
  formatDate(moment) {
    var m = Moment();
    if(moment) {
      m = Moment(moment);
    }

    return m.format('MMMM Do YYYY, h:mm:ss a');
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
            <input type='text' placeholder='When is it?' name='when' value={this.state.date} className='form-control' onClick={this.handleClick} onChange={function(){}} />
          </div>
          <div className="form-group">
            <label>Location</label>
            <PlacesAutocomplete value={this.state.address} onChange={this.handlePlaceChange} classNames={{input:'form-control'}} />
          </div>
        </form>
        <DateTimePickerModal onDateSelected={this.handleDateSelected} />
      </div>
    );
  }
});

module.exports = EventsForm;
