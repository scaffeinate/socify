var EventsForm = React.createClass({
  getInitialState() {
    return {
      event: this.props.event ? JSON.parse(this.props.event) : {
        name: '',
        when: '',
        location: '',
        latlng: '',
        attachmentId: ''
      }
    }
  },
  handleClick() {
    $('#datetimepickermodal').modal({
      backdrop: 'static',
      keyboard: false
    }, 'show');
  },
  handleDateSelected(moment) {
    $('#datetimepickermodal').modal('hide');
    var event = this.state.event;
    event.when = moment;
    this.setState({event: event});
  },
  formatDate(moment) {
    if(moment) {
      var m = Moment(moment);
      return m.format('MMMM Do YYYY, h:mm a');
    }
    return '';
  },
  handlePlaceSelected(address, latLng) {
    var event = this.state.event;
    event.latlng = JSON.stringify(latLng);
    this.setState({event: event});
  },
  handleImageUpload(data) {
    var event = this.state.event;
    event.attachmentId = data.id;
    this.setState({event: event});
  },
  render() {
    var attachment = '';
    var actionURL = this.props.event ? ('/events/' + this.state.event.id) : '/events';
    var method = this.props.event ? 'put' : 'post';
    if(this.props.attachment) {
      attachment = <ImagePreview src={this.props.attachment} className='img-fit' />;
    } else {
      attachment = <div className="form-group"><DropzoneUpload multiple={false} onImageUploaded={this.handleImageUpload} authenticityToken={this.props.authenticityToken} /><input type='hidden' name='attachment_id' value={this.state.event.attachmentId} /></div>;
    }
    return(
      <div>
        <form action={actionURL} method="post" className="form">
          <input type='hidden' name='authenticity_token' value={this.props.authenticityToken} />
          <input type='hidden' name='_method' value={method} />
          <div className="form-group">
            {attachment}
          </div>
          <div className="form-group">
            <label>Event Name</label>
            <input type='text' placeholder='What&apos;s it called?' name='event[name]' className='form-control' defaultValue={this.state.event.name} onChange={function(){}} autoFocus />
          </div>
          <div className="form-group">
            <label>Date & Time</label>
            <input type='text' placeholder='When is it?' name='event[when]' value={this.formatDate(this.state.event.when)} className='form-control' onClick={this.handleClick} onChange={function(){}} />
          </div>
          <div className="form-group">
            <label>Location</label>
            <Location inputName='event[location]' address={this.state.event.location} latLng={this.state.event.latlng} inputPlaceholder='Where is it?' onPlaceSelected={this.handlePlaceSelected} />
            <input type='hidden' name='event[latlng]' value={this.state.event.latlng} />
          </div>
          <br />
          <div className="form-group">
            <button type='submit' className='btn btn-primary btn-block'>{this.props.event ? 'Update' : 'Create'}</button>
          </div>
        </form>
        <DateTimePickerModal onDateSelected={this.handleDateSelected} />
      </div>
    );
  }
});

module.exports = EventsForm;
